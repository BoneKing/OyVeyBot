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

var images = ["bagel1.jpg", "bagel2.jpg", "bagels3.jpg", "matzo1.jpg", "matzo2.jpg", "bagels4.jpg","bagels5.jpg", "matzo3.jpg", "matzo4.jpg", "matzo5.jpg"];
var leng = images.length;
bot.on("message",msg => {	
	if(msg.author == bot.user){
		//react to all message here
	}
	
	else{
		if(msg.content.includes("Oy vey") || msg.content.includes("oy vey")){
            var randomOyVey = randint(leng);
            if(randomOyVey == 1){
                msg.channel.send("Let me comfort you", {files: [images[randomOyVey]]});
            }
        }
       else{
            //find a way to parce which chapter and verse and find it in the format of 1:1 to find first chapter 
            //then first verse and print it
       } 
        
    }
});

function randint(bound) {
	return Math.round(Math.random()*bound);
}