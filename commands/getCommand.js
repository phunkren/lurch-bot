const { BOT_PREFIX } = require('../util/constants');

const getCommand = message =>
  message
    .toLowerCase()
    .split(BOT_PREFIX)
    .pop()
    .trim();

module.exports = getCommand;
