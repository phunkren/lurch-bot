const Discord = require("discord.js");
const { BOT_TOKEN } = require("./auth/tokens");
const client = new Discord.Client();
const COMMAND_PREFIX = "!roll ";

function getDiceRoll(query) {
  return query.split(COMMAND_PREFIX).pop();
}

function getDiceParams(requestedRoll) {
  const DELIMITER = "d";
  return requestedRoll.split(DELIMITER).map(n => Number(n ? n : 1));
}

function rollDie(sides) {
  return Math.floor(Math.random() * Math.floor(sides) + 1);
}

function rollDice(dice, sides) {
  return Array.from({ length: dice }, () => rollDie(sides));
}

function validateDiceParams(params) {
  return params.every(param => Number.isInteger(param));
}

function getRollResult(roll, params) {
  const dice = params[0];
  const sides = params[1];
  const DELIMITER = ", ";

  const result = rollDice(dice, sides);
  const allResults = result.join(DELIMITER);
  const totalResult = result.reduce((a, b) => a + b);

  return dice === 1
    ? `you rolled a ${roll} and got **${totalResult}**`
    : `you rolled ${roll} and got **${totalResult}** _(${allResults})_`;
}

function init(message) {
  const diceRoll = getDiceRoll(message);
  const diceParams = getDiceParams(diceRoll);
  const isRollValid = validateDiceParams(diceParams);

  return !isRollValid
    ? `dice roll **${diceRoll}** was not recognised. **(Error)**`
    : getRollResult(diceRoll, diceParams);
}

client.on("message", msg => {
  if (msg.content.includes(COMMAND_PREFIX)) {
    msg.reply(init(msg.content));
  }
});

client.login(BOT_TOKEN);
