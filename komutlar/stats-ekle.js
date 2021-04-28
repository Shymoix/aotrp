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
    let miktar = args[2]
    if(!miktar) return message.reply("Miktar girilmedi.")

    db.add(`guild_${message.guild.id}_statlevel_${member.id}_role_${role.id}`, miktar)
    message.react('<a:check:831916921389318145>')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stekle"]
};

exports.help = {
  name: 'statsekle',
  description: 'belirlediğiniz miktarda şaapar amk yazmaya uğraşamam sikerlrer',
  usage: '.statsekle'
};