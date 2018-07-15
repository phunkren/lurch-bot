const Discord = require('discord.js');
const client = new Discord.Client();
const { createServer } = require('http');
const server = createServer(() => {});
const {
  logGuildAdd,
  logGuildRemove,
  logServerListening,
} = require('./util/logging');
const { processMessage } = require('./commands/processMessage');

server.listen(process.env.PORT, () => {
  logServerListening(process.env.PORT);
});

client.on('message', message => processMessage({ client, message }));

client.on('guildCreate', guild => logGuildAdd(guild));

client.on('guildDelete', guild => logGuildRemove(guild));

process.on('SIGINT', () => {
  console.log('Application successfully terminated!');
  process.exit();
});

client.login(process.env.BOT_SECRET_TOKEN);
