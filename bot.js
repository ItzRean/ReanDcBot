const Discord = require('discord.js');
const client = new Discord.Client();

});
client.on("message", (message) => {
  if (message.content.startsWith("!friends")) {
    message.channel.send(" ```I can be your friend!``` ");
  } else

  if (message.content.startsWith("!hello")) {
    message.reply("Hai!");
  }
  if (message.content.startsWith("!version")) {
    message.reply(" ```ReanBot Version: 0.0.7``` ");
  }
  if (message.content.startsWith("!developer")) {
    message.reply(" ```The developer is Rean#4356``` ");
  }
  if (message.content.startsWith("!credit")) {
    message.channel.send(" ```Credits to: Tami, Omicron,TheLostName For Testing``` ");
  }
  if (message.content.startsWith("!booty")) {
    message.channel.send(" https://gyazo.com/796975f0cdaeb7f184b7965709825a79 ");
  }
  if (message.content.startsWith("!ineedfriends")) {
    message.channel.send(" ```Thats gone be $50 for 1 fake friend!```");
  }
  if (message.content.startsWith("!hkq")) {
    message.channel.send(" ```Darling , you are a goddess and once you know what that truly means, i pray for anyone who tries to hurt you ```");
  }
  if (message.content.startsWith("!rean")) {
    message.channel.send(" ```The Developer of the bod and our holy king ```");
  }
  if (message.content.startsWith("!omicron")) {
    message.channel.send(" ```A Huge Fucking Giant!```");
  }            
  if (message.content.startsWith("!penis")) {
    message.channel.send(" ```8===)```");
  }                    
  if (message.content.startsWith("!stefaan")) {
    message.channel.send(" ```Our speedy runner```");
  }    
  if (message.content.startsWith("!myown")) {
    message.channel.send(" ```Contact Rean#4356 to buy a custom bot!```");
  }   
  if (message.content === '!avatar') {
    message.reply(message.author.avatarURL);
  }
  if (message.content === '!em') {
    message.channel.sendEmbed("HelloThere");
  }
});

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find('name', 'member-log');

  if (!channel) return;
  channel.send(`Welcome to **HELL** ${member}`);
});

client.login(process.env.BOT_TOKEN);
