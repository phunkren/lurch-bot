const stripCommand = (message, command) =>
  message
    .toLowerCase()
    .split(command)
    .pop()
    .trim();

module.exports = {
  stripCommand,
};
