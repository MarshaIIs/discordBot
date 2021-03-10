const Discord = require('discord.js');
const Fs = require("fs");
const Channel = require('../utility/validation/channelCheck.js');
const CheckChannel = new Channel;
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

// if this breaks, I changed "var fs = require(...)" to "const fs = ..."

module.exports = {
    name: "addstrat",
    description: "This command adds strats to the Stratroullette command. The command accepts text input or a .txt file.",
    type: 'utility',
    args: true,
    usage: '<file> <team>',

    async run (client, message, args) {
        if (CheckChannel.default(message, this.name) === false)
            return;
        if (RoleCheck.admin(message, this.name) === false) 
            return;

        if (args[0] == "inputfile") {
            let text = Fs.readFileSync("src/database/strats/" + args[1]).toString('utf-8');
            let textByLine = text.split("\n");

            const JSON_DATA = Fs.readFileSync('src/database/strats/strats.json');
            let json = JSON.parse(JSON_DATA);

            textByLine.forEach(stratText => {
                stratSubs  = stratText.split(": ")
                stratTitle = stratSubs[0]
                stratBody  = stratSubs[1]


                if (args[2][0] == "a") {
                    json.strats.atk.push({title: stratTitle, body: stratBody});  
                }
                else if (args[2][0] == "d") {
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