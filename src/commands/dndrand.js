const { charGenJSON: DND_JSON } = require("../database/dnd/charGen.json")
const Discord = require('discord.js')
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

module.exports = {
    name: 'dndrand',
    decription: 'This command generates a random class and race for D\&D. It can also generate a specific subclass or subrace from a chosen class/race.',
    type: 'dnd',
    usage: "dndrand [CLASS/RACE]",
    
    async run (client, message, args) {
        if (CheckChannel.dnd(message) === false) 
            return;
        if (RoleCheck.dnd(message) === false) 
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