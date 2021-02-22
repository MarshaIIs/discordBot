const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    decription: 'This command clears a certain amount of messages from the channel.',
    type: 'utility',
    usage: 'clear <NUMBER>',
    
    async run (client, message, args) {
        if (clearRoleCheck(message) == false) 
            return;

        let amount = args.join(" ");
            amount = parseInt(amount, 10) + 1;
        // The "+1" here is because the original "delte X messages" command message must also be deleted ADDITIONALLY to the X amount that must be deleted.

        console.log(`Attempting to delete ${amount} messages...`);

        if (message.member.roles.cache.some(role => role.name === 'Clear perms')) {
            if (!amount)
                return message.reply(`the proper usage is ${process.env.PREFIX}clear <number>.`);
            if ((amount - 1) >= 10)
                return message.reply('you cannot clear more than 10 messages at once');
            if ((amount - 1) <= 1)
                return message.reply('you need to delete at least one message');

            deleteMessages(message, amount);
        }
        else {
            if (!amount)
                return message.reply(`the proper usage is ${process.env.PREFIX}clear <number>.`);
            if ((amount - 1) > 100)
                return message.reply('you cannot clear more than 100 messages at once');
            if ((amount - 1) <= 1)
                return message.reply('you need to delete at least one message');

            deleteMessages(message, amount);
        }
    }
}

function clearRoleCheck(message) {
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.cache.some(role => role.name === 'Clear perms'))
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

async function deleteMessages(message, deleteAmount) {
    await message.channel.messages.fetch({limit: deleteAmount}).then(messages => {
        try {
            message.channel.bulkDelete(messages)
        }
        catch (error) {
            message.reply(`an error has occurred: \n${error}`)
        }
    });

    message.channel.send(`\✅ Deleted \`\`${(deleteAmount - 1)}\`\` messages.`).then(sentMessage => {
        console.log('Clear command ran successfully, hiding the evidence');
        setTimeout(function() {
            sentMessage.delete()
        }, 2500);
    });
}