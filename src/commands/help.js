const Discord = require('discord.js');

module.exports = {
    name: 'help',
    decription: 'This command lists all current commands.',
    type: 'general',
    usage: "help",
    
    async run (client, message, args) {
        if (channelCheck(message) == false)
            return;

        //message.reply('here is a list of commands:\n');
        //message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                          GENERAL COMMANDS                                           │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────│\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Help        List of all commands                                        Commands                     │\n│Ping        Responds with Pong!                                                                      │\n│Random‎      ‎‎‎Returns a random number between inputted number and 1.      ‎‎‎Roll, Dice, RollDice         │\n│W2G         Generates a Watch2Gether room and outputs link.             Watch2Gether, SyncVideo, SV  │\n│Strat       ‏‏‎Generates a Rainbow Six Siege Strat Roulette.               defender, attacker           │\n│Vote        Vote someone off the ship                                   Eject                        │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');
        //message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                               UTILITY                                               │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────│\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Announce    Sends a Webhook announcement in #announcements.             Announcement                 │\n│Clear       Clears inputted amount of messages.                                                      │\n│Embed       Generates an embedded messages.                                                          │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');
        //message.channel.send('\`\`\`\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                                OTHER                                                │\n├─────────────────────────────────────────────────────────────────────────────────────────────────────┤\n│NAME        DESCRIPTION                                                 ALIAS                        │\n│Foundry     ‏‏‎Outputs a foundry link.                                     Forge, VTT, Horsesmith       │\n└─────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\`\`\`');
    
        const HELP_EMBED = new Discord.MessageEmbed()
        .setTitle('Command List')
        .setColor('f04747')
        .setDescription('The prefix is set to ' + process.env.PREFIX)
        .addField('General',  process.env.PREFIX + 'help\n' + process.env.PREFIX + 'ping\n'  + process.env.PREFIX + 'random *<NUMBER>*\n' + process.env.PREFIX + 'say *<MESSAGE>*')
        .addField('Miscellaneous', process.env.PREFIX + 'strat *<A or D>*\n' + process.env.PREFIX + 'w2g *<LINK>*\n' + process.env.PREFIX + 'vote *<NAME>*')
        .addField('D&D', process.env.PREFIX + 'foundry\n' + process.env.PREFIX + 'dndstat *<MIN>*,*<MAX>*\n' + process.env.PREFIX + 'dndkey\n' + process.env.PREFIX + 'dndrand\n' + process.env.PREFIX + 'dndrand race *<RACE>*\n' + process.env.PREFIX + 'dndrand class *<CLASS>*\n')
        .addField('Utility', process.env.PREFIX + 'clear *<AMOUNT>*\n' + process.env.PREFIX + 'announce *<MESSAGE>*\n' + process.env.PREFIX + 'embed\n' + process.env.PREFIX + 'embed *<PARAM>*')
        .addField('Private Message Only', process.env.PREFIX + 'anon info\n' + process.env.PREFIX + 'anon vote *<NAME>*\n' + process.env.PREFIX + 'anon praise *<NAME>* *[MESSAGE]*\n' + process.env.PREFIX + 'anon complaint *<NAME>* *[MESSAGE]*\n' + process.env.PREFIX + 'anon undo')
        .setFooter('Feel free to suggest new features.')
        message.channel.send(HELP_EMBED);
    }
}

function channelCheck(message) {
    /* 687306978443132958 = #bot-spam
     * 624299862464135170 = #voicechat
     * 634050395336998933 = #cmd-testing
     */

    if (message.channel == '687306978443132958' || message.channel == '624299862464135170' || message.channel == '634050395336998933')
        return true;
    else {
        message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
            msg.delete({ timeout: 30000 })
        })
        .catch(console.error);
        
        return false;
    }
}