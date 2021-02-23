const Discord = require('discord.js');


exports.run = (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Bunu kullanamazsınız!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Doğru izinlere sahip değilim.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Lütfen bir kullanıcı belirtin');

        if(!member) return message.channel.send('Bu kullanıcıyı bulamıyor gibi görünüyor. Bunun için üzgünüm: /');
        if(!member.bannable) return message.channel.send('Bu kullanıcı yasaklanamaz. Ya bir mod / yönetici oldukları için ya da en yüksek rolleri benimkinden daha yüksek');

        if(member.id === message.author.id) return message.channel.send('Bruh, kendini yasaklayamazsın!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Belirtilmemiş';

        member.ban({reason:`${reason}`})
        .catch(err => {
            if(err) return message.channel.send('Bir şeyler yanlış gitti')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('<a:gifstore_ban:778983038436245534> Üye Yasaklandı <a:gifstore_ban:778983038436245534>')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('<a:arestayildiz:797602161801953291> Kullanıcı Yasaklandı', member)
        .addField('<a:sag2:797596274610143302> Tarafından atıldı', message.author)
        .addField('<a:aresta_nah:800664637221240842> Sebebi', reason)
        .setFooter('<a:aspstr:797596279369629706> Kullanıcı Banlandı', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ban'],
    permLevel: 0
};

exports.help = {
    name: 'ban',
    description: 'Ban ',
    usage: 'ban'
};