const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const webAppUrl = process.env.WEBAPP_URL;

const bot = new TelegramBot(token);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const update = req.body;

      if (update && update.message) {
        const chatId = update.message.chat.id;
        const text = update.message.text || '';

        if (text.startsWith('/start')) {
          await bot.sendMessage(
            chatId,
            `👋 *Selamat Datang di Jurnal Trading Bot!*\n\nKlik tombol di bawah ini untuk membuka dashboard jurnal trading kamu langsung dari Telegram:`,
            {
              parse_mode: 'Markdown',
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: '📊 Buka Jurnal Trading',
                      web_app: { url: webAppUrl }
                    }
                  ]
                ]
              }
            }
          );
        } else {
          await bot.sendMessage(
            chatId,
            'Gunakan perintah /start untuk membuka Web App Jurnal Trading.'
          );
        }
      }

      res.status(200).json({ status: 'ok' });
    } catch (error) {
      console.error('Error webhook Telegram:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(200).send('Telegram Bot Webhook Vercel Active!');
  }
};