module.exports = {
    name: 'kill',
    decription: 'This command shuts down the bot.',
    type: 'utility',
    usage: "kill",
    
    async run (client, message, args) {
        if (roleCheck(message) == false)
            return;

        message.channel.send('Stopping bot...').then(() => {
            process.exit();
        })
    }
}

function roleCheck(message) {
    if (message.member.hasPermission('ADMINISTRATOR'))
        return true;
    else {
        console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
    
        MISSING_PERMS_EMBED = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('db0606')
            .setDescription('You do not have permission to use that command!');
    
        message.channel.send(MISSING_PERMS_EMBED);

        return false;
    }
}