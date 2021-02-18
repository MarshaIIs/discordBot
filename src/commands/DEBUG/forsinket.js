const Discord = require('discord.js');
const GphApiClient  = require('giphy-js-sdk-core');
giphy = GphApiClient(process.env.GIPHY_TOKEN)

// function gifGenerator(tag) {
//     return new Promise(resolve => {
//         giphy.random('gifs', {tag})
//         .then((res) => {
//             console.log('giphy res: ' + res.data.images.id);
//             console.log('da link: ' + res.data.images.id); 

//             lateGif = res.data.images.id;
//         })
//     });
// }

module.exports = {
    name: 'late',
    decription: 'Hvis man er forsinket skal man sige hej til bæltet',
    
    async run (client, message, args) {
        if(message.content.includes("forsinket")) {
            function gifGenerator(tag) {
                giphy.random('gifs', {tag})
                .then((res) => {
                    console.log('giphy res: ' + res.data.images.id);
                    gifGen = res.data.images.id

                    lateGifFinal = 'https://media4.giphy.com/media/' + gifGen + '/giphy.gif';
                    console.log('Final Gif: ' + lateGifFinal)

                    setTimeout(function() {
                        late_msg = new Discord.MessageEmbed()
                            .setTitle("Jeg har hørt du er FORSINKET!??!?")
                            .setColor('ff3333')
                            .setDescription("...kan du komme til tiden din fucking **kælling**!")
                            .setImage(lateGifFinal)
                            .setTimestamp()
                            .setFooter("Powered By GIPHY")
                        message.channel.send(late_msg);
                        console.log('Message Sent')
                    }, 500);
                })
            }

            /* clapping  
             * annoyed
             * idiot
             * south park
             * anger
             */
            gifGenerator('anger');
        }
    }
}