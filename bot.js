const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("message", (message) => {
  if (message.content.startsWith("!friends")) {
    message.channel.send("I can be your friend !");
  } else

  if (message.content.startsWith("!hello")) {
    message.reply("Hai!");
  }
  if (message.content.startsWith("!version")) {
    message.reply("ReanBot Version: 0.0.1");
  }
    if (message.content.startsWith("!developer")) {
    message.reply("The developer is Rean#4356");
  }
    if (message.content.startsWith("!credit")) {
    message.channel.send("Credits to: Tami Omicron TheLostName For Testing");
  }
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
