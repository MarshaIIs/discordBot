const { Client, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN,
);

module.exports = {
    name: 'announce',
    decription: 'Sends an announcement in the form of a predefined Webhook.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply("You do not have permission to use that command");
        
        console.log(args);
        const msg = args.join(' ');
        console.log(msg);
        webhookClient.send(msg);
    }
}