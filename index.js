const Discord = require('discord.js');
const client = new Discord.Client();
const getCommand = require('./commands/getCommand');
const getDiceRoll = require('./commands/getDiceRoll');
const getHelp = require('./commands/getHelp');
const { matchDieRoll, matchDiceRoll } = require('./util/functions');
const { BOT_TOKEN } = require('./auth/tokens');
const {
  BOT_PREFIX,
  COMMAND_HELP,
  MESSAGE_FALLBACK,
} = require('./util/constants');

client.on('message', message => {
  if (message.content.startsWith(BOT_PREFIX)) {
    const command = getCommand(message.content);

    switch (command) {
      case COMMAND_HELP:
        return message.reply(getHelp());

      case matchDieRoll(command):
      case matchDiceRoll(command):
        return message.reply(getDiceRoll(command));

      default:
        return message.reply(MESSAGE_FALLBACK);
    }
  }
});

client.login(BOT_TOKEN);
