const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

    let member = message.mentions.members.first() 
    if(!member) return message.reply("etiket girilmedi")
    let isim = args.slice(1).join(" ")
    if(!isim) return message.reply("isim girilmedi")

    if (message.member.roles.cache.has('834930705477795840') || message.member.roles.cache.has('831256637103669274')) {
        member.setNickname(`${isim}`);
        message.react('<a:check:831916921389318145>')
    }else{
        return message.reply('Yetkiniz yok.')
    }
    
    
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nick"]
};

exports.help = {
  name: 'isim',
  description: 'sikimsonik kod',
  usage: '.isim @etiket isim'
};