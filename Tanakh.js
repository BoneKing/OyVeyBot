var Discord = require("discord.js");
var logger = require("winston");
var auth = require("./auth.json");

//Logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize : true
});
logger.level = "debug";
//Robot time
var bot = new Discord.Client();
var client = new Discord.Client();
var counter = 0;
var isReady = true;

bot.on("ready",() => {
  logger.info("Connected");
});

bot.on("message",msg => {	
	if(msg.author == bot.user){
		//react to all message here
	}
	
	else{
		if(msg.content.includes("Oy vey") || msg.content.includes("oy vey")){
            var randomOyVey = randint(5);
            if(randomOyVey == 1){
                msg.channel.send("Let me comfort you", {files: ["bagel1.jpg"]});
            }
            else if(randomOyVey == 2){
                msg.channel.send("Let me comfort you", {files: ["bagel1.jpg"]});
            }
            else if(randomOyVey == 3){
                msg.channel.send("Let me comfort you", {files: ["bagel1.jpg"]});
            }
            else if(randomOyVey == 4){
                msg.channel.send("Let me comfort you", {files: ["bagel1.jpg"]});
            }
            else if(randomOyVey == 5){
                msg.channel.send("Let me comfort you", {files: ["bagel1.jpg"]});
            }
            else{
                logger.info("no image found random out of bounds");
            }
        }
        
        
    }
});

function randint(bound) {
	return Math.round(Math.random()*bound);
}