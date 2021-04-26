const Discord = require("discord.js")
const moment = require('moment')
const ms = require('ms')
const mongoose = require("mongoose");
const fs = require('fs');

module.exports = {
  name: "eval",
  aliases: [],
  userPerm: "DEVELOPER",
  botPerm: "7",
  enabled: true,
  run: async(message, args, client) => {
  try {
      let codeshare = args.join(" ");
      let code = eval(codeshare);

      if (codeshare.length < 1) return message.channel.send({ embed: { color: ayarlar.embedrenk, description: `**<@${message.author.id}> Deneyeceğin Kodu Yazmalısın!**` } })

      if (typeof code !== 'string')
        code = require('util').inspect(code, { depth: 0 });
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField('» Kod', `\`\`\`js\n${codeshare}\`\`\``)
        .addField('» Sonuç', `\`\`\`js\n${code}\n\`\`\``)
        .setTimestamp()
      message.channel.send(embed)
    } catch (x) {
      let embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField('» Hata', "\`\`\`js\n" + x + "\n\`\`\`")
        .setTimestamp()
      message.channel.send(embed2);
    }
  }
}
