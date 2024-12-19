const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');

// Ваш токен бота
const token = '7741996710:AAE6ceDN65YFT5KjzmnwpzAMpOPl2SxGxFE';
const bot = new TelegramBot(token, { polling: true });

// Создание Express-приложения
const app = express();
const PORT = process.env.PORT || 3000;

// Статические файлы (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Обработка сообщений в Telegram
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Вот твое приложение: https://github.com/ВАШ_ПОЛЬЗОВАТЕЛЬ/app');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
