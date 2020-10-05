module.exports = {
    name: 'foundry',
    decription: 'Respons to m!foundry and m!vtt with a link to FoundryVTT',
    
    async run (client, message, args) {
        if(message.member.roles.cache.has('680067187423051802') || message.member.roles.cache.has('753243379919355935') || message.member.roles.cache.has('753246465547305122') ) {
            message.reply('https://horsesmith.eu.forge-vtt.com/');
        } 
        
        else {
            message.reply('You\'re not a Dungeoneer!');
       }
    }
}