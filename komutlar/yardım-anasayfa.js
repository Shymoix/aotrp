const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    let yardimmenu = new Discord.MessageEmbed()
        .setTitle(`**ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ Yardım Menüsü**`)
        .setDescription(`<:coolpanda:835789708864520232> **RP Komutları:** *.rpyardım* \n<:pika2:835790602972037140> **Moderatör Komutları:** *.modyardım* \n<:coolpanda:835789708864520232> **Ekonomi Komutları:** *.ecoyardım* \n<:pika2:835790602972037140> **Eğlence Komutları:** *.funyardım*`)
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
	    .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
        message.channel.send(yardimmenu)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"]
};

exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Açar',
  usage: '.yardım'
};