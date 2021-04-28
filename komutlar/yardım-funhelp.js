const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    
    let funhelp = new Discord.MessageEmbed()
        .setTitle('**Eğlence Komutları**')
        .setDescription('<:coolpanda:835789708864520232> **.avatar:** *Discord profil fotoğrafınızı mesaj olarak gönderir.* \n<:pika2:835790602972037140> **.düello:** *Etiketlediğiniz kişiye düello yapmak için davet gönderirsiniz.*')
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
	    .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
    message.channel.send(funhelp)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["funhelp"]
};

exports.help = {
  name: 'funyardım',
  description: 'funhelp menu.',
  usage: '.funyardım'
};