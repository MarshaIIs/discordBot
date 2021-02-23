const Discord = require('discord.js');
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

module.exports = {
    name: 'react',
    decription: 'DEBUG FOR NOW',
    type: 'utility',
    
    async run (client, message, args) {
        if (RoleCheck.owner(message) == false)
            return;
            
        // Send original Reaction Role message
        else if (args[0] == 'msg') {
            const STAT_EMBED_3 = new Discord.MessageEmbed()
                .setTitle('Roles')
                .setColor('db0606')
                .setDescription(`🎮 <@&650032941363232851>
                ⏯️ <@&766673863479787530>
                🌈 <@&650033861161385984>
                🌍 <@&650034167400235028> 
                ⭐ <@&650034484724367390> 
                🗡️ <@&650034458988118016> 
                🏭 <@&650034664748220455> 
                ⚔️ <@&772476049849974784> 
                🌟 <@&650034525778477080> 
                🍖 <@&687300860778381344> 
                🥽 <@&769917920243220483> 
                👹 <@&687300946765676554> 
                ⛵ <@&766673408360316969> 
                :ice_cube: <@&687300795674525696> 
                🛸 <@&790709908571291681> 
                :ninja: <@&797528459529420852> 
                :military_helmet: <@&798173563206500352>`)
                .setFooter('Click icons below to add desired role.')
            message.channel.send(STAT_EMBED_3);
        }
        // Edit original Reaction Role message
        else if (args[0] == 'edit' && !isNaN(args[1]) && !isNaN(args[2])) {
            // args[1] = Channel, args[2] = Message. Both channel and message is needed when editing by ID
            client.channels.cache.get(args[1]).messages.fetch(args[2])
            .then(msg => {
                const EDIT_EMBED = new Discord.MessageEmbed()
                .setTitle('Roles')
                .setColor('db0606')
                .setDescription(`🎮 <@&650032941363232851>
                ⏯️ <@&766673863479787530>
                🌈 <@&650033861161385984>
                🌍 <@&650034167400235028> 
                ⭐ <@&650034484724367390> 
                🗡️ <@&650034458988118016> 
                🏭 <@&650034664748220455> 
                ⚔️ <@&772476049849974784> 
                🌟 <@&650034525778477080> 
                🍖 <@&687300860778381344> 
                🥽 <@&769917920243220483> 
                👹 <@&687300946765676554> 
                ⛵ <@&766673408360316969> 
                :ice_cube: <@&687300795674525696> 
                🛸 <@&790709908571291681> 
                :ninja: <@&797528459529420852> 
                :military_helmet: <@&798173563206500352>`)
                .setFooter('Click icons below to add desired role.')

            msg.edit(EDIT_EMBED)
            })
            .catch(message.reply('an error occurred! Error: \n' + error))
        }
        else
            message.reply('args are either "msg", "edit" or ...DEBUG');
    }
}