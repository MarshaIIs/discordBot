module.exports = {
    name: 'remind',
    description: 'Allows you to set a reminder for yourself.',

    async run (client, message, args) {
        if (args.length === 0) return message.reply('the proper usage is ' + process.env.PREFIX + 'remind <number[value]>, where value is either s/m/h/d.');
        console.log(args);
        const splitMessage = args.toString.split(' ');
        console.log(splitMessage[0]);
        console.log(splitMessage[1]);
        //var filteredMessage = args.replace(splitMessage[0], '');
        
        function reminder() {
            message.reply("reminder set");
        //  message.reply("\n**REMINDER:**\n" + filteredMessage);
        }
        switch(splitMessage[0].slice(-1)) {
            case 's': {
                var msDelay = splitMessage[0].slice(0, -1) * 1000;
                message.reply("reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "seconds.");
                setTimeout(reminder, msDelay);
                break;
            }
            case 'm': {
                var msDelay = splitMessage[0].slice(0, -1) * 60000;
                message.reply("reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "minutes.");
                setTimeout(reminder, msDelay);
                break;
            }
            case 'h': {
                var msDelay = splitMessage[0].slice(0, -1) * 3600000;
                message.reply("reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "hours.");
                setTimeout(reminder, msDelay);
                break;
            }
            case 'd': {
                var msDelay = splitMessage[0].slice(0, -1) * 86400000;
                message.reply("reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "days.");
                setTimeout(reminder, msDelay);
                break;
            }
        }
    }
}