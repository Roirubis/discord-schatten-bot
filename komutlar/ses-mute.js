const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = (client, message, args) => {
  
    if (!message.member.roles.cache.get("804011049821011999")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`<@804011049821011999>*\` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
let kullanici = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!kullanici) return message.channel.send("Lütfen susturulacak kişiyi belirtiniz.")
  if(kullanici.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Benden yetkili birini susturamam.");
  if (kullanici.id === message.author.id) return message.channel.send("Kendinizi susturamazsınız.");
  
    let süre = args[1]
  if(!süre) return message.channel.send("Lütfen doğru bir zaman dilimi giriniz. Örneğin: ***.ses-mute @kişi 1s/m/h/d sebep**");
  let sebep = args[2]
  if (!sebep) return message.channel.send("Lütfen bir sebep giriniz. Örneğin: ***.ses-mute @kişi 1s/m/h/d sebep**");
     let embed =  new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .setDescription(` ${süre} süreliğine  tarafından ${sebep} sebebiyle susturuldu!`)
              .setColor("RANDOM");
  kullanici.voice.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre} ms`)
        .then(() => message.channel.send(embed)).catch(console.error);
        setTimeout(() => {
 kullanici.voice.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`)
          let sembed =  new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(` üyesinin, ${süre} sürelik susturulması, otomatik olarak kaldırıldı.`)
                .setColor("RANDOM");
        message.channel.send(sembed)

    }, ms(süre))
}
exports.conf = {
      name: 'seslisustur',
    enabled: true,
    guildOnly: true,
    aliases: ["sescezası", "sesli-sustur"],
    permLevel: 0
};

exports.help = {
    name: 'ses-mute',
    description: 'seslide sustur',
    usage: "seslisustur"
};
﻿