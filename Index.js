const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const moment = require('moment');
const client = new Client();

client.PREFIX = PREFIX;

client.commands = new Collection();
client.on("ready", () => require("./commands/ready.js") (client));
client.on("message", => require("./commands/message.js") (client, message));
client.on("help", () => require("./commands/help.js") (client, message));
client.on("bot.info", () => require("./commands/botinfo.js") (client, message));
client.on("user.info", () => require("./commands/userinfo.js) (client, message));
client.on("serveur.info", () => require("./commands/serveurinfo.js") (client, message));
client.on("supp.message", () => require("./commands/suppmessage.js") (client, message));
client.on("smile", () => require("./commands/smile.js") (client, message));


client.login(TOKEN)