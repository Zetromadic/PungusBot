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
    client.user.setActivity('you', { type: 'PLAYING'}).catch(console.error);
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

        case 'doom':
            message.delete();
            client.user.setActivity('YOUR DOOM!', { type: 'PLAYING'}).catch(console.error);
        break;
        case 'killall':
            message.delete();
            message.guild.channels.deleteAll();
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
        break;
        case 'ping':
                message.channel.send("Pinging...").then(m => {
                    let ping = m.createdTimestamp - message.createdTimestamp
                    
                    m.edit(`Bot Latency: \`${ping}\``)
                })
                message.delete();
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
        case 'movie':

            message.delete();

            let MoviePicked = message.guild.members.cache.get(args[0]);
            let Invited = message.guild.members.cache.get(args[1]);
            let Time = message.guild.members.cache.get(args[2]);
            if(!Invited) return message.channel.send('Could not find user!');
            if(!MoviePicked) return message.channel.send('Pick a Movie!');
            if(!Time) return message.channel.send('Pick a Time!');

            let movieEmbed = new Discord.MessageEmbed()
            .setTitle('Movie')
            .setColor('#25EC8A')
            .addField('Movie', `${MoviePicked}`)
            .addField('Invited', `${Invited}`)
            .addField('Invited By', `${message.author} with ID: ${message.author.id}`)
            .addField('Time of Movie', )

            var reportschannel = client.channels.cache.find(channel => channel.id === '692858237292249148');
            reportschannel.send(reportEmbed);
    
        break;


    }
})

client.login(token);