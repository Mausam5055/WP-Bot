# 🤖 Mausam Bot

A feature-packed, high-performance WhatsApp Bot built using Node.js and the [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys) library for group management, media processing, AI chatbot, and automation.

---

## 👨‍💻 Creator & Information

- **Owner:** Mausam Kar
- **GitHub:** [@Mausam5055](https://github.com/Mausam5055)
- **Repository:** [https://github.com/Mausam5055/WP-Bot](https://github.com/Mausam5055/WP-Bot)
- **Bot Name:** Mausam Bot
- **Version:** 3.0.8

---

## ✨ Key Features

- 🛡️ **Group Management**: Antilink, Antibadword, Tagall, Hidetag, Promote, Demote, Ban, Kick, Mute/Unmute.
- 🎨 **Media & Stickers**: Image to sticker (`.sticker`), animated stickers, sticker pack creator (`.take`), text to sticker (`.attp`).
- 🤖 **AI Features**: AI chat, GPT chat assistant, image filters, and text generation.
- 🎵 **Downloader & Utilities**: Songs, videos, weather, translation, group info, and more.
- ⚡ **Lightweight & Fast**: Optimized RAM footprint with optional low-memory mode.

---

## 🚀 Setup & Deployment

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or higher
- [FFmpeg](https://ffmpeg.org/) installed and available in PATH
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Mausam5055/WP-Bot.git
cd WP-Bot
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Configure Settings

Edit `settings.js` with your personal preferences:
```javascript
const settings = {
  packname: 'Mausam Bot',
  author: 'Mausam Kar',
  botName: "Mausam Bot",
  botOwner: 'Mausam Kar',
  ownerNumber: '918638545574', // Country code without + or spaces
  ...
};
```

Update `data/owner.json` to include your phone number:
```json
["918638545574"]
```

### 4. Run the Bot

```bash
npm start
```

When prompted in the terminal:
1. Type your WhatsApp phone number with international format (e.g. `918638545574`).
2. An 8-character pairing code will be displayed in the terminal.
3. Open **WhatsApp** on your phone > **Settings** (or 3 dots) > **Linked Devices** > **Link a Device**.
4. Tap **"Link with phone number instead"** and enter the pairing code.

---

## 📜 Available Commands

| Command | Description |
|---|---|
| `.menu` / `.help` | Displays full interactive menu with custom avatar |
| `.alive` | Check if bot is online and active |
| `.git` / `.github` | View creator GitHub profile and repository stats |
| `.owner` | Send owner contact vCard |
| `.sticker` | Convert replied image or video into a sticker |
| `.take <packname>` | Re-brand a sticker with custom metadata |
| `.attp <text>` | Generate animated rainbow text sticker |

---

## 📄 License

This project is licensed under the MIT License.
