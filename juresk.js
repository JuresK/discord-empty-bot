const { Client, Collection } = require("discord.js");
const settings = require("./src/configs/settings.json");
const client = (global.client = new Client({ fetchAllMembers: true }));
client.commands = new Collection();
client.cooldown = new Map();
require("./src/handlers/mongoHandler")(client);

client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot başarıyla başlandı!"))
  .catch(() => console.log("[BOT] Bot bağlanamadı!"));
