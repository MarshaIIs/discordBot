const axios = require("axios");
const Discord = require('discord.js');

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if(!(message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')) {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}

module.exports = {
    name: 'w2g',
    decription: 'This command automatically generates a Watch2Gether link.',
    type: 'general',
    usage: "w2g [LINK]",
 
    async run (client, message, args) {
        if (channelCheck(message) == false) return;

        console.log(args[0])
        axios.post("https://w2g.tv/rooms/create.json", { "w2g_api_key": process.env.w2gKey, "share":args[0] })
        .then(res => {
            console.log(res.data);
            const msg = new Discord.MessageEmbed()
            .setTitle('Watch2Gether room generated.')
            .setURL(`https://w2g.tv/rooms/${res.data.streamkey}?lang=en`)
            .setColor('FAA61A')
            message.channel.send(msg);
        })
        .catch(error => {
            if (error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                message.channel.send("Woops. Seems an error occured here: " + error.response.status)
            }

            else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                message.channel.send("I asked the server for a W2G room but received no response...")
                } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error: ', error.message);
                message.channel.send("An unknown error occured!")
            }
        });
    }
}