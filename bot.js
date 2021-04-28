const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'
const client = new Discord.Client();
const Canvas = require("canvas");
const canvacord = require("canvacord");
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const db = require('quick.db');
const fs = require('fs');
const moment = require('moment');
const { white } = require('chalk');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
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
    } catch (e){
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
    } catch (e){
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
    } catch (e){
      reject(e);
    }
  });
};

//stats system offline

//let statsch = message.guild.channels.cache.get(db.fetch(`statsch_${message.guild.id}`))
//  const randomNumber = Math.floor(Math.random() * 1) + 1
//  let role = message.mentions.roles.first()
//  db.add(`guild_${message.guild.id}_stats_${message.author.id}_role_${role.id}`, randomNumber)
//  db.add(`guild_${message.guild.id}_statstotal_${message.author.id}_role_${role.id}`, randomNumber)
//  var level = db.get(`guild_${message.guild.id}_level_${message.author.id}_role_${role.id}`)
//  var xp = db.get(`guild_${message.guild.id}_stats_${message.author.id}_role_${role.id}`)
//  var xpNeeded = level * 2500
//  if(xpNeeded < xp){
//    var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
//    db.subtract(`guild_${message.guild.id}_stats_${message.author.id}_role_${role.id}`, xpNeeded)
//    statsch.send(`${role} yeteneğin gelişti! Yetenek seviyen: ${level}`)
//  }


function xp(message){
  if(message.content.startsWith(prefix)) return;
  if(msg.author.bot) return;
  const args = msg.content
  let role = message.mentions.roles.first()
  db.add(`guild_${message.guild.id}_stats_${message.author.id}_role_${role.id}`, args.length)
  
}

client.on('message', message => {
  if(!message.channel.id == '832315847003340850') return;
  if(message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  let role = message.mentions.roles.first()
  if(!role) return;
  let statsch = message.guild.channels.cache.get(db.fetch(`statsch_${message.guild.id}`))
  const args = message.content
  db.add(`guild_${message.guild.id}_stats_${message.author.id}_role_${role.id}`, args.length - 14)
  let statsLevel = db.get(`guild_${message.guild.id}_statlevel_${message.author.id}`)
  if(statsLevel === null) statsLevel = 1
  let stats = db.get(`guild_${message.guild.id}_stats_${message.author.id}_role_${role.id}`)
  let statsNeeded = statsLevel * 2500
  if(statsNeeded < stats){
    var newStatLevel = db.add(`guild_${message.guild.id}_statlevel_${message.author.id}_role_${role.id}`, 1)
    db.subtract(`guild_${message.guild.id}_stats_${message.author.id}_role_${role.id}`, statsNeeded)
    db.add(`guild_${message.guild.id}_statspuan_${message.author.id}`, 1)
    statsch.send(`${message.author} tebrikler, ${role} stats seviyen yükseldi! Yeni seviyesi ${newStatLevel}`)
  }

});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
  
 

});

client.elevation = message => {
  if(!message.guild) {
	return; }
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

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


//mod log
const botadi = "AOT ROLEPLAY"

client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`banlog_${guild.id}`)
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} • Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
  let modlogs = db.get(`banlog_${guild.id}`)
   const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir kişinin yasağı kaldırıldı")
     .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
     .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
     .setFooter(`${botadi} • Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });


 client.on('channelCreate', async channel => {
  let modlogs = db.get(`modlog_${channel.guild.id}`)
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     if (channel.type === "text") {
       let embed = new Discord.MessageEmbed()
       .setColor("#fffa00")
       .setAuthor("Bir Kanal Oluşturuldu")
       .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
       .addField(`Oluşturulan Kanalın Türü : `, `Yazı`)
       .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
       .setFooter(`${botadi} • Mod-Log Sistemi`)
       .setTimestamp()
       modlogkanal.send(embed)
     }
       if (channel.type === "voice") {
       
         let embed = new Discord.MessageEmbed()
         .setColor("#fffa00")
         .setAuthor("Bir Kanal Oluşturuldu")
         .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
         .addField(`Oluşturulan Kanalın Türü : `, `Ses`)
         .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
         .setFooter(`${botadi} • Mod-Log Sistemi`)
         .setTimestamp()
         modlogkanal.send(embed)
 
 
     }
 }});

 client.on('channelDelete', async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
let modlogs = db.get(`modlog_${channel.guild.id}`)
const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
if(!modlogs) return;
if(modlogs) {
if (channel.type === "text") {
let embed = new Discord.MessageEmbed()
.setColor("#fffa00")
.setAuthor("Bir Kanal Silindi")
.addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
.addField(`Silinen Kanalın Türü : `, `Yazı`)
.addField(`Kanalı Silen : `, `<@${user.id}>`)
.setFooter(`${botadi} • Mod-Log Sistemi`)
.setTimestamp()
modlogkanal.send(embed)
}
  if (channel.type === "voice") {

    let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor("Bir Kanal Silindi")
    .addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
    .addField(`Silinen Kanalın Türü : `, `Ses`)
    .addField(`Kanalı Silen : `, `<@${user.id}>`)
    .setFooter(`${botadi} • Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
   }
  }
});

client.on('roleDelete', async role => {
  let modlogs =  db.get(`modlog_${role.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir Rol Silindi")
     .addField(`Silinen Rolün İsmi : `, `${role.name}`)
     .addField(`Rolü Silen : `, `<@${user.id}>`)
     .setFooter(`${botadi} • Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
 
 client.on('emojiDelete', async emoji => {
  let modlogs = db.get(`modlog_${emoji.guild.id}`)
  let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir Emoji Silindi")
     .addField(`Silinen Emojinin İsmi : `, `${emoji.name}`)
     .addField(`Emojiyi Silen : `, `<@${user.id}>`)
     .setFooter(`${botadi} • Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
  

 client.on('roleCreate', async role => {
  let modlogs =  db.get(`modlog_${role.guild.id}`)
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Rol Oluşturuldu")
      .addField(`Oluşturulan Rolün İsmi : `, `${role.name}`)
      .addField(`Rolü Oluşturan : `, `<@${user.id}>`)
      .setFooter(`${botadi} • Mod-Log System`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });
  
  
  client.on('emojiCreate', async emoji => {
   let modlogs = db.get(`modlog_${emoji.guild.id}`)
   let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Emoji Oluşturuldu")
      .addField(`Oluşturulan Emojinin İsmi : `, `${emoji.name}`)
      .addField(`Emoji Silen : `, `<@${user.id}>`)
      .setFooter(`${botadi} • Mod-Log System`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });

//MESAJ LOG
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot || newMessage.channel.type === "dm") return;
  if (newMessage.content.startsWith(prefix)) return;
  let sc = await db.fetch(`msjlog_${newMessage.guild.id}`);
  let scbul = newMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  if (oldMessage.content == newMessage.content) return;
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Düzenlendi`, newMessage.author.avatarURL())
    .addField("Kullanıcı", newMessage.author)
    .addField("Eski Mesaj", "```" + oldMessage.content + "```")
    .addField("Yeni Mesaj", "```" + newMessage.content + "```")
    .addField("Kanal Adı", newMessage.channel.name)
    .addField("Mesaj ID", newMessage.id)
    .addField("Kullanıcı ID", newMessage.author.id)
    .setFooter(`${botadi} • Mesaj Log System • bügün saat ${newMessage.createdAt.getHours()}:${newMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on("messageDelete", async deletedMessage => {
  if (deletedMessage.author.bot || deletedMessage.channel.type === "dm") return;
  if (deletedMessage.content.startsWith(prefix)) return;
  let sc = await db.fetch(`msjlog_${deletedMessage.guild.id}`);
  let scbul = deletedMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Silindi`, deletedMessage.author.avatarURL())
    .addField("Kullanıcı", deletedMessage.author)
    .addField("Silinen Mesaj", "```" + deletedMessage.content + "```")
    .addField("Kanal Adı", deletedMessage.channel.name)
    .addField("Mesaj ID", deletedMessage.id)
    .addField("Kullanıcı ID", deletedMessage.author.id)
    .setFooter(`${botadi} • Mesaj Log System • bügün saat ${deletedMessage.createdAt.getHours()}:${deletedMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on("guildMemberAdd", async member => {
 member.roles.add('831256637070508049').catch(console.error)
 db.add(`guild_${member.guild.id}_statlevel_${message.author.id}`, 1)

 var gckanal = member.guild.channels.cache.get(db.fetch(`gclog_${member.guild.id}`))
 var hgkanal = member.guild.channels.cache.get(db.fetch(`hgknl_${member.guild.id}`))
 
 let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor('Sunucuya Yeni Birisi Geldi!', member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .addField('Sunucuya gelen kişi:', member)
    .setFooter(`${botadi} • Mod-Log System`)
    .setTimestamp()
 gckanal.send(embed);

 let embed2 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor('Sunucuya Hoşgeldin!', member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setDescription(`${member} sunucuya hoşgeldin dostum! **Ses Teyit** kanallarına girerek <#831256637314170932> kanalına !kayıt yazıp bekleyiniz.`)
    .setFooter(`${botadi} • shymoix `)
    .setTimestamp()
 hgkanal.send(embed2);


});

client.on("guildMemberRemove", async member => {

  var gckanal = member.guild.channels.cache.get(db.fetch(`gclog_${member.guild.id}`))
 
 let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor('Sunucudan Birisi Çıkışı!', member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .addField('Sunucudan Ayrılan Kişi:', member)
    .setFooter(`${botadi} • Mod-Log System`)
    .setTimestamp()
 gckanal.send(embed);

})

const devkanalids = ["831256642267250760", "831256641146978371", "831256642267250758", "831256641898414119", "831256641898414118", "835405314086010890"]
const devMetreler = ["3 Metre", "5 Metre", "7 Metre", "9 Metre", "12 Metre", "15 Metre"]

setInterval(() => {
  let devkanal = devkanalids[Math.floor(Math.random() * devkanalids.length)]
  let devmetre = devMetreler[Math.floor(Math.random() * devMetreler.length)]
  client.channels.cache.get(devkanal).send(`Civarlarda ${devmetre} boyutlarında dev gözüktü!`)
  }, 3600000)


client.login(ayarlar.token);
