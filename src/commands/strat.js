var fs = require("fs");
const { strats } = require("../database/strats/strats.json")

module.exports = {
    name: 'strat',
    decription: 'deferates a random strat roulette for siege based on which team is inputted (ATK/DEF).',
    
    async run (client, message, args) {
        if (args.length === 0) return message.reply("please provide a team! (**Attacker** or **Defender**)");
        console.log(args);
        const RAND = Math.floor(Math.random() * strats.def.length);

        if (args[0][0] == 'd') {
            chosenStrat = strats.def[RAND];
            console.log('Array Length: ' + strats.def.length);
            console.log('Random Number: ' + RAND);
            console.log('Strat: ' + chosenStrat.title + ':\n' + chosenStrat.body);

            message.channel.send('Your **Defender** stratroulette is:\n\n**' + chosenStrat.title + '**\n' + '_' + chosenStrat.body + '_')
        } 
        
        else if (args[0][0] == 'a') {
            chosenStrat = strats.atk[RAND];
            console.log('Array Length: ' + strats.atk.length);
            console.log('Random Number: ' + RAND);
            console.log('Strat: ' + chosenStrat.title + ':\n' + chosenStrat.body);

            message.channel.send('Your **Attacker** stratroulette is:\n\n**' + chosenStrat.title + '**\n' + '_' + chosenStrat.body + '_')
        }
        
        else {
            message.reply("please provide a valid team! Either **Attacker** or **Defender**!")
        }
    }
}