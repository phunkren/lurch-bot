function getDiceParams(requestedRoll) {
  const DELIMITER = 'd';
  return requestedRoll.split(DELIMITER).map(n => Number(n ? n : 1));
}

function validateDiceParams(params) {
  return params.every(param => Number.isInteger(param));
}

function rollDie(sides) {
  return Math.floor(Math.random() * Math.floor(sides) + 1);
}

function rollDice(dice, sides) {
  return Array.from({ length: dice }, () => rollDie(sides));
}

function rollResults(roll, params) {
  const numberOfDice = params[0];
  const numberOfSides = params[1];
  const DELIMITER = ', ';

  const result = rollDice(numberOfDice, numberOfSides);
  const allResults = result.join(DELIMITER);
  const totalResult = result.reduce((a, b) => a + b);

  return numberOfDice === 1
    ? `you rolled a ${roll} and got **${totalResult}** 🎲`
    : `you rolled ${roll} and got **${totalResult}** _(${allResults})_ `;
}

const getDiceRoll = diceRoll => {
  const diceParams = getDiceParams(diceRoll);
  const isRollValid = validateDiceParams(diceParams);

  return !isRollValid
    ? `dice roll **${diceRoll}** was not recognised. **(Error)**`
    : rollResults(diceRoll, diceParams);
};

module.exports = getDiceRoll;