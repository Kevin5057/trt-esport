/*

* Using discord.js v12.5.3
* Made by TRT Kepinz

*/

// process .env
require("dotenv").config();

// config
const config = {
  token: process.env.TOKEN,
  channel: process.env.CHANNEL
};

//Bot Engines [USE ytdl-core]
const Discord = require("discord.js");
const { MessageEmbed, Client } = require('discord.js');
const client = new Discord.Client({
  disableMentions: "everyone"
}); 
let { Collection } = require("discord.js");
let MUSIC = new Collection();
let ytdl = require("ytdl-core")

let channel;

require("http").createServer((_, res) => res.end("TRT Bot Client/App is Ready to use. \nhttps://discord.gg/xxwH4ea6Ka \n \n  =========================\n   Client Version: [1.0.0] \n  ========================= \n \n   Bot Info Commands: \n   -t!botinfo \n   -t!help \n   -t!test \n   -welcome \n \n  ========================= \n ©2021 | TARATATAT E-sport")).listen(8080)



//Discord bot login
client.login(config.token);



//Events
client.on("ready", () => {
  
  console.log(`Logged in as ${client.user.username}. Ready for a total of ${client.users.cache.size} users.`);
  client.user.setActivity(`${client.users.cache.size} Users | t!help`, { type: "WATCHING"})
  channel = client.channels.cache.get(config.channel);
  if (!channel) return console.log("Invalid channel.");
  if (!channel.type === "voice") return console.log("Invalid channel.");
  
  handle()
  
});



//Bot Info. (Check the Bot's Info ;> ) [USE MessageEmbed]
client.on('message', async  message => {
  if (message.content === "t!botinfo") {
        const embed = new MessageEmbed()
        .setColor('#fa4454')
        .setTitle('Bot\'s Info')
        .setAuthor('K E V I N', 'https://avatars.githubusercontent.com/u/79577297?v=4')
        .setThumbnail('https://cdn.discordapp.com/attachments/849223143733461002/902500806773841990/J-K-R_TEAM.png?size=4096')
        .setImage('https://cdn.discordapp.com/attachments/849577598509908039/902452496251883550/20210602_211602.png')
        .setDescription(`**Username:** ${client.user.username} \n**Tag:** TARATATAT Bot#7113 \n**ID:** 902497471375220736 \n**Developer:** K E V I N#3621 \n[**Join our Support Server**](https://discord.gg/xxwH4ea6Ka)`)
        .setFooter('©2021 Reiner - TARATATAT E-sport')
        .setTimestamp()

        message.channel.send(embed)
    }
})



//Bot Rules. (Like: NO NWFS!)
client.on('message', async  message => {
  if (message.content === "bang") {
message.channel.send('<@861231546924400641>');
  }
});

client.on('message', async  message => {
  if (message.content === "t!r1s") {
message.channel.send('https://cdn.discordapp.com/attachments/902855977894817862/909309418095656971/Server_Rules_TRT.png');
  }
});

client.on('message', async  message => {
  if (message.content === "t!r1") {
message.channel.send('<:TRT_VALdot:877157371917520937>**|** Always Friendly and talk to **Members** and **TRT\'s Lord** :) \n<:TRT_VALdot:877157371917520937>**|** No drama on the server because it can make other members uncomfortable. \n<:TRT_VALdot:877157371917520937>**|** Do not violate the copyright of members and staff on this Server **TARATATAT E-sport 🪐** \n<:TRT_VALdot:877157371917520937>**|** Cyber Bullying will be fatal (Fatal adalah tidak dapat diubah atau diperbaiki lagi.) \n<:TRT_VALdot:877157371917520937>**|** SARA & Things in the form of insults to a party are strictly prohibited. \n<:TRT_VALdot:877157371917520937>**|** NSFW or porn content prohibited on this Server (**TRT E-sport**). \n<:TRT_VALdot:877157371917520937>**|** Don\'t go in and out of the server without a clear reason. \n<:TRT_VALdot:877157371917520937>**|** Spam is prohibited unless there is a special place for spam. Thankyou for reading.');
  }
});

client.on('message', async  message => {
  if (message.content === "t!r2s") {
message.channel.send('https://cdn.discordapp.com/attachments/902855977894817862/909309420171833354/Invite_Link_TRT.png');
  }
});


//Bot Moderations. (Like: Welcome to <Server>!) [USE MessageEmbed]
client.on('message', async  message => {
  if (message.content === "t!help") {
        const embed = new MessageEmbed()
        .setColor('#5865f2')
        .setTitle('Help Pannel')
        .setAuthor('TRT Moderations', 'https://cdn.discordapp.com/attachments/849223143733461002/902500806773841990/J-K-R_TEAM.png?size=4096')
        .setThumbnail('https://cdn.discordapp.com/attachments/902855977894817862/902862108390219806/image-removebg-preview.png')
        .setImage('https://cdn.discordapp.com/attachments/902855977894817862/902858222262685726/rgb_2.gif')
        .setDescription(`**:robot: Bot** \n\`help\`, \`test\`, \`botinfo\` \n \n**:musical_note: Music** \nJoin Channel: <#902863526102724639> \n \n**:tools: Moderations** \n\`mute\`, \`kick\`, \`ban\`, \`addlink\` \n \n \nError Code Stats: \`NONE\` `)
        .setFooter('©2021 TRT E-sport')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "welcome") {
        const embed = new MessageEmbed()
        .setColor('#f7b500')
        .setTitle('Welcome!')
        .setAuthor('TRT Welcomer', 'https://cdn.discordapp.com/attachments/849223143733461002/902500806773841990/J-K-R_TEAM.png?size=4096')
        .setThumbnail('https://pa1.narvii.com/6802/89ae9d8e8755e8e12dafc1c0552a9763d368acf7_hq.gif')
        .setImage('https://cdn.discordapp.com/attachments/865614901690630216/902525708704829490/WELCOME_TRT.png')
        .setDescription(`[TARATATAT E-sport Rules](https://discord.com/channels/848941953211170866/849220423714471936) \nWelcome to **TARATATAT E-sport** \nDon't forget to have fun with Members!`)
        .setFooter('©2021 TRT E-sport')
        .setTimestamp()

        message.channel.send(embed)
    }
}) 

client.on('message', async  message => {
  if (message.content === "t!kick") {
        const embed = new MessageEmbed()
        .setColor('#d52b1e')
        .setTitle('SOON™')
        .setAuthor('TRT Moderations', 'https://cdn.discordapp.com/attachments/849223143733461002/902500806773841990/J-K-R_TEAM.png?size=4096')
        .setThumbnail('https://pendawacenter.com/wp-content/uploads/2021/06/cs-1.gif')
        .setImage('https://cdn.discordapp.com/attachments/849223143733461002/902529359095681065/loads.gif')
        .setDescription(`**Soon as possible.** \n_This Bot is still Under Development._`)
        .setFooter('©2021 TRT E-sport')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "t!ban") {
        const embed = new MessageEmbed()
        .setColor('#d52b1e')
        .setTitle('SOON™')
        .setAuthor('TRT Moderations', 'https://cdn.discordapp.com/attachments/849223143733461002/902500806773841990/J-K-R_TEAM.png?size=4096')
        .setThumbnail('https://pendawacenter.com/wp-content/uploads/2021/06/cs-1.gif')
        .setImage('https://cdn.discordapp.com/attachments/849223143733461002/902529359095681065/loads.gif')
        .setDescription(`**Soon as possible.** \n_This Bot is still Under Development._`)
        .setFooter('©2021 TRT E-sport')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "t!test") {
        const embed = new MessageEmbed()
        .setColor('#16c50b')
        .setTitle('Test Pannel')
        .setAuthor('Tester Bot', 'https://www.pinclipart.com/picdir/big/413-4135007_test-for-accessibility-grade-8-afrikaans-exam-papers.png')
        .setThumbnail('https://emojipedia-us.s3.amazonaws.com/source/skype/289/check-mark-button_2705.png')
        .setImage('https://cdn.discordapp.com/attachments/815546275498950666/818689769240395786/rgb_2.gif')
        .setDescription(`Error Code: \`CLIENT_MESSAGE_ERROR\` \nLast Incident: \`Embed\` \n**Test Complete!** \nPing in \`${client.ws.ping}ms\`.gg`)
        .setFooter('©2021 TRT E-sport')
        .setTimestamp()

        message.channel.send(embed)
    }
})



//Music lofi hip hop radio - beats to relax/study to idk...
client.on("voiceStateUpdate", async (oldV, newV) => {
  
  if (newV.member.id !== client.user.id) return;
  
  if (oldV.channel.id == channel.id && !newV.channel) {
    handle()
  }
  
});

async function handle() {
  if (!channel) return console.log("Invalid channel.");
  if (!channel.type === "voice") return console.log("Invalid channel.");  
  
  let Struct = {
    vc: channel,
    c: await channel.join()
  }

  play()
  
  async function play() {
			const dispatcher = Struct.c.play(ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A'))
				.on('finish', () => {
          play(); 
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(100 / 100);    
  }
}