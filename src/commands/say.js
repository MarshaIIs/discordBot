module.exports = {
    name: 'say',
    decription: 'This command repeats the inputted message.',
    type: 'fun',
    usage: 'say <MESSAGE>',
    
    async run (client, message, args) {
        let contentSay = message.content.split(" ").slice(1);
        let saytext = contentSay.join(" ");
        
        message.delete()
        message.channel.send(saytext)
    }
}