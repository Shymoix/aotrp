const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    
    if(!message.member.roles.cache.has('831256637103669274')){
        const embed = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Bu Komutu Kullanabilmek İçin Yetkili Olman Gerekli!**')
            .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
            .setFooter('AOT ROLEPLAY • Mod Log System • Shymoix')
        message.channel.send(embed)
        return
    }

    let kanal = message.mentions.channels.first();
    if(!kanal){
        const embed2 = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Mod Log kanalını ayarlamam için bir kanal etiketlemeniz gerekli!**')
            .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
            .setFooter('AOT ROLEPLAY • Mod Log System • Shymoix')
        message.channel.send(embed2)
        return
    } 
    else {
        await db.set(`gclog_${message.guild.id}`, kanal.id);
        const embed3 = new Discord.MessageEmbed()
        .setColor('#66ff00')
        .setTitle('**GIRIS CIKIS LOG KANALI AYARLANDI!**')
        .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
        .setDescription(`**Giriş-Çıkış Log kanalı başarıyla ${kanal} olarak ayarlandı!**`)
        .setFooter('AOT ROLEPLAY • Mod Log System • Shymoix')
    message.channel.send(embed3)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gckanal"]
};

exports.help = {
  name: 'girişçıkışkanal',
  description: 'giriş çıkış kanal',
  usage: '.gckanal'
};