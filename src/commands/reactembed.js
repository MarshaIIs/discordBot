const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    decription: 'Creates an embedded message.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply("You do not have permission to use that command");

        const embed = new Discord.MessageEmbed()
        .setTitle("Games")
        .setColor(0x00AE86)
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        .addField("This is a field title, it can hold 256 characters","This is a field value, it can hold 1024 characters.")
        .setFooter("React by clicking the icons below")
        message.channel.send(embed);
    }
}