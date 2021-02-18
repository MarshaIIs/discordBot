const Discord = require('discord.js')
const { Client, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID_DND,
    process.env.WEBHOOK_TOKEN_DND,
);

module.exports = {
    name: 'dndplan',
    decription: 'Creates a new message in #sessions, proceeds to also create a reminder that triggers at midnight the day before.',
    
    async run (client, message, args) {
        let allowedRole = message.guild.roles.cache.get('753243379919355935');
        console.log('Allowed role: ' + allowedRole);
        console.log('if thing: ' + message.member.roles.cache.some(role => role.name === 'Dungeon Master'));

        if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some(role => role.name === 'Clear perms')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform announce command');
            perm_msg = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('ff3333')
            .setDescription('You do not have permission to use that command!');

            return message.channel.send(perm_msg);
        }
        

        if (args.length === 0) return message.reply('You must please specify a day');
        const dndDay = args.join(' ');
        console.log(dndDay);

        message.channel.send('Specify start time')
        const dndTimeStart = args.join(' ');
        console.log(dndTimeStart);

        message.channel.send('Specify start stop')
        const dndTimeStop = args.join(' ');
        console.log(dndTimeStop);

        message.channel.send('Specify tag')
        const dndTag = args.join(' ');
        console.log(dndTag);

        announcement = dndDay + ', ' + dndTimeStart + ' - ' + dndTimeStop + '(GMT +1)'

        console.log(announcement);
        webhookClient.send(announcement);
    }
}