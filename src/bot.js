require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION']});
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
    client.user.setPresence({
        status: 'idle',  // online, idle, dnd
        activity: {
            name: 'you... \👀',  // The message shown
            type: 'WATCHING' // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot || message.channel.type === 'dm') return;

    const [command, ...args] = message.content
    .toLowerCase()
    .trim()
    .substring(process.env.PREFIX.length)
    .split(/\s+/);

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).run(client, message, args);
    } 
    
    catch (error){
        console.error(error);
    }
})

client.on('guildMemberAdd', member => {
    let myRole = member.guild.roles.cache.get("753252632327618560", "616801682881511464", "623922931638206474");
    member.roles.add(myRole).catch(console.error);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);