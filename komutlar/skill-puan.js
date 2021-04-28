const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {

    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

   let puan = db.fetch(`guild_${message.guild.id}_statspuan_${user.id}`)

   if(puan === null) puan = 0;

   let embed = new Discord.MessageEmbed()
       .setColor('#ffff00')
       .setAuthor('Stats System', message.guild.iconURL())
       .addField('Hesap:', user)
       .addField('Puan:', `**${puan}** Skill Puan`)
       .setTimestamp()
	   .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', user.displayAvatarURL())
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["skpuan"]
};

exports.help = {
  name: 'skillpuan',
  description: 'sikimsonik bir komut daha',
  usage: '.statspuan'
};