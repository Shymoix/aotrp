const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
   
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  
    let money = await db.fetch(`ealtin_${user.id}`)
    if (money === null) money = 0;
      
    //message.channel.send(`${user}, Bakiyeniz **${money}** Altın`)

    let embed = new Discord.MessageEmbed()
       .setColor('#ffff00')
       .setAuthor('BANKA', message.guild.iconURL())
       .addField('Hesap Sahibi:', user)
       .setThumbnail(message.guild.iconURL())
       .addField('Bakiye:', `**${money}** Altın`)
       .setTimestamp()
	   .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', user.displayAvatarURL({dynamic: true, size: 1024}))
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b"]
};

exports.help = {
  name: 'bakiye',
  description: 'Bankadaki altını gösterir',
  usage: '.bakiye'
};