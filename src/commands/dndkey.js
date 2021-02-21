const Discord = require('discord.js')

module.exports = {
    name: 'dndkey',
    decription: 'This command lists all D\&D compendium abbreviations and their corresponding books.',
    type: ['dnd'],
    usage: "dndkey",
    
    async run (client, message, args) {
        if(channelCheck(message) == false) return;
        
        if (!message.member.roles.cache.some(role => role.name === 'D&D Part-Timer') && 
           !message.member.roles.cache.some(role => role.name === 'Dungeoneer') && 
           !message.member.roles.cache.some(role => role.name === 'Dungeon Master') && 
           !message.member.hasPermission('ADMINISTRATOR') )
        {
            console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
         
            return message.channel.send(perm_msg);
        }

        const key_msg = new Discord.MessageEmbed()
            .setTitle('DnD Source compendium key')
            .setDescription('Each race, class, subrace, and subclass has a source abbreviation listed. This is a key to figure out which abbreviation belongs to which source.')
            .setColor('7be6ee')
            .addFields({ name: "Abbreviation", value: "AcInc\nDMG\nEGtW\nERLW\nEEPC\nGGtR\nID\:RotF\nLR\nMM\nMOoT\nMToF\nOGA\nPHB\nSCAG\nTCoE\nTP\nVGtM\nWGtE\nXGtE\n",
                inline: true })
            .addFields({ name: "Source", value: "Acquistions Incorporated\n Dungeon Master's Guide\n Explorer's Guide to Wildemount\n Eberron: Rising From The Last War\n Elemental Evil Player's Companion\n Guildmasters' Guide to Ravnica\n Icewind Dale: Rime of the Frostmaiden\n Locathah Rising\n Monster Manual\n Mystic Odysseys of Theros\n Mordenkainen's Tome of Foes\n One Grung Above\n Players Handbook\n Sword Coast Adventurer's Guide\n Tasha's Cauldron of Everything\n Tortle Package\n Volo's Guide to Monsters\n Wayfarer's Guide to Eberron\n Xanathar's Guide to Everything\n",
                inline: true })
        message.channel.send(key_msg);
    }
}

function channelCheck(message) {
    /* 696122434184544266 = #dungeoneers
     * 751814974355275777 = #dm-campaign
     * 773304694587260958 = #dm-character
     * 748287140550410310 = #dm-private
     * 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */
    
    if(!(message.channel == '696122434184544266' || message.channel == '751814974355275777' || message.channel == '773304694587260958' || message.channel == '748287140550410310' 
      || message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933'))
    {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}