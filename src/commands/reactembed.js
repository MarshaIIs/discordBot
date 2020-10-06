const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    decription: 'Creates an embedded message.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform reactembed command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('ff3333')
                .setDescription('You do not have permission to use that command!')

            return message.channel.send(perm_msg);
        }

        const embed = new Discord.MessageEmbed()
        .setTitle("Games")
        .setColor('f1c40f')
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        .addField("This is a field title, it can hold 256 characters","This is a field value, it can hold 1024 characters.")
        .setFooter("React by clicking the icons below")
        message.channel.send(embed);
    }
}