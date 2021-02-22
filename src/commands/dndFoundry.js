const Discord = require('discord.js');
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

// Would very much like to clean this up, should take 10 min max

module.exports = {
    name: 'foundry',
    decription: 'This command replies with a link to the Foundry D\&D lobby.',
    type: 'dnd',
    usage: "foundry",
    
    async run (client, message, args) {
        if (CheckChannel.dnd(message) == false)
		    return;
        if (RoleCheck.dnd(message) == false)
		    return;

        const FOUNDRY_EMBED = new Discord.MessageEmbed()
        .setTitle('horsesmith.eu.forge-vtt.com')
        .setURL('https://horsesmith.eu.forge-vtt.com/')
        .setColor('7be6ee');
        
        message.channel.send(FOUNDRY_EMBED);
    }
}