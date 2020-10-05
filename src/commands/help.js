module.exports = {
    name: 'help',
    decription: 'Lists all current commands.',
    
    async run (client, message, args) {
        message.reply('here is a list of commands:\n');
        message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                          GENERAL COMMANDS                                           │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────│\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Help        List of all commands                                        Commands                     │\n│Ping        Responds with Pong!                                                                      │\n│Random‎      ‎‎‎Returns a random number between inputted number and 1.      ‎‎‎Roll, Dice, RollDice         │\n│W2G         Generates a Watch2Gether room and outputs link.             Watch2Gether, SyncVideo, SV  │\n│Strat       ‏‏‎Generates a Rainbow Six Siege Strat Roulette.               defender, attacker           │\n│Vote        Vote someone off the ship                                   Eject                        │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');

        message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                               UTILITY                                               │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────│\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Announce    Sends a Webhook announcement in #announcements.             Announcement                 │\n│Clear       Clears inputted amount of messages.                                                      │\n│Embed       Generates an embedded messages.                                                          │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');

        message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                                OTHER                                                │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────┤\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Foundry     ‏‏‎Outputs a foundry link.                                     Forge, VTT, Horsesmith       │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');
    }
}