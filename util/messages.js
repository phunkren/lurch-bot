const { COLORS } = require('./colors');

const {
  BOT_ICON_URL,
  BOT_NAME,
  BOT_PREFIX,
  BOT_REPO_URL,
  BOT_VERSION,
  COMMAND_ABOUT,
  COMMAND_HELP,
  COMMAND_ROLL,
} = require('./constants');

const MESSAGE_COMMAND_FALLBACK = command =>
  `command **${command}** not recognised. Try **${BOT_PREFIX} ${COMMAND_HELP}** for a list of available commands.`;

const RICH_EMBED_ABOUT = {
  color: COLORS.blue,
  author: {
    name: `${BOT_NAME} ${BOT_VERSION}`,
    icon_url: `${BOT_ICON_URL}`,
  },
  title: `Something missing? Suggest a feature on GitHub`,
  url: `${BOT_REPO_URL}/issues`,
  description: `Not what you were looking for? Try **${BOT_PREFIX} ${COMMAND_HELP}** for a list of what's available.`,
};

const RICH_EMBED_HELP = {
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
      value: `A list of information about ${BOT_NAME}`,
    },
  ],
};

module.exports = {
  MESSAGE_COMMAND_FALLBACK,
  RICH_EMBED_ABOUT,
  RICH_EMBED_HELP,
};
