const TelegramBot = require('node-telegram-bot-api');
const token = '6010627301:AAE25HWXWpYK0mg_h0tiH0Z52Cata7QEkBM';
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from.first_name;
    bot.sendMessage(chatId, `Seja bem vindo(a), ${username}!`);
    const options = {
      reply_markup: {
        keyboard: [
          ['CAPTURAR'],
          ['LISTA'],
          ['LOJA']
        ],
        one_time_keyboard: true
      }
    };
  
    bot.sendMessage(chatId, '============================\nSELECIONE A OPÇÃO QUE DESEJA\n============================', options);
  });
  

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
  
    switch (text) {
      case 'CAPTURAR':
        const captureOptions = {
          reply_markup: {
            keyboard: [
              ['♠️ ANIMES'],
              ['♣️ JOGOS'],
              ['♥️ MÚSICA'],
              ['♦️ MISCELÂNEA']
            ],
            one_time_keyboard: true
          }
        };
        bot.sendMessage(chatId, 'Selecione uma opção de capturar:', captureOptions);
        break;
  

      case '♠️ ANIMES':
        bot.sendMessage(chatId, 'Você selecionou ANIMES!\nParabéns! Você capturou um (nome)');
        break;
      case '♣️ JOGOS':
        bot.sendMessage(chatId, 'Você selecionou JOGOS!\nParabéns! Você capturou um (nome)');
        break;
      case '♥️ MÚSICA':
        bot.sendMessage(chatId, 'Você selecionou MÚSICA!\nParabéns! Você capturou um (nome)');
        break;
      case '♦️ MISCELÂNEA':
        bot.sendMessage(chatId, 'Você selecionou MISCELÂNEA!\nParabéns! Você capturou um (nome)');
        break;
  
      case 'LISTA':
        bot.sendMessage(chatId, 'Essa é a sua lista de cartas capturadas:\n-\n-\n-');
        break;
  
      case 'LOJA':
        bot.sendMessage(chatId, 'Essas são as cartas disponíveis em nossa loja: ');
        break;
  
    }
  });