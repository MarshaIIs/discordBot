const Discord = require('discord.js');

module.exports = {
    name: 'foundry',
    decription: 'Respons to m!foundry and m!vtt with a link to FoundryVTT',
    
    async run (client, message, args) {
        if(message.member.roles.cache.has('680067187423051802') || message.member.roles.cache.has('753243379919355935') || message.member.roles.cache.has('753246465547305122') ) {
            const perm_msg = new Discord.MessageEmbed()
            .setTitle('horsesmith.eu.forge-vtt.com')
            .setURL('https://horsesmith.eu.forge-vtt.com/')
            .setColor('7be6ee')
            message.channel.send(perm_msg);
        }
        
        else {
            console.log(`${message.author.tag}` + ' is missing permissions to perform foundry command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('e91313')
                .setDescription('You\'re not a Dungeoneer!')
            message.channel.send(perm_msg);
            //message.reply('You\'re not a Dungeoneer!');
       }
    }
}