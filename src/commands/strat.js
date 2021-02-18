var fs = require("fs");
const { strats } = require("../database/strats/strats.json")
const Discord = require('discord.js')

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if(!(message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')) {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}

module.exports = {
    name: 'strat',
    decription: 'This command generates a random Strat Roulette for Rainbow Six Siege, based on which team is inputted (ATK/DEF).',
    type: 'fun',
    usage: "strat <TEAM>",
    
    async run (client, message, args) {
        if(channelCheck(message) == false) return;

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