class PUL {

  constructor(options) {
    if (!options.token) throw new TypeError('Missing argument: token')
    if (typeof options.token !== 'string') throw new TypeError('token must be in a string')
    if (!options.message) throw new TypeError('Missing argument: message')
   
    this.message = options.message;
    this.token = options.token;

  }
  async start(args) {
    const fetch = require("node-fetch")
    const Discord = require('discord.js');
    const msg = await this.message.channel.send("WARNING : Might Contain offensive content!")
    fetch(`https://api.dagpi.xyz/data/pickupline`, {
      headers: {
        "Authorization": this.token
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.joke)
        msg.edit(`**${data.joke}**`)
      })
  }
}

module.exports = PUL;
