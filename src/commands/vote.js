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
    name: 'vote',
    decription: 'This command lets you vote on a user, and if they are an imposter, they will be ejected.',
    type: 'fun',
    usage: "vote <USER>",
    
    async run (client, message, args) {
        if(channelCheck(message) == false) return;

        if (args.length === 0) return message.reply("Please vote for a user to eject.");
        console.log(args);
        const args_Poster = args.join(' ');
        console.log(args_Poster);
        
        const RAND = () => Math.floor(Math.random() * 10) + 1;
        RAND_gen = RAND();
        console.log(RAND_gen);

        message.reply('voted for ' + args_Poster);
        if (RAND_gen == 1) {
            message.channel.send('\`\`\`                    . 　　　。　　　　•　 　ﾟ　　。 　　.\n           \n                　　　.　　　 　　.　　　　　。　　 。　. 　\n                \n                .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n                \n                　　ﾟ　　 '+ args_Poster + ' was not An Impostor.　 。　.\n                \n                　　\'　　　 1 Impostors remain 　 　　。\n                \n                　　ﾟ　　　.　　　. ,　　　　.　       .      ,\n                  .  　　.　　　 　　.　　　　　。　　 。　. 　\`\`\`');
        } 
        
        else if (RAND_gen == 2, RAND_gen == 3, RAND_gen == 4) {
            message.channel.send('\`\`\`                    . 　　　。　　　　•　 　ﾟ　　。 　　.\n           \n                　　　.　　　 　　.　　　　　。　　 。　. 　\n                \n                .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n                \n                　　ﾟ　　 '+ args_Poster + ' was An Impostor.　 。　    .\n                \n                　　\'　　　 0 Impostors remain 　 　　。\n                \n                　　ﾟ　　　.　　　. ,　　　　.　       .      ,\n                  .  　　.　　　 　　.　　　　　。　　 。　. 　\`\`\`');
        }

        else { message.channel.send('\`\`\`                    . 　　　。　　　　•　 　ﾟ　　。 　　.\n           \n                　　　.　　　 　　.　　　　　。　　 。　. 　\n                \n                .　　 。　　　　　    。 . 　　 • 　　　　•\n                \n      　　        ﾟ　　    Noone was ejected (Skipped). 。　.\n                \n                　　\'　　　 　　.　　　. ,　    　 　　。\n                \n                　　ﾟ　　　.　　　. ,　　　　.　       .      ,\n                  .  　　.　　　 　　.　　　　　。　　 。　. 　\`\`\`');
        }
    }
}