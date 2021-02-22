const Discord = require('discord.js')
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;

module.exports = {
    name: 'poll',
    decription: '',
    type: 'general',
    usage: 'poll',
    
    async run (client, message, args) {
        // if(CheckChannel.default(message) == false) 
        //     return;

        const POLL_EMBED = new Discord.MessageEmbed()
            .setTitle('Dog or cat')
            .setColor('f04747')
            .addFields({ name: "Dog :one:"})
            .addFields({ name: "Cat :two:"})
            .setFooter('Vote by clicking the corresponding reaction below');
        message.channel.send(POLL_EMBED);

        message.react('1️⃣')
        message.react('2️⃣')
    }
}