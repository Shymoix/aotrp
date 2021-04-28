const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
   
    let cmiktar = args[0]
    let cdeger = db.fetch(`coindeger_${message.guild.id}`)
    let altin = cmiktar * cdeger;
    let cbakiyeold = db.fetch(`shycoin_${message.author.id}`)

    if(!cmiktar) return message.reply('Ne kadar coin bozduracaksın?')
    if(cdeger === null) return message.channel.send(`Coin değeri ayarlı olmadığı için coinini bozamam. Üzgünüm ${message.author}.`)
    if (message.content.includes('-')) {
        return message.channel.send('IQ seviyeni değil göndereceğin miktarı yaz.')
    }

    if (cmiktar > cbakiyeold) {
        return message.channel.send(`Yetersiz Bakiye.`)
    }
    
  
    db.subtract(`shycoin_${message.author.id}`, cmiktar)
    db.add(`ealtin_${message.author.id}`, altin)
    let cbakiye = db.fetch(`shycoin_${message.author.id}`)
    let abakiye = db.fetch(`ealtin_${message.author.id}`)
    //message.channel.send(`${kisi} kullanıcısının yeni bakiyesi **${bakiye}** Altın.`)

    let embed = new Discord.MessageEmbed()
       .setColor('GREEN')
       .setAuthor('SHY-BANK', message.guild.iconURL())
       .addField('Bozdurulan Coin Sayısı:', cmiktar)
       .addField('Hesaba Aktarılan Coin:', altin)
       .setThumbnail(message.guild.iconURL())
       .addField('Yeni Coin Bakiyesi:', `**${cbakiye}** Coin`)
       .addField('Yeni Altın Bakiyesi:', `**${abakiye}** Altın`)
       .setTimestamp()
	   .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
    message.channel.send(embed)
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cbozdur"]
};

exports.help = {
  name: 'coinbozdur',
  description: 'sikimsonik.',
  usage: '.coinbozdur'
};