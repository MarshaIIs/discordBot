const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    decription: 'This command clears a certain amount of messages from the channel.',
    type: 'utility',
    usage: "clear <NUMBER>",
    
    async run (client, message, args) {
        let amount = args.join(" ");
        amount = parseInt(amount, 10) + 1;
        console.log('Deleting ' + amount + ' messages...');

        async function deleteMessages(){
            await message.channel.messages.fetch({limit: amount}).then(messages => {
                message.channel.bulkDelete(messages)
                .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
            });

            message.channel.send(':white_check_mark: Deleted \`\`' + (amount-1) + '\`\` messages.').then(sentMessage => {
                console.log('Clear command ran successfully, hiding the evidence');
                setTimeout(function() {
                    sentMessage.delete()
                }, 2500);
            });
        }

        let allowedRole = message.guild.roles.cache.get('763152855355621396', '763144718590410812');
        //console.debug('if thing: ' + message.member.roles.cache.some(role => role.name === 'Clear perms'))

        if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some(role => role.name === 'Clear perms'))
        {
            console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');

            return message.channel.send(perm_msg);
        }
        else if (message.member.roles.cache.some(role => role.name === 'Clear perms'))
        {
            if(!amount) return message.reply('the proper usage is ' + process.env.PREFIX + 'clear <number>.');
            if((amount-1) >= 10) return message.reply('you cannot clear more than 10 messages at once');
            if((amount-1) <= 1) return message.reply('you need to delete at least one message');
            deleteMessages();
        }
        else
        {
            if(!amount) return message.reply('the proper usage is ' + process.env.PREFIX + 'clear <number>.');
            if((amount-1) > 100) return message.reply('you cannot clear more than 100 messages at once');
            if((amount-1) <= 1) return message.reply('you need to delete at least one message');
            deleteMessages();
        }
    }
}