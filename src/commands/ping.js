const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    decription: 'This command responds to the command with a ping latency.',
    type: 'general',
    usage: 'ping',
    
    async run (client, message, args) {
        if(channelCheck(message) == false)
            return;

        console.log('timestamp: ' + message.createdTimestamp);
        console.log('date: ' + Date.now());

        let generatedPing = Math.abs(message.createdTimestamp - Date.now())

        const PING_EMBED = new Discord.MessageEmbed()
            .setTitle('Pong! 🏓')
            .setColor('f04747')
            .setDescription(`\`${generatedPing}\` ms`);
        message.channel.send(PING_EMBED);
    }
}

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if (message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')
        return true;
    else {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}