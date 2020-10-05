const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    decription: 'Respons to m!ping command with "Pong".',
    
    async run (client, message, args) {
        
        console.log('timestamp: ' + message.createdTimestamp);
        console.log('date: ' + Date.now());

        const ping = new Discord.MessageEmbed()
        .setTitle('Pong! 🏓')
        .setDescription(`\`${message.createdTimestamp - Date.now()}\` clock time`);

        message.channel.send(ping);
    }
}