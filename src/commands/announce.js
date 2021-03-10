const { Client, WebhookClient } = require('discord.js');
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

const WEBHOOK_CLIENT = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN,
);

module.exports = {
    name: 'announce',
    decription: 'This command sends an announcement in the #Announcements channel. The message is sent from a Webhook, not the bot itself.',
    type: 'utility',
    args: true,
    usage: '<message>',
    
    async run (client, message, args) {
        if (CheckChannel.default(message) === false)
            return;
        if (RoleCheck.admin(message) === false) 
            return;
        
        if (args.length === 0)
            return message.reply(`the proper usage is ${process.env.PREFIX}announce <message>.`);

        const ANNOUNCE_MSG = args.join(' ');

        WEBHOOK_CLIENT.send(ANNOUNCE_MSG);
    }
}