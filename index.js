const { BOT_TOKEN } = require('./auth/tokens');
const Discord = require('discord.js');
const client = new Discord.Client();
const getDiceRoll = require('./commands/getDiceRoll');
const { stripCommand, logCommandResponse } = require('./util/functions');
const {
  BOT_PREFIX,
  COMMAND_HELP,
  COMMAND_ABOUT,
  COMMAND_ROLL,
} = require('./util/constants');
const {
  MESSAGE_COMMAND_FALLBACK,
  RICH_EMBED_HELP,
  RICH_EMBED_ABOUT,
} = require('./util/messages');

client.on('message', message => {
  if (message.content.startsWith(BOT_PREFIX)) {
    const command = stripCommand(message.content, BOT_PREFIX);

    if (command.startsWith(COMMAND_HELP)) {
      return message
        .reply({ embed: RICH_EMBED_HELP })
        .then(() => logCommandResponse(message))
        .catch(console.error);
    }

    if (command.startsWith(COMMAND_ABOUT)) {
      return message
        .reply({ embed: RICH_EMBED_ABOUT })
        .then(() => logCommandResponse(message))
        .catch(console.error);
    }

    if (command.startsWith(COMMAND_ROLL)) {
      return message
        .reply(getDiceRoll(command))
        .then(() => logCommandResponse(message))
        .catch(console.error);
    }

    return message.reply(MESSAGE_COMMAND_FALLBACK(command));
  }
});

client.login(BOT_TOKEN);
