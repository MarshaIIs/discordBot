const { Command } = require("discord.js-commando");

module.exports = {
    name: 'kill',
    decription: 'This command shuts down the bot.',
    type: 'utility',
    usage: "kill",
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR'))
        {
            console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');

            return message.channel.send(perm_msg);
        }
        else
        {
			message.channel.send('Stopping bot...').then(() => {
				process.exit(1);
            })
        };
    }
}
