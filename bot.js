const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", (message) => {
  if (message.content.startsWith("!friends")) {
    message.channel.send("I can be your friend !");
  } else

  if (message.content.startsWith("!hello")) {
    message.reply("Hai!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
