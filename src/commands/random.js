module.exports = {
	name: 'random',
    decription: 'Type and integer and the program will roll a number between 1 and said integer.',
	//aliases: ['dice', 'rolldice', 'roll'],
	
    execute(message, args){
        if (args.length === 0) return message.reply("Please provide a number");
        console.log(args);
        const RAND_INT = args.join(' ');
        console.log(RAND_INT);
        const RAND = () => Math.floor(Math.random() * RAND_INT) + 1;
        message.reply("your random number is: " + RAND());
    },
}