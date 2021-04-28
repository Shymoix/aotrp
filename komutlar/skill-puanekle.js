const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (!message.member.roles.cache.has('831256637103669274')) {
    return message.reply('Yetkiniz yok.')
  }
  let user = message.mentions.users.first()
  if(!user) return message.react('<a:uncheck:831916949641756714>')
  let miktar = args[1]
  if(!miktar) return message.react('<a:uncheck:831916949641756714>')
  db.add(`guild_${message.guild.id}_statspuan_${user.id}`, miktar)

  let embed = new Discord.MessageEmbed()
       .setColor('#ffff00')
       .setAuthor('Stats System', message.guild.iconURL())
       .addField('Hesap:', user)
       .addField('Eklenen Puan:', `**${miktar}** Stats Puan`)
       .setTimestamp()
	     .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', user.displayAvatarURL())
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["skpekle"]
};

exports.help = {
  name: 'skillpuanekle',
  description: 'sikimsonik bir komut daha',
  usage: '.statpuanekle'
};