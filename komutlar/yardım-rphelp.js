const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    
    let rphelp = new Discord.MessageEmbed()
        .setTitle('**Roleplay Komutları**')
        .setDescription('<a:hediyepanda:835790077182476309> **STATS KOMUTLARI** \n<:pika2:835790602972037140> **.stats:** *Stats seviyelerinizi gösterir.* \n<a:hediyepanda:835790077182476309> **SKILL KOMUTLARI** \n<:pika2:835790602972037140> **.skill:** *Skill seviyelerinizi gösterir.* \n<a:hediyepanda:835790077182476309> **.puan:** Skill arttırmak için gereken puanınızı gösterir. \n<:pika2:835790602972037140> **.skillarttır:** *Etiketlediğiniz Skillinizin seviyesini arttırır.* \n<a:hediyepanda:835790077182476309> **MODERATÖR KOMUTLARI** \n<:pika2:835790602972037140> **statsekle:** *Etiketlediğiniz kişiye, etiketlediğiniz statsına belirlediğiniz miktarda seviye ekler.* \n<a:hediyepanda:835790077182476309> **statsil:** *Etiketlediğiniz kişinin etiketlediğiniz statsından belirlediğiniz miktarda seviye eksiltir.* \n<:pika2:835790602972037140> **.skillpuanekle:** *Etiketlediğiniz kişiye, belirlediğiniz miktarda skill puanı ekler.*')
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
	    .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
    message.channel.send(rphelp)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rphelp"]
};

exports.help = {
  name: 'rpyardım',
  description: 'rpyardım menu.',
  usage: '.rpyardım'
};