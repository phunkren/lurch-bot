const { BOT_TOKEN } = require('./auth/tokens');
const Discord = require('discord.js');
const client = new Discord.Client();
const getDiceRoll = require('./commands/getDiceRoll');
const { getCommand } = require('./util/functions');

const {
  BOT_PREFIX,
  COMMAND_HELP,
  COMMAND_ABOUT,
  COMMAND_ROLL,
  REGEX_DIE,
  REGEX_DICE,
} = require('./util/constants');

const {
  MESSAGE_COMMAND_FALLBACK,
  RICH_EMBED_HELP,
  RICH_EMBED_ABOUT,
} = require('./util/messages');

client.on('message', message => {
  if (message.content.startsWith(BOT_PREFIX)) {
    const command = getCommand(message.content, BOT_PREFIX);

    switch (command) {
      case COMMAND_HELP:
        return message.reply({ embed: RICH_EMBED_HELP });

      case COMMAND_ABOUT:
        return message.reply({ embed: RICH_EMBED_ABOUT });

      case `${COMMAND_ROLL} ${REGEX_DIE}`:
      case `${COMMAND_ROLL} ${REGEX_DICE}`:
        return message.reply(getDiceRoll(command));

      default:
        return message.reply(MESSAGE_COMMAND_FALLBACK(command));
    }
  }
});

client.login(BOT_TOKEN);
