
const { strats } = require('../database/strats/strats.json');

module.exports = {
    name: 'strat',
    decription: 'deferates a random strat roulette for siege based on which team is input (ATK/DEF).',
    
    async run (client, message, args) {
        if (args.length === 0) return message.reply("please provide a team! (**Attacker** or **Defender**)");
        console.log(args);

        if (args[0][0] == 'd') {
            chosenStrat = strats.def[Math.floor(Math.random()*strats.def.length)];
            message.channel.send('Your **Defender** stratroulette is:\n\n**' + chosenStrat.title + '**\n' + '_' + chosenStrat.body + '_')
        } 
        
        else if (args[0][0] == 'a') {
            chosenStrat = strats.atk[Math.floor(Math.random()*strats.atk.length)];
            message.channel.send('Your **Attacker** stratroulette is:\n\n**' + chosenStrat.title + '**\n' + '_' + chosenStrat.body + '_')
        }
        
        else {
            message.reply("please provide a valid team! Either **Attacker** or **Defender**!")
        }

    }
}