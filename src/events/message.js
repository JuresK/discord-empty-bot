const { MessageEmbed } = require("discord.js")
const { prefix, sahip } = require("../ayarlar.json")
const embed = require("../util/embedUtil")

module.exports = async (message) => {
  
  let client = message.client;
  
  if (message.author.bot || message.channel.type === 'dm') return;

  if (!message.content.startsWith(prefix)) return;
  let args = message.content.slice(prefix.length).trim().split(/ +/);
  let commandName = args.shift().toLocaleLowerCase();
  
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;
  
  if(command) {
    
    //enabled mesaj
    if (message.author.id !== sahip) {
      if (command.enabled === false) {
        return embed(`<@${message.author.id}> **${command.name}** İsimli Komut Sahiplerim Tarafından Deaktif Edilmiştir.`, message.channel)
      }
    }

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      if (command.userPerm === "7") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Yönetici** Yetkisine Sahip Olmalısın.`, message.channel)
      }
    }
    
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      if (command.userPerm === "6") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Sunucuyu Yönet** Yetkisine Sahip Olmalısın.`, message.channel)
      }
    }
        if (!message.member.hasPermission("BAN_MEMBERS")) {
      if (command.userPerm === "5") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Üyeleri Yasakla** Yetkisine Sahip Olmalısın.`, message.channel)
      }
    }
      if (!message.member.hasPermission("KICK_MEMBERS")) {
      if (command.userPerm === "4") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Üyeleri At** Yetkisine Sahip Olmalısın.`, message.channel)
      }
    }
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      if (command.userPerm === "3") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olmalısın.`, message.channel)
      }
    }
    
        if (!message.member.hasPermission("MANAGE_ROLES")) {
      if (command.userPerm === "2") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Rolleri Yönet** Yetkisine Sahip Olmalısın.`, message.channel)
      }
    }
    
            if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      if (command.userPerm === "1") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkisine Sahip Olmalısın.`, message.channel)
      }
    }
    
       if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
       if (command.botPerm === "7") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Yönetici** Yetkimin Olması Gerekli.`, message.channel)
      }
    }
    
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      if (command.userPerm === "2") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Rolleri Yönet** Yetkimin Olması Gerekli.`, message.channel)
      }
    }
    
           if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      if (command.botPerm === "1") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Kanalları Yönet** Yetkimin Olması Gerekli.`, message.channel)
      }
    }
    
           if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
       if (command.botPerm === "3") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkimin Olması Gerekli.`, message.channel)
      }
    }

       if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
       if (command.botPerm === "6") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Sunucuyu Yönet** Yetkimin Olması Gerekli.`, message.channel)
      }
    }
       if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
       if (command.botPerm === "5") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Üyeleri Yasakla** Yetkimin Olması Gerekli.`, message.channel)
      }
    }
      if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      if (command.botPerm === "4") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Üyeleri At** Yetkimin Olması Gerekli.`, message.channel)
      }
    }
    
  

    if (message.author.id !== message.guild.owner.id) {
      if (command.userPerm === "8") {
         return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Sunucu Sahibi** Olmalısın.`, message.channel)
      }
    }

    if (message.author.id !== sahip || sahip.includes(!message.author.id)) {
      if (command.userPerm === "DEVELOPER") {
        return embed(`<@${message.author.id}> Bu Komutu Kullanabilmek İçin **Bot Geliştiricisi** Olmalısın.`, message.channel)
      }
    }
    
  }
  
  command.run(message, args, client)
  
}
