const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {

    let user 

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
      user = message.author;
    }
   
    //db.add(`guild_${message.guild.id}_stats_${message.author.id}_role_${role.id}`, 1)

    //let role = message.mentions.roles.first()
    //if(!role) return message.reply(`Stats rolünü etiketlemediniz.`)


    let akamedik = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800208369582101'}`)
    if(akamedik == null) akamedik = 0
    if(akamedik < 0) akamedik = 0
    let atbin = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800209314217985'}`)
    if(atbin == null) atbin = 0
    if(atbin < 0) atbin = 0
    let atcilik = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800212618149959'}`)
    if(atcilik == null) atcilik = 0
    if(atcilik < 0) atcilik = 0
    let devav = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800213592146000'}`)
    if(devav == null) devav = 0
    if(devav < 0) devav = 0
    let duellocu = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800220152299520'}`)
    if(duellocu == null) duellocu = 0
    if(duellocu < 0) duellocu = 0
    let egitimci = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800245291778098'}`)
    if(egitimci == null) egitimci = 0
    if(egitimci < 0) egitimci = 0
    let empati = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800278423633952'}`)
    if(empati == null) empati = 0
    if(empati < 0) empati = 0
    let farindalik = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800240724443227'}`)
    if(farindalik == null) farindalik = 0
    if(farindalik < 0) farindalik = 0
    let gizlilik = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800244600766575'}`)
    if(gizlilik == null) gizlilik = 0
    if(gizlilik < 0) gizlilik = 0
    let gozlem = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800280008949760'}`)
    if(gozlem == null) gozlem = 0
    if(gozlem < 0) gozlem = 0
    let hirsiz = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800274878660640'}`)
    if(hirsiz == null) hirsiz = 0
    if(hirsiz < 0) hirsiz = 0
    let ilim = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800285587505223'}`)
    if(ilim == null) ilim = 0
    if(ilim < 0) ilim = 0
    let irade = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800303253651546'}`)
    if(irade == null) irade = 0
    if(irade < 0) irade = 0
    let kiskirtma = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800305493409882'}`)
    if(kiskirtma == null) kiskirtma = 0
    if(kiskirtma < 0) kiskirtma = 0
    let muhabbet = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800308076445746'}`)
    if(muhabbet == null) muhabbet = 0
    if(muhabbet < 0) muhabbet = 0
    let odm = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800309024882729'}`)
    if(odm == null) odm = 0
    if(odm < 0) odm = 0
    let tplanlama = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833800311838605333'}`)
    if(tplanlama == null) tplanlama = 0
    if(tplanlama < 0) tplanlama = 0
    let ydovus = db.fetch(`guild_${message.guild.id}_statlevel_${user.id}_role_${'833801923106701342'}`)
    if(ydovus == null) ydovus = 0
    if(ydovus < 0) ydovus = 0
    
    //if(stats == null) stats = 0

    //message.channel.send(`${message.author}, ${role} adlı statınız: ${stats}`)

  let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${user.tag}`, user.displayAvatarURL())
    .setTitle(`Stats System`)
    .setThumbnail(message.guild.iconURL())
    .setDescription(`**Akademik:** ${akamedik} \n**At Biniciliği:** ${atbin} \n**Atıcılık:** ${atcilik} \n**Dev Avcılığı:** ${devav} \n**Düelloculuk:** ${duellocu}\n**Eğitimcilik:** ${egitimci} \n**Empati:** ${empati} \n**Farkındalık:** ${farindalik} \n**Gizlilik:** ${gizlilik} \n**Gözlem:** ${gozlem} \n**Hırsızlık:** ${hirsiz} \n**İlim:** ${ilim} \n**İrade:** ${irade} \n**Kışkırtma:** ${kiskirtma} \n**Muhabbet:** ${muhabbet} \n**Manevra Teçhizatı Becerisi:** ${odm} \n**Taktiksel Planlama:** ${tplanlama} \n**Yakın Dövüş:** ${ydovus}`)
    .setTimestamp()
    .setFooter(`${message.guild.name} • Shymoix `, message.guild.iconURL())
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stats"]
};

exports.help = {
  name: 'stats',
  description: 'stats gösterir',
  usage: '.stats @role'
};