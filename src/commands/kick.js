module.exports = {
    name: 'kick',
    decription: 'Kicks a designated user based on their ID',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply("You do not have permission to use that command");

        message.reply('This command is currently non-functional.');
    }
}