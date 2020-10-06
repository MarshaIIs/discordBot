const { Client, WebhookClient } = require('discord.js');
const Discord = require('discord.js');

const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN,
);

module.exports = {
    name: 'announce',
    decription: 'Sends an announcement in the form of a predefined Webhook.',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform announce command');
            perm_msg = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('ff3333')
            .setDescription('You do not have permission to use that command!');

            return message.channel.send(perm_msg);
        }
        
        if (args.length === 0) return message.reply('the proper usage is ' + process.env.PREFIX + 'announce <message>.');
        console.log(args);
        const msg = args.join(' ');
        console.log(msg);
        webhookClient.send(msg);
    }
}