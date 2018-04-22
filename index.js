const Discord = require('discord.js');
const { BOT_TOKEN } = require ('./auth/tokens'); 
const client = new Discord.Client();

function diceRoller (message) {

    // "3d8"
    const requestedRoll = message.content
        .split('!roll ')
        .pop();

    // [3, 8]
    const rollData = requestedRoll
        .split('d')
        .map(n => Number(n ? n : 1));

    const numberOfDice = rollData[0];
    const numberOfSides = rollData[1];

    const rollDie = (die) => Math.floor((Math.random() * Math.floor(die)) + 1);

    // example return: [ 5, 3, 8]
    const rollDice = rollData => {
        let rolls = [];
    
        for (let die = 0; die < numberOfDice; die++) {
            rolls.push(rollDie(numberOfSides))
        }
    
        return rolls;
    }
    
    const results = rollDice(rollData);
    const totalResult = results.reduce((a, b) => a + b);
    const allResults = results.join(', ');

    if ( isNaN(numberOfDice) || isNaN(numberOfSides) ) {
        return `dice roll **${requestedRoll}** was not recognised. **(Error)**`;
    }

    return (numberOfDice === 1)
        ? `you rolled a ${requestedRoll} and got **${totalResult}**`
        : `you rolled ${requestedRoll} and got **${totalResult}** _(${allResults})_`;
};

client.on('message', msg => {
  if (msg.content.includes('!roll ')) {
    msg.reply(diceRoller(msg))
  }
});

client.login(BOT_TOKEN);