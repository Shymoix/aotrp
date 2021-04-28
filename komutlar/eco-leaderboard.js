const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
  let cash = db.all().filter(data => data.ID.startsWith(`ealtin_${message.guild.id}`)).sort((a , b) => b.data - a.data)
    cash.length = 15;
    var finalLb = "";
        for (var i in cash) {
            finalLb += `**${cash.indexOf(cash[i])+1} | <@${message.client.users.cache.get(cash[i].ID.split('_')[2]) ? message.client.users.cache.get(cash[i].ID.split('_')[2]).id : "Bilinmeyen Kullanıcı#0000"}>** |  ${cash[i].data.toLocaleString()} **Altın**\n`;
        }
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name} sunucusunun Zenginlik Sıralaması`, 'https://media.discordapp.net/attachments/506838906872922145/506899959816126493/h5D6Ei0.png')
            .setColor("#7289da")
            .setDescription(finalLb)
            .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}))
            .setTimestamp()
        message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ecolist"]
};

exports.help = {
  name: 'ekonomilist',
  description: 'Ekonomi sıralamasını gösterir.',
  usage: '.ekonomilist'
};