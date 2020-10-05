module.exports = {
    name: 'say',
    decription: 'Repeats the inputted text',
    
    async run (client, message, args) {
        args = message.content.split(" ").slice(1);
        if(message.content.startsWith(process.env.PREFIX + 'say')) {
            message.delete()
            var saytext = args.join(" ");

            message.channel.send(saytext)
        }
    }
}