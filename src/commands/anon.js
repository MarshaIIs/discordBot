const Discord = require('discord.js')

module.exports = {
    name: 'anon',
    decription: 'This command sends an anonymous message to Marshall#0002. This command must be sent in a DM to the bot.',
    type: 'dm',
    args: true,
    usage: "anon info \nanon vote <NAME> \nanon praise <NAME> [MESSAGE] \nanon complaint <NAME> [MESSAGE] \nanon undo",
    
    async run (client, message, args) {
        // Length of the word "anon " thats in the message. Used to calculate the abstract message parts of the different commands.
        const COMMANDLEN = 6;
        anonMessage = args
        anonArgsLowCap = args[0].toLowerCase();

        if (anonArgsLowCap == "vote" || anonArgsLowCap == "praise" || anonArgsLowCap == "complaint" || anonArgsLowCap == "undo" || anonArgsLowCap == "info") {

            if (anonArgsLowCap == "vote" && args[1] !== '' && args[1] !== ' ' && args[1] !== undefined) {
                    anonVoteAuthor = message.author.username;
                    anonVoteMessage = message.content.slice(1).substr(COMMANDLEN + args[0].length)

                    message.author.send("You have voted for " + anonVoteMessage + "! This has been forwarded to the DM.")

                    const anonVoteDM = new Discord.MessageEmbed()
                        .setTitle("VOTE")
                        .setColor('474747')
                        .setDescription("**"+ anonVoteAuthor + "** voted for **" + anonVoteMessage + "**!")
                        .setTimestamp()        
                    client.users.cache.get('257866388557922314').send(anonVoteDM);
            }

            else if (anonArgsLowCap == "complaint" && args[1] !== '' && args[1] !== ' ' && args[1] !== undefined) {
                anonComplaintAuthor = message.author.username;
                anonComplaintInstigator = args[1];
                anonComplaintMessage = message.content.slice(1).substr(COMMANDLEN + args[0].length + args[1].length + 1);

                message.author.send("Your feedback has been forwarded to the DM regarding **" + anonComplaintInstigator + "**. The content of the complaint is as follows:\n**" + anonComplaintMessage + "**\n\nYour identity is anonymous. The matter will be dealt with discretely and delicately.")

                const anonComplaintDM = new Discord.MessageEmbed()
                    .setTitle("COMPLAINT")
                    .setColor('8F0000')
                    .setDescription("**||"+ anonComplaintAuthor + "||** submitted a **complaint** regarding **" + anonComplaintInstigator + "**!\nThe complaint given was:\n**" + anonComplaintMessage + "**")
                    .setTimestamp()        
                client.users.cache.get('257866388557922314').send(anonComplaintDM);
            }

            else if (anonArgsLowCap == "praise" && args[1] !== '' && args[1] !== ' ' && args[1] !== undefined) {
                anonPraiseAuthor = message.author.username;
                anonPraiseInstigator = args[1];
                anonPraiseMessage = message.content.slice(1).substr(COMMANDLEN + args[0].length + args[1].length + 1);

                message.author.send("Your feedback has been forwarded to the DM regarding **" + anonPraiseInstigator + "**. The content of the praise is as follows:\n**" + anonPraiseMessage + "**\n\nYour identity is anonymous. The matter will be dealt with discretely and delicately.")

                const anonPraiseDM = new Discord.MessageEmbed()
                    .setTitle("PRAISE")
                    .setColor('008F00')
                    .setDescription("**||"+ anonPraiseAuthor + "||** submitted **praise** regarding **" + anonPraiseInstigator + "**!\nThe praise given was:\n**" + anonPraiseMessage + "**")
                    .setTimestamp()        
                client.users.cache.get('257866388557922314').send(anonPraiseDM);
            }

            else if (anonArgsLowCap == "undo") {
                message.author.send("Your last action was undone.")
                const anonUndoMsg = new Discord.MessageEmbed()
                    .setTitle("UNDO")
                    .setColor('FF7000')
                    .setDescription("**"+ message.author.username + "** has requested an **UNDO** of their last action.")
                    .setTimestamp()        
                client.users.cache.get('257866388557922314').send(anonUndoMsg);
            }

            else if (anonArgsLowCap == "info") {
                const anonInfoMsg = new Discord.MessageEmbed()
                .setTitle("The Anonymous command")
                .setColor('0xffffff')
                .setDescription("The **" + process.env.PREFIX + "anon** command was created with the purpose of giving everyone the opportunity to provide feedback, regarding anyone or anything, anonymously. Furthermore, the command was created to allow players to vote anonymously (on whatever topic) if a need arises.")
                .addFields({ name: process.env.PREFIX + "info",
                    value: "This command displays this current message, which is an overview of all the available commands."})
                .addFields({ name: process.env.PREFIX + "vote",
                    value: "This command requires 1 argument, which can be any **message**. An example of this command is \"" + process.env.PREFIX + "anon vote I would rather play golf than Tennis\" or \"" + process.env.PREFIX + "anon vote Baldur's Gate or Waterdeep: Dragon Heist\""})
                .addFields({ name: process.env.PREFIX + "praise",
                    value: "This command requires 1 argument and has 1 optional argument. The first argument is the **name** of the player the feedback is aimed for, and the second argument can be any **message**. An example of this command is \"**" + process.env.PREFIX + "anon praise Dennis He is a really cool guy, and deserves praise.\"**"})
                .addFields({ name: process.env.PREFIX + "complaint",
                value: "This command requires 1 argument and has 1 optional argument. The first argument is the **name** of the player the feedback is aimed for, and the second argument can be any **message**. An example of this command is \"**" + process.env.PREFIX + "anon complaint Dennis He may be a cool guy, but he is a bit TOO cool. Makes me feel uncool... :(.\"**"})
                .addFields({ name: process.env.PREFIX + "undo",
                    value: "This command sends a request to the database containing all the actions performed (votes and feedbacks) and undoes your latest action."})
                message.author.send(anonInfoMsg);
            }

            else {
                message.author.send("Error! Incorrect format! For a more detailed explanation and examples, do **" + process.env.PREFIX + "anon info**");
            }
        }

        else {
            message.author.send("Error! That is not a valid command! The valid commands are:\n" + process.env.PREFIX + "**anon vote** \n" + process.env.PREFIX + "**anon praise** \n" + process.env.PREFIX + "**anon complaint** \n" + process.env.PREFIX + "**anon undo** \n" + process.env.PREFIX + "**anon info**\n\nFor a more detailed explanation and examples, do **" + process.env.PREFIX + "anon info**")
        }
    }
}