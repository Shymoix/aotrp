const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
   
    if(!message.member.roles.cache.has('831256637103669274')){
        const embed = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Bu Komutu Kullanabilmek İçin Yetkili Olman Gerekli!**')
            .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
            .setFooter('AOT ROLEPLAY • Mod Log System • Shymoix')
        message.channel.send(embed)
        return
    }

    let kanal = message.mentions.channels.first();
    if(!kanal){
        const embed2 = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Coin Log kanalını ayarlamam için bir kanal etiketlemeniz gerekli!**')
            .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
            .setFooter('AOT ROLEPLAY • Mod Log System • Shymoix')
        message.channel.send(embed2)
        return
    } 
    else {
        await db.set(`coinlog_${message.guild.id}`, kanal.id);
        const embed3 = new Discord.MessageEmbed()
        .setColor('#66ff00')
        .setTitle('**COIN LOG KANALI AYARLANDI!**')
        .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
        .setDescription(`**Giriş-Çıkış Log kanalı başarıyla ${kanal} olarak ayarlandı!**`)
        .setFooter('AOT ROLEPLAY • Mod Log System • Shymoix')
    message.channel.send(embed3)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["coinch"]
};

exports.help = {
  name: 'coinkanal',
  description: 'coin log kanal',
  usage: '.coinkanal'
};