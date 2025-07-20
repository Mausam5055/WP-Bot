const ytdl2 = require('../lib/ytdl2');
const fs = require('fs');
const path = require('path');

async function playCommand(sock, chatId, message) {
    try {
        const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
        const searchQuery = text.split(' ').slice(1).join(' ').trim();
        
        if (!searchQuery) {
            return await sock.sendMessage(chatId, { 
                text: "What song do you want to download?"
            });
        }

        // Ensure XeonMedia/audio directory exists
        const audioDir = path.join(process.cwd(), 'XeonMedia', 'audio');
        if (!fs.existsSync(audioDir)) {
            fs.mkdirSync(audioDir, { recursive: true });
        }

        // Download music using internal ytdl2
        const result = await ytdl2.constructor.downloadMusic(searchQuery);
        if (!result || !result.path) {
            return await sock.sendMessage(chatId, { 
                text: "Failed to download audio. Please try again later."
            });
        }

        // Send the audio
        await sock.sendMessage(chatId, {
            audio: { url: result.path },
            mimetype: "audio/mpeg",
            fileName: `${result.meta.title}.mp3`
        }, { quoted: message });

        // Optionally, clean up the file after sending
        setTimeout(() => {
            try { if (fs.existsSync(result.path)) fs.unlinkSync(result.path); } catch {}
        }, 10000);

    } catch (error) {
        console.error('Error in play command:', error);
        await sock.sendMessage(chatId, { 
            text: "Download failed. Please try again later."
        });
    }
}

module.exports = playCommand;

/*Powered by MAUSAMBOT*
*Credits to Keith MD*`*/