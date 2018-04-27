const Discord = require('discord.js');
const client = new Discord.Client();
const getDiceRoll = require('./commands/getDiceRoll');
const { stripCommand } = require('./util/functions');
const {
  logCommandResponse,
  logGuildAdd,
  logGuildRemove,
} = require('./util/logging');
const {
  BOT_PREFIX,
  COMMAND_ABOUT,
  COMMAND_HELP,
  COMMAND_PING,
  COMMAND_ROLL,
} = require('./util/constants');
const {
  MESSAGE_COMMAND_FALLBACK,
  MESSAGE_PING_RESPONSE,
  RICH_EMBED_HELP,
  RICH_EMBED_ABOUT,
} = require('./util/messages');

client.on('message', async message => {
  // Ignores itself
  if (message.author.bot) return;

  if (message.content.startsWith(BOT_PREFIX)) {
    const command = stripCommand(message.content, BOT_PREFIX);

    if (command.startsWith(COMMAND_HELP)) {
      return message.channel
        .send({ embed: RICH_EMBED_HELP })
        .then(() => logCommandResponse(message))
        .catch(console.error);
    }

    if (command.startsWith(COMMAND_ABOUT)) {
      return message.channel
        .send({ embed: RICH_EMBED_ABOUT })
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
    return message.reply(MESSAGE_COMMAND_FALLBACK(command));
  }
});

client.on('guildCreate', guild => logGuildAdd(guild));
client.on('guildDelete', guild => logGuildRemove(guild));
client.login(process.env.MY_VARIABLE);
