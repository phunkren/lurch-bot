const matchDiceRoll = command => {
  const REGEX_DIE = command.match(/[d][0-9]+/);
  const REGEX_DICE = command.match(/[0-9]+[d][0-9]+/);

  if (REGEX_DIE) {
    return REGEX_DIE[0];
  }

  if (REGEX_DICE) {
    return REGEX_DICE[0];
  }

  return 'This command is not a die roll';
};

const generateRichEmbed = ({ embed }) =>
  new Discord.RichEmbed()
    .setTitle(embed.title)
    .setAuthor(embed.author.name, embed.author.url)
    .setColor(embed.color) // 0x00AE86, Hexadecimal, or integer
    .setDescription(embed.description)
    .setFooter(embed.footer.text, embed.footer.img)
    .setImage(embed.image)
    .setThumbnail(embed.thumbnail)
    .setTimestamp() // Takes a Date object, defaults to current date.
    .setURL(embed.url)
    .map(field => this.addField(field.title, field.text, field.inline));

module.exports = {
  matchDiceRoll,
};
