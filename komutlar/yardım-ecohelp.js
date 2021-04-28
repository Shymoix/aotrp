const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    
    let ecohelp = new Discord.MessageEmbed()
        .setTitle('**Ekonomi Komutları**')
        .setDescription('<a:hediyepanda:835790077182476309> **ALTIN KOMUTLARI:** \n<:pika2:835790602972037140> **.bakiye:** *Bakiyenizi Gösterir. \n<a:hediyepanda:835790077182476309> **.paraver:** *Etiketlediğiniz kişiye para gönderir.* \n<:pika2:835790602972037140> **.market:** *Market menüsünü açar.* \n<a:hediyepanda:835790077182476309> **COIN KOMUTLARI:** \n<:pika2:835790602972037140> **.cbakiye:** *Coin bakiyenizi gösterir.* \n<a:hediyepanda:835790077182476309> **.cbozdur:** *Coin bozdurursunuz.* \n<:pika2:835790602972037140> **.cver:** *Etiketlediğniz kişiye coin gönderirsiniz.* \n<a:hediyepanda:835790077182476309> **MODERATÖR KOMUTLARI** \n<:pika2:835790602972037140> **.maaş:** *Etiketlenen role sahip kişilere belirlediğiniz miktarda Altın eklenir.* \n<a:hediyepanda:835790077182476309> **.paraekle:** *Etiketlediğniz kişiye belirlediğiniz miktarda Altın ekler.* \n<:pika2:835790602972037140> **.coindeğerayarla:** *Coinin, Altın tarafındaki değerini ayarlarsınız.*')
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
	    .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
    message.channel.send(ecohelp)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ecohelp"]
};

exports.help = {
  name: 'ecoyardım',
  description: 'ecoyardım menu.',
  usage: '.ecoyardım'
};