module.exports = {
    name: 'ping',
    decription: 'Respons to m!ping command with "Pong".',
    
    execute(message, args) {
        message.channel.send('Pong!');

    }
}