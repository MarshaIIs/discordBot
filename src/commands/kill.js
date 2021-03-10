const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

module.exports = {
    name: 'kill',
    decription: 'This command shuts down the bot.',
    type: 'utility',
    usage: "kill",
    
    async run (client, message, args) {
        if (RoleCheck.owner(message) === false)
            return;

        message.channel.send('Stopping bot...').then(() => {
            process.exit();
        })
    }
}