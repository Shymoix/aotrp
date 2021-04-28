const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
   

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rpl"]
};

exports.help = {
  name: 'rplist',
  description: 'RP puan sıralamasını gösterir.',
  usage: '.rplist'
};