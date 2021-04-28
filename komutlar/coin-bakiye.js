const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
   
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  
    let coin = await db.fetch(`shycoin_${user.id}`)
    if (coin === null) coin = 0;

    let embed = new Discord.MessageEmbed()
       .setColor('#ffff00')
       .setAuthor('SHY-BANK', message.guild.iconURL())
       .addField('Hesap Sahibi:', user)
       .setThumbnail(message.guild.iconURL())
       .addField('Bakiye:', `**${coin}** Coin`)
       .setTimestamp()
	   .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', user.displayAvatarURL())
    message.channel.send(embed)

   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cbakiye"]
};

exports.help = {
  name: 'coinbakiye',
  description: 'sikimsonik.',
  usage: '.coinbakiye'
};