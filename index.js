const { Client } = require('discord.js');
const { startScrim, tokenDiscord, rooms } = require('./config.json');
const axios = require('axios');
const Database = require('./server.js');
const User = require('./models/user.js');

client = new Client();

client.on('message', async (message) => {

  if (message.content.startsWith(`${startScrim}`)) {

    if (message.channel.name === 'status-scrim') {

      const [channel] = Object.keys(rooms).filter(room => message.member.voiceChannelID == rooms[room])
      const [command, userNick] = message.content.trim().split(/ +/g);

      try {
        const { data: getPlayer } = await axios.get(`https://apextrack.azurewebsites.net/api/apex/getUserByName?search=${userNick}`);

        await new User({
          discordName: message.member.user.username,
          nickName: userNick,
          kill: getPlayer.kills,
          lvl: getPlayer.level
        }).save()

        message.reply(!!channel ? `você está no canal ${channel}` : 'você não está em um canal de voz')

      } catch (error) {
        console.error('Deu paw', error)
      }

    } else {
      message.reply('você não está no canal #status-scrim');
    }
  }

});

client.login(`${tokenDiscord}`);