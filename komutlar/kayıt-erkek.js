const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  if (!message.member.roles.cache.has('834930705477795840')) {
    return message.reply('Yetkiniz yok.')
  } 
  let user = message.mentions.members.first();
  if(!user) return message.react('<a:uncheck:831916949641756714>')
  user.roles.add('831256637092134994').catch(console.error)
  user.roles.add('834844177677942795').catch(console.error)
  user.roles.add('831256637092134992').catch(console.error)
  user.roles.remove('831256637070508049').catch(console.error)
  message.react('<a:check:831916921389318145>')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kerkek", "erkek"]
}; 

exports.help = {
  name: 'kayıterkek',
  description: '',
  usage: '.erkek @etiket'
};