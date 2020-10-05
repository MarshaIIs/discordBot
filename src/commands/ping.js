const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    decription: 'Respons to m!ping command with "Pong".',
    
    async run (client, message, args) {
        const ping = new Discord.MessageEmbed()
        .setTitle('Pong! 🏓')
        .setDescription(`\`${Date.now() - message.createdTimestamp}\`ms`);

        message.channel.send(ping);
    }
}