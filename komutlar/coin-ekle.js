const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
   
    if (!message.member.roles.cache.has('831256637103669274')) {
        return message.reply('Yetkiniz yok.')
    }
  
    var userr = message.mentions.members.first();
    var miktar = args[1]
    
    if(!userr) return message.reply('User etiketlenmedi.')
    if(!miktar) return message.reply('Miktar girilmedi.')
    
    let user = message.mentions.members.first() || message.author;

    
  
    db.add(`shycoin_${userr.id}`, miktar)
    let bakiye = db.fetch(`shycoin_${userr.id}`)
    //message.channel.send(`${kisi} kullanıcısının yeni bakiyesi **${bakiye}** Altın.`)

    let embed = new Discord.MessageEmbed()
       .setColor('GREEN')
       .setAuthor('SHY-BANK', message.guild.iconURL())
       .addField('Coin Gönderen Yetkili:', message.author)
       .addField('Coin Gönderilen Kişi:', userr)
       .setThumbnail(message.guild.iconURL())
       .addField('Bakiye:', `**${bakiye}** Coin`)
       .setTimestamp()
	   .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
    message.channel.send(embed)
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cekle"]
};

exports.help = {
  name: 'coinekle',
  description: 'sikimsonik.',
  usage: '.coinekle user miktar'
};