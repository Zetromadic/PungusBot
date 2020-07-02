const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.token;

const PREFIX = 'p!';

const cheerio = require ('cheerio');
const request = require('request');

var version = '1.0.1';

const fs = require('fs');

var servers = {};

const ms = require('ms');
var profanitites = require('profanities');

client.on('ready', () => {
    console.log('Pungus is online!')
    client.user.setActivity('p!', { type: 'PLAYING'}).catch(console.error);
})

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`**Welcome ${member} to the Server!!**`)


});

client.on('message', message=> {

    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]){

        case 'youtube':
            message.delete();
            var ychannel = client.channels.cache.find(channel => channel.id === '702697020439134239');
            ychannel.send('https://www.youtube.com/channel/UCWC2GrfiuXkA1mpmJfC3KBA');
        break;
            
        break;

    }
})

client.login(token);