const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
   
    let stat = args[0]
    if(!stat) return message.react('<a:uncheck:831916949641756714>')
    let checkStat = db.get(`guild_${message.guild.id}_statspuan_${message.author.id}`)
    if(checkStat === null) return message.react('<a:uncheck:831916949641756714>')

    if(checkStat < 1) return message.react('<a:uncheck:831916949641756714>')

    if(stat === 'zeka'){
        db.subtract(`guild_${message.guild.id}_statspuan_${message.author.id}`, 1)
        db.add(`guild_${message.guild.id}_stzeka_${message.author.id}`, 1)
        message.react('<a:check:831916921389318145>')
        message.channel.send(`Başarıyla "${stat}" skillinizi arttırdınız.`)
    }else if(stat === 'hız'){
        db.subtract(`guild_${message.guild.id}_statspuan_${message.author.id}`, 1)
        db.add(`guild_${message.guild.id}_sthiz_${message.author.id}`, 1)
        message.react('<a:check:831916921389318145>')
        message.channel.send(`Başarıyla "${stat}" skillinizi arttırdınız.`)
    }else if(stat === 'kuvvet'){
        db.subtract(`guild_${message.guild.id}_statspuan_${message.author.id}`, 1)
        db.add(`guild_${message.guild.id}_stkuvvet_${message.author.id}`, 1)
        message.react('<a:check:831916921389318145>')
        message.channel.send(`Başarıyla "${stat}" skillinizi arttırdınız.`)
    }else if(stat === 'dayanıklılık'){
        db.subtract(`guild_${message.guild.id}_statspuan_${message.author.id}`, 1)
        db.add(`guild_${message.guild.id}_stdayaniklilik_${message.author.id}`, 1)
        message.react('<a:check:831916921389318145>')
        message.channel.send(`Başarıyla "${stat}" skillinizi arttırdınız.`)
    }else{
        message.react('<a:uncheck:831916949641756714>')
        return;
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["skarttır"]
};

exports.help = {
  name: 'skillarttır',
  description: 'sikimsonik bir şey',
  usage: '.statarttır'
};