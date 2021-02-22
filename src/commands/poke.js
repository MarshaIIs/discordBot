const Discord = require('discord.js')
const GPH_API_CLIENT  = require('giphy-js-sdk-core');
const Giphy = GPH_API_CLIENT(process.env.GIPHY_TOKEN)
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;

module.exports = {
    name: 'poke',
    decription: 'When a user is mentioned with the poke command a private DM is sent to them.',
    type: 'general',
    args: true,
    usage: "<MENTION>",
    
    async run (client, message, args) {
        // if (CheckChannel.default(message) == false)
        //     return;

        // Check if a user is mentioned or if the user mentioned is the bot itself.
        if (!message.mentions.members.first() || message.mentions.has(client.user)) 
            return message.reply('the proper usage is ' + process.env.PREFIX + 'poke <USER MENTION>');
        else {
            let authorUser = message.author.id;
            let pokedUser  = message.mentions.users.first().id;
            let gifTag     = 'wake';
            
            if (args[1] !== undefined) 
                gifTag = gifTagCheck(args);

            voiceChannelCheck (message);

            message.reply(message.mentions.users.first().username + ' has been poked!')
            
            // Gif/Giphy code, see gifGenerator()
            generateGif(gifTag)
            .then((res) => {
                console.log('Tag: ' + gifTag)
                console.log('giphy res: ' + res.data.images.id);
                let gifGen = res.data.images.id
        
                lateGifFinal = 'https://media4.giphy.com/media/' + gifGen + '/giphy.gif';
                console.log('Final Gif: ' + lateGifFinal)
        
                const POKE_EMBED = new Discord.MessageEmbed()
                    .setTitle("YOU HAVE BEEN POKED!")
                    .setColor('ff3333')
                    .setDescription('<@!' + authorUser + '> poked you! WAKE UP!')
                    .setImage(lateGifFinal)
                    .setTimestamp()
                    //.setFooter("Powered By GIPHY")
                message.guild.members.cache.get(pokedUser).send(POKE_EMBED);
            })
            .catch(error => {
                message.reply(`an error has occurred: \n${error}`)
            })

            console.log('User ' + authorUser + ' poked ' + pokedUser + '!');
        }
    }
}

// Check if the "tag" argument is provided in the message, if so overwrite the gifTag with said value.
function gifTagCheck(arguments) {
    let tagArray = arguments;
    tagArray.splice(0, 1);
    tagArray = tagArray.join(' ');
    let gifTag   = tagArray.toLowerCase();

    return gifTag;
}

// If the message author is already in a voice channel, provide the pokedUser with a link to said voice channel
async function voiceChannelCheck (msg) {
    if (msg.member.voice.channel != undefined || msg.member.voice.channel != null) {
        let inviteMsg = await msg.member.voice.channel.createInvite(
            {
                maxAge: 3600, // maximum time for the invite, in milliseconds
                maxUses: 1 // maximum times it can be used
            },
            `Requested with command by ${msg.author.tag} using the Poke command`
        )
        .catch(console.log);
    
        msg.guild.members.cache.get(pokedUser).send(inviteMsg ? `${inviteMsg}` : "An error occurred during Voice Channel invite creation.");
    }
}

// All of the Gif/Giphy related code was originally in the generateGif function, but a series of issues arose and now it is temporarily (read, permanently) in the main function
function generateGif(tag) {
    return Giphy.random('gifs', {gifTag: tag})
}