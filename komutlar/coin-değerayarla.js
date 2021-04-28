const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if (!message.member.roles.cache.has('831256637103669274')) {
        return message.reply('Yetkiniz yok.')
    }
    let ydeger = args[0]
    var coinlog = message.guild.channels.cache.get(db.fetch(`coinlog_${message.guild.id}`))

    db.set(`coindeger_${message.guild.id}`, ydeger)

    let embed = new Discord.MessageEmbed()
        .setTitle('Coin Değeri Değiştirildi!')
        .addField('Değeri Değiştiren Kişi:', message.author)
        .addField('Yeni Coin Değeri', ydeger)
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/725820682835066914/832327684544790528/pp5.gif')
	    .setFooter('ᴇxᴀɴɪᴍᴜs ↯ ᴀᴏᴛ ʀᴏʟᴇᴘʟᴀʏ • Shymoix ', message.author.displayAvatarURL())
    coinlog.send(embed)
    message.react('<a:check:831916921389318145>')
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cda"]
};

exports.help = {
  name: 'coindeğerayarla',
  description: 'sikimsonik.',
  usage: '.coindeğerayarla miktar'
};