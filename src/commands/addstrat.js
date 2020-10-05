var fs = require("fs");

module.exports = {
    name: "addstrat",
    description: "Adds strats to the stratroullette command. Accepts text input or TXT file input (dev only).",

    async run (client, message, args) {
        if (args[0] === "inputfile"){
            var text = fs.readFileSync("src/database/strats/" + args[1]).toString('utf-8');
            var textByLine = text.split("\n");

            var data = fs.readFileSync('src/database/strats/strats.json');
            var json = JSON.parse(data);

            textByLine.forEach(stratText => {
                stratSubs = stratText.split(": ")
                stratTitle = stratSubs[0]
                stratBody = stratSubs[1]


                if (args[2][0] === "a"){
                    json.strats.atk.push({title: stratTitle, body: stratBody});  
                }
                else if (args[2][0] ==="d"){
                    json.strats.def.push({title: stratTitle, body: stratBody});
                         
                }
                else {
                    message.reply("Please provide a valid team! Either **Attacker** or **Defender**!")
                }
                
                fs.writeFile("src/database/strats/strats.json", JSON.stringify(json), function(err, result) {
                    if(err) console.log('error', err);
                })
            })
        }
    }
}