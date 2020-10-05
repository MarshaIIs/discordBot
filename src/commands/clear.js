module.exports = {
    name: 'clear',
    decription: 'Clears X amount of messages from current channel.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply("You do not have permission to use that command");

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