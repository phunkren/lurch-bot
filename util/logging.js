const logServerListening = port =>
  console.log(`server listening on port: ${port}`);

const logCommandResponse = message =>
  console.log(
    `"${message.content}" requested from ${
      message.author.username
    } (id: ${message.author.id}) on ${message.channel.guild.name} (id: ${
      message.channel.guild.id
    })`
  );

const logGuildAdd = guild =>
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}).
     This guild has ${guild.memberCount} members!`
  );

const logGuildRemove = guild =>
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

module.exports = {
  logCommandResponse,
  logGuildAdd,
  logGuildRemove,
  logServerListening,
};
