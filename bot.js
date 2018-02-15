const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!faggot') {
    	message.reply('Is a Nazi Faggot');
  	}
});

});

client.on('message', message => {
    if (message.content === '!life') {
    	message.reply('a lie');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
