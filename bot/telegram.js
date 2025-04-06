import { Telegraf } from 'telegraf';
import express from 'express';
const app = express();
const bot = new Telegraf('8088624242:AAHTWT3fORamosNmHA6EYPIcrGib9WNQLUk');

// Webhook for Telegram messages
bot.start((ctx) => {
  ctx.reply('Welcome! Click below to visit the web app or open Telegram Web directly.', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Open Web App', url: 'http://localhost:5173/' }],
        [{ text: 'Open Telegram Web', url: 'https://web.telegram.org/' }] // Link to Telegram Web
      ]
    }
  });
});

// For any text received, send a generic response
bot.on('text', (ctx) => {
  ctx.reply('Please visit our web app for a better experience!', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Open Web App', url: 'http://localhost:5173/' }],
        [{ text: 'Open Telegram Web', url: 'https://web.telegram.org/' }] 
      ]
    }
  });
});

bot.launch();

// Express server to run the bot and serve other purposes if needed
app.listen(3000, () => {
  console.log('Bot running on http://localhost:3000');
});
