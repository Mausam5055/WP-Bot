# WP-Bot 🤖

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Mausam5055/WP-Bot)](https://github.com/Mausam5055/WP-Bot/issues)
[![GitHub stars](https://img.shields.io/github/stars/Mausam5055/WP-Bot)](https://github.com/Mausam5055/WP-Bot/stargazers)

A powerful and feature-rich WhatsApp automation bot built with Node.js and the WhatsApp Web API. Designed for both personal and business use, offering extensive customization and intelligent message handling.

![WP-Bot Preview](./assets/preview.png)

## 📋 Prerequisites

| Requirement | Version | Description |
|------------|---------|-------------|
| Node.js | ≥ 14.x | Runtime environment |
| npm/yarn | Latest | Package manager |
| Chrome/Chromium | Latest | For WhatsApp Web |
| Active WhatsApp Account | - | Phone number verified |

## ✨ Features

| Category | Features |
|----------|----------|
| Message Handling | • Auto-replies with AI integration<br>• Custom command handling<br>• Message filtering and spam protection<br>• Multi-language support |
| Media Management | • Image/video processing<br>• Document handling<br>• Voice message transcription<br>• Sticker creation |
| Automation | • Scheduled messages<br>• Welcome messages<br>• Automated responses<br>• Batch messaging |
| Group Features | • Anti-spam protection<br>• Member management<br>• Activity tracking<br>• Poll creation |

## 📸 Preview

<div align="center">
  <img src="./assets/bot-menu.png" alt="Bot Menu" width="100%" style="margin-bottom: 20px"/>
</div>

### Core Features Preview

<div align="center">
  <table>
    <tr>
      <td><img src="./assets/chat-interface.png" alt="Chat Interface" width="250"/></td>
      <td><img src="./assets/commands-list.png" alt="Commands List" width="250"/></td>
      <td><img src="./assets/group-controls.png" alt="Group Controls" width="250"/></td>
    </tr>
    <tr>
      <td align="center"><b>Chat Interface</b></td>
      <td align="center"><b>Command System</b></td>
      <td align="center"><b>Group Controls</b></td>
    </tr>
  </table>
</div>

### Special Features

<div align="center">
  <table>
    <tr>
      <td><img src="./assets/media-features.png" alt="Media Features" width="250"/></td>
      <td><img src="./assets/ai-features.png" alt="AI Integration" width="250"/></td>
    </tr>
    <tr>
      <td align="center"><b>Media Processing</b></td>
      <td align="center"><b>AI Integration</b></td>
    </tr>
  </table>
</div>

## 📱 Bot Menu

```
┏━━━━━━━━━━━━━━━━━━━━━━┓
     🤖 *MAUSAM'S-MD BOT*  
┗━━━━━━━━━━━━━━━━━━━━━━┛

╭─〔 ⚙️ *Bot Information* 〕─╮
│ 🧠 *Name* : WP-Bot  
│ 🚀 *Version* : 2.2.0  
│ 👨‍💻 *Developer* : Mausam Kar  
│ 🌐 *Portfolio* : mausam03.vercel.app  
│ ⭐ *Stars* : 2  🍴 *Forks* : 0  
│ 💾 *Size* : 0.63 MB  
│ ⏱️ *Uptime* : 1h 27m 15s  
╰───────────────────────╯
```

## 🤖 Command Categories

<details>
<summary>🌐 General Commands</summary>

```
╭─〔 🌐 *GENERAL COMMANDS* 〕─╮
│ ➤ .help / .menu  
│ ➤ .info / .botinfo  
│ ➤ .ping  
│ ➤ .uptime  
│ ➤ .donate  
╰───────────────────────╯
```
</details>

<details>
<summary>📚 Media Commands</summary>

```
╭─〔 📚 *MEDIA COMMANDS* 〕─╮
│ ➤ .image / .img  
│ ➤ .video / .vid  
│ ➤ .audio / .voice  
│ ➤ .sticker / .stickergif  
╰───────────────────────╯
```
</details>

<details>
<summary>🛠️ Utility Commands</summary>

```
╭─〔 🛠️ *UTILITY COMMANDS* 〕─╮
│ ➤ .calc / .calculate  
│ ➤ .convert / .currency  
│ ➤ .weather  
│ ➤ .news  
╰───────────────────────╯
```
</details>

<details>
<summary>🔧 Admin Commands</summary>

```
╭─〔 🔧 *ADMIN COMMANDS* 〕─╮
│ ➤ .ban  
│ ➤ .unban  
│ ➤ .mute  
│ ➤ .unmute  
│ ➤ .kick  
│ ➤ .promote  
│ ➤ .demote  
╰───────────────────────╯
```
</details>

<details>
<summary>🤖 Bot Owner Commands</summary>

```
╭─〔 🤖 *BOT OWNER COMMANDS* 〕─╮
│ ➤ .eval / .exec  
│ ➤ .restart  
│ ➤ .shutdown  
│ ➤ .setprefix  
╰───────────────────────╯
```
</details>

## 📊 Bot Features

| Feature | Description |
|---------|-------------|
| Auto-replies | Respond to messages automatically using AI |
| Custom commands | Define your own commands for specific tasks |
| Message scheduling | Schedule messages to be sent at later times |
| Group management | Manage group settings, members, and activities |
| Media processing | Handle images, videos, and documents intelligently |
| Spam protection | Protect against spam messages and users |
| Multi-language support | Operate in multiple languages based on user preference |
| Activity tracking | Monitor and report user activity in groups |
| Poll creation | Create and manage polls within groups |

## 🚀 Installation

```bash
git clone https://github.com/Mausam5055/WP-Bot.git
cd WP-Bot
npm install
```

## 📁 Project Structure

```
wp-bot/
├── src/
│   ├── commands/
│   ├── handlers/
│   ├── utils/
│   └── index.js
├── config/
│   └── config.js
├── assets/
└── tests/
```

## ⚙️ Configuration

### Basic Configuration

| Parameter | Type | Description |
|-----------|------|-------------|
| `TOKEN` | `string` | Your WhatsApp API token |
| `PREFIX` | `string` | Command prefix for bot |
| `DEBUG` | `boolean` | Enable debug mode |

### Advanced Settings

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `MAX_RETRIES` | `number` | 3 | Connection retry attempts |
| `MESSAGE_QUEUE_SIZE` | `number` | 100 | Max queued messages |
| `ALLOWED_MIME_TYPES` | `string[]` | ['image/*'] | Supported file types |
| `LOG_LEVEL` | `string` | 'info' | Logging verbosity |

## 🔧 API Reference

### Command Structure
```javascript
{
  name: string,
  description: string,
  usage: string,
  execute: async (msg, args) => void
}
```

### Event Handlers
```javascript
bot.on('message', callback)
bot.on('group-join', callback)
bot.on('media-receive', callback)
```

## ❗ Troubleshooting

| Issue | Solution |
|-------|----------|
| Connection Failed | 1. Check internet connection<br>2. Verify WhatsApp session<br>3. Clear browser cache |
| Authentication Error | 1. Rescan QR code<br>2. Check phone connection<br>3. Update credentials |
| Message Not Sent | 1. Check rate limits<br>2. Verify recipient number<br>3. Check message format |

## 📊 Performance

| Metric | Value |
|--------|-------|
| Message Processing | ~100ms |
| Max Concurrent Users | 1000+ |
| Memory Usage | 200-500MB |
| CPU Usage | 10-30% |

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

### Development Setup
```bash
npm install
npm run dev
npm test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## 📧 Contact & Support

| Type | Link |
|------|------|
| Portfolio | [mausam03.vercel.app](https://mausam03.vercel.app) |
| GitHub | [@Mausam5055](https://github.com/Mausam5055) |

╭─〔 🔮 *About Developer* 〕─╮
│ 👤 *Developer* : Mausam Kar  
│ 💬 *GitHub* : @Mausam5055  
│ 🌐 *Portfolio* : mausam03.vercel.app  
│ 🖤 *Thank You for Using!*  
╰───────────────────────╯

Project Link: [https://github.com/Mausam5055/WP-Bot](https://github.com/Mausam5055/WP-Bot)
│ 🖤 *Thank You for Using!*  
╰───────────────────────╯

Project Link: [https://github.com/Mausam5055/WP-Bot](https://github.com/Mausam5055/WP-Bot)
# WP-Bot 🤖

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Mausam5055/WP-Bot)](https://github.com/Mausam5055/WP-Bot/issues)
[![GitHub stars](https://img.shields.io/github/stars/Mausam5055/WP-Bot)](https://github.com/Mausam5055/WP-Bot/stargazers)

A powerful and feature-rich WhatsApp automation bot built with Node.js and the WhatsApp Web API. Designed for both personal and business use, offering extensive customization and intelligent message handling.

![WP-Bot Preview](./assets/preview.png)

## 📋 Prerequisites

| Requirement | Version | Description |
|------------|---------|-------------|
| Node.js | ≥ 14.x | Runtime environment |
| npm/yarn | Latest | Package manager |
| Chrome/Chromium | Latest | For WhatsApp Web |
| Active WhatsApp Account | - | Phone number verified |

## ✨ Features

| Category | Features |
|----------|----------|
| Message Handling | • Auto-replies with AI integration<br>• Custom command handling<br>• Message filtering and spam protection<br>• Multi-language support |
| Media Management | • Image/video processing<br>• Document handling<br>• Voice message transcription<br>• Sticker creation |
| Automation | • Scheduled messages<br>• Welcome messages<br>• Automated responses<br>• Batch messaging |
| Group Features | • Anti-spam protection<br>• Member management<br>• Activity tracking<br>• Poll creation |

## 📸 Preview

<div align="center">
  <img src="./assets/bot-menu.png" alt="Bot Menu" width="100%" style="margin-bottom: 20px"/>
</div>

### Core Features Preview

<div align="center">
  <table>
    <tr>
      <td><img src="./assets/chat-interface.png" alt="Chat Interface" width="250"/></td>
      <td><img src="./assets/commands-list.png" alt="Commands List" width="250"/></td>
      <td><img src="./assets/group-controls.png" alt="Group Controls" width="250"/></td>
    </tr>
    <tr>
      <td align="center"><b>Chat Interface</b></td>
      <td align="center"><b>Command System</b></td>
      <td align="center"><b>Group Controls</b></td>
    </tr>
  </table>
</div>

### Special Features

<div align="center">
  <table>
    <tr>
      <td><img src="./assets/media-features.png" alt="Media Features" width="250"/></td>
      <td><img src="./assets/ai-features.png" alt="AI Integration" width="250"/></td>
    </tr>
    <tr>
      <td align="center"><b>Media Processing</b></td>
      <td align="center"><b>AI Integration</b></td>
    </tr>
  </table>
</div>

## 📱 Bot Menu

```
┏━━━━━━━━━━━━━━━━━━━━━━┓
     🤖 *MAUSAM'S-MD BOT*  
┗━━━━━━━━━━━━━━━━━━━━━━┛

╭─〔 ⚙️ *Bot Information* 〕─╮
│ 🧠 *Name* : WP-Bot  
│ 🚀 *Version* : 2.2.0  
│ 👨‍💻 *Developer* : Mausam Kar  
│ 🌐 *Portfolio* : mausam03.vercel.app  
│ ⭐ *Stars* : 2  🍴 *Forks* : 0  
│ 💾 *Size* : 0.63 MB  
│ ⏱️ *Uptime* : 1h 27m 15s  
╰───────────────────────╯
```

## 🤖 Command Categories

<details>
<summary>🌐 General Commands</summary>

```
╭─〔 🌐 *GENERAL COMMANDS* 〕─╮
│ ➤ .help / .menu  
│ ➤ .info / .botinfo  
│ ➤ .ping  
│ ➤ .uptime  
│ ➤ .donate  
╰───────────────────────╯
```
</details>

<details>
<summary>📚 Media Commands</summary>

```
╭─〔 📚 *MEDIA COMMANDS* 〕─╮
│ ➤ .image / .img  
│ ➤ .video / .vid  
│ ➤ .audio / .voice  
│ ➤ .sticker / .stickergif  
╰───────────────────────╯
```
</details>

<details>
<summary>🛠️ Utility Commands</summary>

```
╭─〔 🛠️ *UTILITY COMMANDS* 〕─╮
│ ➤ .calc / .calculate  
│ ➤ .convert / .currency  
│ ➤ .weather  
│ ➤ .news  
╰───────────────────────╯
```
</details>

<details>
<summary>🔧 Admin Commands</summary>

```
╭─〔 🔧 *ADMIN COMMANDS* 〕─╮
│ ➤ .ban  
│ ➤ .unban  
│ ➤ .mute  
│ ➤ .unmute  
│ ➤ .kick  
│ ➤ .promote  
│ ➤ .demote  
╰───────────────────────╯
```
</details>

<details>
<summary>🤖 Bot Owner Commands</summary>

```
╭─〔 🤖 *BOT OWNER COMMANDS* 〕─╮
│ ➤ .eval / .exec  
│ ➤ .restart  
│ ➤ .shutdown  
│ ➤ .setprefix  
╰───────────────────────╯
```
</details>

## 📊 Bot Features

| Feature | Description |
|---------|-------------|
| Auto-replies | Respond to messages automatically using AI |
| Custom commands | Define your own commands for specific tasks |
| Message scheduling | Schedule messages to be sent at later times |
| Group management | Manage group settings, members, and activities |
| Media processing | Handle images, videos, and documents intelligently |
| Spam protection | Protect against spam messages and users |
| Multi-language support | Operate in multiple languages based on user preference |
| Activity tracking | Monitor and report user activity in groups |
| Poll creation | Create and manage polls within groups |

## 🚀 Installation

```bash
git clone https://github.com/Mausam5055/WP-Bot.git
cd WP-Bot
npm install
```

## 📁 Project Structure

```
wp-bot/
├── src/
│   ├── commands/
│   ├── handlers/
│   ├── utils/
│   └── index.js
├── config/
│   └── config.js
├── assets/
└── tests/
```

## ⚙️ Configuration

### Basic Configuration

| Parameter | Type | Description |
|-----------|------|-------------|
| `TOKEN` | `string` | Your WhatsApp API token |
| `PREFIX` | `string` | Command prefix for bot |
| `DEBUG` | `boolean` | Enable debug mode |

### Advanced Settings

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `MAX_RETRIES` | `number` | 3 | Connection retry attempts |
| `MESSAGE_QUEUE_SIZE` | `number` | 100 | Max queued messages |
| `ALLOWED_MIME_TYPES` | `string[]` | ['image/*'] | Supported file types |
| `LOG_LEVEL` | `string` | 'info' | Logging verbosity |

## 🔧 API Reference

### Command Structure
```javascript
{
  name: string,
  description: string,
  usage: string,
  execute: async (msg, args) => void
}
```

### Event Handlers
```javascript
bot.on('message', callback)
bot.on('group-join', callback)
bot.on('media-receive', callback)
```

## ❗ Troubleshooting

| Issue | Solution |
|-------|----------|
| Connection Failed | 1. Check internet connection<br>2. Verify WhatsApp session<br>3. Clear browser cache |
| Authentication Error | 1. Rescan QR code<br>2. Check phone connection<br>3. Update credentials |
| Message Not Sent | 1. Check rate limits<br>2. Verify recipient number<br>3. Check message format |

## 📊 Performance

| Metric | Value |
|--------|-------|
| Message Processing | ~100ms |
| Max Concurrent Users | 1000+ |
| Memory Usage | 200-500MB |
| CPU Usage | 10-30% |

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

### Development Setup
```bash
npm install
npm run dev
npm test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## 📧 Contact & Support

| Type | Link |
|------|------|
| Portfolio | [mausam03.vercel.app](https://mausam03.vercel.app) |
| GitHub | [@Mausam5055](https://github.com/Mausam5055) |

╭─〔 🔮 *About Developer* 〕─╮
│ 👤 *Developer* : Mausam Kar  
│ 💬 *GitHub* : @Mausam5055  
│ 🌐 *Portfolio* : mausam03.vercel.app  
│ 🖤 *Thank You for Using!*  
╰───────────────────────╯

Project Link: [https://github.com/Mausam5055/WP-Bot](https://github.com/Mausam5055/WP-Bot)
│ 🖤 *Thank You for Using!*  
╰───────────────────────╯

Project Link: [https://github.com/Mausam5055/WP-Bot](https://github.com/Mausam5055/WP-Bot)
