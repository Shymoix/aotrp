const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
   
  let user = message.mentions.members.first() 
        let role = message.mentions.roles.first()

        let member = db.fetch(`altin_${message.author.id}`)
        let miktar = args[1]

        if (!user) {
          if(!role){
            return message.channel.send('Parayı kime atacaksın?')
          }

          //for()

        }
        if (!miktar) {
            return message.channel.send('Göndereceğiniz miktarı giriniz')
        }
        if (message.content.includes('-')) {
            return message.channel.send('IQ seviyeni değil göndereceğin miktarı yaz.')
        }

        if (member > miktar) {
            return message.channel.send(`Yetersiz Bakiye.`)
        }

        //message.channel.send(`${message.author}, Başarıyla ${user} kişisine ${miktar} Altın gönderdin.`)

        let embed = new Discord.MessageEmbed()
          .setColor('RED')
          .setAuthor('BANKA', message.guild.iconURL())
          .addField('Gönderen Kişi', message.author)
          .addField('Gönderilen Kişi:', user)
          .setThumbnail(message.guild.iconURL())
          .addField('Gönderilen Miktar:', `**${args[1]}** Altın`)  
          .setThumbnail(message.guild.iconURL())
          .setTimestamp()
          .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
        message.channel.send(embed)

        db.add(`ealtin_${user.id}`, args[1])
        db.subtract(`ealtin_${message.author.id}`, miktar)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pver"]
};

exports.help = {
  name: 'paraver',
  description: 'Para gönderir işte',
  usage: '.paraver @etiket miktar'
};