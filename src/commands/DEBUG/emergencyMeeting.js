const Discord = require('discord.js');

function timerEmbed(buttonTime) {
    setTimeout(function() {
        sentMessage.delete()

        const embed = new Discord.MessageEmbed()
        .setColor('d30000')
        .setTitle('Voting begins! ' + buttonTime + ' seconds left!')
        .setFooter("Vote with " + process.env.PREFIX + 'vote @[user]')
        .setURL("https://www.youtube.com/watch?v=mUYLk0Mi6HI")
        message.channel.send(embed);
    }, 5000);
}

module.exports = {
    name: 'emergency',
    decription: 'Creates an embedded message.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform embed command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('ff3333')
                .setDescription('You do not have permission to use that command!');

            return message.channel.send(perm_msg);
        }

        const alertEmbed = new Discord.MessageEmbed()
        .setColor('d30000')
        .setImage("https://i.imgur.com/vo4mX2r.png")
        .setFooter("Vote with " + process.env.PREFIX + 'vote @[user]')
        .setURL("https://www.youtube.com/watch?v=mUYLk0Mi6HI")
        message.channel.send(alertEmbed);

        const embed1 = new Discord.MessageEmbed()
        .setColor('d30000')
        .setTitle('Voting begins! 45 seconds left!')
        .setFooter("Vote with " + process.env.PREFIX + 'vote @[user]')
        .setURL("https://www.youtube.com/watch?v=mUYLk0Mi6HI")
        message.channel.send(embed1)

        // await instead of the bullshit I had before
    }
}