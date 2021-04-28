
const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk');
const Canvas = require("canvas");

module.exports = async member => {
  
  
   let client = member.client;
  const ayarlar = client.ayarlar
  
  if (member.bot) return;
  member.guild.channels.cache.get("794538065707925524").send("dddeeee")

};
