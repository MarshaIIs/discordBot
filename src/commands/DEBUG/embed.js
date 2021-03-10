const Discord = require('discord.js');
const Role = require('../utility/validation/roleCheck.js');
const RoleCheck = new Role;

module.exports = {
    name: 'embed',
    decription: 'Creates an embedded message.',
    type: 'utility',
    
    async run (client, message, args) {
        if (RoleCheck.admin(message) === false)
            return;

        let strArr = [];
        

        // `m` is a message object that will be passed through the filter function
        const filter = m => m.content.includes('1') || m.content.includes('2');
        const collector = message.channel.createMessageCollector(filter, { time: 30000 });

        collector.on('collect', m => {
            
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });


        
    }
}

function embedKey() {
    const embed = new Discord.MessageEmbed()
            .setTitle("This is your title, it can hold 256 characters")
            .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
            /*
            * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
            */
            .setColor('f04747')
            .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
            .setImage("http://i.imgur.com/yVpymuV.png")
            .setThumbnail("http://i.imgur.com/p2qNFag.png")
            /*
            * Takes a Date object, defaults to current date.
            */
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/v12/class/MessageEmbed")
            .addFields({ name: "This is a field title, it can hold 256 characters",
                value: "This is a field value, it can hold 1024 characters."})
            /*
            * Inline fields may not display as inline if the thumbnail and/or image is too big.
            */
            .addFields({ name: "Inline Field", value: "They can also be inline.", inline: true })
            /*
            * Blank field, useful to create some space.
            */
            .addFields({ name: '\u200b', value: '\u200b' })
            .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});
        
            message.channel.send(embed);
}