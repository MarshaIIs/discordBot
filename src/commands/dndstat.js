const Discord = require('discord.js')

// absolute min = 18, absolute max = 108
const statAbsoluteMin = 40;
const statAbsoluteMax = 90;
const rowAmount = 6;
const colAmount = 4;

function channelCheck(message) {
    /* 696122434184544266 = #dungeoneers
     * 751814974355275777 = #dm-campaign
     * 773304694587260958 = #dm-character
     * 748287140550410310 = #dm-private
     * 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */
    
    if(!(message.channel == '696122434184544266' || message.channel == '751814974355275777' || message.channel == '773304694587260958' || message.channel == '748287140550410310' 
      || message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')) {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}

function roleCheck(message) {
    if(!message.member.roles.cache.some(role => role.name === 'D&D Part-Timer') && !message.member.roles.cache.some(role => role.name === 'Dungeoneer') && 
            !message.member.roles.cache.some(role => role.name === 'Dungeon Master') && !message.member.hasPermission('ADMINISTRATOR')) {
        console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
        perm_msg = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('db0606')
            .setDescription('You do not have permission to use that command!');
        message.channel.send(perm_msg);

        return false;
    }
}

function RAND() {
    return Math.floor(Math.random() * 6) + 1;
}

module.exports = {
    name: 'dndstat',
    decription: 'This command rolls stats for D\&D. A minimum and maximum number must be provided. These numbers will determine what the minimum and maximum your score total should be.',
    type: 'dnd',
    usage: "dndstat <MIN>,<MAX>",
    
    async run (client, message, args) {
        if(channelCheck(message) == false) return;
        if(roleCheck(message) == false) return;

        if(!message.member.roles.cache.some(role => role.name === 'D&D Part-Timer') && !message.member.roles.cache.some(role => role.name === 'Dungeoneer') && 
           !message.member.roles.cache.some(role => role.name === 'Dungeon Master') && !message.member.hasPermission('ADMINISTRATOR') ) {
                console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
                perm_msg = new Discord.MessageEmbed()
                    .setTitle('Error!')
                    .setColor('db0606')
                    .setDescription('You do not have permission to use that command!');
         
            return message.channel.send(perm_msg);
        }

        else {
            if (args.length === 0) return message.reply('the proper usage is ' + process.env.PREFIX + 'dndstat <MIN>,<MAX>');
            
            console.log('-- Running dndstat command --')
            args = args + '';
            const statLimit = args.split(',');

            statFloor = parseInt(statLimit[0]);
            statCeil = parseInt(statLimit[1]);
            console.log('statFloor: ' + statFloor)
            console.log('statCeil: ' + statCeil)
            
            if (!Number.isInteger(statFloor) || !Number.isInteger(statCeil) ) {
                console.log('Error: statFloor or statCeil are not numbers.')
                return message.reply('improper syntax! The proper usage is ' + process.env.PREFIX + 'dndstat <FLOOR> <CEILING>');     
            }

            else if (statFloor < statAbsoluteMin || statCeil > statAbsoluteMax) {
                console.log('Error: statFloor or statCeil exceeded.')
                return message.reply('The floor cannot be lesser than ' + statAbsoluteMin + ' and the ceiling cannot be greater than ' + statAbsoluteMax + '.');   
            }

            else {
                do {
                    statAbil = []
                    statTotal = 0;
                    let stats = Array(rowAmount).fill().map(() => Array(colAmount));

                    for (let i = 0; i <= 5; i++) {
                        for (let j = 0; j <= 3; j++) {
                            stats[i][j] = RAND()
                        }
                    }

                    for (let i = 0; i <= 5; i++) {
                        console.log('**Row ' + [i+1] + ':** ' + stats[i].sort());
                        statAbil[i] = stats[i][1]+stats[i][2]+stats[i][3]

                        for (let j = 1; j <= 3; j++) {
                            stats[i][j] = RAND()
                        }
                    }

                    for (let k = 0; k <= 5; k++) {
                        console.log('AbilScore ' + [k+1] + ': ' + statAbil[k])
                        statTotal += statAbil[k];
                    }
                    console.log('--==--\n' + 'Score Total:  ' + statTotal + '\n___________________________\n');
                } 
                
                while (statFloor > statTotal || statTotal > statCeil);

                statTotal = 0;
                for (let k = 0; k <= 5; k++) {
                    console.log('Final Score: ' + statAbil[k])
                    statTotal += statAbil[k];
                }
                console.log('=================\n' + 'Final Total:  ' + statTotal + '\n\n\n\n');

                const statEmbed = new Discord.MessageEmbed()
                    .setTitle("Ability scores generated!")
                    .setColor('7be6ee')
                    .setDescription("Floor: " + statFloor + "\nCeiling: " + statCeil)
                    .setURL("https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#3DetermineAbilityScores")
                    .addFields({ name: "Ability Scores:", value: statAbil[0] + "\n" + statAbil[1] + "\n" + statAbil[2] + "\n" + statAbil[3] + "\n" + statAbil[4] + "\n" + statAbil[5]})
                    .addFields({ name: "Total: ", value: statTotal})
                message.channel.send(statEmbed);
            }   
        }
    }
}