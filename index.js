const { Client } = require('discord.js');
const { startScrim, tokenDiscord, rooms } = require('./config.json');

client = new Client();

client.on('message', message => {

  if (message.content === `${startScrim}`) {

    if (message.channel.name === 'status-scrim') {
      const [channel] = Object.keys(rooms).filter(room => message.member.voiceChannelID == rooms[room])

      message.reply(!!channel ? `você está no canal ${channel}` : 'você não está em um canal de voz')

    } else {
      message.reply('você não está no canal #status-scrim');
    }
  }

});

client.login(`${tokenDiscord}`);