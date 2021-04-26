const Discord = require("discord.js")

module.exports = async (mesaj,kanal) => {

if(!mesaj) throw Error('Mesaj Girilmemiş!')
if(!kanal) throw Error('Kanal Girilmemiş!')
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(mesaj)

  kanal.send(embed)
} 
