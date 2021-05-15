module.exports = {
  conf: {
    aliases: ["help"],
    name: "yardım",
  },

  run: async (client, message, args, embed, prefix) => {
    let list = client.commands
      .filter((x) => x.conf.help)
      .sort((a, b) => b.conf.help - a.conf.help)
      .map((x) => `\`${prefix}${x.conf.help}\``)
      .join("\n");

    message.channel.send(embed.setDescription(list));
  },
};
