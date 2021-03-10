const Discord = require('discord.js');
const MARSHALL = '257866388557922314'

class RoleCheck {
    admin(message, cmdName) {
        if (message.member.hasPermission('ADMINISTRATOR'))
            return true;
        else {
            console.log(`ERROR Missing Permissions: ${message.author.tag} cannot run ${cmdName} in ${message.channel.name}.`);
            message.delete()
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED)
            .then(msg => {
                msg.delete({ timeout: 10000 })
            })
            .catch(console.error);
    
            return false;
        }
    }

    owner(message, cmdName) {
        // 257866388557922314 = Marshall
        if (message.author.id == MARSHALL)
            return true;
        else {
            console.log(`ERROR Missing Permissions: ${message.author.tag} cannot run ${cmdName} in ${message.channel.name}.`);
            message.delete()
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED)
            .then(msg => {
                msg.delete({ timeout: 10000 })
            })
            .catch(console.error);
    
            return false;
        }
    }

    dnd(message, cmdName) {
        if (message.member.roles.cache.some(role => role.name == 'D&D Part-Timer') || message.member.roles.cache.some(role => role.name == 'Dungeoneer') || 
        message.member.roles.cache.some(role => role.name == 'Dungeon Master') || message.member.hasPermission('ADMINISTRATOR'))
            return true;
        else {
            console.log(`ERROR Missing Permissions: ${message.author.tag} cannot run ${cmdName} in ${message.channel.name}.`);
            message.delete()
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED)
            .then(msg => {
                msg.delete({ timeout: 10000 })
            })
            .catch(console.error);
    
            return false;
        }
    }

    dndDM(message, cmdName) {
        if (message.member.roles.cache.some(role => role.name == 'D&D Part-Timer') || message.member.roles.cache.some(role => role.name == 'Dungeon Master') || 
        message.member.roles.cache.some(role => role.name == 'Dungeon Master') || message.member.hasPermission('ADMINISTRATOR'))
            return true;
        else {
            console.log(`ERROR Missing Permissions: ${message.author.tag} cannot run ${cmdName} in ${message.channel.name}.`);
            message.delete()
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED)
            .then(msg => {
                msg.delete({ timeout: 10000 })
            })
            .catch(console.error);
    
            return false;
        }
    }

    clear(message, cmdName) {
        if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.cache.some(role => role.name == 'Clear perms'))
            return true;
        else {
            console.log(`ERROR Missing Permissions: ${message.author.tag} cannot run ${cmdName} in ${message.channel.name}.`);
            message.delete()
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED)
            .then(msg => {
                msg.delete({ timeout: 10000 })
            })
            .catch(console.error);
    
            return false;
        }
    }
}

module.exports = RoleCheck;