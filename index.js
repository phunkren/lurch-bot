const Discord = require('discord.js');
const client = new Discord.Client();
const { createServer } = require('http');
const server = createServer(() => {});
const { stripCommand } = require('./util/functions');
const {
  logCommandResponse,
  logGuildAdd,
  logGuildRemove,
  logServerListening
} = require('./util/logging');
const {
  BOT_PREFIX,
  COMMAND_ABOUT,
  COMMAND_HELP,
  COMMAND_PING,
  COMMAND_ROLL,
} = require('./util/constants');
const {
  MESSAGE_FALLBACK_RESPONSE,
  MESSAGE_PING_RESPONSE,
  MESSAGE_HELP_RESPONSE,
  MESSAGE_ABOUT_RESPONSE,
} = require('./util/messages');
const getDiceRoll = require('./commands/getDiceRoll');

server.listen(process.env.PORT, () => {
  logServerListening(process.env.PORT);
});

process.on('SIGINT', () => {
  console.log("Application successfully terminated!");
  process.exit();
});

client.on('message', async message => {
  // Ignores itself
  if (message.author.bot) return;

  if (message.content.toUpperCase().startsWith(BOT_PREFIX.toUpperCase())) {
    const command = stripCommand(message.content, BOT_PREFIX);

    if (command.startsWith(COMMAND_HELP)) {
      return message.channel
        .send({ embed: MESSAGE_HELP_RESPONSE })
        .then(() => logCommandResponse(message))
        .catch(console.error);
    }

    if (command.startsWith(COMMAND_ABOUT)) {
      return message.channel
        .send({ embed: MESSAGE_ABOUT_RESPONSE })
        .then(() => logCommandResponse(message))
        .catch(console.error);
    }

    if (command.startsWith(COMMAND_ROLL)) {
      return message
        .reply(getDiceRoll(command))
        .then(() => logCommandResponse(message))
        .catch(console.error);
    }

    if (command.startsWith(COMMAND_PING)) {
      const originalMessage = await message.channel.send(COMMAND_PING);

      return originalMessage
        .edit(MESSAGE_PING_RESPONSE(originalMessage, message, client))
        .then(() => logCommandResponse(message))
        .catch(console.error);
    }

    // Fallback
    return message.reply(MESSAGE_FALLBACK_RESPONSE(command));
  }
});

client.on('guildCreate', guild => logGuildAdd(guild));
client.on('guildDelete', guild => logGuildRemove(guild));

client.login(process.env.BOT_SECRET_TOKEN);

