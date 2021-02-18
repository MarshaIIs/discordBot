const commando = require('discord.js-commando');
const moment = require('moment');

module.exports = {
    name: 'remindme',
    decription: 'Reminder command',

    async run (client, message, args) {
        console.log('remind args ' + args);
        console.log('remind message ' + message);

        //if (args.length === 0) return message.reply('provide an interval for the reminder');
        
        message.channel.send('Specify time interval for reminder')
        
        // await ; {
        //     console.log('Reminder Mesage Content time: ' + message.content);
        // }
        
        //message.channel.send('Specify meesage')

        
        
        
        
        
        
        
        
        
        
        // const splitMessage = args.join(' ');
        // const filteredMessage = args.replace(splitMessage[0], '');

        // console.log('Remindme args: ' + args)
        // function reminder() {
        // message.reply("\n**REMINDER:**\n" + filteredMessage);
        // }

        // switch(splitMessage[0].slice(-1)) {
        //     case 's': {
        //         var msDelay = splitMessage[0].slice(0, -1) * 1000;
        //         message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "seconds.");
        //         setTimeout(reminder, msDelay);
        //         break;
        //     }
        //     case 'm': {
        //         var msDelay = splitMessage[0].slice(0, -1) * 60000;
        //         message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "minutes.");
        //         setTimeout(reminder, msDelay);
        //         break;
        //     }
        //     case 'h': {
        //         var msDelay = splitMessage[0].slice(0, -1) * 3600000;
        //         message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "hours.");
        //         setTimeout(reminder, msDelay);
        //         break;
        //     }
        //     case 'd': {
        //         var msDelay = splitMessage[0].slice(0, -1) * 86400000;
        //         message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "days.");
        //         setTimeout(reminder, msDelay);
        //         break;
        //     }
        // }
        }
}