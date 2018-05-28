const { stripCommand } = require('../util/functions');
const { COMMAND_ROLL } = require('../util/constants');

function getDiceParams(requestedRoll) {
  const DELIMITER = 'd';
  return requestedRoll.split(DELIMITER).map(n => Number(n ? n : 1));
}

function validateDiceParams(diceRoll) {
  const isDieRoll = diceRoll.match(/[d][0-9]+/i); // e.g. d20
  const isDiceRoll = diceRoll.match(/[0-9]+[d][0-9]+/i); // e.g. 3d6

  if (!isDieRoll && !isDiceRoll) {
    return false;
  }

  return true;
}

function rollDie(sides) {
  return Math.floor(Math.random() * Math.floor(sides) + 1);
}

function rollDice(dice, sides) {
  try {
    return Array.from({ length: dice }, () => rollDie(sides));
  } catch (error) {
    console.error(error);
  }
}

function rollResults(roll, params) {
  const numberOfDice = params[0];
  const numberOfSides = params[1];
  const DELIMITER = ', ';

  const result = rollDice(numberOfDice, numberOfSides);
  const totalResult = result.reduce((a, b) => a + b);
  const allResults = result.join(DELIMITER);

  return numberOfDice === 1
    ? `you rolled a ${roll} and got **${totalResult}**`
    : `you rolled ${roll} and got **${totalResult}** _(${allResults})_ `;
}

const getDiceRoll = command => {
  const diceRoll = stripCommand(command, COMMAND_ROLL);
  const isRollValid = validateDiceParams(diceRoll);
  const diceParams = getDiceParams(diceRoll);

  return !isRollValid
    ? `dice roll **${diceRoll}** was not recognised. **(Error)**`
    : rollResults(diceRoll, diceParams);
};

module.exports = getDiceRoll;
