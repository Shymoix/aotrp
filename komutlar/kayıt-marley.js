const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  
    if (!message.member.roles.cache.has('834930705477795840')) {
        return message.reply('Yetkiniz yok.')
    }
    let user = message.mentions.members.first();
    if(!user) return message.react('<a:uncheck:831916949641756714>');
    user.roles.add('833715363740516392').catch(console.error)
    message.react('<a:check:831916921389318145>')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mrl"]
}; 

exports.help = {
  name: 'marley',
  description: '',
  usage: '.marley @etiket'
};