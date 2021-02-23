const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
////////////OtoCevap

client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "tag") {
    msg.channel.sendMessage("**TagınızıYaz**");
  }
});
//////////////////////////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "m!tag") {
    msg.channel.sendMessage("**TagınızıYaz**");
  }
});
/////////////////////////////////////

client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "!tag") {
    msg.channel.sendMessage("**TagınızıYaz**");
  }
});

/////////////////Sa-As
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave:  ** "
    );
  }
});

////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  :wave: ** "
    );
  }
});
////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
///////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  :wave: ** "
    );
  }
});

////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamlar") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  :wave: ** "
    );
  }
});
//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamunaleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
/////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "SelamunAleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});

//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
//////////https://discord.gg/NP7Ar2j
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "link") {
    msg.reply(
      "**DiscordDavetLinkiniKoy ** "
    );
  }
});

client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "!link") {
    msg.reply(
      "**DiscordDavetLinkiniKoy ** "
    );
  }
});


//--------------------------------KOMUTLAR-------------------------------\\
//TAG ALANA ROL
client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = 'Kobs'//Tagınızı Koyun
  const sunucu = 'Sunucuİd'//Sunucu İD
  const kanal = 'Logkanalid'//Log Kanal İD
  const rol = 'TagAlanaVerilecekRolİd'//Rol İd

  try {

  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim!`)
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım!`)
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});


//HG MESAJI
client.on('guildMemberAdd', (member, msg) => {
    const moment = require('moment')
      let günler = {
        "0": "Pazar",
        "1": "Pazartesi",
        "2": "Salı",
        "3": "Çarşamba",
        "4": "Perşembe",
        "5": "Cuma",
        "6": "Cumartesi",
      }
        let aylar = {
              "01": "Ocak",
              "02": "Şubat",
              "03": "Mart",
              "04": "Nisan",
              "05": "Mayıs",
              "06": "Haziran",
              "07": "Temmuz",
              "08": "Ağustos",
              "09": "Eylül",
              "10": "Ekim",
              "11": "Kasım",
              "12": "Aralık"
      }
    let endAt = member.user.createdAt
        let gün = moment(new Date(endAt).toISOString()).format('DD')
        let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
       let yıl =  moment(new Date(endAt).toISOString()).format('YYYY')
       let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
  let kuruluş = `${gün} ${ay} ${yıl} ${saat}`
     // let kuruluş = moment(user.author.createdAt).format('YYYY-MM-DD HH:mm:ss')
      //let kuruluş = user.createdAt.toDateString().replace("Sun","Pazar").replace("Mon","Pazartesi").replace("Tue","Salı").replace("Wed","Çarşamba").replace("Thu","Perşembe").replace("Fri","Cuma").replace("Sat","Cumartesi").replace("Jan","Ocak").replace("Feb","Şubat").replace("Mar","Mart").replace("Apr","Nisan").replace("May","Mayıs").replace("June","Haziran").replace("July","Temmuz").replace("Aug","Ağustos").replace("Sep","Eylül").replace("Oct","Ekim").replace("Nov","Kasım").replace("Dec","Aralık")   
      let oskobs = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<a:797596279369629706:810564553820733460>** <@${member.id}> Aramıza Hoşgeldin Seninle Birlikte** \`${member.guild.memberCount}\` **Üyeye Ulaştık** \n<a:797596279369629706:810564553820733460>**YETKİLİ ŞARTLARIMIZ.**\n<a:797596279369629706:810564553820733460>** YAŞINIZ +16 OLMAK ZORUNDADIR**\n<a:797596279369629706:810564553820733460>**NİCK'İNİZ OYUNDAKİ NİCKİNİZE GÖRE AYARLANIR**\n<a:797596279369629706:810564553820733460>**SAYGI CERCEVESİNDE OLMAK ZORUNDASINIZ.**\n<a:797596279369629706:810564553820733460>**<@&805426871340498944> Adı Rolüne Sahip Kişiler Kayıt İşlemlerinle İlgilenecektir**\n<a:797596279369629706:810564553820733460>**NİCK PW NİZİ KİMSEYLE PAYLAŞMAYINIZ**\n<a:797596279369629706:810564553820733460>**TEAM WİEWER ŞART**\n <a:797596279369629706:810564553820733460> **Hesap Kuruluş Tarihi :** \`${kuruluş}\``)
  .setImage("https://cdn.discordapp.com/attachments/756969726034313406/762304211446005770/giphy.gif")  
  client.channels.cache.get("805138869225390130").send(oskobs)//kanalid
  })
  



client.on("roleDelete", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  if(!entry.executor.hasPermission('ROLE_DELETE')) {
      role.guild.roles.create({
    name: role.name,
    color: role.hexColor,
    permissions: role.permissions
  });
   let emran = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle(`Bir rol silindi !`)
   .setDescription(`Silinen rol adı ${role.name}, Rol koruma sistemi açık olduğu için rol geri oluşturuldu!`)
   client.channels.cache.get(kanal).send(emran)
  }
});



///////////
client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})

client.on("roleDelete", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  if(!entry.executor.hasPermission('ROLE_DELETE')) {
      role.guild.roles.create({
    name: role.name,
    color: role.hexColor,
    permissions: role.permissions
  });
   let emran = new Discord.MessageEmbed()
   .setColor('0x36393E')
   .setTitle(`Bir rol silindi !`)
   .setDescription(`Silinen rol adı ${role.name}, Rol koruma sistemi açık olduğu için rol geri oluşturuldu!`)
   client.channels.cache.get(kanal).send(emran)
  }
});


//----------------------------LİNK ENGEL ----------------------------------------------------||
//----------------------------LİNK ENGEL ----------------------------------------------------||
//----------------------------LİNK ENGEL ----------------------------------------------------||

client.on("message", async  msg => {
 var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
    if (mayfe == 'acik') {
        const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (birisireklammidedi.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (mayfe == 'kapali') {
      
    }
    if (!mayfe) return;
  })
  ;

//----------------------------LİNK ENGEL SON----------------------------------------------------||
//----------------------------LİNK ENGEL SON----------------------------------------------------||
//----------------------------LİNK ENGEL SON----------------------------------------------------||
const antispam = require("discord-anti-spam-tr");
//istediğiniz yere ekleyin bot.js de
antispam(client, {
  uyarmaSınırı: 3, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 3, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 1000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.", // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
  rolMesajı: "Spam için yasaklandı, başka biri var mı?", //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 3, //Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 6, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 4, // Spamdan sonraki zaman
  rolİsimi: "★ |  Chat Mute" // Spam Atan Kullanıcılar Verilecek Röl
});
//codeworld

client.on("message", m => {
  if (m.channel.id !== "804002458434142308") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});