const Discord = require('discord.js')

module.exports = {
    name: 'debug',
    decription: 'Responds in the console log with the args sent',
    type: 'debug',
    usage: "debug <ARGS>",
    
    async run (client, message, args) {
        if (roleCheck(message) == false)
            return;

        console.log('\n\nThe following args were sent:\n' + args)
        console.log('Message ID:    ' + message)
        console.log('Channel ID:    ' + message.channel)
        console.log('Author ID:     ' + message.author.id)
        console.log('Mentioned User:' + message.mentions.users.first())

        //message.guild.members.cache.get('257866388557922314').send('test');
        console.log('VC ID          ' + message.member.voice.channel);
    }
}

function roleCheck(message) {
    if (message.member.hasPermission('ADMINISTRATOR'))
        return true;
    else {
        console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
    
        MISSING_PERMS_EMBED = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('db0606')
            .setDescription('You do not have permission to use that command!');
    
        message.channel.send(MISSING_PERMS_EMBED);

        return false;
    }
}