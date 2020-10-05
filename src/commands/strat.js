var fs = require("fs");

module.exports = {
    name: 'strat',
    decription: 'deferates a random strat roulette for siege based on which team is inputted (ATK/DEF).',
    
    async run (client, message, args) {
        if (args.length === 0) return message.reply("please provide a team! (**Attacker** or **Defender**)");
        console.log(args);

        if (args[0][0] == 'd') {
            var DEF_text = fs.readFileSync("src/database/strats/DEF_strats.txt").toString('utf-8');
            var DEF_textByLine = DEF_text.split("\n");

            const RAND = () => Math.floor(Math.random() * DEF_textByLine.length) + 1;
            const RAND_def = RAND();
            console.log('Array Length: ' + DEF_textByLine.length);
            console.log('Random Number: ' + RAND_def);
            console.log('Strat:\n ' + DEF_textByLine[RAND_def - 1]);
            var DEF_subSplitRand = DEF_textByLine[RAND_def - 1].split(": ");

            message.channel.send('Your **Defender** stratroulette is:\n\n**' + DEF_subSplitRand[0] + '**\n' + '_' + DEF_subSplitRand[1] + '_');
        } 
        
        else if (args[0][0] == 'a') {
            var ATK_text = fs.readFileSync("src/database/strats/ATK_strats.txt").toString('utf-8');
            var ATK_textByLine = ATK_text.split("\n");

            const RAND = () => Math.floor(Math.random() * ATK_textByLine.length) + 1;
            const RAND_atk = RAND();
            console.log('Array Length: ' + ATK_textByLine.length);
            console.log('Random Number: ' + RAND_atk);
            console.log('Strat:\n ' + ATK_textByLine[RAND_atk - 1]);
            var ATK_subSplitRand = ATK_textByLine[RAND_atk - 1].split(": ");
            
            message.channel.send('Your **Attacker** stratroulette is:\n\n**' + ATK_subSplitRand[0] + '**\n' + '_' + ATK_subSplitRand[1] + '_');
        }
        
        else {
            message.reply("please provide a valid team! Either **Attacker** or **Defender**!")
        }
    }
}