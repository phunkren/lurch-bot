const logCommandResponse = message =>
  console.log(
    `[COMMAND] "${message.content}" requested from ${
      message.author.username
    } (id: ${message.author.id}) on ${message.channel.guild.name} (id: ${
      message.channel.guild.id
    })`
  );

const logGuildAdd = guild =>
  console.log(
    `[INSTALL] New guild joined: ${guild.name} (id: ${
      guild.id
    }). This guild has ${guild.memberCount} members!`
  );

const logGuildRemove = guild =>
  console.log(
    `[UNINSTALL] I have been removed from: ${guild.name} (id: ${guild.id})`
  );

module.exports = {
  logCommandResponse,
  logGuildAdd,
  logGuildRemove,
};
