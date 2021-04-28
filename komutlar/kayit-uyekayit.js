const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    message.channel.send(`*${message.author}* **Ses Teyit** kanalına geçip bekleyiniz. **<@&831256637103669269>** yetkilileri sizinle en kısa süerede ilgilenecektir.`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt"]
};

exports.help = {
  name: 'kayit',
  description: 'kayıt komutu',
  usage: '.kayıt'
};