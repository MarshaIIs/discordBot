module.exports = {
    name: 'embed',
    decription: 'Creates an embedded message.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply("You do not have permission to use that command");

        message.reply('This command is non-functional at the moment.');
    }
}