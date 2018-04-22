const Discord = require('discord.js');
const { BOT_TOKEN } = require ('./auth/tokens'); 
const client = new Discord.Client();

function diceRoller (message) {

    const requestedRoll = message.content
        .split('!roll ')
        .pop();

    const rollData = requestedRoll
        .split('d')
        .map(n => Number(n ? n : 1));

    const numberOfDice = rollData[0];
    const numberOfSides = rollData[1];

    const rollDie = (die) => Math.floor((Math.random() * Math.floor(die)) + 1);

    const rollDice = rollData => {
        let rolls = [];
    
        for (let die = 0; die < numberOfDice; die++) {
            rolls.push(rollDie(numberOfSides))
        }
    
        return rolls;
    }

    if ( isNaN(numberOfDice) || isNaN(numberOfSides) ) {

        return `dice roll **${requestedRoll}** was not recognised. **(Error)**`;
        
    } else {

        const results = rollDice(rollData);
        const totalResult = results.reduce((a, b) => a + b);

        return (numberOfDice === 1)
            ? `you rolled a ${requestedRoll} and got **${totalResult}**`
            : `you rolled ${requestedRoll} and got **${totalResult}** _(${results.join(', ')})_`
    }
};

client.on('message', msg => {
  if (msg.content.includes('!roll ')) {
    msg.reply(diceRoller(msg))
  }
});

client.login(BOT_TOKEN);