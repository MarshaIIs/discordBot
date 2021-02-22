const Discord = require('discord.js')
const PONG_MSG_SET = new Set();

// im aware its aids, also aware than its very very wrong
// to do, implement promises with each message, callbacks, .then chains

module.exports = {
    name: 'pong',
    decription: 'This command responds to dumbos who cant type \"ping\".',
    type: 'fun',
    usage: "pong",
    
    async run (client, message, args) {
        if (channelCheck(message) == false) 
            return;

        if (PONG_MSG_SET.has(message.author.id)) {
            message.reply("cool off bud.").then(msg => {
                msg.delete({ timeout: 15000 })
            })
            .catch(console.error);
        } 
        else {
            // Adds the user to the set so that they can't talk for a bit
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            message.member.roles.add(muteRole)
            PONG_MSG_SET.add(message.author.id);

            // Removes the user from the set after X amount of time
            setTimeout(() => {
                PONG_MSG_SET.delete(message.author.id);
                message.member.roles.remove(muteRole)
            }, 120000);

            // The messages BEGIN! 
            // Message 1:
            const PONG_EMBED_1 = new Discord.MessageEmbed()
            .setTitle('Did you mean **' + process.env.PREFIX + 'ping**, you fucking idiot?')
            .setColor('f04747')

            message.channel.send(PONG_EMBED_1).then(msg => {
                msg.delete({ timeout: 120000 })
            })
            .catch(console.error);

            // Message 2:
            setTimeout(function() {
                const PONG_EMBED_2 = new Discord.MessageEmbed()
                .setTitle('Bet you think you\'re a real smart guy, eh?')
                .setColor('f04747')

                message.channel.send(PONG_EMBED_2).then(msg => {
                    msg.delete({ timeout: 115000 })
                })
                .catch(console.error);
            }, 5000)

            // Message 3:
            setTimeout(function() {
                const PONG_EMBED_3 = new Discord.MessageEmbed()
                .setDescription('Well you\'re fucking not.')
                .setColor('f04747')

                message.channel.send(PONG_EMBED_3).then(msg => {
                    msg.delete({ timeout: 110000 })
                })
                .catch(console.error);
            }, 10000)

            // Message 4:
            setTimeout(function() {
                const PONG_EMBED_4 = new Discord.MessageEmbed()
                .setFooter('fucking bitch...')
                .setColor('f04747')

                message.channel.send(PONG_EMBED_4).then(msg => {
                    msg.delete({ timeout: 105000 })
                })
                .catch(console.error);
            }, 15000)
        }
    }
}

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if (message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933') {
        return true;
    }
    else {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}