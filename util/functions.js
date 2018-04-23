const matchDieRoll = command => {
  const REGEX_DIE = command.match(/[d][0-9]+/);

  if (!REGEX_DIE) {
    return 'This command is not a die roll';
  }

  return REGEX_DIE[0];
};

const matchDiceRoll = command => {
  const REGEX_DICE = command.match(/[0-9]+[d][0-9]+/);

  if (!REGEX_DICE) {
    return 'This command is not a dice roll';
  }

  return command.match(REGEX_DICE)[0];
};

module.exports = {
  matchDieRoll,
  matchDiceRoll,
};
