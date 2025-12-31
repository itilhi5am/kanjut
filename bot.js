const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');

// TOKEN BOT
const TOKEN = '8415209089:AAHbR753DRg9gVBmCU4Gb-GYoqz1ooxEnXg';
const bot = new TelegramBot(TOKEN, { polling: true });

// Path file zip (satu folder dengan bot.js)
const ZIP_FILE = path.join(__dirname, 'stres5.zip');

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  // Cek apakah file ada
  if (!fs.existsSync(ZIP_FILE)) {
    return bot.sendMessage(chatId, '❌ File stresser.zip tidak ditemukan!');
  }

  bot.sendMessage(chatId, '📦 Mengirim file stresser.zip...');

  // Kirim file
  await bot.sendDocument(chatId, ZIP_FILE, {
    caption: '✅ Berikut file stresser.zip'
  });
});

console.log('🤖 Bot berjalan...');
