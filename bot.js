const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!life') {
    	message.reply('life is a big lie');
  	}
    if (message.content === '!friends') {
    	message.reply('is looking for friends');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
