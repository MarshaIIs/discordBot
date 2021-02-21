const Discord = require('discord.js');

module.exports = {
    name: 'foundry',
    decription: 'This command replies with a link to the Foundry D\&D lobby.',
    type: 'dnd',
    usage: "foundry",
    
    async run (client, message, args) {
        if (!(message.channel == '696122434184544266' || message.channel == '751814974355275777' || message.channel == '773304694587260958' || message.channel == '748287140550410310' || message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')) return;
        
        if (message.member.roles.cache.some(role => role.name === 'D&D Part-Timer') || message.member.roles.cache.some(role => role.name === 'Dungeoneer') || message.member.roles.cache.some(role => role.name === 'Dungeon Master'))
        {
            const perm_msg = new Discord.MessageEmbed()
            .setTitle('horsesmith.eu.forge-vtt.com')
            .setURL('https://horsesmith.eu.forge-vtt.com/')
            .setColor('7be6ee');
            
            return message.channel.send(perm_msg);
        }
        else
        {
            console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');

            return (message.channel.send(perm_msg));
       }
    }
}