// Application Details
const BOT_NAME = 'Dice Roller';
const BOT_PREFIX = '!roll';
const BOT_REPO_URL = 'https://github.com/AndrewJDick/dice-roller';
const BOT_ICON_URL = 'https://i.imgur.com/iUTZbc8.png';
const BOT_VERSION = 'v1.0.0';

// Bot Commands
const COMMAND_HELP = 'help';
const COMMAND_ABOUT = 'about';
const COMMAND_ROLL = 'roll';

// Regular Expressions
const REGEX_DIE = /[d][0-9]+/;
const REGEX_DICE = /[0-9]+[d][0-9]+/;

module.exports = {
  BOT_NAME,
  BOT_PREFIX,
  BOT_REPO_URL,
  BOT_ICON_URL,
  BOT_VERSION,
  COMMAND_HELP,
  COMMAND_ABOUT,
  COMMAND_ROLL,
};
