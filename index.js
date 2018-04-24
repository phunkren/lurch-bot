const Discord = require('discord.js');
const client = new Discord.Client();
const getCommand = require('./commands/getCommand');
const getDiceRoll = require('./commands/getDiceRoll');
const { matchDiceRoll } = require('./util/functions');
const { BOT_TOKEN } = require('./auth/tokens');

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
    const command = getCommand(message.content);

    switch (command) {
      case COMMAND_HELP:
        return message.reply({ embed: RICH_EMBED_HELP });

      case COMMAND_ABOUT:
        return message.reply({ embed: RICH_EMBED_ABOUT });

      case COMMAND_ROLL:
        return message.reply(getDiceRoll(command));

      default:
        return message.reply(MESSAGE_COMMAND_FALLBACK(command));
    }
  }
});

client.login(BOT_TOKEN);
