const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    
    let modhelp = new Discord.MessageEmbed()
        .setTitle('**Moderatör Komutları**')
        .setDescription('<:coolpanda:835789708864520232> **.ban:** *Etiketlediğiniz kişiyi sunucudan yasaklar.* \n<:pika2:835790602972037140> **.kick:** *Etiketlediğiniz kişiyi sunucudan atar.* \n<:coolpanda:835789708864520232> **.uyarı:** *Etiketlediğiniz kişiye uyarı permi verir.* \n<:pika2:835790602972037140> **.duyuru:** *Duyuru kanalına mesaj göndermenizi sağlar.*')
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
	    .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
    message.channel.send(modhelp)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["modhelp"]
};

exports.help = {
  name: 'modyardım',
  description: 'modhelp menu.',
  usage: '.modyardım'
};