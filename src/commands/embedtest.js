const Discord = require('discord.js');

module.exports = {
    name: 'embedtest',
    decription: 'This command is purely for testing. It sends a predefined embed.',
    type: 'debug',
    
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
                
            return message.channel.send(perm_msg);
        }

        // DND Explanation
        if (args[0] == '1') {
            const statEmbed1 = new Discord.MessageEmbed()
                .setTitle("Dungeoneers")
                .setColor('7be6ee')
                .setDescription('This is the Dungeons & Dragons category where all matters related to D&D is discussed.')
                .addFields({ name: "Channels",
                    value: "<#696122434184544266>\n<#705731319778377790>\n<#748287140550410310>",
                    inline: true })
                    .addFields({ name: "Description",
                    value: "This is the D&D general chat. Post anything here\nThis is a calender where sessions are shown.\nThis channel is only for DM's.",
                    inline: true })
            message.channel.send(statEmbed1)

            .then(() => {
            const statEmbed2 = new Discord.MessageEmbed()
                .setColor('7be6ee')
                .addFields({ name: "Roles",
                    value: "<@&753246465547305122>\n<@&680067187423051802>\n<@&753243379919355935>",
                    inline: true })
                .addFields({ name: "Description", 
                    value: "Part-timers play every now and again.\nDungeoneers play very frequently.\nDungeon Masters are the people hosting the games.", 
                    inline: true })
            message.channel.send(statEmbed2);
            })

            .then(() => {
            const statEmbed3 = new Discord.MessageEmbed()
                .setTitle('Modules')
                .setColor('7be6ee')
                .setDescription('A **oneshot** is a quest that lasts around 1-2 sessions (8 ish hours) and the plot revolves around a single task (like clearing a dungeon).\nAn **adventure** is longer and lasts around 1-10 sessions. The plot can be more complicated, but its usually also one single quest\nA **campaign** can lasts several months or years and spans many characters, plot developments and more. These require serious commitment.\nWhen referring to all of them we call them **modules**.\n\nEach module is attached to a role. This is done to allow the DM to tag all their players when a new session is planned or when they have something to show them.')
                .addFields({ name: "Module role examples:", 
                    value: "<@&702573881587925063>\n<@&723545919932465162>\n<@&753246465027211391>\n<@&753247643777630239>", 
                    inline: true })
                .addFields({ name: "Description", 
                    value: "Campaign\nOneshot\nAdventure\nCampaign", 
                    inline: true })
            message.channel.send(statEmbed3);

            message.delete();
            })
        }

        // Testing Reaction Roles
        else if (args[0] == '2') {
            const statEmbed3 = new Discord.MessageEmbed()
            .setTitle('Games')
            .setColor('db0606')
            .setDescription(`:video_game: @Gamers
            :rainbow: @Siege
            :earth_africa: @Minecraft
            :star: @Battlefront
            :dagger: @CS:GO
            :factory: @Civilization 5
            :star2: @Star Citizen
            :crossed_swords: @Dungeoneer
            :ice_cube: @Garry\'s Mod
            :meat_on_bone: @Don\'t Starve
            :japanese_ogre: @Monster Hunter`)
            .setFooter('Click icons below to add desired role.')
        message.channel.send(statEmbed3);
        }

        else if (args[0] == '3' && !isNaN(args[1]) && !isNaN(args[2])) {
            // const channel = client.channels.cache.get("762301953995702322");
            // const msg = channel.messages.cache.get('798668136907931659');
            try {
                client.channels.cache.get(args[1]).messages.fetch(args[2])
                .then(msg => {
                    const editEmbed = new Discord.MessageEmbed()
                    .setTitle('Games')
                    .setColor('db0606')
                    .setDescription(`:video_game: @BOB
                    :rainbow: @Siege
                    :earth_africa: @Minecraft
                    :star: @Battlefront
                    :dagger: @CS:GO
                    :factory: @Civilization 5
                    :star2: @Star Citizen
                    :crossed_swords: @Dungeoneer
                    :ice_cube: @Garry\'s Mod
                    :meat_on_bone: @Don\'t Starve
                    :japanese_ogre: @Monster Hunter`)
                    .setFooter('Click icons below to add desired role.')

                    msg.edit(editEmbed)
                })
            } 
            
            catch (error){
                message.reply('an error occurred! \nPlease verify the Channel ID and the Message ID')
            }
        }

        else message.reply("use args 1, 2 or 3");
    }
}