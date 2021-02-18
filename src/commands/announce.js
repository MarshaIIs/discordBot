const Discord = require('discord.js');
const { Client, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN,
);

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if(!(message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')) {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}

module.exports = {
    name: 'announce',
    decription: 'This command sends an announcement in the #Announcements channel. The message is sent from a Webhook, not the bot itself.',
    type: 'utility',
    args: true,
    usage: "<message>",
    
    async run (client, message, args) {
        if(channelCheck(message) == false) return;

        if   (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
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