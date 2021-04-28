const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
   
    if (!message.member.roles.cache.has('831256637103669274')) {
        return message.reply('Yetkiniz yok.')
    }
  
    var userr = message.mentions.members.first();
    var miktar = args.slice(1).join(" ")
    
    
    
    let user = message.mentions.members.first() || message.author;

    
  
    db.add(`ealtin_${userr.id}`, miktar)
    let bakiye = db.fetch(`ealtin_${userr.id}`)
    //message.channel.send(`${kisi} kullanıcısının yeni bakiyesi **${bakiye}** Altın.`)

    let embed = new Discord.MessageEmbed()
       .setColor('GREEN')
       .setAuthor('BANKA', message.guild.iconURL())
       .addField('Para Gönderen Yetkili:', message.author)
       .addField('Para Gönderilen Kişi:', userr)
       .setThumbnail(message.guild.iconURL())
       .addField('Bakiye:', `**${bakiye}** Altın`)
       .setTimestamp()
	   .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pekle"]
};

exports.help = {
  name: 'paraekle',
  description: 'Etiketlenen kişinin hesabına belirttiğiniz miktarda para yatırır.',
  usage: '.paraekle @etiket miktar'
};