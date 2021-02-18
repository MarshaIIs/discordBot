//const db = require('quick.db');

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
    name: 'remindme',
    decription: 'This command will send the user a message after X amount of time (in minutes).',
    type: 'general',
    usage: "remindme <TIME>",
    
    async run (client, message, args) {
        if(channelCheck(message) == false) return;

        if(!message.member.hasPermission('ADMINISTRATOR') && member.roles.cache.some(role => role.name === 'elite')) {
            console.log(`${message.author.tag}` + ' is missing permissions to perform \"' + this.name + '\" command');
            perm_msg = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');

            return message.channel.send(perm_msg);
        }

        let remindMin = args.join(" ");
        remindSec = parseInt(remindMin, 10) * 60;
        remindMS = (remindSec * 1000)
        console.log('Reminder set to ' + remindSec + ' seconds...');
        
        if      (!remindSec) return message.reply('the proper usage is ' + process.env.PREFIX + 'remindme <NUMBER>.');
        else if ((remindSec) > 3600) return message.reply('your reminder cannot be longer than 1 hour');
        else if ((remindSec) <= 59) return message.reply('your reminder must be atleast 1 minute long.');
        else {
            message.channel.send("-- REMINDER --")
            
            let setReminder = await db.fetch(`daily_${message.author.id}`);
            if (setReminder !== null && cooldown - (Date.now() - setReminder) > 0) {

                // If user still has a cooldown
                let timeObj = ms(remindMS - (Date.now() - setReminder)); // timeObj.hours = 12
            } else {
                // Otherwise they'll get their daily
            }
        }
    }
}