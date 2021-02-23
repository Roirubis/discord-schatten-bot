const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("> Yapımcım : <@796134034991480852>")
    .setFooter("'My Name İs Roi. ᛘ#9639")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};