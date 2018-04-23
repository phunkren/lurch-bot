const getHelp = () =>
  "here is a list of available commands: \n \
    - **!roll d**[n]          Roll a single die *(e.g. !roll d20)*. \n \
    - **!roll** [x]**d**[n]    Roll multiple dice *(e.g. !roll 3d6)*. \n \
    - **!roll help**          Lists all of the bot's available commands.";

module.exports = getHelp;
