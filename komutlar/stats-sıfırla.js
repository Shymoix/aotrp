const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
  if (!message.member.roles.cache.has('831256637103669274')) {
    return message.reply('Yetkiniz Yok.');
}
  let member = message.mentions.members.first();
  if(!member) return message.reply("User etiketlenmedi.")
  let role = message.mentions.roles.first();
  if(!role) return message.reply("Rol etiketlenmedi");
  

    db.delete(`guild_${message.guild.id}_stats_${member.id}_role_${role.id}`);
    message.react('<a:check:831916921389318145>')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["statss"]
};

exports.help = {
  name: 'statsıfırla',
  description: 'statsları sıfırlar',
  usage: '.statsıfırla'
};