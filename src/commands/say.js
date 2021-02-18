module.exports = {
    name: 'say',
    decription: 'This command repeats the inputted message.',
    type: 'fun',
    usage: "say <MESSAGE>",
    
    async run (client, message, args) {
        contentSay = message.content.split(" ").slice(1);
        if(message.content.startsWith(process.env.PREFIX + 'say')) {
            message.delete()
            var saytext = contentSay.join(" ");

            message.channel.send(saytext)
        }
    }
}