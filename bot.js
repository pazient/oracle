const TelegramBot = require('node-telegram-bot-api');
const token = '7741996710:AAE6ceDN65YFT5KjzmnwpzAMpOPl2SxGxFE';
const bot = new TelegramBot(token, { polling: true });

// Ваша ссылка на приложение, которое вы хотите открыть в WebView
const webAppUrl = 'https://pazient.github.io/Oracle';

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Создаём инлайн-кнопку с ссылкой на веб-приложение
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Открыть приложение', // Текст на кнопке
                        url: webAppUrl, // Ваша ссылка
                    },
                ],
            ],
        },
    };

    // Отправляем сообщение с кнопкой
    bot.sendMessage(chatId, 'Нажмите на кнопку, чтобы открыть приложение!', options);
});
