const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    decription: 'Creates an embedded message.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform embed command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('ff3333')
                .setDescription('You do not have permission to use that command!')

            return message.channel.send(perm_msg);
        }

        const embed = new Discord.MessageEmbed()
        .setTitle("This is your title, it can hold 256 characters")
        .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
        .setColor('FAA61A')
        .setDescription("This is the main body of text, it can hold 2048 characters.")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        .addField("This is a field title, it can hold 256 characters","This is a field value, it can hold 1024 characters.")
        
        message.channel.send(embed);
    }
}