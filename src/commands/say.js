const SAY_JSON = require("../database/say/say_revolt.json");

module.exports = {
    name: 'say',
    decription: 'This command repeats the inputted message.',
    type: 'fun',
    usage: 'say <MESSAGE>',
    
    async run (client, message, args) {
        let contentSay = message.content.split(" ").slice(1);
        let sayText    = contentSay.join(" ");

        if (revolt(message, sayText) == false) {
            return;
        }
        
        message.delete().catch(error => {
            message.reply(`an error has occurred: \n${error}`)
        });
        message.channel.send(sayText)
    }
}

function revolt(message) {
    // if ID = Rapidzz + AND not admin (change AND to OR to make it work on all but admins + rapidzz)
    if (message.author.id == '141233046648127488' && !message.member.hasPermission('ADMINISTRATOR')) {
    //if (true) { //for debug
        const RAND_PCT = Math.floor(Math.random() * 100);
        console.log(`RAND_PCT: ${RAND_PCT}`)
        
        if (RAND_PCT < 10) {
            let   fileElement = SAY_JSON.revolt;
            const RAND_NUM    = Math.floor(Math.random() * fileElement.length);
            let elementGenned = fileElement[RAND_NUM];
    
            console.log(`   Array Length:  ${fileElement.length}`);
            console.log(`   Random Number: ${RAND_NUM}`);
            console.log(`   Element Title: ${elementGenned.msg}`);

            if (elementGenned.files != undefined) {
                message.reply(elementGenned.msg, { files: elementGenned.files })
                .catch(error => {
                    message.reply(`an error has occurred: \n${error}`)
                });

                return false;
            }
            else {
                message.reply(elementGenned.msg);
                
                return false;
            }
        }
        else
            return true;
    }
    else
        return true;
}