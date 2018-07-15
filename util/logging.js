const packageJSON = require('../package.json');

const logServerListening = port =>
  console.log(`${packageJSON.name} server listening on port: ${port}`);

const logUnknownCommand = message =>
  console.log(
    `Unknown command "${message.content}" requested from ${
      message.author.username
    } (id: ${message.author.id}) on ${message.channel.guild.name} (id: ${
      message.channel.guild.id
    })`
  );

const logCommandResponse = message =>
  console.log(
    `"${message.content}" requested from ${message.author.username} (id: ${
      message.author.id
    }) on ${message.channel.guild.name} (id: ${message.channel.guild.id})`
  );

const logGuildAdd = guild =>
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}).
     This guild has ${guild.memberCount} members!`
  );

const logGuildRemove = guild =>
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

const logApplicationTerminated = () =>
  console.log(`${packageJSON.name} application successfully terminated!`);

module.exports = {
  logApplicationTerminated,
  logCommandResponse,
  logGuildAdd,
  logGuildRemove,
  logServerListening,
  logUnknownCommand,
};
