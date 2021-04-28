const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

    let moneys = db.startsWith(`ealtin_${message.guild.id}`, {sort: '.data'})
    let content= ""
    let moneyLength = 10
    for(let i = 0; i < moneyLength; i++){
        let user = message.client.users.cache.get(moneys[i].ID.split('_')[2]) ? message.client.users.cache.get(moneys[i].ID.split('_')[2]).id : "Bilinmeyen Kullanıcı#0000"
        content += `${i+1}. ${user} ~ ${money[i].data} Altın\n`
    }

    const embed = new Discord.MessageEmbed()
        .setTitle(`Shy Economy Leaderboard`)
        .setDescription(content)
        .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}))
        .setTimestamp()
    message.channel.send(embed)
    
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ecodeneme"]
};

exports.help = {
  name: 'ecodeneme',
  description: 'sikimsonik kod',
  usage: '.ecodeneme'
};