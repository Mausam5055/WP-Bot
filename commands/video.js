const ytdl2 = require('../lib/ytdl2');
const fs = require('fs');
const path = require('path');

async function videoCommand(sock, chatId, message) {
    try {
        const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
        const searchQuery = text.split(' ').slice(1).join(' ').trim();
        
        if (!searchQuery) {
            await sock.sendMessage(chatId, { text: 'What video do you want to download?' }, { quoted: message });
            return;
        }

        // Ensure XeonMedia/video directory exists
        const videoDir = path.join(process.cwd(), 'XeonMedia', 'video');
        if (!fs.existsSync(videoDir)) {
            fs.mkdirSync(videoDir, { recursive: true });
        }

        // Download video using internal ytdl2
        const result = await ytdl2.constructor.mp4(searchQuery);
        if (!result || !result.videoUrl) {
            await sock.sendMessage(chatId, { text: 'Failed to get a valid download link.' }, { quoted: message });
            return;
        }

        // Download the video file
        const tempFile = path.join(videoDir, `${Date.now()}.mp4`);
        const response = await fetch(result.videoUrl);
        if (!response.ok) {
            await sock.sendMessage(chatId, { text: 'Failed to download the video file.' }, { quoted: message });
            return;
        }
        const buffer = await response.buffer();
        if (!buffer || buffer.length < 1024) {
            await sock.sendMessage(chatId, { text: 'Downloaded file is empty or too small.' }, { quoted: message });
            return;
        }
        fs.writeFileSync(tempFile, buffer);

        // Send the video
        await sock.sendMessage(chatId, {
            video: { url: tempFile },
            mimetype: 'video/mp4',
            fileName: `${result.title}.mp4`,
            caption: `*${result.title}*\n\n> *_Downloaded by MausamBot MD_*`
        }, { quoted: message });

        // Clean up temp file
        setTimeout(() => {
            try { if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile); } catch {}
        }, 10000);

    } catch (error) {
        console.log('📹 Video Command Error:', error.message);
        await sock.sendMessage(chatId, { text: 'Download failed: ' + error.message }, { quoted: message });
    }
}

module.exports = videoCommand; 