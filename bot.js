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
    message.reply(" ```ReanBot Version: 0.0.3``` ");
  }
    if (message.content.startsWith("!developer")) {
    message.reply(" ```The developer is Rean#4356``` ");
  }
    if (message.content.startsWith("!credit")) {
    message.channel.send(" ```Credits to: Tami, Omicron,TheLostName For Testing``` ");
  }
      if (message.content.startsWith("!buy")) {
    message.channel.send(" ```Please dm rean#4356 ``` ");
  }
        if (message.content.startsWith("!booty")) {
    message.channel.send(" https://gyazo.com/796975f0cdaeb7f184b7965709825a79 ");
  }
        if (message.content.startsWith("!prices")) {
    message.channel.send(" ```**GFX:** $5-$10 **Setups:** $10-$200 **Accounts:** $0.5-$2 ```");
  }
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
