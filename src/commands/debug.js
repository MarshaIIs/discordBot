const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

module.exports = {
    name: 'debug',
    decription: 'Responds in the console log with the args sent',
    type: 'debug',
    usage: "debug <ARGS>",
    
    async run (client, message, args) {
        if (RoleCheck.admin(message, this.name) === false)
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