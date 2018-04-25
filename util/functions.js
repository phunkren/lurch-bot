const { REGEX_DIE, REGEX_DICE } = require('./constants');

const stripCommand = (message, command) =>
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

const logCommandResponse = message => {
  const server = message.channel.guild;
  const user = message.author;
  const { content } = message;

  return console.log(
    `Command "${content}" requested from ${user.username} (${user.id}) on ${
      server.name
    } (${server.id})`
  );
};

module.exports = {
  stripCommand,
  matchDiceRoll,
  logCommandResponse,
};
