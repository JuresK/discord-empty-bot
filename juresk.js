const Discord = require('discord.js');
const client = new Discord.Client()
const mongoose = require('mongoose');
const fs = require('fs');
const ayarlar = require('./ayarlar.json');
require('./util/eventLoader.js')(client)
mongoose.connect(ayarlar.mongoURL,{useNewUrlParser: true , useUnifiedTopology: true}).then((result) => console.log('Mongo Bağlantısı Kuruldu.')).catch((err) => console.log(err))
client.commands = new Discord.Collection()

fs.readdirSync('./commands').forEach(klasor => {
  const komutklasor = fs.readdirSync(`./commands/${klasor}`).filter(x => x.endsWith('.js'))
  for(const komutlar of komutklasor) {
  let komutlarr = require(`./commands/${klasor}/${komutlar}`)
  console.log(`Komut Yüklendi: ${komutlarr.name}`)
    client.commands.set(komutlarr.name, komutlarr)
  }
})


client.login(ayarlar.token).then(x => console.log(`Bot ${client.user.username} Adıyla Giriş Yaptı!`)).catch(err => console.log(`Giriş Yapamadı! Hata: ${err}`))
