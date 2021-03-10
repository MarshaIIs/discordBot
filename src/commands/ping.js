const Discord = require('discord.js');
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;

module.exports = {
    name: 'ping',
    decription: 'This command responds to the command with a ping latency.',
    type: 'general',
    usage: 'ping',
    
    async run (client, message, args) {
        if (CheckChannel.default(message, this.name) === false)
            return;

        console.log('timestamp: ' + message.createdTimestamp);
        console.log('date: ' + Date.now());

        let generatedPing = Math.abs(message.createdTimestamp - Date.now())

        const PING_EMBED = new Discord.MessageEmbed()
            .setTitle('Pong! 🏓')
            .setColor('f04747')
            .setDescription(`\`${generatedPing}\` ms`);
        message.channel.send(PING_EMBED);
    }
}