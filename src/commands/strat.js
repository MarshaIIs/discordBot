var fs = require("fs");

module.exports = {
    name: 'strat',
    decription: 'deferates a random strat roulette for siege based on which team is inputted (ATK/DEF).',
    
    execute(message, args) {
        if (args.length === 0) return message.reply("Please provide a team! (_ATK_ or _DEF_)");
        console.log(args);

        if (args[0][0] == 'd') {
            const RAND = () => Math.floor(Math.random() * 26) + 1;
            const RAND_def = RAND();
            console.log('Random Number: ' + RAND_def);

            var DEF_text = fs.readFileSync("src/database/strats/DEF_strats.txt").toString('utf-8');
            var DEF_textByLine = DEF_text.split("\n");
            
            console.log(DEF_textByLine[RAND_def - 1]);

            var DEF_subSplitRand = DEF_textByLine[RAND_def - 1].split(": ");

            message.channel.send('Your **Defender** stratroulette is:\n\n**' + DEF_subSplitRand[0] + '**\n' + '_' + DEF_subSplitRand[1] + '_');


        } else if (args[0][0] == 'a') {
            const RAND = () => Math.floor(Math.random() * 22) + 1;
            const RAND_atk = RAND();
            console.log('Random Number: ' + RAND_atk);

            var DEF_text = fs.readFileSync("src/database/strats/ATK_strats.txt").toString('utf-8');
            var DEF_textByLine = DEF_text.split("\n");
            
            console.log(DEF_textByLine[RAND_atk - 1]);

            var DEF_subSplitRand = DEF_textByLine[RAND_atk - 1].split(": ");

            message.channel.send('Your **Attacker** stratroulette is:\n\n**' + DEF_subSplitRand[0] + '**\n' + '_' + DEF_subSplitRand[1] + '_');

        } else {
            message.reply("Please provide a valid team! Either _ATK_ or _DEF_!")
        }
    }
}