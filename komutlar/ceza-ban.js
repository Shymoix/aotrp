const Discord = require('discord.js');

exports.run = (client, message, args) => {
   
    if (!message.member.roles.cache.has('831256637103669274')) {
        return message.reply('Yetkiniz Yok.')
    }
   
   let bankisi = message.mentions.members.first();
   let banlayan = message.author;
   
   if(bankisi.id === '292341554343837696'){
    return message.channel.send('Onu banlamaya benim bile gücüm yetmez ya')
  }
   if(bankisi.roles.cache.has('831256637103669274')){
      return message.channel.send('Bu insancıkları banyalayamam.')
   }
   
    message.guild.member(bankisi).ban()
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/832311269859000370/832313375982878780/tenor.gif"]})
   //client.channels.get('721437532176253009').send(`**${bankisi}** adlı kullanıcı sunucudan yasaklandı. Banlayan Kişi: ${message.author}`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasakla"]
};

exports.help = {
  name: 'ban',
  description: 'Etkiketlenen kullanıcıyı banlar.',
  usage: '.ban'
};