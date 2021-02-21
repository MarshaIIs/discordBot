const Discord = require('discord.js')
const GphApiClient  = require('giphy-js-sdk-core');
const giphy = GphApiClient(process.env.GIPHY_TOKEN)

module.exports = {
    name: 'poke',
    decription: 'When a user is mentioned with the poke command a private DM is sent to them.',
    type: 'general',
    args: true,
    usage: "<MENTION>",
    
    async run (client, message, args) {
        //if(channelCheck(message) == false) return;

        // Check if a user is mentioned or if the user mentioned is the bot itself.
        if (!message.mentions.members.first() || message.mentions.has(client.user)) return message.reply('the proper usage is ' + process.env.PREFIX + 'poke <USER MENTION>');
        else
        {
            let author = message.author.id;
            let pokedUser = message.mentions.users.first().id;
            let gifTag = 'wake';
            
            if (args[1] !== undefined) gifTag = gifTagCheck(args);
            voiceChannelCheck (message);

            message.reply(message.mentions.users.first().username + ' has been poked!')
            
            // Gif/Giphy code, see gifGenerator()
            gifGenerator(gifTag)
            .then((res) => {
                console.log('Tag: ' + gifTag)
                console.log('giphy res: ' + res.data.images.id);
                gifGen = res.data.images.id
        
                lateGifFinal = 'https://media4.giphy.com/media/' + gifGen + '/giphy.gif';
                console.log('Final Gif: ' + lateGifFinal)
        
                var late_msg = new Discord.MessageEmbed()
                    .setTitle("YOU HAVE BEEN POKED!")
                    .setColor('ff3333')
                    .setDescription('<@!' + author + '> poked you! WAKE UP!')
                    .setImage(lateGifFinal)
                    .setTimestamp()
                    //.setFooter("Powered By GIPHY")
                message.guild.members.cache.get(pokedUser).send(late_msg);
            })
            .catch(error => {
                message.reply('an error has occurred: ' + error)
            })

            console.log('User ' + author + ' poked ' + pokedUser + '!');
        }
    }
}

// Check if the "tag" argument is provided in the message, if so overwrite the gifTag with said value.
function gifTagCheck(args) {
    let tagArray = args

    tagArray.splice(0, 1);
    tagArray = tagArray.join(' ');
    gifTag = tagArray.toLowerCase();

    return gifTag;
}

// If the message author is already in a voice channel, provide the pokedUser with a link to said voice channel
async function voiceChannelCheck (message) {
    if (message.member.voice.channel != null)
    {
        let invite = await message.member.voice.channel.createInvite(
            {
                maxAge: 3600, // maximum time for the invite, in milliseconds
                maxUses: 1 // maximum times it can be used
            },
            `Requested with command by ${message.author.tag} using the Poke command`
        )
        .catch(console.log);
    
        message.guild.members.cache.get(pokedUser).send(invite ? `${invite}` : "An error occurred during Voice Channel invite creation.");
    }
}

// All of the Gif/Giphy related code was originally in the gifGenerator function, but a series of issues arose and now it is temporarily (read, permanently) in the main function
function gifGenerator(tag) {
    return giphy.random('gifs', {tag})
}

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if (message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')
    {
        // Return true if message is sent in one of the listed channels. 
        return true;
    }
    else
    {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        // Return false if channel is not one of the listed channels
        return false;
    }
}