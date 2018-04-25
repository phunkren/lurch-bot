const { REGEX_DIE, REGEX_DICE } = require('./constants');

const getCommand = (message, command) =>
  message
    .toLowerCase()
    .split(command)
    .pop()
    .trim();

const matchDiceRoll = command => {
  const DIE = command.match(REGEX_DIE);
  const DICE = command.match(REGEX_DICE);

  if (DIE) {
    return DIE[0];
  }

  if (DICE) {
    return DICE[0];
  }

  return 'This command is not a die roll';
};

module.exports = {
  getCommand,
  matchDiceRoll,
};
