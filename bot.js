require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION'] });
const fs = require('fs');
const talkedRecently = new Set();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./src/commands/${file}`);
    client.commands.set(command.name, command);
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

    //If the bot is ever mentioned, it will respond with a list of commands.
    // if (message.mentions.has(client.user)) {
    //     message.reply("here is a list of commands!");
    //     client.commands.get("help").run(client, message);
    // };

    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
    if (message.channel.type === 'dm' && command !== "anon") return;
    if (!client.commands.has(command)) return;

    if (talkedRecently.has(message.author.id)) {
        message.reply("you are sending too many requests! Please wait a moment.")
            .then(msg => {
                msg.delete({ timeout: 3000 })
            })
            .catch(console.error);
        }
        
    else {
        talkedRecently.add(message.author.id); // Adds the user to the set so that they can't talk for a bit

        setTimeout(() => {
        talkedRecently.delete(message.author.id); // Removes the user from the set after a minute
        }, 3000);

        console.log("Running command: " + command);
        try {
            client.commands.get(command).run(client, message, args);
        } 
        catch (error) {
            console.error(error);
        }
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);