const BOT_PREFIX = '!roll';

const COMMAND_HELP = 'help';

const COMMAND_FALLBACK = `command not recognised. Try **${BOT_PREFIX} ${COMMAND_HELP}** for a list of available commands.`;

const EMBED_TEMPLATE = {
  title: 'This is your title, it can hold 256 characters',
  author: {
    text: 'Author Name',
    img: 'https://i.imgur.com/lm8s41J.png',
  },
  color: 0x00ae86,
  description: 'This is the main body of text, it can hold 2048 characters.',
  footer: {
    text: 'This is the footer text, it can hold 2048 characters',
    img: 'http://i.imgur.com/w1vhFSR.png',
  },
  image: 'http://i.imgur.com/yVpymuV.png',
  thumbnail: 'http://i.imgur.com/p2qNFag.png',
  url: 'https://discord.js.org/#/docs/main/indev/class/RichEmbed',
  fields: [
    {
      title: 'This is a field title, it can hold 256 characters',
      text: 'This is a field value, it can hold 2048 characters.',
      inline: false,
    },
    {
      title: 'Inline Field',
      text: 'They can also be inline.',
      inline: true,
    },
  ],
};

module.exports = {
  BOT_PREFIX,
  COMMAND_HELP,
  COMMAND_FALLBACK,
  EMBED_TEMPLATE,
};
