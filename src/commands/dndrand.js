const { charGenJSON: DND_JSON } = require("../database/dnd/charGen.json")
const Discord = require('discord.js')

module.exports = {
    name: 'dndrand',
    decription: 'This command generates a random class and race for D\&D. It can also generate a specific subclass or subrace from a chosen class/race.',
    type: 'dnd',
    usage: "dndrand [CLASS/RACE]",
    
    async run (client, message, args) {
        if (dndChannelCheck(message) == false) 
            return;
        if (dndRoleCheck(message) == false) 
            return;

        let dndArgs = args.map(v => v.toLowerCase());
        
        if (dndArgs[0] === 'class') {
            let classChosen = dndArgs[1];
            
            if (classChosen == undefined || classChosen == '' || classChosen == ' ' || DND_JSON.subclass[0][classChosen] == undefined)
                return message.reply(`that is not a proper class! \nThe proper usage is ${process.env.PREFIX}dndrand class <class>`);
            else {
                    classChosen      = classChosen.trim();
                let classChosenUpper = classChosen[0].toUpperCase() + classChosen.slice(1);
                let gennedSubClass   = generateRandSubFnc(DND_JSON.subclass[0][classChosen]);

                const SUB_CLASS_EMBED = new Discord.MessageEmbed()
                    .setTitle('Random subclass generated!')
                    .setDescription(`You will be playing as a **${gennedSubClass.sub}** (${gennedSubClass.source}) **${classChosenUpper}**!`)
                    .setColor('7be6ee')

                message.channel.send(SUB_CLASS_EMBED);
            }
        }

        else if (dndArgs[0] === 'race') {
            let raceChosen = dndArgs[1];
            console.log('raceChosen: ' + raceChosen);

            if (raceChosen == undefined || raceChosen == '' || raceChosen == ' ' || DND_JSON.subrace[0][raceChosen] == undefined)
                return message.reply(`that is not a proper race! \nThe proper usage is ${process.env.PREFIX}dndrand race <race>`);
            else {
                    raceChosen      = raceChosen.trim();
                let raceChosenUpper = raceChosen[0].toUpperCase() + raceChosen.slice(1);
                let gennedSubRace   = generateRandSubFnc(DND_JSON.subrace[0][raceChosen]);

                const SUB_RACE_EMBED = new Discord.MessageEmbed()
                    .setTitle('Random subrace generated!')
                    .setDescription(`You will be playing as a **${gennedSubRace.sub}** (${gennedSubRace.source}) **${raceChosenUpper}**!`)
                    .setColor('7be6ee')

                message.channel.send(SUB_RACE_EMBED);
            }
        }
        else if (dndArgs[0] == undefined) {
            let gennedRace  = generateRandFnc(DND_JSON.race);
            let gennedClass = generateRandFnc(DND_JSON.class);

            const RANDOM_EMBED = new Discord.MessageEmbed()
                .setTitle('Random race & class generated!')
                .setDescription(`You will be playing as a **${gennedRace.title}** (${gennedRace.source}) **${gennedClass.title}**!`)
                .setColor('7be6ee')
                
            message.channel.send(RANDOM_EMBED);
        }
        else
            message.reply(`the proper usage is \`\`\`${process.env.PREFIX}dndrand\`\`\`or \`\`\`${process.env.PREFIX}dndrand class [CLASS]\`\`\`or \`\`\`${process.env.PREFIX}dndrand race [RACE]\`\`\``);
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

function generateRandFnc(fileElement) {
    const RAND_NUM = Math.floor(Math.random() * fileElement.length);
    let elementGenned = fileElement[RAND_NUM];

    console.log(`   Array Length:  ${fileElement.length}`);
    console.log(`   Random Number: ${RAND_NUM}`);
    console.log(`   Element Title: ${elementGenned.title}`);

    return elementGenned;
}

function generateRandSubFnc(fileElement) {
    const RAND_NUM = Math.floor(Math.random() * fileElement.length);
    let elementGenned = fileElement[RAND_NUM];

    console.log(`   Array Length:   ${fileElement.length}`);
    console.log(`   Random Number:  ${RAND_NUM}`);
    console.log(`   Element Title:  ${elementGenned.sub}`);
    console.log(`   Element Source: ${elementGenned.source}`);

    return elementGenned;
}