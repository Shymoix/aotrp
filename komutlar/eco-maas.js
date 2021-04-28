const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
   
  let role = message.mentions.roles.first()
  let rolesize = message.guild.members.cache.filter(m=> m.roles.cache.has(role.id))
  let rololan = rolesize.map(member => `${member.id}`)
  let miktar = args.slice(1).join(' ')
  let i;
  
  if (!message.member.roles.cache.has('831256637103669274')) {
        return message.reply('Yetkiniz Yok.')
    }
  
  if(!miktar){
    return message.reply("Miktarı Girmediniz.")
  }
  
  for(i = 0; i < rolesize.size; i++){
    db.add(`ealtin_${rololan[i]}`, miktar)
  }
  
  message.channel.send(`${role} Rolüne sahip kişilere **${miktar}** Altın yatırıldı. 🙂`)
  let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('BANKA', message.guild.iconURL())
    .setDescription(`**${role}** rolüne sahip olan kullanıcalara **${miktar}** Altın verildi.`)
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()
    .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL({dynamic: true, size: 1024}))

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["maas"]
};

exports.help = {
  name: 'maaş',
  description: 'Maaş system',
  usage: '.maaş @rol miktar'
};