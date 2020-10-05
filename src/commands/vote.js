module.exports = {
    name: 'vote',
    decription: 'Randomly ejects a user.',
    
    async run (client, message, args) {
        if (args.length === 0) return message.reply("Please vote for a user to eject.");
        console.log(args);
        const args_Poster = args.join(' ');
        console.log(args_Poster);
        const RAND = () => Math.floor(Math.random() * 10) + 1;
        RAND_gen = RAND();

        console.log(RAND_gen);

        message.reply('voted for ' + args_Poster);
        if (RAND_gen == 1) {
            message.channel.send('\`\`\`                    . 　　　。　　　　•　 　ﾟ　　。 　　.\n           \n                　　　.　　　 　　.　　　　　。　　 。　. 　\n                \n                .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n                \n                　　ﾟ　　 '+ args_Poster + ' was not An Impostor.　 。　.\n                \n                　　\'　　　 0 Impostors remain 　 　　。\n                \n                　　ﾟ　　　.　　　. ,　　　　.　       .      ,\n                  .  　　.　　　 　　.　　　　　。　　 。　. 　\`\`\`');
        
        } else if (RAND_gen == 2, RAND_gen == 3, RAND_gen == 4) {
            message.channel.send('\`\`\`                    . 　　　。　　　　•　 　ﾟ　　。 　　.\n           \n                　　　.　　　 　　.　　　　　。　　 。　. 　\n                \n                .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•\n                \n                　　ﾟ　　 '+ args_Poster + ' was An Impostor.　 。　    .\n                \n                　　\'　　　 0 Impostors remain 　 　　。\n                \n                　　ﾟ　　　.　　　. ,　　　　.　       .      ,\n                  .  　　.　　　 　　.　　　　　。　　 。　. 　\`\`\`');
        }

        else { message.channel.send('\`\`\`                    . 　　　。　　　　•　 　ﾟ　　。 　　.\n           \n                　　　.　　　 　　.　　　　　。　　 。　. 　\n                \n                .　　 。　　　　　    。 . 　　 • 　　　　•\n                \n      　　        ﾟ　　    Noone was ejected (Skipped). 。　.\n                \n                　　\'　　　 　　.　　　. ,　    　 　　。\n                \n                　　ﾟ　　　.　　　. ,　　　　.　       .      ,\n                  .  　　.　　　 　　.　　　　　。　　 。　. 　\`\`\`');
        }
    }
}