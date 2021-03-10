const Discord = require('discord.js')
const { Client, WebhookClient } = require('discord.js');
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

const DND_WEBHOOK_CLIENT = new WebhookClient(
    process.env.WEBHOOK_ID_DND,
    process.env.WEBHOOK_TOKEN_DND,
);

module.exports = {
    name: 'dndplan',
    decription: 'Creates a new message in #sessions, proceeds to also create a reminder that triggers at midnight the day before.',
    
    async run (client, message, args) {
        if (CheckChannel.dndDM(message) == false) 
            return;
        if (RoleCheck.dndDM(message) == false) 
            return;
        

        if (args.length === 0) 
            return message.reply('please specify a day');
        let dndDay = args.join(' ');
        console.log(dndDay);

        message.channel.send('Specify start time')
        let dndTimeStart = args.join(' ');
        console.log(dndTimeStart);

        message.channel.send('Specify stop time')
        let dndTimeStop = args.join(' ');
        console.log(dndTimeStop);

        message.channel.send('Specify the DND group that must be mentioned')
        let dndTag = args.join(' ');
        console.log(dndTag);

        message.channel.send('Specify Time Zone (GMT)')
        let dndTimeZone = args.join(' ');
        console.log(dndTimeZone);

        let announcement = `${dndDay}, ${dndTimeStart} - ${dndTimeStop} ${dndTimeZone}`

        console.log(announcement);
        DND_WEBHOOK_CLIENT.send(announcement);
    }
}