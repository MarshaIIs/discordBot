const Discord = require('discord.js');

class RoleCheck {
    admin(message) {
        if (message.member.hasPermission('ADMINISTRATOR'))
            return true;
        else {
            console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED);
    
            return false;
        }
    }

    owner(message) {
        // 257866388557922314 = Marshall
        if (message.author.id == '257866388557922314')
            return true;
        else {
            console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED);
    
            return false;
        }
    }

    dnd(message) {
        if (message.member.roles.cache.some(role => role.name === 'D&D Part-Timer') || message.member.roles.cache.some(role => role.name === 'Dungeoneer') || 
        message.member.roles.cache.some(role => role.name === 'Dungeon Master') || message.member.hasPermission('ADMINISTRATOR'))
            return true;
        else {
            console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED);
    
            return false;
        }
    }

    dndDM(message) {
        if (message.member.roles.cache.some(role => role.name === 'D&D Part-Timer') || message.member.roles.cache.some(role => role.name === 'Dungeon Master') || 
        message.member.roles.cache.some(role => role.name === 'Dungeon Master') || message.member.hasPermission('ADMINISTRATOR'))
            return true;
        else {
            console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED);
    
            return false;
        }
    }

    clear(message) {
        if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.cache.some(role => role.name === 'Clear perms'))
            return true;
        else {
            console.log(`${message.author.tag} is missing permissions to perform "${this.name}" command`);
        
            const MISSING_PERMS_EMBED = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('db0606')
                .setDescription('You do not have permission to use that command!');
        
            message.channel.send(MISSING_PERMS_EMBED);
    
            return false;
        }
    }
}

module.exports = RoleCheck;