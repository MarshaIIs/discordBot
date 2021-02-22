const { strats: STRATS_JSON } = require("../database/strats/strats.json")
const Discord = require('discord.js')

module.exports = {
    name: 'strat',
    decription: 'This command generates a random Strat Roulette for Rainbow Six Siege, based on which team is inputted (ATK/DEF).',
    type: 'fun',
    usage: 'strat <TEAM>',
    
    async run (client, message, args) {
        if (channelCheck(message) == false) 
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

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if (message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')
        return true;
    else {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}