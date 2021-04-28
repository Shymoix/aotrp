const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    
    if (!message.member.roles.cache.has('831256637103669274')) {
        return message.reply('Yetkiniz Yok.')
    }
   
   let bankisi = message.mentions.members.first();
   let banlayan = message.author;
   
   if(bankisi.id === '292341554343837696'){
    return message.channel.send('Onu atmaya benim bile gücüm yetmez ya')
  }
   if(bankisi.roles.cache.has('831256637103669274')){
      return message.channel.send('Bu insancıkları atamam.')
   }
   
    message.guild.member(bankisi).kick()
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/725820682835066914/835777240859410462/kick.gif"]})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kick", "at"]
};

exports.help = {
  name: 'tekmele',
  description: 'etiketlenen kişi sunucudan atar.',
  usage: '.hgkanal'
};