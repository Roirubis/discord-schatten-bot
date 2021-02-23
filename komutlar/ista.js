const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`»  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`» Yapımcım` ,`<@796134034991480852>`,true)
  .addField(`» Node.js`, `${process.version}`, true)
 .addField(`» Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`» Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`» Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Destek Sunucusu](discord.gg/aresta)`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 