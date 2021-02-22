const Discord = require('discord.js')

module.exports = {
	name: 'random',
    decription: 'Type and integer and the program will roll a number between 1 and said integer.',
    type: 'fun',
	//aliases: ['dice', 'rolldice', 'roll'],
	
    async run (client, message, args) {
        if (validateInput(args, message) == false)
			return;
        
        const RAND_INT = args.join(' ');
        const randNum = () => Math.floor(Math.random() * RAND_INT) + 1;

        const RAND_NUM_EMBED = new Discord.MessageEmbed()
            .setTitle('Your random number is: ' + randNum())
            .setColor('f04747');
        message.channel.send(RAND_NUM_EMBED);
    }
}

function validateInput(args, message) {
    if (args.length !== 0 || typeof(args) == "number")
        return true
    else {
        message.reply(`The proper usage is ${process.env.PREFIX}random <number>.`);

        return false;
    }
}