module.exports = {
    name: 'ping',
    decription: 'Bans a designated user based on their ID, not their tag.',
    
    async run (client, message, args) {
    if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply("You do not have permission to use that command");
        
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