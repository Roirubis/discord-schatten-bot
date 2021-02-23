const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz**')
    return message.author.send(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
      if (!message.member.roles.cache.has("805426871340498944"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`Registery\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2];
  if (!member) return message.channel.send("❌ Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send("❌ Bir İsim Yazmalısın!");
  if (!yaş) return message.channel.send("❌ Yaş Yazmalısın.");
  member.setNickname(`𓆰 ${isim}   | ${yaş}`);
  
  const embed = new Discord.MessageEmbed()
    .addField(
      `**🏷 İsim Değiştirildi 🏷**`,
      `\n \n**🔸️İsmi Değiştirilen Kullanıcı:** ${member.user} \n🔸️ **Yeni Kullanıcı Adı:** \`${isim}\``
    )
    .setFooter(`Kullanan: ${message.author.username}`)
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};
//Crew Code
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick", "isim"],
  permLevel: 0
};
exports.help = {
  name: "nick",
  description: "Birinin nickini değiştirir.",
  usage: "nick <yeni nick>"
};