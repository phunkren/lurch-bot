const { REGEX_DIE, REGEX_DICE } = require('./constants');

const stripCommand = (message, command) =>
  message
    .toLowerCase()
    .split(command)
    .pop()
    .trim();

const logCommandResponse = message => {
  const server = message.channel.guild;
  const user = message.author;
  const { content } = message;

  return console.log(
    `[COMMAND] "${content}" requested from ${user.username} (${user.id}) on ${
      server.name
    } (${server.id})`
  );
};

module.exports = {
  stripCommand,
  logCommandResponse,
};
