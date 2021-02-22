const Discord = require('discord.js');
const Fs = require("fs");

// if this breaks, I changed "var fs = require(...)" to "const fs = ..."

module.exports = {
    name: "addstrat",
    description: "This command adds strats to the Stratroullette command. The command accepts text input or a .txt file.",
    type: 'utility',
    args: true,
    usage: '<file> <team>',

    async run (client, message, args) {
        if (channelCheck(message) === false)
            return;
        if (roleCheck(message) == false) 
            return;

        if (args[0] === "inputfile") {
            let text = Fs.readFileSync("src/database/strats/" + args[1]).toString('utf-8');
            let textByLine = text.split("\n");

            const JSON_DATA = Fs.readFileSync('src/database/strats/strats.json');
            let json = JSON.parse(JSON_DATA);

            textByLine.forEach(stratText => {
                stratSubs  = stratText.split(": ")
                stratTitle = stratSubs[0]
                stratBody  = stratSubs[1]


                if (args[2][0] === "a") {
                    json.strats.atk.push({title: stratTitle, body: stratBody});  
                }
                else if (args[2][0] ==="d") {
                    json.strats.def.push({title: stratTitle, body: stratBody});     
                }
                else {
                    message.reply('the proper usage is ' + process.env.PREFIX + 'strat <_team_>.')
                }
                
                Fs.writeFile("src/database/strats/strats.json", JSON.stringify(json), function(err, result) {
                    if (err) console.log('error', err);
                })
            })
        }
    }
}

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if (message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933') {
        return true;
    }
    else {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}

function roleCheck(message) {
    if (message.member.hasPermission('ADMINISTRATOR'))
        return true;
    else {
        console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
    
        MISSING_PERMS_EMBED = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('db0606')
            .setDescription('You do not have permission to use that command!');
    
        message.channel.send(MISSING_PERMS_EMBED);

        return false;
    }
}