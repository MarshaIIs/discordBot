const Discord = require('discord.js')
const GphApiClient  = require('giphy-js-sdk-core');
giphy = GphApiClient(process.env.GIPHY_TOKEN)

module.exports = {
    name: 'poke',
    decription: 'When a user is mentioned with the poke command a private DM is sent to them.',
    type: 'general',
    args: true,
    usage: "<MENTION>",
    
    async run (client, message, args) {
        if (!message.mentions.members.first() || message.mentions.has(client.user)) return message.reply('the proper usage is ' + process.env.PREFIX + 'poke <USER MENTION>');

        else {
            let gifTag    = 'idiot'; 
            let pokedUser = message.mentions.users.first().id;
            let author    = message.author.id;

            if (args.length > 1 || !args[1] == ' ' || !args[1] == undefined) {
                let tagArray = args
                tagArray.splice(0, 1);
                tagArray = tagArray.join(' ');
                gifTag = tagArray.toLowerCase();
            }

            message.reply(message.mentions.users.first().username + ' has been poked!')

            gifGenerator(gifTag)
            .then((res) => {
                console.log(res)
        
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

function gifGenerator(tag) {
    return giphy.random('gifs', {tag})
}