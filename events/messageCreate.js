module.exports = (client, message) => {
    
    // Ignore all bots
    if (message.author.bot) return;
    //talk event i guess
    switch(message.content.toLowerCase()){
		case "bran":
			message.channel.send("<:unyu:1012816853820780584>");
			break;
        case "know is bran":
        message.channel.send("<:unyu:1012816853820780584>")
        break;
	}
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If the command doen't exist
    if (!cmd) {
        return message.channel.send("nub");
    };
  
    // Run the command
    cmd.run(client, message, args);
  };