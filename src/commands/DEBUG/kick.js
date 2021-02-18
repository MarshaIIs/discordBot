const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    decription: 'Kicks a designated user based on their ID',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform kick command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('ff3333')
                .setDescription('You do not have permission to use that command!');

            return message.channel.send(perm_msg);
        }

        message.reply('This command is currently non-functional.');
    }
}