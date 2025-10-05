const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
┏━━━━━━━━━━━━━━━━━━━━┓
🤖 *MAUSAM'S-MD BOT*  
┗━━━━━━━━━━━━━━━━━━━━┛

╭─〔 ⚙️ *Bot Information* 〕─╮
│ 🧠 *Name* : WP-Bot  
│ 🚀 *Version* : 2.2.0  
│ 👨‍💻 *Developer* : Mausam Kar  
│ 🌐 *Portfolio* : https://mausam03.vercel.app  
│ ⭐ *Stars* : 2  🍴 *Forks* : 0  
│ 💾 *Size* : 0.63 MB  
│ ⏱️ *Uptime* : 1h 27m 15s  
╰─────────────────────╯

╭─〔 🌐 *GENERAL COMMANDS* 〕─╮
│ ➤ .help / .menu  
│ ➤ .ping  
│ ➤ .alive  
│ ➤ .tts <text>  
│ ➤ .owner  
│ ➤ .joke  
│ ➤ .quote  
│ ➤ .fact  
│ ➤ .weather <city>  
│ ➤ .news  
│ ➤ .lyrics <song_title>  
│ ➤ .8ball <question>  
│ ➤ .groupinfo  
│ ➤ .admins  
│ ➤ .trt <text> <lang>  
│ ➤ .ss <link>  
│ ➤ .jid  
│ ➤ .url  
╰─────────────────────╯

╭─〔 👮‍♂️ *ADMIN COMMANDS* 〕─╮
│ ➤ .ban @user  
│ ➤ .promote @user  
│ ➤ .demote @user  
│ ➤ .mute <minutes>  
│ ➤ .unmute  
│ ➤ .kick @user  
│ ➤ .warnings @user  
│ ➤ .warn @user  
│ ➤ .antilink  
│ ➤ .antibadword  
│ ➤ .clear  
│ ➤ .tag <message>  
│ ➤ .tagall  
│ ➤ .hidetag <message>  
│ ➤ .chatbot  
│ ➤ .resetlink  
│ ➤ .welcome <on/off>  
│ ➤ .goodbye <on/off>  
│ ➤ .setgdesc <description>  
│ ➤ .setgname <new name>  
│ ➤ .setgpp (reply to image)  
╰─────────────────────╯

╭─〔 🔒 *OWNER COMMANDS* 〕─╮
│ ➤ .mode <public/private>  
│ ➤ .clearsession  
│ ➤ .antidelete  
│ ➤ .update  
│ ➤ .settings  
│ ➤ .setpp <reply to image>  
│ ➤ .autoreact <on/off>  
│ ➤ .autostatus <on/off>  
│ ➤ .autotyping <on/off>  
│ ➤ .autoread <on/off>  
│ ➤ .anticall <on/off>  
│ ➤ .pmblocker <on/off/status>  
│ ➤ .pmblocker setmsg <text>  
│ ➤ .mention <on/off>  
╰─────────────────────╯

╭─〔 🎨 *IMAGE/STICKER* 〕─╮
│ ➤ .blur <image>  
│ ➤ .sticker <reply to image>  
│ ➤ .removebg  
│ ➤ .remini  
│ ➤ .crop <reply to image>  
│ ➤ .emojimix <emj1>+<emj2>  
│ ➤ .meme  
│ ➤ .take <packname>  
│ ➤ .igsc <insta link>  
╰─────────────────────╯

╭─〔 🎮 *GAMES* 〕─╮
│ ➤ .tictactoe @user  
│ ➤ .hangman  
│ ➤ .guess <letter>  
│ ➤ .truth  
│ ➤ .dare  
│ ➤ .trivia  
╰───────────────────╯

╭─〔 🤖 *AI COMMANDS* 〕─╮
│ ➤ .gpt <question>  
│ ➤ .gemini <question>  
│ ➤ .imagine <prompt>  
│ ➤ .flux <prompt>  
│ ➤ .sora <prompt>  
╰─────────────────────╯

╭─〔 🎯 *FUN COMMANDS* 〕─╮
│ ➤ .compliment @user  
│ ➤ .insult @user  
│ ➤ .flirt  
│ ➤ .shayari  
│ ➤ .goodnight  
│ ➤ .roseday  
│ ➤ .character @user  
│ ➤ .ship @user  
│ ➤ .simp @user  
│ ➤ .stupid @user  
╰─────────────────────╯

╭─〔 🔤 *TEXTMAKER* 〕─╮
│ ➤ .metallic <text>  
│ ➤ .ice <text>  
│ ➤ .snow <text>  
│ ➤ .matrix <text>  
│ ➤ .neon <text>  
│ ➤ .devil <text>  
│ ➤ .hacker <text>  
│ ➤ .blackpink <text>  
│ ➤ .glitch <text>  
│ ➤ .fire <text>  
╰─────────────────────╯

╭─〔 📥 *DOWNLOADER* 〕─╮
│ ➤ .play <song_name>  
│ ➤ .song <song_name>  
│ ➤ .spotify <query>  
│ ➤ .instagram <link>  
│ ➤ .facebook <link>  
│ ➤ .tiktok <link>  
│ ➤ .ytmp4 <link>  
╰─────────────────────╯

╭─〔 💻 *GITHUB* 〕─╮
│ ➤ .git  
│ ➤ .github  
│ ➤ .sc  
│ ➤ .repo  
╰───────────────────╯

╭─〔 🌸 *ANIME SECTION* 〕─╮
│ ➤ .neko  
│ ➤ .waifu  
│ ➤ .pat  
│ ➤ .hug  
│ ➤ .wink  
│ ➤ .facepalm  
╰────────────────────╯

╭─〔 🔮 *ABOUT DEVELOPER* 〕─╮
│ 👤 Name       : Mausam Kar  
│ 💻 Role       : Full-Stack Developer | Bot Creator  
│ 📍 Location   : India 
│ 🛠️ Skills     :  
│    • JavaScript  
│    • React / Next.js  
│    • Node.js / Express  
│    • Python  
│    • MongoDB
│    • Supabase 
│    • HTML / CSS  
│    • Git & GitHub
│    • Figma  
│    • ChatGPT & AI Tools
│    • Docker
│  
│ 💬 Socials    :  
│    • GitHub: @Mausam5055  
│    • LinkedIn: Mausam Kar  
│ 🖤 Thanks for Using My Bot!  
╰────────────────────╯



`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'KnightBot MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: '',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
