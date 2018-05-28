const {
  BOT_ICON_URL,
  BOT_NAME,
  BOT_PREFIX,
  BOT_REPO_URL,
  BOT_VERSION,
  COLORS,
  COMMAND_ABOUT,
  COMMAND_HELP,
  COMMAND_PING,
  COMMAND_ROLL,
} = require('./constants');

const MESSAGE_FALLBACK_RESPONSE = command =>
  `command **${command}** not recognised. Try **${BOT_PREFIX} ${COMMAND_HELP}** for a list of available commands.`;

const MESSAGE_PING_RESPONSE = (originalMessage, message, client) =>
  `You rang? Latency is ${originalMessage.createdTimestamp -
    message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`;

const MESSAGE_ABOUT_RESPONSE = {
  color: COLORS.blue,
  author: {
    name: `${BOT_NAME} ${BOT_VERSION}`,
    icon_url: `${BOT_ICON_URL}`,
  },
  title: `Something missing? Suggest a feature on GitHub`,
  url: `${BOT_REPO_URL}/issues`,
  description: `Not what you were looking for? Try **${BOT_PREFIX} ${COMMAND_HELP}** for a list of what's available.`,
};

const MESSAGE_HELP_RESPONSE = {
  color: COLORS.orange,
  title: '🔧 Command List',
  description: `Here is a list of all available commands for ${BOT_NAME}:`,
  fields: [
    {
      name: `${BOT_PREFIX} ${COMMAND_ROLL}`,
      value:
        'Roll either a single die (e.g. **d20**) or multiple (e.g. **3d6**)',
    },
    {
      name: `${BOT_PREFIX} ${COMMAND_HELP}`,
      value: `A list of all available commands for ${BOT_NAME}`,
    },
    {
      name: `${BOT_PREFIX} ${COMMAND_ABOUT}`,
      value: `General information about ${BOT_NAME}`,
    },
    {
      name: `${BOT_PREFIX} ${COMMAND_PING}`,
      value: `Ping ${BOT_NAME}'s server`,
    },
  ],
};

module.exports = {
  MESSAGE_FALLBACK_RESPONSE,
  MESSAGE_PING_RESPONSE,
  MESSAGE_ABOUT_RESPONSE,
  MESSAGE_HELP_RESPONSE,
};
