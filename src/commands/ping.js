const Discord = require('discord.js')

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
    name: 'ping',
    decription: 'This command responds to the command with a ping latency.',
    type: 'general',
    usage: "ping",
    
    async run (client, message, args) {
        if(channelCheck(message) == false) return;

        console.log('timestamp: ' + message.createdTimestamp);
        console.log('date: ' + Date.now());
        pingGenerated = Math.abs(message.createdTimestamp - Date.now())

        const ping = new Discord.MessageEmbed()
        .setTitle('Pong! 🏓')
        .setColor('f04747')
        .setDescription(`\`${pingGenerated}\` ms`);
        message.channel.send(ping);
    }
}