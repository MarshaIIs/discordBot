const { strats: STRATS_JSON } = require("../database/strats/strats.json")
const Discord = require('discord.js')
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;

module.exports = {
    name: 'strat',
    decription: 'This command generates a random Strat Roulette for Rainbow Six Siege, based on which team is inputted (ATK/DEF).',
    type: 'fun',
    usage: 'strat <TEAM>',
    
    async run (client, message, args) {
        if (CheckChannel.default(message) == false) 
            return;
        if (args.length === 0) 
            return message.reply(`${args} is not a valid team! The proper usage is ${process.env.PREFIX}random <team>.`);

        const RAND_NUM = Math.floor(Math.random() * STRATS_JSON.def.length);

        if (args[0][0] == 'd') {
            chosenStrat = STRATS_JSON.def[RAND_NUM];
            console.log('Array Length: ' + STRATS_JSON.def.length);
            console.log('Random Number: ' + RAND_NUM);
            console.log('Strat: ' + chosenStrat.title + ':\n' + chosenStrat.body);

            const DEF_EMBED = new Discord.MessageEmbed()
            //.setTitle('Defender strat:')
            .setColor('1B6BFF')
            .addField(`${chosenStrat.title}`, `${chosenStrat.body}`);

            message.channel.send(DEF_EMBED);
        }
        else if (args[0][0] == 'a') {
            chosenStrat = STRATS_JSON.atk[RAND_NUM];
            console.log('Array Length: ' + STRATS_JSON.atk.length);
            console.log('Random Number: ' + RAND_NUM);
            console.log('Strat: ' + chosenStrat.title + ':\n' + chosenStrat.body);

            const ATK_EMBED = new Discord.MessageEmbed()
            //.setTitle('Attacker strat:')
            .setColor('FF831B')
            .addField(`${chosenStrat.title}`, `${chosenStrat.body}`);

            message.channel.send(ATK_EMBED);
        }
        else 
            message.reply(`${args} is not a valid team! The proper usage is ${process.env.PREFIX}random <team>.`);
    }
}