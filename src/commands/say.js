module.exports = {
    name: 'say',
    decription: 'This command repeats the inputted message.',
    type: 'fun',
    usage: 'say <MESSAGE>',
    
    async run (client, message, args) {
        let contentSay = message.content.split(" ").slice(1);
        let sayText    = contentSay.join(" ");
        
        message.delete().catch(error => {
            message.reply(`an error has occurred: \n${error}`)
        });
        message.channel.send(sayText)
    }
}