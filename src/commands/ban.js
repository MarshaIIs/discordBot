const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    decription: 'Bans a designated user based on their ID, not their tag.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform ban command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('ff3333')
                .setDescription('You do not have permission to use that command!')

            return message.channel.send(perm_msg);
        }
        
        if (args.length === 0) return message.reply("Please provide an ID");
        
        try {
            const user = await message.guild.members.ban(args[0]);
            message.channel.send('User was banned successfully');
        } 
      
        catch (err) {
            console.log(err);
            message.channel.send('An error occured. Either I do not have permissions or the user was not found');
        }
    }
}