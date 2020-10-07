const Discord = require('discord.js')

module.exports = {
    name: "amongus",
    description: "Crewmates must find and vote out the Imposter!",

    async run (client, message, args) {
        
        class GameSession {

            //Game session class. Contains voiceChannel in which the game is based (voice channel that the calling player is sitting in)
            //TODO: Add exception for if the calling player is NOT in a voice channel.

            constructor() {
              this.caller = message.author;
              this.voiceChannel = message.guild.member(message.author.id).voice.channel;

              this.players = [];
              this.imposter = {};
            }

            init(){
                //Init method, called to set up the game and assign roles

                //VoiceChannel.members returns Collection<Snowflake, GuildMember>, so we need to pull both out on iteration 
                for ( let [snowflake, guildMember] of this.voiceChannel.members ){
                     this.players.push(guildMember.user)
                }


                //Rand assign imposter from players array
                const RAND = Math.floor(Math.random() * this.players.length);
                this.imposter = this.players[RAND];

                //Spit out results
                console.log("Game initiated:")
                console.log("Caller: " + this.caller.username + " (" + this.caller.id + ")")
                console.log("Voice channel: " + this.voiceChannel.name + " (" + this.voiceChannel.id + ")")
                console.log("--------------------------------------------------------------")

                console.log("Imposter: \n" + this.imposter.username + " (" + this.imposter.id +")")
                console.log("")

                console.log("Players:")
                this.players.forEach(player => {
                    console.log(player.username + " (" + player.id + ")")
                })


                
            }

        }

        const Game = new GameSession();
        Game.init();

 
        

    
        
        
    
          
    }
}