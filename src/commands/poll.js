const Discord = require('discord.js')

module.exports = {
    name: 'poll',
    decription: '',
    type: 'general',
    usage: 'poll',
    
    async run (client, message, args) {
        //if(channelCheck(message) == false) return;

        const pollEmbed = new Discord.MessageEmbed()
            .setTitle('Dog or cat')
            .setColor('f04747')
            .addFields({ name: "Dog :one:"})
            .addFields({ name: "Cat :two:"})
            .setFooter('Vote by clicking the corresponding reaction below');
        message.channel.send(pollEmbed);

        message.react('1️⃣')
        message.react('2️⃣')
    }
}

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if(message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')
    {
        // Return true if message is sent in one of the listed channels. 
        return true;
    }
    else
    {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        // Return false if channel is not one of the listed channels
        return false;
    }
}