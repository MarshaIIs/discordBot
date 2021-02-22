const Discord = require('discord.js')

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
        // if (dndChannelCheck(message) == false) 
        //     return;
        if (dndRoleCheck(message) == false)
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

function dndChannelCheck(message) {
    /* 696122434184544266 = #dungeoneers
     * 751814974355275777 = #dm-campaign
     * 773304694587260958 = #dm-character
     * 748287140550410310 = #dm-private
     * 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if (message.channel == '696122434184544266' || message.channel == '751814974355275777' || message.channel == '773304694587260958' || message.channel == '748287140550410310' 
    || message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')
        return true;
    else {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}

function dndRoleCheck(message) {
    if (message.member.roles.cache.some(role => role.name === 'D&D Part-Timer') || message.member.roles.cache.some(role => role.name === 'Dungeoneer') || 
    message.member.roles.cache.some(role => role.name === 'Dungeon Master') || message.member.hasPermission('ADMINISTRATOR'))
        return true;
    else {
        console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
    
        MISSING_PERMS_EMBED = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('db0606')
            .setDescription('You do not have permission to use that command!');
    
        message.channel.send(MISSING_PERMS_EMBED);

        return false;
    }
}

function randNumFnc() {
    return Math.floor(Math.random() * 6) + 1;
}