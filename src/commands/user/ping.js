const Discord = require('discord.js')

module.exports = {
  name: "ping",
  aliases: ['p'],
  userPerm: "0",
  botPerm: "0",
  enabled: true,
  run: async(message, args, client) => {
    message.channel.send(`${client.ws.ping}ms!`)
  }
}
