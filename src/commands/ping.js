const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    decription: 'Responds to the command with a ping latency.',
    
    async run (client, message, args) {
        
        console.log('timestamp: ' + message.createdTimestamp);
        console.log('date: ' + Date.now());

        const ping = new Discord.MessageEmbed()
        .setTitle('Pong! 🏓')
        .setColor('FEFEFE')
        .setDescription(`\`${message.createdTimestamp - Date.now()}\` ms`);
        message.channel.send(ping);
    }
}