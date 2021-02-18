var fs = require("fs");
const { charGenJSON } = require("../database/dnd/charGen.json")
const Discord = require('discord.js')

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

function generateRandFnc(fileElement) {
    const rand = Math.floor(Math.random() * fileElement.length);

    elementGenned = fileElement[rand];
    console.log('   Array Length: ' + fileElement.length);
    console.log(    'Random Number: ' + rand);
    console.log('   Element Title: ' + elementGenned.title);

    return elementGenned;
}

function generateRandSubFnc(fileElement) {
    const rand = Math.floor(Math.random() * fileElement.length);

    elementGenned = fileElement[rand];
    console.log('   Array Length: ' + fileElement.length);
    console.log('   Random Number: ' + rand);
    console.log('   Element Title: ' + elementGenned.sub);
    console.log('   Element Source: ' + elementGenned.source);

    return elementGenned;
}

module.exports = {
    name: 'dndrand',
    decription: 'This command generates a random class and race for D\&D. It can also generate a specific subclass or subrace from a chosen class/race.',
    type: 'dnd',
    usage: "dndrand [CLASS/RACE]",
    
    async run (client, message, args) {
        message.content.toLowerCase();

        //if(channelCheck(message) == false) return;
        if(roleCheck(message) == false) return;

        else if (args[0] == 'class') {
            let classChosen = args[1]
            
            if (classChosen == undefined || classChosen == '' || classChosen == ' ' || charGenJSON.subclass[0][classChosen] == undefined) {
                return message.reply('that is not a proper class! \nThe proper usage is ' + process.env.PREFIX + 'dndrand class <class>');
            }
            
            else {
                classChosen.trim();
                classChosenUpper = classChosen[0].toUpperCase() + classChosen.slice(1)
                gennedSubClass = generateRandSubFnc(charGenJSON.subclass[0][classChosen])

                const subClass_msg = new Discord.MessageEmbed()
                    .setTitle('Random subclass generated!')
                    .setDescription(`You will be playing as a **${gennedSubClass.sub}** (${gennedSubClass.source}) **${classChosenUpper}**!`)
                    .setColor('7be6ee')
                message.channel.send(subClass_msg);
            }
        }

        else if (args[0] == 'race') {
            let raceChosen = args[1];
            console.log('raceChosen: ' + raceChosen)

            if (raceChosen == undefined || raceChosen == '' || raceChosen == ' ' || charGenJSON.subrace[0][raceChosen] == undefined) {
                return message.reply('that is not a proper race! \nThe proper usage is ' + process.env.PREFIX + 'dndrand race <race>');
            }
            
            else {
                raceChosen.trim();
                raceChosenUpper = raceChosen[0].toUpperCase() + raceChosen.slice(1)
                gennedSubRace = generateRandSubFnc(charGenJSON.subrace[0][raceChosen])

                const subRace_msg = new Discord.MessageEmbed()
                    .setTitle('Random subrace generated!')
                    .setDescription(`You will be playing as a **${gennedSubRace.sub}** (${gennedSubRace.source}) **${raceChosenUpper}**!`)
                    .setColor('7be6ee')
                message.channel.send(subRace_msg);
            }
        }

        else if (args[0] == undefined) {
            gennedRace = generateRandFnc(charGenJSON.race)
            gennedClass = generateRandFnc(charGenJSON.class)

            const fullRandom_msg = new Discord.MessageEmbed()
                .setTitle('Random race & class generated!')
                .setDescription(`You will be playing as a **${gennedRace.title}** (${gennedRace.source}) **${gennedClass.title}**!`)
                .setColor('7be6ee')
            message.channel.send(fullRandom_msg);
        }

        else {
            message.reply('the proper usage is \`\`\`' + process.env.PREFIX + 'dndrand\`\`\`or \`\`\`' + process.env.PREFIX + 'dndrand class [CLASS]\`\`\`or \`\`\`' + process.env.PREFIX + 'dndrand race [RACE]\`\`\`')
        }
    }
}