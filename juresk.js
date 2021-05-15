const Discord = require('discord.js');
const client = new Discord.Client()
const mongoose = require('mongoose');
const fs = require('fs');
const settings = require('./settings.json');
require('./util/eventLoader.js')(client)
client.commands = new Discord.Collection()

fs.readdirSync('./commands').forEach(klasor => {
  const komutklasor = fs.readdirSync(`./commands/${klasor}`).filter(x => x.endsWith('.js'))
  for(const komutlar of komutklasor) {
  let komutlarr = require(`./commands/${klasor}/${komutlar}`)
  console.log(`Komut Yüklendi: ${komutlarr.name}`)
    client.commands.set(komutlarr.name, komutlarr)
  }
})

client.login(settings.token).then(x => console.log(`Bot ${client.user.username} Adıyla Giriş Yapıldı!`)).catch(err => console.log(`Bota Giriş Yapamadı! Hata: ${err}`))
