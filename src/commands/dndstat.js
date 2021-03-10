const Discord = require('discord.js')
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

// Here be dragons...
// This is such fucking stupid code.
// Its incomprehensible, need to clean, move into functions and add comments

// absolute min = 18, absolute max = 108
const STAT_MIN = 40;
const STAT_MAX = 90;
const ROW_AMOUNT = 6;
const COL_AMOUNT = 4;

module.exports = {
    name: 'dndstat',
    decription: 'This command rolls stats for D\&D. A minimum and maximum number must be provided. These numbers will determine what the minimum and maximum your score total should be.',
    type: 'dnd',
    usage: "dndstat <MIN>,<MAX>",
    
    async run (client, message, args) {
        if (CheckChannel.dnd(message) === false) 
            return;
        if (RoleCheck.dnd(message) === false)
            return;

        else {
            if (args.length === 0)
            return message.reply(`improper syntax! The proper usage is ${process.env.PREFIX}dndstat <MIN>,<MAX>`);
            
            args = String(args)

            let statLimitsArr = args.split(',');
            let statFloor = parseInt(statLimitsArr[0]);
            let statCeil  = parseInt(statLimitsArr[1]);
            let tempStatsArr  = Array(ROW_AMOUNT).fill().map(() => Array(COL_AMOUNT));
            let finalStatsArr = [];
            let statTotal     = 0;

            console.log('-- Running dndStat command --')
            console.log(`statFloor: ${statFloor}`)
            console.log(`statCeil : ${statCeil}`)
            
            if (!Number.isInteger(statFloor) || !Number.isInteger(statCeil)) {
                console.log('Error: statFloor or statCeil are not numbers.')
                
                return message.reply(`improper syntax! The proper usage is ${process.env.PREFIX}dndstat <MIN>,<MAX>`);
            }
            else if (statFloor < STAT_MIN || statCeil > STAT_MAX) {
                console.log('Error: statFloor or statCeil exceeded.')
                
                return message.reply(`The floor cannot be lesser than ${STAT_MIN} and the ceiling cannot be greater than ${STAT_MAX}.`);
            }
            else {
                do {
                    for (let i = 0; i <= 5; i++) {
                        for (let j = 0; j <= 3; j++) {
                            tempStatsArr[i][j] = randNumFnc()
                        }
                    }

                    for (let i = 0; i <= 5; i++) {
                        console.log(`Row ${[i + 1]}: ${tempStatsArr[i].sort()}`);

                        finalStatsArr[i] = tempStatsArr[i][1] + tempStatsArr[i][2] + tempStatsArr[i][3];

                        for (let j = 1; j <= 3; j++) {
                            tempStatsArr[i][j] = randNumFnc()
                        }
                    }

                    for (let k = 0; k <= 5; k++) {
                        console.log(`Abilscore ${[k + 1]}: ${finalStatsArr[k]}`)

                        statTotal += finalStatsArr[k];
                    }
                    console.log(`--==--\nScore Total: ${statTotal} \n___________________________\n`);
                } 
                while (statFloor > statTotal || statTotal > statCeil);

                console.log('=================\n' + 'Final Total:  ' + statTotal + '\n\n\n\n');

                const STATS_EMBED = new Discord.MessageEmbed()
                    .setTitle('Ability scores generated!')
                    .setColor('7be6ee')
                    .setDescription(`Floor: ${statFloor} \nCeiling: ${statCeil}`)
                    .setURL('https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#3DetermineAbilityScores')
                    .addFields({ name: 'Ability Scores:', value: `${finalStatsArr[0]}\n${finalStatsArr[1]}\n${finalStatsArr[2]}\n${finalStatsArr[3]}\n${finalStatsArr[4]}\n${finalStatsArr[5]}`})
                    .addFields({ name: 'Total: ', value: statTotal})

                message.channel.send(STATS_EMBED);
            }   
        }
    }
}

function randNumFnc() {
    return Math.floor(Math.random() * 6) + 1;
}