const Discord = require('discord.js');
const client = new Discord.Client();
const { BOT_TOKEN } = require('./auth/tokens');

const getCommand = require('./commands/getCommand');
const getDiceRoll = require('./commands/getDiceRoll');
const getHelp = require('./commands/getHelp');

const { matchDieRoll, matchDiceRoll } = require('./util/functions');
const {
  BOT_PREFIX,
  COMMAND_HELP,
  COMMAND_FALLBACK,
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
        return message.reply(COMMAND_FALLBACK);
    }
  }
});

client.login(BOT_TOKEN);
