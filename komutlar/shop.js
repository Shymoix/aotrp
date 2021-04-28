const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    let role = message.mentions.roles.first()
    let miktar;
    let bakiye = await db.fetch(`ealtin_${message.author.id}`);
    

    if(!role){
        let marketStok = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name}'s Market Stok`)
            .setColor('RANDOM')
            .setAuthor(`${message.author.tag}`, user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
            .setDescription(`<@&834676957354000435> - 1000 Altın \n<@&834677081719832596> - 2500 Altın \n<@&834676945778245642> - 3000 Altın \n<@&834677065839149106> - 4000 Altın \n<@&834677076883537941> - 5000 Altın \nSatın almak için **.satınal @itemetiket**`)
            .setTimestamp()
            .setFooter(`${message.guild.name} • Shymoix `, message.guild.iconURL())
        message.channel.send(marketStok)
        return
    }

    if(role.id === "834676957354000435"){
        miktar = 1000;
        if(miktar > bakiye){
            return message.react('<a:uncheck:831916949641756714>')
        }
        message.react('<a:check:831916921389318145>')
        message.member.roles.add('834676957354000435').catch(console.error)
        db.subtract(`ealtin_${message.author.id}`, 1000)
    }else if(role.id === "834677081719832596"){
        miktar = 2500;
        if(miktar > bakiye){
            return message.react('<a:uncheck:831916949641756714>')
        }
        message.react('<a:check:831916921389318145>')
        message.member.roles.add('834677081719832596').catch(console.error)
        db.subtract(`ealtin_${message.author.id}`, 2500)
    }else if(role.id === "834676945778245642"){
        miktar = 3000;
        if(miktar > bakiye){
            return message.react('<a:uncheck:831916949641756714>')
        }
        message.react('<a:check:831916921389318145>')
        message.member.roles.add('834676945778245642').catch(console.error)
        db.subtract(`ealtin_${message.author.id}`, 3000)
    }else if(role.id === "834677065839149106"){
        miktar = 4000;
        if(miktar > bakiye){
            return message.react('<a:uncheck:831916949641756714>')
        }
        message.react('<a:check:831916921389318145>')
        message.member.roles.add('834677065839149106').catch(console.error)
        db.subtract(`ealtin_${message.author.id}`, 4000)
    }else if(role.id === "834677076883537941"){
        miktar = 5000;
        if(miktar > bakiye){
            return message.react('<a:uncheck:831916949641756714>')
        }
        message.react('<a:check:831916921389318145>')
        message.member.roles.add('834677076883537941').catch(console.error)
        db.subtract(`ealtin_${message.author.id}`, 5000)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shop", "satınal"]
};

exports.help = {
  name: 'market',
  description: 'Sikimsonik v341',
  usage: '.market item'
};