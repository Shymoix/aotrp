const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
  if (!message.member.roles.cache.has('831256637103669274')) {
    return message.reply('Yetkiniz Yok.');
}
  let member = message.mentions.members.first();
  if(!member) return message.reply("User etiketlenmedi.")
  

    db.delete(`shycoin_${member.id}`);
    message.react('<a:check:831916921389318145>')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["csıfırla"]
};

exports.help = {
  name: 'coinsıfırla',
  description: 'coin sıfırlar',
  usage: '.coinsıfırla'
};