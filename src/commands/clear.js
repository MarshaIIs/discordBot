const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    decription: 'Clears a certain amount of messages from a channel.',
    
    async run (client, message, args) {
        let amount = args.join(" ");
        amount + 1;

        async function delteMessages(){
            message.delete();

            await message.channel.messages.fetch({limit: amount}).then(messages => {
                message.channel.bulkDelete(messages)
                .catch(console.error);
            });

            message.channel.send(':white_check_mark: Deleted \`\`' + amount + '\`\` messages.').then(sentMessage => {
                console.log('Clear command ran successfully, hiding the evidence');
                setTimeout(function() {
                    sentMessage.delete()
                }, 2000);
            });
        }

        let allowedRole = message.guild.roles.cache.get('763152855355621396', '763144718590410812');
        console.log('Allowed role: ' + allowedRole);
        console.log('if thing: ' + message.member.roles.cache.some(role => role.name === 'Clear perms'))

        if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some(role => role.name === 'Clear perms')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform clear command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('ff3333')
                .setDescription('You do not have permission to use that command!');

            return message.channel.send(perm_msg);
        }

        else if (message.member.roles.cache.some(role => role.name === 'Clear perms')) {
            if(!amount) return message.reply('the proper usage is ' + process.env.PREFIX + 'random <number>.');
            if(amount > 25) return message.reply('you cannot clear more than 25 messages at once');
            if(amount < 1) return message.reply('you need to delete at least one message');
            delteMessages();
        }

        else {
            if(!amount) return message.reply('the proper usage is ' + process.env.PREFIX + 'random <number>.');
            if(amount > 100) return message.reply('you cannot clear more than 100 messages at once');
            if(amount < 1) return message.reply('you need to delete at least one message');
            delteMessages();
        }
    }
}