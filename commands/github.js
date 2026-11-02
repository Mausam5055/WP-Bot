const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const settings = require('../settings');

async function githubCommand(sock, chatId, message) {
  try {
    const res = await fetch('https://api.github.com/users/Mausam5055', {
      headers: { 'User-Agent': 'Node-Fetch' }
    });
    if (!res.ok) throw new Error('Error fetching GitHub profile data');
    const json = await res.json();

    let txt = `*乂  ${settings.botName || 'Mausam Bot'}  乂*\n\n`;
    txt += `✩  *Owner* : ${json.name || settings.botOwner || 'Mausam Kar'}\n`;
    txt += `✩  *Username* : ${json.login}\n`;
    txt += `✩  *Bio* : ${json.bio || 'None'}\n`;
    txt += `✩  *Public Repos* : ${json.public_repos}\n`;
    txt += `✩  *Followers* : ${json.followers}\n`;
    txt += `✩  *Following* : ${json.following}\n`;
    txt += `✩  *Location* : ${json.location || 'Not specified'}\n`;
    txt += `✩  *Website* : ${json.blog || 'None'}\n`;
    txt += `✩  *GitHub URL* : ${json.html_url}\n\n`;
    txt += `💥 *${settings.botName || 'Mausam Bot'}*`;

    // Use the custom asset image
    const imgPath = path.join(__dirname, '../assets/bot_image.jpg');
    if (fs.existsSync(imgPath)) {
      const imgBuffer = fs.readFileSync(imgPath);
      await sock.sendMessage(chatId, { image: imgBuffer, caption: txt }, { quoted: message });
    } else {
      await sock.sendMessage(chatId, { text: txt }, { quoted: message });
    }
  } catch (error) {
    await sock.sendMessage(chatId, { text: '❌ Error fetching GitHub profile information.' }, { quoted: message });
  }
}

module.exports = githubCommand;
