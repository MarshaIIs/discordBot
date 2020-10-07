const Discord = require('discord.js')

module.exports = {
    name: "amongus",
    description: "Crewmates must find and vote out the Imposter!",

    async run (client, message, args) {
        

        class Player {
            constructor(user){
                this.user = user
                this.isDead = false;
                this.isImposter = false;
                this.hasVoted = false;
        
            }
        }

        class GameSession {

            //Game session class. Contains voiceChannel in which the game is based (voice channel that the calling player is sitting in)
            //TODO: Add exception for if the calling player is NOT in a voice channel.

            constructor() {
              this.caller = message.author;
              this.voiceChannel = message.guild.member(message.author.id).voice.channel;

              //array of instances of Player class
              this.players = [];
            }

            init(){
                //Init method, called to set up the game and assign roles

                //VoiceChannel.members returns Collection<Snowflake, GuildMember>, so we need to pull both out on iteration 
                for ( let [snowflake, guildMember] of this.voiceChannel.members ){

                    //Create player class out of the members of voice channel and add them to players[]
                    var player = new Player(guildMember.user)
                    this.players.push(player)

                }


                //Rand assign imposter from players array
                const RAND = Math.floor(Math.random() * this.players.length);
                this.players[RAND].isImposter = true;
                this.imposter = this.players[RAND];

                //Spit out results
                console.log("Game initiated:")
                console.log("Caller: " + this.caller.username + " (" + this.caller.id + ")")
                console.log("Voice channel: " + this.voiceChannel.name + " (" + this.voiceChannel.id + ")")
                console.log("--------------------------------------------------------------")

                console.log("Imposter: \n" + this.imposter.user.username + " (" + this.imposter.user.id +")")
                console.log("")

                console.log("Players:")
                this.players.forEach(player => {
                    console.log(player.user.username + " (" + player.user.id + ")")
                })
  
            }

            startVoting(){

            }

        }

        const Game = new GameSession();
        Game.init();
        Game.imposter.user.send("You are the imposter!")
        Game.startVoting()

        

 
        

    
        
        
    
          
    }
}