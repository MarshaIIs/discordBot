const Discord = require('discord.js');

// Would very much like to clean this up, should take 10 min max

module.exports = {
    name: 'foundry',
    decription: 'This command replies with a link to the Foundry D\&D lobby.',
    type: 'dnd',
    usage: "foundry",
    
    async run (client, message, args) {
        if (dndChannelCheck(message) == false)
		    return;
        if (dndRoleCheck(message) == false)
		    return;

        const FOUNDRY_EMBED = new Discord.MessageEmbed()
        .setTitle('horsesmith.eu.forge-vtt.com')
        .setURL('https://horsesmith.eu.forge-vtt.com/')
        .setColor('7be6ee');
        
        message.channel.send(FOUNDRY_EMBED);
    }
}

function dndChannelCheck(message) {
    /* 696122434184544266 = #dungeoneers
     * 751814974355275777 = #dm-campaign
     * 773304694587260958 = #dm-character
     * 748287140550410310 = #dm-private
     * 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if (message.channel == '696122434184544266' || message.channel == '751814974355275777' || message.channel == '773304694587260958' || message.channel == '748287140550410310' 
    || message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')
        return true;
    else {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}

function dndRoleCheck(message) {
    if (message.member.roles.cache.some(role => role.name === 'D&D Part-Timer') || message.member.roles.cache.some(role => role.name === 'Dungeoneer') || 
    message.member.roles.cache.some(role => role.name === 'Dungeon Master') || message.member.hasPermission('ADMINISTRATOR'))
        return true;
    else {
        console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
    
        MISSING_PERMS_EMBED = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('db0606')
            .setDescription('You do not have permission to use that command!');
    
        message.channel.send(MISSING_PERMS_EMBED);

        return false;
    }
}