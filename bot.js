const Discord = require('discord.js');  
const db = require('quick.db');  
const hastebin = require('hastebin-gen');  
const client = new Discord.Client();    
const Canvas = require('canvas');        
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set();  
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={}; 

client.on('message', message => {
 var prefix = "-";
if (message.content.startsWith(prefix + 'help')) {
    let pages = [
	`=-=-=-=-=-= ًںŒچ Public Commands - ط§ظˆط§ظ…ط± ط¹ط§ظ…ط© ًںŒچ =-=-=-=-=-=
     âœ´ -sug =====> To Suggest | ظ„ط¹ظ…ظ„ ط§ظ‚طھط±ط§ط­
    âœ´ -id ======> To Show Your ID | ط§ظٹط¯ظٹ ط­ط³ط§ط¨ظƒ
    âœ´ -ping ====> Ping Of Bot | ط¨ظ†ط¬ ط­ظƒ ط§ظ„ط¨ظˆطھ
    âœ´ -allbots => Show All Bots In The Server | ظ„ط§ط¶ظ‡ط§ط± ط¬ظ…ظٹط¹ ط§ظ„ط¨ظˆطھط§طھ
    âœ´ -bot =====> Information Of The Bot | ظ…ط¹ظ„ظˆظ…ط§طھ ط§ظ„ط¨ظˆطھ
    âœ´ -server ==> Information Of The Server | ظ…ط¹ظ„ظˆظ…ط§طھ ط§ظ„ط³ظٹط±ظپط±
    âœ´ -count ===> Member Count | ط¹ط¯ط¯ ط§ظ„ط§ط´ط®ط§طµ ظپظٹ ط§ظ„ط³ظٹط±ظپط±
    âœ´ -cal =====> To Calculate | ط§ظ„ظ‡ ظ„ط­ط§ط³ط¨ط© 
    âœ´ -tag =====> To Tag A Word | ظ„ط¹ظ…ظ„ طھط§ظ‚ ظ„ظƒظ„ظ…ط© 
    âœ´ -rooms ===> Show Rooms Of Server | ط§ط¶ظ‡ط§ط± ط§ظ„ط±ظˆظ…ط§طھ ط§ظ„ظٹ ظپظٹ ط§ظ„ط³ظٹط±ظپط±
    âœ´ -za5 =====> To decorate Some Word | ظ„ط²ط®ط±ظپط© ط§ظ„ظƒظ„ظ…ط§طھ
    âœ´ -roles ===> Show Roles Of The Server | ط§ط¶ظ‡ط§ط± ط§ظ„ط±ط§ظ†ظƒط§طھ
    âœ´ -emojis ==> Emoji Of Server | ط§ظٹظ…ظˆط¬ظٹط§طھ ط§ظ„ط³ظٹط±ظپط±   
    âœ´ -say =====> The Bot Say Any Thing | طھظƒط±ط§ط± ط§ظٹ ط´ظٹ ظƒطھط¨طھظˆ
    âœ´ -image ===> To Show Image Of Server | ظ„ط§ط¶ظ‡ط§ط± طµظˆط±ط© ط§ظ„ط³ظٹط±ظپ 
    âœ´ -contact => To Contact Owners Bot | ظ…ط±ط§ط³ظ„ط© طµط§ط­ط¨ ط§ظ„ط¨ظˆطھ
    âœ´ -invite \ -inv => Invite Bot | ظ„ط¯ط¹ظˆط© ط§ظ„ط¨ظˆطھ
    âœ´ -embed ===> To Embed | ظ„طھظƒط±ط§ط± ط§ظٹ ط´ظٹ ظƒطھط¨طھظˆ ط¨ط·ط±ظٹظ‚ط© ط­ظ„ظˆط©
    âœ´ -avatar ==> Your Avatar | طµظˆط±طھظƒ ط§ظ„ط´ط®طµظٹط©
    âœ´ -support => Server Support | ط³ظٹط±ظپط± ط§ظ„ط¯ط¹ظ… ط§ظ„ظپظ†ظٹ
     ===========================================================
      React With â–¶ To See Admins Commands`,
	`=-=-=-=-=-= ًں”§  Admin Commands - ط§ظˆط§ظ…ط± ط§ط¯ط§ط±ظٹط© ًں”§ =-=-=-=-=-=
    â‌– -move @user => Move User To Your Room Voice | ظ„ط³ط­ط¨ ط§ظ„ط´ط®طµ ط§ظ„ظ‰ ط±ظˆظˆظ…ظƒ
    â‌– -mvall => Move All To Your Room Voice | ظ„ط³ط­ط¨ ط§ظ„ط¬ظ…ظٹط¹ ط§ظ„ظٹ ط±ظˆظˆظ…ظƒ
    â‌– -bc => Broadcast | ط±ط³ط§ظ„ط© ط¬ظ…ط§ط¹ظٹط© ط§ظ„ظ‰ ظƒظ„ ط§ط¹ط¶ط§ط، ط§ظ„ط³ظٹط±ظپط±
    â‌– -role @user <rank> => Give User Rank | ظ„ط£ط¹ط·ط§ط، ط±طھط¨ط© ظ„ط¹ط¶ظˆ ظ…ط¹ظٹظ†
    â‌– -roleremove @user <rank> => remove Rank From User | ظ„ط§ط²ط§ظ„ط© ط§ظ„ط±طھط¨ط© ظ…ظ† ط´ط®طµ ظ…ط¹ظٹظ†
    â‌– -role all <rank> => Give All Rank | ظ„ط£ط¹ط·ط§ط، ط±طھط¨ط© ظ„ظ„ط¬ظ…ظٹط¹
    â‌– -role humans <rank> => Give Humans Rank | ظ„ط£ط¹ط·ط§ط، ط±طھط¨ط© ظ„ظ„ط§ط´ط®ط§طµ ظپظ‚ط·
    â‌– -role bots <rank> => Give Bots Rank | ظ„ط£ط¹ط·ط§ط، ط±طھط¨ط© ظ„ط¬ظ…ظٹط¹ ط§ظ„ط¨ظˆطھط§طھ
    â‌– -hchannel => Hide Channel | ط§ط®ظپط§ط، ط§ظ„ط´ط§طھ
    â‌– -schannel => Show The Hidden Channel | ط§ط¶ظ‡ط§ط± ط§ظ„ط´ط§طھ ط§ظ„ظ…ط®ظپظٹط©
    â‌– -clr <numbr> => Clear Chat With Number | ظ…ط³ط­ ط§ظ„ط´ط§طھ ط¨ط¹ط¯ط¯
    â‌– -clear => Clear Chat | ظ…ط³ط­ ط§ظ„ط´ط§طھ
    â‌– -mute @user <reason> => Mute User | ط§ط¹ط·ط§ط، ط§ظ„ط¹ط¶ظˆ ظ…ظٹظˆطھ ظ„ط§ط²ظ… ط±طھط¨ط© <Muted>
    â‌– -unmute @user => Unmute User | ظ„ظپظƒ ط§ظ„ظ…ظٹظˆطھ ط¹ظ† ط§ظ„ط´ط®طµ 
    â‌– -kick @user <reason> => Kick User From Server | ط·ط±ط¯ ط§ظ„ط´ط®طµ ظ…ظ† ط§ظ„ط³ظٹط±ظپط±
    â‌– -ban @user <reason> => Ban User From Server | ط­ط¶ط± ط§ظ„ط´ط®طµ ظ…ظ† ط§ظ„ط³ظٹط±ظپط±
    â‌– -mutechannel => Mute Channel | طھظ‚ظپظٹظ„ ط§ظ„ط´ط§طھ
    â‌– -unmutechannel => Unmute Channel | ظپطھط­ ط§ظ„ط´ط§طھ
    â‌– -dc => Delete All Rooms |  ظ…ط³ط­ ظƒظ„ ط§ظ„ط±ظˆظ…ط§طھ
    â‌– -dr => Delete All Rank <ظ…ط³ط­ ظƒظ„ ط§ظ„ط±ط§ظ†ظƒط§طھ <ظ„ط§ط²ظ… طھظƒظˆظ† ط±ط§ظ†ظƒ ط§ظ„ط¨ظˆطھ ظپظˆظ‚ ظƒظ„ ط§ظ„ط±ط§ظ†ظƒط§طھ
    â‌– -ccolors <number> => Create Colors | ظٹظ†ط´ط§ ظ„ظƒ ط§ظ„ظˆط§ظ† ظ…ط¹ ظƒظ… ط§ظ„ظˆط§ظ† طھط¨ظٹ
    â‌– -kv @user => Voice Kick | ظٹط·ط±ط¯ ط´ط®طµ ظ…ظ† ط§ظ„ط±ظˆظˆظ…
    â‌– -vonline => Create Channel Voice Online | ظٹط³ظˆظٹ ط±ظˆظˆظ… ظپظˆظٹط³ ط§ظˆظ†ظ„ط§ظٹظ†
     ===========================================================
     âœ´ Create Channel **welcome** To Enable The Welcome 
     âœ´ Create Channel **suggestion** To Enable Command -sug
     ===========================================================
      React With â–¶ To See Games Commands`,
	`=-=-=-=-=-= ًںژ¯  Games Commands - ط§ظˆط§ظ…ط± ط§ظ„ط§ظ„ط¹ط§ط¨ ًںژ¯ =-=-=-=-=-=
    ًں’  -xo @user => Game XO | ظ„ط¹ط¨ ط§ظƒط³ ط§ظˆ
    ًں’  -rps => Rock & Paper & Scissors | ظ„ط¹ط¨ط© ط­ط¬ط± ظˆط±ظ‚ط© ظ…ظ‚طµ
    ًں’  -slots => Game Of Fruits | ظ„ط¹ط¨ط© ط§ظ„ظپظˆط§ظƒظ‡
    ًں’  -marry @user => ظ„ط¹ط¨ط© ط§ظ„ط²ظˆط§ط¬
    ًں’  -Empire => ظ„ط¹ط¨ط© ط³ط±ط¹ط© ظƒطھط§ط¨ط© 
    ًں’  -ظ„ط¹ط¨ط© ظپظƒظƒ <= ظپظƒظƒ
    ًں’  -ظ„ط¹ط¨ط© ط¹ظˆط§طµظ… <= ط¹ظˆط§طµظ…
    ًں’  -ط§ظ„ط¨ظˆطھ ظٹط¹ط·ظٹظƒ ظ†طµط§ط¦ط­ <= ظ‡ظ„ طھط¹ظ„ظ…
      ظ‚ط±ظٹظٹظٹط¨ ظ†ط¶ظٹظپ ط¨ط¹ط¶ ط§ظ„ط§ظ„ط¹ط§ط¨ ظˆط§ط°ط§ طھط¨ظˆظ† ط§ظٹ ظ„ط¹ط¨ط© طھط¹ط§ظ„ظˆ ط³ظٹط±ظپط± ط§ظ„ظ…ط³ط§ط¹ط¯ط©
    ===========================================================
      React With â–¶ To See Music Commands`,
	`=-=-=-=-=-= ًںژ¯  Music Commands - ط§ظˆط§ظ…ط± ط§ظ„ظ…ظˆط³ظٹظ‚ظ‰ ًںژ¯ =-=-=-=-=-=
    â‌– -play => ظ„طھط´ط؛ظٹظ„ ط£ط؛ظ†ظٹط© ط¨ط±ط¢ط¨ط· ط£ظˆ ط¨ط£ط³ظ…
    â‌– -skip => ظ„طھط¬ط¢ظˆط² ط§ظ„ط£ط؛ظ†ظٹط© ط§ظ„ط­ط¢ظ„ظٹط©
    â‌– -pause => ط¥ظٹظ‚ط¢ظپ ط§ظ„ط£ط؛ظ†ظٹط© ظ…ط¤ظ‚طھط§
    â‌– -resume => ظ„ظ…ظˆط¢طµظ„ط© ط§ظ„ط¥ط؛ظ†ظٹط© ط¨ط¹ط¯ ط¥ظٹظ‚ط¢ظپظ‡ط¢ ظ…ط¤ظ‚طھط§
    â‌– -vol => ظ„طھط؛ظٹظٹط± ط¯ط±ط¬ط© ط§ظ„طµظˆطھ 100 - 0
    â‌– -stop => ظ„ط¥ط®ط±ط¢ط¬ ط§ظ„ط¨ظˆطھ ظ…ظ† ط§ظ„ط±ظˆظ…
    â‌– -np => ظ„ظ…ط¹ط±ظپط© ط§ظ„ط£ط؛ظ†ظٹط© ط§ظ„ظ…ط´ط؛ظ„ط© ط­ط¢ظ„ظٹط§
    â‌– -queue => ظ„ظ…ط¹ط±ظپط© ظ‚ط¢ط¦ظ…ط© ط§ظ„طھط´ط؛ظٹظ„
	Soon And I Will Translate The Command To Englih`]
	let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('â—€').then( r => {
            msg.react('â–¶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === 'â—€' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === 'â–¶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( ط£ظ„ط¹ط¨ ظ…ط¹ ظ†ظپط³ظƒ)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('ظٹط¬ط¨ ط§ظ„ط§ظ†طھط¶ط§ط± ط­ظٹط« ظ…ط§ ظٹطھظ… ط§ظ„ظ…ظˆط§ظپظ‚ظ‡')
    .then(async (new_message) => {
      await new_message.react('1âƒ£');
      await new_message.react('2âƒ£');
      await new_message.react('3âƒ£');
      await new_message.react('4âƒ£');
      await new_message.react('5âƒ£');
      await new_message.react('6âƒ£');
      await new_message.react('7âƒ£');
      await new_message.react('8âƒ£');
      await new_message.react('9âƒ£');
      await new_message.react('ًں†—');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`ظ…ظ†ط´ظ† ظ…ط¹ ظ…ظ† طھط±ظٹط¯ ط£ظ„ط¹ط¨`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });

   client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '-';

if(cmd === `${prefix}sug`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("New suggestion just added !")
    .setDescription(`**${suggestMessage}**`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggestions");
    if (!suggests) return message.channel.send("You should make A **suggestions** channel!")
    suggests.send(suggestEMBED);
}

});


client.on('message', message => {
    if(message.content == ('-id')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./ID1.png','./ID2.png','./ID3.png','./ID4.png','./ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ظ…ط§ ط®طµظƒ ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'Idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'Offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "Dont Play" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });
 
 client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
client.on('message', msg => {
	var prefix = "-";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + " Messages```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', msg => {
  if (msg.content.startsWith('-play')) {
    msg.channel.send('Use >play');
  }
});

			  
client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=528247623321255946&permissions=0&scope=bot')
  .setDescription(`**
  New Server Add Empire Bot âœ…
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("467833183254347797").sendEmbed(embed)
});

client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=528247623321255946&permissions=0&scope=bot')
  .setDescription(`**
   Server kicked Empire Bot :cry:
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("467833183254347797").sendEmbed(embed)
});
 

const prefix = ">"
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('ظٹط¬ط¨ ط§ظ† طھظƒظˆظ† ط¨ط±ظˆظ… طµظˆطھظٹ ');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('ظ…ط§ ط¹ظ†ط¯ظٹ طµظ„ط§ط­ظٹط§طھ ظ„ظ„ط¯ط®ظˆظ„ ظپظٹ ظ‡ط§ط¯ ط§ظ„ط±ط±ظˆظ…');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('ظ…ط§ ط¹ظ†ط¯ظٹ طµظ„ط§ط­ظٹط§طھ ظ„ظ„طھظƒظ„ظ… ظپظٹ ظ‡ط§ط¯ ط§ظ„ط±ط±ظˆظ…');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**`EMBED LINKS ظٹط¬ط¨ ط§ظ† ط§طھظˆظپط± ط¨ط±ظ…ط´ظ† **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** طھظ… ط§ظ„ط¶ط§ظپط© ط§ظ„ظٹ ظ‚ط§ط¦ظ…ط© ط§ظ„طھط´ط؛ط¨ظ„`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**ط§ظ„ط±ط¬ط§ط، ط§ط®طھظٹط§ط± ط±ظ‚ظ… ط§ظ„ظ…ظ‚ط·ط¹** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("Empire Bot")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('ظ„ظ… ظٹطھظ… ط¥ط®طھظٹط¢ط± ط§ظٹ ظ…ظ‚ط·ط¹ طµظˆطھظٹ');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: ظ„ط§ ظٹطھظˆظپط± ظ†طھط¢ط¦ط¬ ط¨ط­ط« ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ط£ظ†طھ ظ„ط³طھ ط¨ط±ظˆظ… طµظˆطھظٹ .');
		if (!serverQueue) return msg.channel.send('ظ…ط§ظپظٹ ط§ظٹ ظ…ظ‚ط·ط¹ ظ„طھط¬ط§ظˆط²ظ‡');
		serverQueue.connection.dispatcher.end('طھظ… طھط¬ط§ظˆط² ط§ظ„ظ…ظ‚ط·ط¹');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ط£ظ†طھ ظ„ط³طھ ط¨ط±ظˆظ… طµظˆطھظٹ .');
		if (!serverQueue) return msg.channel.send('ظ„ظ…ط§ظپظٹ ط§ظٹ ظ…ظ‚ط·ط¹ ظ„ط§ظٹظ‚ط§ظپظ‡');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('طھظ… ط¥ظٹظ‚ط§ظپ ط§ظ„ظ…ظ‚ط·ط¹');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ط£ظ†طھ ظ„ط³طھ ط¨ط±ظˆظ… طµظˆطھظٹ .');
		if (!serverQueue) return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط´ط؛ط¢ظ„.');
		if (!args[1]) return msg.channel.send(`:loud_sound: ظ…ط³طھظˆظ‰ ط§ظ„طµظˆطھ **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: طھظ… طھط؛ظٹط± ط§ظ„طµظˆطھ ط§ظ„ظٹ **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط­ط§ظ„ظٹ ظپط§ظ„ط¹ظ…ظ„.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: ط§ظ„ط§ظ† ظٹطھظ… طھط´ط؛ظٹظ„ : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط­ط§ظ„ظٹ ظپط§ظ„ط¹ظ…ظ„.');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**ط§ظ„ط§ظ† ظٹطھظ… طھط´ط؛ظٹظ„** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('طھظ… ط¥ظٹظ‚ط§ظپ ط§ظ„ظ…ظˆط³ظٹظ‚ظ‰ ظ…ط¤ظ‚طھط§!');
		}
		return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط­ط§ظ„ظٹ ظپ ط§ظ„ط¹ظ…ظ„.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('ط§ط³طھط£ظ†ظپطھ ط§ظ„ظ…ظˆط³ظٹظ‚ظ‰ ط¨ط§ظ„ظ†ط³ط¨ط© ظ„ظƒ !');
		}
		return msg.channel.send('ظ„ط§ ظٹظˆط¬ط¯ ط´ظٹط، ط­ط§ظ„ظٹ ظپظٹ ط§ظ„ط¹ظ…ظ„.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`ظ„ط§ ط£ط³طھط·ظٹط¹ ط¯ط®ظˆظ„ ظ‡ط°ط¢ ط§ظ„ط±ظˆظ… ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** طھظ… ط§ط¶ط§ظپظ‡ ط§ظ„ط§ط؛ظ†ظٹط© ط§ظ„ظٹ ط§ظ„ظ‚ط§ط¦ظ…ط©!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`ط¨ط¯ط، طھط´ط؛ظٹظ„ : **${song.title}**`);
}
const adminprefix = "-v";
const devs = ['349616310734553088','335027415619338240'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : طھظ… طھط؛ظٹظٹط± ط£ط³ظ… ط§ظ„ط¨ظˆطھ ط¥ظ„ظ‰`)
return message.reply("**ظ„ط§ ظٹظ…ظƒظ†ظƒ طھط؛ظٹظٹط± ط§ظ„ط§ط³ظ… ظٹط¬ط¨ ط¹ظ„ظٹظƒ ط§ظ„ط§ظ†طھط¸ط¢ط± ظ„ظ…ط¯ط© ط³ط§ط¹طھظٹظ† . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : طھظ… طھط؛ظٹط± طµظˆط±ط© ط§ظ„ط¨ظˆطھ`);
      } 
});





client.on('message', ra3d => {
var prefix = "-";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`How Many Colors??`');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('**You Dont Have Permission `MANAGE_ROLES`**'); 
              ra3d.channel.send(`**âœ… |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {
var prefix = "-";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'ظ‡ظ„ طھط¹ظ„ظ…')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "-";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


client.on("message", function(message) {
	var prefix = "-";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","ًں‡·",true)
    .addField("Paper","ًں‡µ",true)
    .addField("Scissors","ًں‡¸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ًں‡·')
        msg.react("ًں‡¸")
        msg.react("ًں‡µ")
.then(() => msg.react('ًں‡·'))
.then(() =>msg.react('ًں‡¸'))
.then(() => msg.react('ًں‡µ'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === 'ًں‡·' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === 'ًں‡¸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === 'ًں‡µ' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

 client.on('message', message => {
	 var prefix ="-";
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**ًں†” Server ID:**", message.guild.id,true)
.addField("**ًں“… Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**ًں‘‘ Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("ًں‘¥ Members ",`[${message.guild.memberCount}]`,true)
.addField('**ًں’¬ Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**ًںŒچ Others **" , message.guild.region,true)
.addField("** ًں”گ Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Empire Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ - ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | Elmusaui_GK and Empire')
    })
}
});

client.on('message',async Epic => {
  var prefix = "-" ;
  if(Epic.content.startsWith(prefix + "vonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});

client.on('message', message => {
	var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`âœ… You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("â‌Œ")
 }}});

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('ًںŒچ| Members info')
      .addBlankField(true)
      .addField('Mmeber Count',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



client.on('message', msg => {
	var  prefix = "-";
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});



client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('Write Some Things');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});



 client.on('message', message => {
	    var prefix = "-";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Dont Have perms** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Empire Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**Write Some Things To Broadcast**');message.channel.send(`**Are You Sure \nThe Broadcast: ** \` ${args}\``).then(msg => {
    msg.react('âœ…')
    .then(() => msg.react('â‌Œ'))
    .then(() =>msg.react('âœ…'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === 'âœ…' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === 'â‌Œ' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**âک‘ | Done ... The Broadcast Message Has Been Sent To __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

let points = {};
const type = [
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
        "answers": ["ط§ظ„ط¨ط±ط§ط²ظٹظ„"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
        "answers": ["ط§ظ„ط³ط¹ظˆط¯ظٹط©"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
        "answers": ["ط§ظ„ظ‚ط³ط·ظ†ط·ظٹظ†ظٹط©"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
        "answers": ["ط§ظ„ظ†ظ‡ط§ظٹط©"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["ط§ظ…ط§ط²ظˆظ†"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["ط¬ط§ظپط§ط³ظƒط±ط¨طھ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["ط³ظ‡ظ„ظ‡ ظ…ظˆ طµط¹ط¨ظ‡"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["ط·ط¨ظ‚ ط±ط·ط¨ ظ…ط±ظ‚ ط¨ظ‚ط±"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["ظ…طھط¬ط±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["ط´ط¬ط±ط© ط§ظ„ط£ظˆط؛ظٹط±ظٹ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["ط¹ط´ ط§ظ„ط¹طµظپظˆط±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["ظ‚ظ… ط¨ظƒطھط§ط¨ط©"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["ظƒط§ظ†ظٹظƒظٹ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["ظ„ظٹظˆط¨ظ„ظٹط§ظ†ط§"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["ظ‡ظˆط§ظˆظٹ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["ظٹط§ط®ط±ط§"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["ظٹظˆظ… ط§ظ„ط®ظ…ظٹط³"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
        "answers": ["DO YOU KNOW THE WAY"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["ط§ظ„ط£ط±ط¶"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["ط§ظ„ط¨ظˆط§ط¨ط©"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["ط§ظ„ط¬ظ…ظ„ ط§ط¨ظˆ ط±ط§ط³ظٹظ†"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["ط§ظ„ط­ظˆطھ ط§ظ„ط£ط²ط±ظ‚ط،"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["ط§ظ„ظ‚ط§ط±ط¨ ط§ظ„ظ…ظƒط³ظˆط±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["ط§ظ„ظ…ط¯ط±ط³ط©"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["ط§ظ„ظٹط§ط¨ط§ظ†"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["ط¨ظ„ط§ظٹط³طھط§ظٹط´ظ†"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["ط¬ط²ط± ط§ظ„ظ‚ظ…ط±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["ط­ط´ظٹط´"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["ط³ظˆط¨ط±ط§ط´ظٹ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["ظ‚ظˆطھط´ظٹ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["ط§ظٹظپظˆظ†"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["طھظٹط³طھط§ ظ„ط§ط؛ظˆط³ط§"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["ط¨ط³ظƒظˆطھ ط§ط¨ظˆ ظˆظ„ط¯"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["طھظƒط£ظƒط£طھظ…"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ظ…ظپظٹط¯ط©"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["ط§ظ„ط£ظˆط³ظƒط§ط±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["ظƒظ†طھ ط§ظ…ط´ظٹ ظˆط£ظ…ط´ظٹ"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["ظ„ط§ط§ط§ط§ظ‚ ط¨ظˆطھط،"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["ط§ط¨ظˆ ظ†ط§طµط± ط³ط±ظ‰ ظ„ظٹظ„ظ‡"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["ط¹ط¯ط¯ ط§ظ„ظ„ظٹ ط¨ط±ظ…ط¬ظˆظ†ظٹ 2"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["Dark_Neet"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["ط¨ط§ط¨ط§ ط³ظ†ظپظˆط± ظ…طھط¹ط§ط·ظٹ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["ظ…ظٹط±ظ†ط¯ط§ ط­ظ…ط¶ظٹط§طھ ظٹظ„ط¯"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["ظ‡ظ„ ط§ظ„ط¯ظ…ط¹ ظ…ظ† ط¹ظٹظ†ظ‡"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["ط·ط§ط±طھ ط§ظ„ط·ظٹط§ط±ظ‡ ط·ط§ط±طھ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["ط£ظ†ط§ ظپظˆظ‚ ط±ط§ط³ظٹ ط±ظٹط´ظ‡"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["ظپط±ظٹظ‚ ط§ظ„ظ†ط¬ظ…ط©"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["ط®ط§ظ„ط¯ ط¹ط¨ط¯ط§ظ„ط±ط­ظ…ظ†"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["ط­ط¨ظٹطھ ظ…ط±ظ‡ ظ…ظ† ظ‚ظ„ط¨ظٹ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["ظƒط±ط³طھظٹط§ظ†ظˆ ظٹط²ظ‚"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["ط£ظ†طھ ظ‚ظ…ط± ظٹط§ ظ‚ظ…ط±"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["ط§ظ†ط§ ط§ط¬ظ…ظ„ ظ…ط®ظ„ظˆظ‚"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["ط¯ظˆظ†طھ طھط§طھط´"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["طھظˆظ… ظˆط¬ظٹط±ظٹ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["ط¯ط¨ط§ط¨ ط§ط±ط¨ط¹ ظƒظپط±ط§طھ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["ط§ظ„ظ‚ط±ط´ ط§ظ„ط£ط³ظˆط¯ط¯"]
 
              },
    {
   
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["ط¯ط¯ط³ظ† ظ…ظˆط¯ظٹظ„ 85"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["ط§ظ„ط­ط§ط±ط«ظٹط،"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["ط¹ط²ط§ط²ظٹ ظ…ط³ط±ط¹"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["ط¬ط§ظƒظٹ ط´ط§ط§ظ†"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["ط¯ط§ط±ظƒ ظ†طھ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["ظپط§ظ†طھط§ط³طھظٹظƒ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["ط²ط¨ط§ظ„ظ‡ ظ…طھظ†ظ‚ظ„ط©"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["ط§ظƒط³ ط¨ظˆظƒط³ ظٹظ„ط¯"]
 
        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["ط¨ظƒط³ظ„ ظٹط§ظ„ظˆطµط®ط®"]

    }
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="-";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    message.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( message.content == prefix+'Empire'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظ„ظ„ط³ظٹط±ظپط±ط§طھ ظپظ‚ط·**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`âڈ³ |You have آ»15آ« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
  .setDescription('**âœ… |Good Job +1P**')
   .setFooter(`${collected.first().author}`)
  message.channel.sendEmbed(sh);
            let won = collected.first().author; // ظپظٹ ظ‡ط°ط§ ط§ظ„ط³ط·ط± ظٹظ‚ظˆظ… ط§ظ„ظƒظˆط¯ ط¨ط³ط­ط¨ ط§ظ„ط£ظٹ ط¯ظٹ ط§ظ„ط°ظٹ ظ‚ط§ظ… ط¨ط§ظ„ط£ط¬ط§ط¨ط© ط§ظˆظ„ط§ظ‹
            points[won.id].points++;
          })
          .catch(collected => { // ظپظٹ ط­ط§ظ„ ظ„ظ… ظٹظ‚ظ… ط£ط­ط¯ ط¨ط§ظ„ط¥ط¬ط§ط¨ط©
            message.channel.send(`ًں”ڑ |**Time Is End**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});





 client.on('message', message => {
	 var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "za5") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`**#** \n ${zalgo(args.join(' '))}`);
  }

});


client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Dont Have Permissions__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: Success Removed Role [ '+role1.name+' ] From [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ]  From All**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark:Success Gived Rank [ '+role1.name+' ] To [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: Success Gived All Rank [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Bots Rank [ '+role1.name+' ] **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Humans Rank [ '+role1.name+' ]**');
		} 
	} 
});

client.on('message', message => {
    if (message.content === "-rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "-roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
 
client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});



client.on('message', message => { 
let prefix = '-'
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('â‍، Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('message',function(message) {
	let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); 
}
});

  

client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "-";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("**You Should Create A Rank Name `Muted`**").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('**You Have To Mention SomeOne**').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} You Are Muted Because You Broke Rules 
${message.author.tag} By
[ ${reason} ] : Reason
If You Didnt Any Thing GGO To Staff
`)
		.setFooter(`Server : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: You Have To Mention SomeOne ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":x: This User In Not Muted")

  await toMute.removeRole(role)
  message.channel.sendMessage(":white_check_mark: Succes Has Been Unmuted The User");

  return;

  }

});
 


client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**Thank You For Adding The Bot To Your Server If You Need Any Help In The Bot Go To Suuport Server** https://discord.gg/htNpU3J`)
      guild.owner.send(embed)
});

    
var fkk =[
        {f:"ظپظƒظƒ ط¨ط³ظ… ط§ظ„ظ„ظ‡ ط§ظ„ط±ط­ظ…ظ† ط§ظ„ط±ط­ظٹظ…",k:"ط¨ ط³ ظ… ط§ ظ„ ظ„ ظ‡ ط§ ظ„ ط± ط­ ظ… ظ† ط§ ظ„ ط± ط­ ظٹ ظ…"},
        {f:"ظپظƒظƒ ط¨ط§طµ",k:"ط¨ ط§ طµ"},
        {f:"ظپظƒظƒ ط¹ط±ط¨ط© ",k:"ط¹ ط± ط¨ ط©"},
        {f:"ظپظƒظƒ ط³ظٹط§ط±ط©",k:"ط³ ظٹ ط§ ط± ط©"},
        {f:"ظپظƒظƒ ط³ظٹط±ظپط±ظ†ط§ ط§ط­ظ„ظ‰ ط³ظٹط±ظپط±",k:"ط³ ظٹ ط± ظپ ط± ظ† ط§ ط§ ط­ ظ„ ظ‰ ط³ ظٹ ط± ظپ ط±"},
        {f:"ظپظƒظƒ ط§ظ„ط¹ظ†ظˆط¯ ",k:"ط§ ظ„ ط¹ ظ† ظˆ ط¯"},
        {f:"ظپظƒظƒ ط§ظ„ظ…ط³طھطھظƒط¹ظƒط¨طھظٹظ‡",k:"ط§ ظ„ ظ… ط³ طھ طھ ظƒ ط¹ ظƒ ط¨ طھ ظٹ ظ‡"},
        {f:"ظپظƒظƒ ط¯ط­ظˆظ…",k:"ط¯ ط­ ظˆ ظ…"},
        {f:"ظپظƒظƒ ط§ظˆظ†ط±ظ†ط§ ط§ط­ظ„ظ‰ ط§ظˆظ†ط±",k:"ط§ ظˆ ظ† ط± ظ† ط§ ط§ ط­ ظ„ ظ‰ ط§ ظˆ ظ† ط±"},
        {f:"ظپظƒظƒ ط§ظ„ط­ظٹط§ط© ط­ظ„ظˆط©",k:"ط§ ظ„ ط­ ظٹ ط§ ط© ط­ ظ„ ظˆ ط©"},
        {f:"ظپظƒظƒ ظƒط§ط²ط®ط³طھط§ظ† ",k:"ظƒ ط§ ط² ط® ط³ طھ ط§ ظ†"},
        {f:"ظ„ط­ظ… ط§ظ„ط­ظ…ط§ظ… ط­ظ„ط§ظ„ ظˆظ„ط­ظ… ط§ظ„ط­ظ…ط§ط± ط­ط±ط§ظ… ",k:"ظ„ ط­ ظ… ط§ ظ„ ط­ ظ… ط§ ظ… ط­ ظ„ ط§ ظ„ ظˆ ظ„ ط­ ظ… ط§ ظ„ ط­ ظ… ط§ ط± ط­ ط± ط§ ظ…"},
        {f:"ظپظƒظƒ ط§ط³طھظˆظ†ظٹط§ ",k:"ط§ ط³ طھ ظˆ ظ† ظٹ ط§"},
        {f:"ظپظƒظƒ ظ„ظ‚ظ…ط© ظˆط¬ط؛ظ…ظ‡ ",k:"ظ„ ظ‚ ظ… ط© ظˆ ط¬ ط؛ ظ… ظ‡"},
        {f:"ظپظƒظƒ ط²ظ†ط¯ظٹظ‚  ",k:"ط² ظ† ط¯ ظٹ ظ‚"},
        {f:"ظپظƒظƒ ط§ط³طھط±ط§ظ„ظٹط§ ",k:"ط§ ط³ طھ ط± ط§ ظ„ ظٹ ط§"},
        {f:"ظپظƒظƒ ط³ظˆط±ظٹط§ ",k:"ط³ ظˆ ط± ظٹ ط§"},
        {f:"ظپظƒظƒ ط§ظ„ط§ط±ط¯ظ† ",k:"ط§ ظ„ ط§ ط± ط¯ ظ†"},
        {f:"ظپظƒظƒ ط·ظ…ط§ط·ظ… ",k:"ط· ظ… ط§ ط· ظ…"},
        {f:"ظپظƒظƒ ط³ط§ط±ط© ",k:"ط³ ط§ ط± ط©"},
        {f:"ظپظƒظƒ ط¯ط±ط§ط¬ظˆظ† ",k:"ط¯ ط± ط§ ط¬ ظˆ ظ†"},
        {f:"ظپظƒظƒ ط³ظٹط±ظپط± ",k:"ط³ ظٹ ط± ظپ ط±"},
        {n:"ظپظƒظƒ ط§ظ„ط¬ط¨ظ„",m:"ط§ ظ„ ط¬ ط¨ ظ„"},
        {n:"ظپظƒظƒ ظ‡ط¶ط¨ط©",m:"ظ‡ ط¶ ط¨ ط©"},
        {n:"ظپظƒظƒ ط®ظˆط§ط·ط±",m:"ط® ظˆ ط§ ط· ط±"},
        {n:"ظپظƒظƒ ط§ط±ط­ط¨ظˆ",m:"ط§ ط± ط­ ط¨ ظˆ"},
        {n:"ظپظƒظƒ ط§ط·ظ†ط® ط³ظٹط±ظپط±",m:"ط§ ط· ظ† ط® ط³ ظٹ ظپ ط±"},
        {n:"ظپظƒظƒ ط§ط­ط¨ظƒ",m:"ط§ ط­ ط¨ ظƒ"},
        {n:"ظپظƒظƒ ط³ط¨ط±ط§ظٹط²",m:"ط³ ط¨ ط± ط§ ظٹ ط²"},
        {n:"ظپظƒظƒ ظˆظ„ظٹ ط¹ظ„ظ‰ ط£ظ…طھظƒ",m:"ظˆ ظ„ ظٹ ط¹ ظ„ ظ‰ ط£ ظ… طھ ظƒ"},
        {n:"ظپظƒظƒ ط§ظ„ظˆ ظ…ط­ط¯",m:"ط§ ظ„ ظˆ ظ… ط­ ظ… ط¯"},


   ];


   client.on("message", async message => {
	   var prefix = "-";
    if(message.content == prefix+"ظپظƒظƒ"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("ظ‡ظ†ط§ظƒ ط¬ظ„ط³ط© .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('ظ„ط¹ط¨ط© ظپظƒظƒ')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "ظپظƒظƒ") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: ط§ط¬ط§ط¨ط© طµط­ظٹط­ط©')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** ط§ظ„ط¥ط¬ط§ط¨ط© طµط­ظٹط­ط©`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:ط®ط·ط§ط،')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** ط§ظ„ط¥ط¬ط§ط¨ط© ط®ط§ط·ط¦ط©`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});





   client.on("message", async message => {
var prefix = "-";
var aoasm =[
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ظ…ط؛ط±ط¨**",a:"ط§ظ„ط±ط¨ط§ط·"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظپط؛ط§ظ†ط³طھط§ظ†**",a:"ظƒط¨ظ„"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط§ظ„ط¨ط§ظ†ظٹط§**",a:"طھظٹط±ط§ظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط¬ط²ط§ط¦ط± **",a:"ط§ظ„ط¬ط²ط§ط¦ط±"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** **",a:"ط§ظ„ط¬ط²ط§ط¦ط±"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ†ط¯ظˆط±ط§ ظ„ط§ ظپظٹظ„ط§ **",a:"ط§ظ†ط¯ظˆط±ط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ†ط¬ظˆظ„ط§**",a:"ظ„ظˆط§ظ†ط¯ط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ†طھظٹط¬ظˆط§ ظˆط¨ط§ط±ط¨ظˆط¯ط§**",a:"ط³ط§ظ† ط¬ظˆظ†ط²"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط§ط±ط¬ظ†طھظٹظ†**",a:"ط¨ظˆظٹظ†ط³ ط§ظٹط±ط³"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ط±ظ…ظٹظ†ظٹط§**",a:"ظٹط±ظٹظپط§ظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ظ…طµط±**",a:"ط§ظ„ظ‚ط§ظ‡ط±ط©"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط§ط³طھط±ط§ظ„ظٹط§**",a:"ظƒط§ظ†ط¨ط±ط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ظ†ظ…ط³ط§**",a:"ظپظٹظٹظ†ط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط§ط°ط±ط¨ظٹط¬ط§ظ†**",a:"ط¨ط§ظƒظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط¬ط²ط± ط§ظ„ط¨ظ‡ط§ظ…ط§**",a:"ظ†ط§ط³ط§ظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط¨ط­ط±ظٹظ†**",a:"ط§ظ„ظ…ظ†ط§ظ…ط©"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ظ†ط¬ظ„ط§ط¯ï؟½ï؟½ط´**",a:"ط¯ظƒظ€ط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط¨ط§ط±ط¨ط§ط¯ظˆط³ **",a:"ط¨ط±ظٹط¯ط¬طھط§ظˆظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط¨ظٹظ„ط§ ط±ظˆط³ظٹط§**",a:"ظ…ظٹظ†ط³ظƒ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ظ„ط¬ظٹظƒط§**",a:"ط¨ط±ظˆظƒط³ظ„"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ظٹظ„ظٹط²**",a:"ط¨ظ„ظˆظ… ط¨ط§ظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ظ†ظٹظ†**",a:"ط¨ظˆط±طھظˆ ظ†ظˆظپظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ظˆطھط§ظ†**",a:"ط«ظٹظ…ظپظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط¨ظˆظ„ظٹظپظٹط§ **",a:"ظ„ط§ط¨ط§ط²"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط§ظ„ط¨ظˆط³ظ†ط© ظˆط§ظ„ظ‡ط±ط³ظƒ**",a:"ط³ط±ط§ظٹظٹظپظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ظˆطھط³ظˆط§ظ†ط§**",a:"ط¬ط§ط¨ظˆط±ظˆظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط§ظ„ط¨ط±ط§ط²ظٹظ„**",a:"ط¨ط±ط§ط²ظٹظ„ظٹط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ط±ظˆظ†ط§ظ‰**",a:"ط¨ظ†ط¯ط± ط³ط±ظ‰ ط¨ظٹط¬ط§ظˆط§ظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ظ„ط؛ط§ط±ظٹط§**",a:"طµظˆظپظٹط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¨ظˆط±ظƒظٹظ†ط§ ظپط§ط³ظˆ**",a:"ظˆط§ط¬ط§ط¯ظˆط¬ظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط¨ظˆط±ظˆظ†ط¯ظ‰ **",a:"ط¨ظˆط¬ظˆظ…ط¨ظˆط±ط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ظƒظ…ط¨ظˆط¯ظٹط§ **",a:"ط¨ظ†ظˆظ… ط¨ظ†ظ€ظ‡"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط§ظ„ظƒط§ظ…ظٹط±ظˆظ†**",a:"ظٹط§ظˆظ†ط¯ظ‰"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ظƒظ†ط¯ط§**",a:"ط§ظˆطھط§ظˆط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط§ظ„ط±ط£ط³ ط§ظ„ط§ط®ط¶ط±**",a:"ط¨ط±ط§ظٹط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **طھط´ط§ط¯ **",a:"ظ†ط¬ط§ظ…ظٹظ†ط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط´ظٹظ„ظ‰**",a:"ط³ط§ظ†طھظٹط§ط¬ظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„طµظٹظ† **",a:"ط¨ظƒظٹظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** **",a:"ظ…ظˆط±ظˆظ†ظ‰"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ظƒظˆط³طھط§ط±ظٹظƒط§ **",a:"ط³ط§ظ† ط®ظˆط³ظٹظ‡"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ظƒظˆطھ ط¯ظٹظپظˆط§ط±**",a:"ط§ط¨ظٹط¯ط¬ط§ظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ظƒط±ظˆط§طھظٹط§ **",a:"ط²ط؛ط±ط¨"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ظƒظˆط¨ط§**",a:"ظ‡ط§ظپط§ظ†ط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ظ‚ط¨ط±طµ**",a:" "},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¬ظ…ظ‡ظˆط±ظٹط© ط§ظ„طھط´ظٹظƒ**",a:"ط¨ط±ط§ط؛"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط¯ظ†ظ…ط§ط±ظƒ **",a:"ظƒظˆط¨ظ†ظ‡ط§ط¬ظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¬ظٹط¨ظˆطھظ‰**",a:"ط¬ظٹط¨ظˆطھظ‰"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© ** ط¯ظˆظ…ظٹظ†ظٹظƒط§**",a:"ط±ظˆط³ظٹظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط¯ظˆظ…ظٹظ†ظٹظƒط§ظ† **",a:"ط³ط§ظ† ط¯ظˆظ…ظٹظ†ط¬ظˆ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **طھظٹظ…ظˆط± ط§ظ„ط´ط±ظ‚ظٹط© **",a:"ط¯ظٹظ„ظ‰"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ظ‚ط·ط±  **",a:"ط§ظ„ط¯ظˆط­ط©"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط³ط¹ظˆط¯ظٹط©  **",a:"ط§ظ„ط±ظٹط§ط¶"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط³ظˆط±ظٹط§  **",a:"ط¯ظ…ط´ظ‚"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **طھط±ظƒظٹط§  **",a:"ط§ظ†ظ‚ط±ط©"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط¹ط±ط§ظ‚  **",a:"ط¨ط؛ط¯ط§ط¯"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط¨ظ†ط§ظ†  **",a:"ط¨ظٹط±ظˆطھ"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ظپظ„ط³ط·ظٹظ†  **",a:"ط§ظ„ظ‚ط¯ط³"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ…ط±ظٹظƒط§  **",a:"ظˆط§ط´ظ†ط·ظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط§ط±ط¯ظ†  **",a:"ط¹ظ…ط§ظ†"},    
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط³ظˆط¯ط§ظ†  **",a:"ط®ط±ط·ظˆظ…"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ظ…ط§ï؟½ï؟½ظٹط§  **",a:"ط¨ط±ظ„ظٹظ†"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ظƒظ†ط¯ط§  **",a:"ط§ظˆطھط§ظˆط§"},
    {q:"ظ…ط§ ط¹ط§طµظ…ط© **ط§ظ„ط¨ط±ط§ط²ظٹظ„  **",a:"ط¨ط±ط§ط²ظٹظ„ظٹط§"},
   ];
    if(message.content == prefix+"ط¹ظˆط§طµظ…"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("ظ‡ظ†ط§ظƒ ط¬ظ„ط³ط© .")
        UserBlocked.add(message.guild.id)
        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('ط³ط¤ط§ظ„ ط¹ظˆط§طµظ…')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.q);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "ط¹ط§طµظ…ط©") return
           if(result.content == ask.a){
             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: ط§ط¬ط§ط¨ط© طµط­ظٹط­ط©')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** ط§ظ„ط¥ط¬ط§ط¨ط© طµط­ظٹط­ط©`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                                  var embedx = new Discord.RichEmbed()
                .setTitle(':x:ط®ط·ط§ط،')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** ط§ظ„ط¥ط¬ط§ط¨ط© ط®ط§ط·ط¦ط©`);
                message.channel.sendEmbed(embedx);
           }
     });
  }
});

client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message' , message => {
var prefix = "-"
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
client.users.get("349616310734553088").send(
    "\n" + "**" + "â—ڈ ط§ظ„ط³ظٹط±ظپط± :" + "**" +
    "\n" + "**" + "آ» " + message.guild.name + "**" +
    "\n" + "**" + " â—ڈ ط§ظ„ظ…ط±ط³ظ„ : " + "**" +
    "\n" + "**" + "آ» " + message.author.tag + "**" +
    "\n" + "**" + " â—ڈ ط§ظ„ط±ط³ط§ظ„ط© : " + "**" +
    "\n" + "**" + args + "**");


}
    
});

client.on('message', message => {
	var prefix = "-";
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });

client.on('message', message => {
if(message.content.startsWith("-slots")) {
  let slot1 = ['ًںچڈ', 'ًںچ‡', 'ًںچ’', 'ًںچچ', 'ًںچ…', 'ًںچ†', 'ًںچ‘', 'ًںچ“'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message' , message => {
var prefix = "-"
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return message.reply("This Command Only For Servers");
let args = message.content.split(" ").slice(1).join(" ");
client.users.get("335027415619338240").send(
    "\n" + "**" + "â—ڈ ط§ظ„ط³ظٹط±ظپط± :" + "**" +
    "\n" + "**" + "آ» " + message.guild.name + "**" +
    "\n" + "**" + " â—ڈ ط§ظ„ظ…ط±ط³ظ„ : " + "**" +
    "\n" + "**" + "آ» " + message.author.tag + "**" +
    "\n" + "**" + " â—ڈ ط§ظ„ط±ط³ط§ظ„ط© : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: Succes The Message Has Been Sent To The Owners')
     .setThumbnail(message.author.avatarURL)
     .setFooter("Empire Bot")
                                                

message.channel.send(embed);


}
    
});

client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Cant BAN SomeOne High Than My Rank**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been Locked Channel**")
              });
                }
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been UnLocked Channel**")
              });
    }
       
});

client.on('message', message => {
   if (message.content.startsWith("-id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('message', message => {
        if (message.content === "-invite") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`â‍، Click Here `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=400489866573512705&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });
   
   client.on('message', message => {
        if (message.content === "-inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`â‍، Click Here `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=400489866573512705&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });
 
client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            var prefix = "-";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});


   client.on('message', message => {
     if (message.content === "-support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/htNpU3J**")
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', omar => {
var prefix = "-";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("âœ… `Success Deleted All Roles - Ranks`")
}// omar jedol / Codes
});

client.on('message', message => {
	var prefix = "-";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('âœ…')
.then(() => msg.react('â‌Œ'))
.then(() =>msg.react('âœ…'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === 'âœ…' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === 'â‌Œ' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ًںکڈ **ظ„ط§ط²ظ… طھط·ظ„ط¨ ط§ظٹط¯ ظˆط­ط¯ط©**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ًںک³ **ظˆظ„ط¯ ظ…ط§ ظٹطµط­ظ„ظƒ ط§ظ„ط§ ط­ط±ظ…ط© ظˆط­ط¯ط© ظƒظ„ ظ…ط±ط©**').catch(console.error);
       if(proposed === message.author) return message.reply(`**ط®ظ†ط«ظ‰ طں **`);
        if(proposed === client.user) return message.reply(`** طھط¨ظٹ طھطھط²ظˆط¬ظ†ظٹطں **`);
              message.channel.send(`**${proposed} 
 ط¨ط¯ظƒ طھظ‚ط¨ظ„ظٹ ط¹ط±ط¶ ط§ظ„ط²ظˆط§ط¬ ظ…ظ† ${message.author} 
 ط§ظ„ط¹ط±ط¶ ظ„ظ…ط¯ط© 15 ط«ط§ظ†ظٹط©  
 ط§ظƒطھط¨ظٹ ظ…ظˆط§ظپظ‚ط© ط§ظˆ ظ„ط§**`)

const filter = m => m.content.startsWith("ظ…ظˆط§ظپظ‚ط©");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} ظˆ ${proposed} ط§ظ„ظپ ط§ظ„ظپ ظ…ط¨ط±ظˆظƒ ط§ظ„ظ„ظ‡ , ظٹط±ط²ظ‚ظƒظ… ط§ظ„ط°ط±ظٹط© ط§ظ„طµط§ظ„ط­ط©** `);
})

   const filte = m => m.content.startsWith("ظ„ط§");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} طھظ… ط±ظپط¶ ط¹ط±ط¶ظƒ** `);
})
        
  }
});
  
client.on("message", message => {
    var prefix = "-";
    const command = message.content.split(" ")[0];

    if(command == prefix+"kv"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
