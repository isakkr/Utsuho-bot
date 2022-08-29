const { version } = require("discord.js");
const moment = require("moment");
const { EmbedBuilder } = require('discord.js');
require("moment-duration-format");

exports.run = (client, message) => {
    const dur = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
    const usr = client.users.cache.size
    const ser = client.guilds.cache.size
    const chn = client.channels.cache.size
    const ver = version
    let description = "\`\`\`asciidoc\n";
    description += "V Memory usage :: " + mem + "MB\n";
    description += "|       Uptime :: " + dur + "\n";
    description += "|      Servers :: " + ser + "\n";
    description += "|        Users :: " + usr + "\n";
    description += "|     Channels :: " + chn + "\n";
    description += "|   Discord.js :: " + "v" + ver + "\n";
    description += "\`\`\`";
   
    const exampleEmbed = new EmbedBuilder()
	.setColor(2515024)
	.setTitle('☢ My statistics!')
	.setDescription(description)
	.setTimestamp()
	.setFooter({ text: 'Bran from Isak ⚠'});

   message.channel.send({ embeds: [exampleEmbed] });
}