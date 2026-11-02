const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*🤖 ${settings.botName || 'Mausam Bot'} is Active!*\n\n` +
                       `*Version:* ${settings.version}\n` +
                       `*Owner:* ${settings.botOwner || 'Mausam Kar'}\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*🌟 Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +
                       `Type *.menu* for full command list`;

        await sock.sendMessage(chatId, {
            text: message1
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
