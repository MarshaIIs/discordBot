const axios = require("axios");

module.exports = {
    name: 'w2g',
    decription: 'Automatically generates a Watch2Gether link.',
 
    async run (client, message, args) {
        console.log(args[0])
        axios.post("https://w2g.tv/rooms/create.json", { "w2g_api_key": process.env.w2gKey, "share":args[0] })
        .then(res => {
            console.log(res.data);
            message.channel.send("https://w2g.tv/rooms/" + res.data.streamkey + "?lang=en");
        })
        .catch(error => {
            if (error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                message.channel.send("Woops. Seems an error occured here: " + error.response.status)
            }

            else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                message.channel.send("I asked the server for a W2G room but received no response...")
                } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error: ', error.message);
                message.channel.send("An unknown error occured!")
            }
        });
    }
}