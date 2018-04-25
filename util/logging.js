const logCommandResponse = message => {
  const server = message.channel.guild;
  const user = message.author;
  const { content } = message;

  return console.log(
    `[COMMAND] "${content}" requested from ${user.username} (id: ${
      user.id
    }) on ${server.name} (id: ${server.id})`
  );
};

const logGuildAdd = guild =>
  `[INSTALL] New guild joined: ${guild.name} (id: ${
    guild.id
  }). This guild has ${guild.memberCount} members!`;

const logGuildRemove = guild =>
  `[UNINSTALL] I have been removed from: ${guild.name} (id: ${guild.id})`;

module.exports = {
  logCommandResponse,
  logGuildAdd,
  logGuildRemove,
};
