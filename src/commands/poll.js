const Discord = require('discord.js')
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

module.exports = {
    name: 'poll',
    decription: '',
    type: 'general',
    usage: 'poll',
    
    async run (client, message, args) {
        if (RoleCheck.owner(message) === false)
            return;

        // const POLL_EMBED = new Discord.MessageEmbed()
        //     .setTitle('Dog or cat')
        //     .setColor('f04747')
        //     .addFields({ name: "Dog :one:"})
        //     .addFields({ name: "Cat :two:"})
        //     .setFooter('Vote by clicking the corresponding reaction below');

        // message.channel.send(POLL_EMBED)
        // .then(m => {
        //     m.react('1️⃣')
        //     m.react('2️⃣')
        // });

        let nofOptions = 2;
        let vote1      = 0 //event handler thingy == pressed twice
        let vote2      = 0
        let totalVote  = vote1 + vote2;
        let vote1Per   = vote1 / totalVote * 100;
        let vote2Per   = vote2 / totalVote * 100;
        let symVote1   = '';
        let symVote2   = '';
        let barSym     = '\█';

        msg1 = await message.channel.send(`1️⃣: ${symVote1}`);
        msg2 = await message.channel.send(`2️⃣: ${symVote2}`);

        // `m` is a message object that will be passed through the filter function
        const filter = m => m.content.includes('1') || m.content.includes('2');
        const collector = message.channel.createMessageCollector(filter, { time: 30000 });

        collector.on('collect', m => {
            console.log(`Collected ${m.content}`);

            if (m.content == '1') {
                vote1++
            }
            if (m.content == '2') {
                vote2++
            }

            symVote1 = '';
            symVote2 = '';
            totalVote = vote1 + vote2
            vote1Per  = vote1 / totalVote * 100;
            vote2Per  = vote2 / totalVote * 100;
            console.log(`Vote 1: ${vote1Per}`)
            console.log(`Vote 2: ${vote2Per}`)

            for (let index = 0; index <= Math.ceil(vote2Per); index++) {
                symVote2 += barSym;
            }
            for (let index = 0; index <= Math.ceil(vote1Per); index++) {
                symVote1 += barSym;
            }

            msg1.edit(`1️⃣: ${symVote1}`);
            msg2.edit(`2️⃣: ${symVote2}`);
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
    }
}