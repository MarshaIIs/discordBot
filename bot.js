require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION'] });
const Fs = require('fs');
const TALKED_RECENTLY = new Set();

client.commands = new Discord.Collection();
const COMMAND_FILES = Fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));

for (const file of COMMAND_FILES) {
    const COMMAND = require(`./src/commands/${file}`);
    client.commands.set(COMMAND.name, COMMAND);
};

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
    client.user.setPresence({
        status: 'dnd',  // online, idle, dnd
        activity: {
            name: 'you... \👀',  // The message shown
            type: 'WATCHING' // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
});

client.on('message', async (message) => {
    //Message splitter. Splits message into two different categories, the "command" and the "argument". This is extrapolated from "message.content"
    const [command, ...args] = message.content
    //.toLowerCase()
    //.trim()
    .substring(process.env.PREFIX.length)
    .split(/\s+/);

    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot)
        return;
    if (message.channel.type === 'dm' && command !== "anon")
        return;
    if (!client.commands.has(command))
        return;

    if (message.member.hasPermission('ADMINISTRATOR')) {
        console.log(`ADMIN ${message.author.tag} running command: ${command}`);

        try {
            client.commands.get(command).run(client, message, args);
        } 
        catch (error) {
            console.error(error);
        }
    }
    else {
        if (TALKED_RECENTLY.has(message.author.id)) {
            message.reply("you are sending too many requests! Please wait a moment.")
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
                .catch(console.error);
        }
        else {
            TALKED_RECENTLY.add(message.author.id); // Adds the user to the set so that they can't talk for a bit

            setTimeout(() => {
            TALKED_RECENTLY.delete(message.author.id); // Removes the user from the set after a minute
            }, 3000);

            console.log(`${message.author.tag} Running command: ${command}`);
            
            try {
                client.commands.get(command).run(client, message, args);
            } 
            catch (error) {
                console.error(error);
            }
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);