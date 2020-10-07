var fs = require("fs");
const { strats } = require("../database/strats/strats.json")
const Discord = require('discord.js')

module.exports = {
    name: 'strat',
    decription: 'Generates a random strat roulette for siege, based on which team is inputted (ATK/DEF).',
    
    async run (client, message, args) {
        if (args.length === 0) return message.reply(args + ' is not a valid team! The proper usage is ' + process.env.PREFIX + 'random <team>.');
        console.log(args);
        const RAND = Math.floor(Math.random() * strats.def.length);

        if (args[0][0] == 'd') {
            chosenStrat = strats.def[RAND];
            console.log('Array Length: ' + strats.def.length);
            console.log('Random Number: ' + RAND);
            console.log('Strat: ' + chosenStrat.title + ':\n' + chosenStrat.body);

            const def_msg = new Discord.MessageEmbed()
            //.setTitle('Defender strat:')
            .setColor('1B6BFF')
            .addField(`${chosenStrat.title}`, `${chosenStrat.body}`);
            message.channel.send(def_msg);
        } 
        
        else if (args[0][0] == 'a') {
            chosenStrat = strats.atk[RAND];
            console.log('Array Length: ' + strats.atk.length);
            console.log('Random Number: ' + RAND);
            console.log('Strat: ' + chosenStrat.title + ':\n' + chosenStrat.body);

            const atk_msg = new Discord.MessageEmbed()
            //.setTitle('Attacker strat:')
            .setColor('FF831B')
            .addField(`${chosenStrat.title}`, `${chosenStrat.body}`);
            message.channel.send(atk_msg);
        }
        
        else {
            message.reply(args + ' is not a valid team! The proper usage is ' + process.env.PREFIX + 'random <team>.')
        }
    }
}