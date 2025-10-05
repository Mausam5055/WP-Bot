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
  <img src="./assets/chat-preview.png" alt="Chat Interface" width="280" />
  <img src="./assets/group-management.png" alt="Group Management" width="280" />
  <img src="./assets/commands-preview.png" alt="Bot Commands" width="280" />
</div>

### Features Showcase

| Preview | Description |
|---------|-------------|
| ![Auto Reply](./assets/auto-reply.png) | Smart auto-reply system in action |
| ![Media Handling](./assets/media-handling.png) | Processing images and stickers |
| ![Scheduling](./assets/scheduling.png) | Message scheduling interface |

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



## 📧 Contact



Project Link: [https://github.com/Mausam5055/WP-Bot](https://github.com/Mausam5055/WP-Bot)
