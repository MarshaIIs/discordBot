const Discord = require('discord.js')
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

module.exports = {
    name: 'dndkey',
    decription: 'This command lists all D\&D compendium abbreviations and their corresponding books.',
    type: ['dnd'],
    usage: "dndkey",
    
    async run (client, message, args) {
        if (CheckChannel.dnd(message, this.name) === false)
            return;
        if (RoleCheck.dnd(message, this.name) === false) 
            return;

        const DND_KEY_EMBED = new Discord.MessageEmbed()
            .setTitle('DnD Source compendium key')
            .setDescription('Each race, class, subrace, and subclass has a source abbreviation listed. This is a key to figure out which abbreviation belongs to which source.')
            .setColor('7be6ee')
            .addFields({ name: "Abbreviation", value: "AcInc\nDMG\nEGtW\nERLW\nEEPC\nGGtR\nID\:RotF\nLR\nMM\nMOoT\nMToF\nOGA\nPHB\nSCAG\nTCoE\nTP\nVGtM\nWGtE\nXGtE\n",
                inline: true })
            .addFields({ name: "Source", value: "Acquistions Incorporated\n Dungeon Master's Guide\n Explorer's Guide to Wildemount\n Eberron: Rising From The Last War\n Elemental Evil Player's Companion\n Guildmasters' Guide to Ravnica\n Icewind Dale: Rime of the Frostmaiden\n Locathah Rising\n Monster Manual\n Mystic Odysseys of Theros\n Mordenkainen's Tome of Foes\n One Grung Above\n Players Handbook\n Sword Coast Adventurer's Guide\n Tasha's Cauldron of Everything\n Tortle Package\n Volo's Guide to Monsters\n Wayfarer's Guide to Eberron\n Xanathar's Guide to Everything\n",
                inline: true })

        message.channel.send(DND_KEY_EMBED);
    }
}