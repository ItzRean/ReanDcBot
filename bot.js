const Discord = require('discord.js');
const client = new Discord.Client();


client.on("message", (message) => {
  if (message.content.startsWith("!friends")) {
    message.channel.send(" ```I can be your friend!``` ");
  } else

  if (message.content.startsWith("!hello")) {
    message.reply("Hai!");
  }
  if (message.content.startsWith("!version")) {
    message.reply(" ```Insife Version: 0.0.1``` ");
  }
  if (message.content.startsWith("!developer")) {
    message.reply(" ```The developer is Rean#4674``` ");
  }
  if (message.content.startsWith("!rean")) {
    message.channel.send(" ```The Developer of the bod ```");
  }   
  if (message.content === '!avatar') {
    message.reply(message.author.avatarURL);
  }
  if (message.content.startsWith("!ip")) {
    message.channel.send(" ```Play.InsifeFactions.Com```");
  }
  
});

client.on('guildMemberAdd', members => {

  const channel = member.guild.channels.find('name', 'welcome');

  if (!channel) return;
  channel.send(`Welcome to **InsifeFactions** ${member}`);

});


client.login(process.env.BOT_TOKEN);
