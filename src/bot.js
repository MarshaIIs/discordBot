require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION']});
const fs = require('fs');

const { Client, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN,
    );

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
    client.user.setPresence({
        status: 'idle',  // You can show online, idle... Do not disturb is dnd
        activity: {
            name: '%help',  // The message shown
            type: 'WATCHING' // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
});

client.on('message', async (message) => {
  // if (message.author.bot) return;
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

  const [command, ...args] = message.content
    .toLowerCase()
    .trim()
    .substring(process.env.PREFIX.length)
    .split(/\s+/);

    if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
    
    } else if (command === 'foundry' || command === 'vtt' || command === 'forge' || command ===  'horsesmith' ){
      client.commands.get('foundry').execute(message, args);
    
    } else if (command === 'announce' || command === 'announcement'){
        if (!message.member.hasPermission('ADMINISTRATOR'))
            return message.reply("You do not have permissions to use that command");
        console.log(args);
        const msg = args.join(' ');
        console.log(msg);
        webhookClient.send(msg);

    } else if (command === 'embed'){
        client.commands.get('embed').execute(message, args);

    } else if (command === 'strat'){
        client.commands.get('strat').execute(message, args);
      
    } else if (command === 'w2g' || command === 'watch2gether' || command === 'sv' || command === 'syncvideo' ){
        client.commands.get('w2g').execute(message, args);
      
    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
      
    } else if (command === 'random'){
        client.commands.get('random').execute(message, args);
      
    } else if (command === 'help' || command === 'commands'){
        client.commands.get('help').execute(message, args);

    } else if (command === 'vote' || command === 'eject'){
        client.commands.get('vote').execute(message, args);
    }
  });


// client.on('messageReactionAdd', (reaction, user) => {
//   const { name } = reaction.emoji;
//   const member = reaction.message.guild.members.cache.get(user.id);
//   if (reaction.message.id === '738666523408990258') {
//     switch (name) {
//       case '🍎':
//         member.roles.add('738664659103776818');
//         break;
//       case '🍌':
//         member.roles.add('738664632838782998');
//         break;
//       case '🍇':
//         member.roles.add('738664618511171634');
//         break;
//       case '🍑':
//         member.roles.add('738664590178779167');
//         break;
//     }
//   }
// });

// client.on('messageReactionRemove', (reaction, user) => {
//   const { name } = reaction.emoji;
//   const member = reaction.message.guild.members.cache.get(user.id);
//   if (reaction.message.id === '738666523408990258') {
//     switch (name) {
//       case '🍎':
//         member.roles.remove('738664659103776818');
//         break;
//       case '🍌':
//         member.roles.remove('738664632838782998');
//         break;
//       case '🍇':
//         member.roles.remove('738664618511171634');
//         break;
//       case '🍑':
//         member.roles.remove('738664590178779167');
//         break;
//     }
//   }
// });

client.login(process.env.DISCORDJS_BOT_TOKEN);
