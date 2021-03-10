const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

module.exports = {
    name: 'clear',
    decription: 'This command clears a certain amount of messages from the channel.',
    type: 'utility',
    usage: 'clear <NUMBER>',
    
    async run (client, message, args) {
        if (RoleCheck.clear(message) === false) 
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