// Require the necessary discord.js classes
const { Client, GatewayIntentBits} = require('discord.js');
const Enmap = require("enmap");
const config = require("./config.json");
const fs = require("fs");
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.config = config;
const files = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');

});
for (const file of files) {
	const eventName = file.split(".")[0];
	// Require the file
	const event = require(`./events/${file}`);
	client.on(eventName, event.bind(null, client));
  }
  client.commands = new Enmap();
  for (const file of commands) {
	// Get the command name from splitting the file
	const commandName = file.split(".")[0];
	// Require the file
	const command = require(`./commands/${file}`);
  
	console.log(`Attempting to load command ${commandName}`);
	// Set the command to a collection
	client.commands.set(commandName, command);
  }
// Login to Discord with your client's token
client.login(config.token);