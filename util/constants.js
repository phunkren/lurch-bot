// Application Details
const BOT_APP_URL = `https://${process.env.npm_package_name}.herokuapp.com/`;
const BOT_ICON_URL = 'https://i.imgur.com/Fhxwe93.jpg';
const BOT_NAME = 'Lurch';
const BOT_PREFIX = '!lurch';
const BOT_REPO_URL = process.env.npm_package_repository_url;
const BOT_VERSION = `v${process.env.npm_package_version}`;

// Bot Commands
const COMMAND_ABOUT = 'about';
const COMMAND_HELP = 'help';
const COMMAND_ROLL = 'roll';
const COMMAND_PING = 'ping';

// Palette (decimal format)
const COLORS = {
  blue: 30975,
  orange: 16606720,
};

module.exports = {
  BOT_APP_URL,
  BOT_ICON_URL,
  BOT_NAME,
  BOT_PREFIX,
  BOT_REPO_URL,
  BOT_VERSION,
  COLORS,
  COMMAND_ABOUT,
  COMMAND_HELP,
  COMMAND_ROLL,
  COMMAND_PING,
};
