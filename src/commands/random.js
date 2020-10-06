const Discord = require('discord.js')

module.exports = {
	name: 'random',
    decription: 'Type and integer and the program will roll a number between 1 and said integer.',
	//aliases: ['dice', 'rolldice', 'roll'],
	
    async run (client, message, args) {
        if (args.length === 0) return message.reply("Please provide a number");
        console.log(args);
        const RAND_INT = args.join(' ');
        console.log(RAND_INT);
        const RAND = () => Math.floor(Math.random() * RAND_INT) + 1;
        
        const msg = new Discord.MessageEmbed()
        .setTitle('Your random number is: ' + RAND())
        .setColor('FAA61A')
        message.channel.send(msg);
    },
}