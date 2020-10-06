const Discord = require('discord.js');

module.exports = {
    name: 'help',
    decription: 'Lists all current commands.',
    
    async run (client, message, args) {
        //message.reply('here is a list of commands:\n');
        //message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                          GENERAL COMMANDS                                           │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────│\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Help        List of all commands                                        Commands                     │\n│Ping        Responds with Pong!                                                                      │\n│Random‎      ‎‎‎Returns a random number between inputted number and 1.      ‎‎‎Roll, Dice, RollDice         │\n│W2G         Generates a Watch2Gether room and outputs link.             Watch2Gether, SyncVideo, SV  │\n│Strat       ‏‏‎Generates a Rainbow Six Siege Strat Roulette.               defender, attacker           │\n│Vote        Vote someone off the ship                                   Eject                        │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');
        //message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                               UTILITY                                               │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────│\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Announce    Sends a Webhook announcement in #announcements.             Announcement                 │\n│Clear       Clears inputted amount of messages.                                                      │\n│Embed       Generates an embedded messages.                                                          │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');
        //message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                                OTHER                                                │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────┤\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Foundry     ‏‏‎Outputs a foundry link.                                     Forge, VTT, Horsesmith       │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Command List')
        .setColor('FEFEFE')
        .setDescription('The prefix is set to ' + process.env.PREFIX + '.')
        .addField('General',  process.env.PREFIX + 'help\n' + process.env.PREFIX + 'ping\n'  + process.env.PREFIX + 'say\n' + process.env.PREFIX + 'random')
        .addField('Miscellaneous', process.env.PREFIX + 'strat\n' + process.env.PREFIX + 'w2g\n' + process.env.PREFIX + 'vote\n' + process.env.PREFIX + 'foundry')
        .addField('Utility', process.env.PREFIX + 'clear\n' + process.env.PREFIX + 'announce\n' + process.env.PREFIX + 'embed')
        .setFooter('You can suggest new commands on the GitHub.')
        message.channel.send(embed);
    }
}