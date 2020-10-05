const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    decription: 'Creates an embedded message.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply("You do not have permission to use that command");

        const embed = new Discord.MessageEmbed()
        .setTitle("This is your title, it can hold 256 characters")
        .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
        .setColor(0x00AE86)
        .setDescription("This is the main body of text, it can hold 2048 characters.")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        .addField("This is a field title, it can hold 256 characters","This is a field value, it can hold 1024 characters.")
        
        message.channel.send(embed);
    }
}