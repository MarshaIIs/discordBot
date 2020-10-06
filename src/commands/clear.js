const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    decription: 'Clears X amount of messages from current channel.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform clear command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('ff3333')
                .setDescription('You do not have permission to use that command!')

            return message.channel.send(perm_msg);
        }

        message.delete();
        let amount = args.join(" ");

        if(!amount) return message.reply('please provide an amount of messages for me to delete')
        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)
        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
            .catch(console.error);
        });

        message.channel.send(':white_check_mark: Deleted \`\`' + amount + '\`\` messages.').then(sentMessage => {
            console.log('Clear command ran successfully, hiding the evidence')
            setTimeout(function() {
                sentMessage.delete()
            }, 2000);
        });
    }
}