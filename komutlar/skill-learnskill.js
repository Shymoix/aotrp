const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
   let user 

   if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }

  //skills
  let zeka = db.fetch(`guild_${message.guild.id}_stzeka_${user.id}`)
  if(zeka === null) zeka = 0;
  let hiz = db.fetch(`guild_${message.guild.id}_sthiz_${user.id}`)
  if(hiz === null) hiz = 0;
  let kuvvet = db.fetch(`guild_${message.guild.id}_stkuvvet_${user.id}`)
  if(kuvvet === null) kuvvet = 0;
  let dayaniklilik = db.fetch(`guild_${message.guild.id}_stdayaniklilik_${user.id}`)
  if(dayaniklilik === null) dayaniklilik = 0;

  let embed = new Discord.MessageEmbed()
    .setColor('blue')
    .setAuthor(`${user.tag}`, user.displayAvatarURL())
    .setTitle(`Stats System`)
    .setDescription(`**Zeka:** ${zeka} \n**Hız:** ${hiz} \n**Kuvvet:** ${kuvvet} \n**Dayanıklılık:** ${dayaniklilik}`)
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()
    .setFooter(`${message.guild.name} • Shymoix `, message.guild.iconURL())
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sk"]
};

exports.help = {
  name: 'skill',
  description: 'sikimsonik bir komut daha',
  usage: '.skill'
};