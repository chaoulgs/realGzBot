/* global describe */
/* global process */

var fs = require('fs');
var gzSecrets = require('./gzSecrets.js');
var Discord = require("discord.js");
var bot = new Discord.Client();
var token = gzSecrets.discordToken;
var request = require("request");
var moment = require('moment');


var gambleFile = 'gambledata.json';

var currentVoiceConnection;

//janky array to decode people's ids
var discordIds = [];

discordIds['mudkip'] = '105036242898415616';
discordIds['Realwarzh'] = '104864925838491648';
discordIds['Jold'] = '133761036539920384';
discordIds['Chongman'] = '105877522914250752';
discordIds['GMaul'] = '105513296139943936';
discordIds['Jelly'] = '167888315775844352';
discordIds['BigRedJuggernaut'] = '105040787271643136';
discordIds['105036242898415616'] = 'mudkip';
discordIds['104864925838491648'] = 'warzh';
discordIds['133761036539920384'] = 'jold';
discordIds['105877522914250752'] = 'chongman';
discordIds['105513296139943936'] = 'gmaul';
discordIds['105040787271643136'] = 'bigred';
discordIds['176880543546343426'] = 'arandar';
discordIds['167888315775844352'] = 'jelly';

bot.on("ready", () => {
	console.log('bot is ready!');
});

bot.on("autoRevive", () => {
	console.log("auto revived");
});

bot.on("voiceJoin", (user, channel) => {
	console.log(`VOICE ${user.username} joined ${channel}!`);
});

bot.on("voiceLeave", (user, channel) => {
	console.log(`VOICE ${user.username} left ${channel}!`);
});


bot.on("message", msg => {


	console.log(currentVoiceConnection)

	//console.log(msg.channel);

	//if(!msg.sender.equals(bot.user))
	//	console.log("received message from " + msg.sender.username);

	if (msg.content === "!gzspeak") {
		//msg.channel.server.channels.get("type", "voice").join();
		//bot.ClientVoiceManager.joinChannel;
		msg.channel.guild.channels.forEach(function(item){
			//console.log(item.id + ' - ' + item.name);
			if(item.id === '105094891633168384') {
				//console.log('the gym = ' + item.name);
				bot.voice.joinChannel(item).then( connection => {
					currentVoiceConnection = connection;
					//connection.playFile("resources/audio/goldentongue.mp3");					
				});
			}
		});
	}

	//if (msg.content === "$end$") {
	//	bot.destroy();
	//}

	//if (msg.content === "$stop_playing") {
	//	currentVoiceConnection.stopPlaying();
	//}

	if(msg.content === "!goldentongue") {
		currentVoiceConnection.playFile("resources/audio/goldentongue.mp3");
	}

	if(msg.content === "!legend") {
		currentVoiceConnection.playFile("resources/audio/bigredlegend.mp3");
	}

	if(msg.content === "!bigredmeme") {
		currentVoiceConnection.playFile("resources/audio/bigredmeme.mp3");
	}

	if(msg.content === "!bigredstory") {
		currentVoiceConnection.playFile("resources/audio/bigredstory.mp3");
	}

	if(msg.content === "!bullshit") {
		currentVoiceConnection.playFile("resources/audio/bullshit.mp3");
	}

	if(msg.content === "!chongmom") {
		currentVoiceConnection.playFile("resources/audio/chongmom.mp3");
	}

	if(msg.content === "!double") {
		currentVoiceConnection.playFile("resources/audio/double.mp3");
	}

	if(msg.content === "!hotta") {
		currentVoiceConnection.playFile("resources/audio/hotta.mp3");
	}

	if(msg.content === "!hmm") {
		var variant = Math.floor(Math.random() * 2) + 1;
		currentVoiceConnection.playFile("resources/audio/hmm" + variant + ".mp3");
	}

	if(msg.content === "!issues") {
		currentVoiceConnection.playFile("resources/audio/issues.mp3");
	}

	if(msg.content === "!spit") {
		currentVoiceConnection.playFile("resources/audio/spit.mp3");
	}

	if(msg.content === "!ugly") {
		currentVoiceConnection.playFile("resources/audio/ugly.mp3");
	}

	if(msg.content === "!job") {
		currentVoiceConnection.playFile("resources/audio/job.mp3");
	}

	if(msg.content === "!strategy") {
		currentVoiceConnection.playFile("resources/audio/joldstrat.mp3");
	}

	if(msg.content === "!snooze") {
		currentVoiceConnection.playFile("resources/audio/snooze.mp3");
	}

	if(msg.content === "!noway") {
		currentVoiceConnection.playFile("resources/audio/noway.mp3");
	}

	if(msg.content === "!pk") {
		currentVoiceConnection.playFile("resources/audio/pk.mp3");
	}

	if(msg.content === "!quit") {
		currentVoiceConnection.playFile("resources/audio/quit.mp3");
	}

	if(msg.content === "!rage") {
		currentVoiceConnection.playFile("resources/audio/rageboys.mp3");
	}

	if(msg.content === "!hate") {
		currentVoiceConnection.playFile("resources/audio/hate.mp3");
	}

	if(msg.content === "!saystuff") {
		currentVoiceConnection.playFile("resources/audio/saystuff.mp3");
	}

	if(msg.content === "!start") {
		currentVoiceConnection.playFile("resources/audio/start.mp3");
	}

	if(msg.content === "!thegreat") {
		currentVoiceConnection.playFile("resources/audio/thegreat.mp3");
	}

	if(msg.content === "!woodaddy") {
		currentVoiceConnection.playFile("resources/audio/woodaddy.mp3");
	}

	if (msg.content === "where am I speaking") {
		msg.reply(msg.sender.voiceChannel);
	}

	//if (msg.content === "who is speaking") {
	//	for (var chan of msg.channel.server.channels.getAll("type", "voice")) {
	//		msg.channel.send(`${chan} : ${chan.members}`);
	//	}
	//}

	//gets one of chongs latest 200 tweets
	if(msg.content === "!randomchong")
	{
		var Twitter = require('twitter');

		var client = new Twitter({
			consumer_key: 'wRFNbemuAimxp2fcOAvuxWfvq',
			consumer_secret: 'picwde3NHhlLmTqvI2IdbM004OmHR8vkeBZ2ZthWmDLjhSQnyz',
			access_token_key: '4247514815-cPGtkp8hnXlCUIhhwMdQ2fY7tEjCdIIDIz0sFls',
			access_token_secret: 'aT3rXq2PnYrRJ1Aytzl2gkVvuEaQWn7C6KFvgXFj6IKKT'
		});

		var params = {screen_name: 'EpicurusEgg', count: 200};

		client.get('statuses/user_timeline',params, function (error, tweets, response){
			if(error) {
				console.log(error);
			}
			else {
				var randomIndex = Math.floor(Math.random()*200)+1;
				console.log(randomIndex);
				var randomTweetDate = moment(tweets[randomIndex].created_at).format('MM-DD-YYYY h:mm:ss a');
				msg.reply("***A random one of David Chong's tweets:*** \r" + randomTweetDate + "\r" + tweets[randomIndex].text);
			}
		});		
	}

	//begin GAMBLING FUNCTIONALITY
	//if (msg.content ==="!tokens"){
	//	//console.log(Object.keys(msg));
	//	//console.log('author: ' + msg.author);
	//	//console.log('member: ' +msg.member);
	//	fs.stat(gambleFile, function(error, stats) {
	//		fs.open(gambleFile, "r", function(error, fd) {
	//			var buffer = new Buffer(stats.size);			
	//			fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
	//				var gambleDataText = buffer.toString("utf8", 0, buffer.length);
	//				//console.log(gambleDataText);
	//				fs.closeSync(fd);
	//				var gambleData = JSON.parse(gambleDataText);
//
	//				gambleData.forEach(function(gambler){
	//					console.log('MESSAGE AUTHOR: ' + msg.author);
	//					console.log(gambler);
	//					console.log('************************************');
	//					console.log('outputting discordIds array');
	//					console.log(discordIds);
	//					if(msg.author === '<@' + gambler.discordId + '>'){
	//						
	//						if(gambler.discordId === '105877522914250752')
	//						{
	//							msg.reply(gambler.username + " has " + gambler.tokens + " tokens.  ```A̪̜̜̭̟̻ͅ n̹̤̮̠͠d̙ 3e2m51 ͍͈̥͖͚́t̯͉͇̘͔̳o̹̝̲̣ x̙̠i͖͎͞c͔͔̦ ̦t͔ͅò͈͖̘̪ k͔̼e͍͈̫͚͕͢ ǹ̲ s.̙͉̟̜̣̺̩  ```");
	//						}
	//						else
	//						{
	//							//console.log(gambler.username + " has " + gambler.tokens + " tokens.");
	//							msg.reply(gambler.username + " has " + gambler.tokens + " tokens.");
	//						}		        					
	//					}
	//				});
	//			});
	//		});
	//	});
	//}

	//if (msg.content === "pls gz") {
	//	msg.reply("gz");
	//	bot.sendFile(msg.channel, 'resources/images/chog.png');
	//}

	if (msg.content === "what is my name") {
		msg.reply(msg.channel.server.members.get("id", msg.sender.id));
	}

	if(msg.content === "replyme"){
		msg.reply("hi");
	}

	if (msg.content === "$perms") {
		msg.reply(bot.channels.get("id", msg.channel.id));
	}


	if (msg.content.startsWith("$play")) {
		var url = msg.content.split(" ")[1];

		currentVoiceConnection.playRawStream(request(url));

	}

	if (msg.content === "$$$") {
		//for(var x = 0; x < 60; x++)
		bot.reply(msg, 'fug');
	}

});

/*
bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});
*/
console.log("INIT");

//bot.forceFetchUsers();

//bot.on("debug", msg => console.log("[debug]", msg));
//bot.on("unk", msg => console.log("[unknown]", msg));

bot.login(token);

//bot.on("presence", (old, news) => console.log(`PRESENCE TEST ${old.username} $$ ${news.username}`))
var chan1, chan2;
var msg1, msg2;
