const Discord = require('discord.js')

module.exports = {
	name: 'random',
    decription: 'Type and integer and the program will roll a number between 1 and said integer.',
    type: 'fun',
	//aliases: ['dice', 'rolldice', 'roll'],
	
    async run (client, message, args) {
        validateInput(args);
        
        const RAND_INT = args.join(' ');
        const rand = () => Math.floor(Math.random() * RAND_INT) + 1;

        const msg = new Discord.MessageEmbed()
            .setTitle('Your random number is: ' + rand())
            .setColor('f04747');
        message.channel.send(msg);
    }
}

function validateInput(args) {
    if (args.length === 0 || typeof(args) == "number")
    {
        return message.reply('the proper usage is ' + process.env.PREFIX + 'random <number>.')
    }
} 