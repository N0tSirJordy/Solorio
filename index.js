const star = require('star-labs');

const Discord = require("discord.js");

const config = require("./config.json");

const booru = require("booru");

const {meme} = require("memejs");

const akaneko = require("akaneko");

const client = new Discord.Client();

client.on("ready", () => {

  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);

  client.user.setActivity(`Sirviendo ${client.guilds.cache.size} servers (Mi prefix es === "s!")`);
});

client.on("guildCreate", guild => {

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Sirviendo ${client.guilds.cache.size} servers`);
});

client.on("guildDelete", guild => {

  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Sirviendo ${client.guilds.cache.size} servers`);
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ping") {

    const m = await message.channel.send("Haciendo ping...");
    m.edit(`La latencia es ${m.createdTimestamp - message.createdTimestamp}ms. La latencia del API es ${Math.round(client.ws.ping)}ms`);
  }

  if(command === "say"){

    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{});

    message.channel.send(sayMessage);
  }

  if(command === "purge"){

    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Porfavor escribe un número entre 2 y 100");

    const fetched = await message.channel.messages.fetch({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`No puedo borrar mensajes. Razón: ${error}`));
  }
  
  if(command == "hentai"){
    if(!message.channel.nsfw){
      return message.channel.send("este canal no es NSFW")
    }
    const hentaiembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.hentai())
    message.channel.send(hentaiembed)
     }

      if(command === 'cum'){
        message.delete()
        let aA = message.author
        let aB = message.mentions.users.first()
        if(!aB) return message.channel.send('Menciona un usuario para... xd');
        const aC = new Discord.MessageEmbed()
          .setDescription(aA.tag+' cumeó a '+aB.tag)
          .setImage(akaneko.nsfw.cum())
          .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
          .setTimestamp();
        message.channel.send(aC);
        }
        if(command === 'blowjob'){
          message.delete()
          let aA = message.author
          let aB = message.mentions.users.first()
          if(!aB) return message.channel.send('Menciona un usuario para darle un blowjob 🥴');
          const aC = new Discord.MessageEmbed()
          .setDescription(aA.tag+' le hizo un blowjob a '+aB.tag)
          .setImage(akaneko.nsfw.blowjob())
          .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
          .setTimestamp();
          message.channel.send(aC);
        }
        if(command == "maid"){
          if(!message.channel.nsfw){
            return message.channel.send("Este canal no está marcado como NSFW")
          }
          const maidembed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setImage(akaneko.nsfw.maid())
          message.channel.send(maidembed)
           }
           if(command == "netorare"){
            if(!message.channel.nsfw){
              return message.channel.send("Este canal no está marcado como NSFW")
            }
            const netorareembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(akaneko.nsfw.netorare())
            message.channel.send(netorareembed)
             }
             if(command == "uniform"){
              if(!message.channel.nsfw){
                return message.channel.send("Este canal no está marcado como NSFW")
              }
              const uniformembed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setImage(akaneko.nsfw.uniform())
              message.channel.send(uniformembed)
               }
               if(command == "feet"){
                if(!message.channel.nsfw){
                  return message.channel.send("Este canal no está marcado como NSFW")
                }
                const feetembed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setImage(akaneko.nsfw.feet())
                message.channel.send(feetembed)
                 }
                 if(command == "ass"){
                  if(!message.channel.nsfw){
                    return message.channel.send("Este canal no está marcado como NSFW")
                  }
                  const assembed = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setImage(akaneko.nsfw.ass())
                  message.channel.send(assembed)
                   }
                   if(command == "orgy"){
                    if(!message.channel.nsfw){
                      return message.channel.send("Este canal no está marcado como NSFW")
                    }
                    const orgyembed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setImage(akaneko.nsfw.orgy())
                    message.channel.send(orgyembed)
                     }
                     if(command == "panties"){
                      if(!message.channel.nsfw){
                        return message.channel.send("Este canal no está marcado como NSFW")
                      }
                      const pantiesembed = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setImage(akaneko.nsfw.panties())
                      message.channel.send(pantiesembed)
                       }
                     if(command == "femdom"){
                      if(!message.channel.nsfw){
                        return message.channel.send("Este canal no está marcado como NSFW")
                      }
                      const femdomembed = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setImage(akaneko.nsfw.femdom())
                      message.channel.send(femdomembed)
                       }

        
if(command == "r34"){
  if(!message.channel.nsfw) return message.channel.send("Marca este canal como NSFW")
const tags = args.join(" ")
if(!tags) return message.channel.send("Para encontrar la imagen que buscas, es necesario que ")
booru.search('rule34', [tags], { limit: 1, random: true })
.then(posts => {
for(let post of posts){
const embed = new Discord.MessageEmbed()
.setColor("#FFC0CB")
.setTitle(`Resultados de búsqueda para: ${tags}`)
.setImage(post.fileUrl)
message.channel.send({embed})
 }
 }).catch(e => message.channel.send("ERROR "+e))

}
	if(command === 'hug'){
	message.delete()
	let aA = message.author
	let aB = message.mentions.users.first()
	if(!aB) return message.channel.send('Menciona a un usuario para darle un abrazo.');
	const aC = new Discord.MessageEmbed()
    .setDescription(aA.tag+' abrazó a '+aB.tag)
    .setImage(star.hug())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
	message.channel.send(aC);
  }

  if(command === 'kiss'){
    message.delete()
    let aA = message.author
    let aB = message.mentions.users.first()
    if(!aB) return message.channel.send('Menciona a un usuario para darle un beso.');
    const aC = new Discord.MessageEmbed()
    .setDescription(aA.tag+' besó a '+aB.tag)
    .setImage(star.kiss())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aC)
  }
  if(command === 'lick'){
    message.delete()
    let aA = message.author
    let aB = message.mentions.users.first()
    if(!aB) return message.channel.send('Menciona a un usuario para lamerlo.');
    const aC = new Discord.MessageEmbed()
    .setDescription(aA.tag+' lamió a '+aB.tag)
    .setImage(star.lick())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aC)
  }
  if(command === 'pat'){
    message.delete()
    let aA = message.author
    let aB = message.mentions.users.first()
    if(!aB) return message.channel.send('Menciona a un usuario para acariciarlo.');
    const aC = new Discord.MessageEmbed()
    .setDescription(aA.tag+' acarició a '+aB.tag)
    .setImage(star.pat())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aC)
  }
  if(command === 'slap'){
    message.delete()
    let aA = message.author
    let aB = message.mentions.users.first()
    if(!aB) return message.channel.send('Menciona a un usuario para darle una bofetada.');
    const aC = new Discord.MessageEmbed()
    .setDescription(aA.tag+' abofeteó a '+aB.tag)
    .setImage(star.slap())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aC)
  }
  if(command === 'feed'){
    message.delete()
    let aA = message.author
    let aB = message.mentions.users.first()
    if(!aB) return message.channel.send('Menciona a un usuario para darle de comer.');
    const aC = new Discord.MessageEmbed()
    .setDescription(aA.tag+' bofeteó a '+aB.tag)
    .setImage(star.feed())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aC)
  }
  if(command === 'sleep'){
    message.delete()
    const aA = message.author
    const aB = new Discord.MessageEmbed()
    .setDescription(aA.tag+' se ha quedado dormido `💤`')
    .setImage(star.sleep())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aB)
  }
  if(command === 'confused'){
    message.delete()
    const aA = message.author
    const aB = new Discord.MessageEmbed()
    .setDescription(aA.tag+' se encuentra confundido')
    .setImage(star.confused())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aB);
  }
  if(command === 'suicide'){
    message.delete()
    const aA = message.author
    const aB = new Discord.MessageEmbed()
    .setDescription(aA.tag+' se suicidó')
    .setImage(star.suicide())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aB);
  }
  if(command === 'kill'){
    message.delete()
    let aA = message.author
    let aB = message.mentions.users.first()
    if(!aB) return message.channel.send('Menciona a un usuario para matarlo.');
    const aC = new Discord.MessageEmbed()
    .setDescription(aA.tag+' Mató a '+aB.tag)
    .setImage(star.kill())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aC)
  }
  if(command === 'happy'){
    message.delete()
    const aA = message.author
    const aB = new Discord.MessageEmbed()
    .setDescription(aA.tag+' está feliz!')
    .setImage(star.happy())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aB);
  }
  if(command === 'cry'){
    message.delete()
    const aA = message.author
    const aB = new Discord.MessageEmbed()
    .setDescription(aA.tag+' ha comenzado a llorar!')
    .setImage(star.cry())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aB);
  }
  if(command === 'dance'){
    message.delete()
    const aA = message.author
    const aB = new Discord.MessageEmbed()
    .setDescription(aA.tag+' está bailando!')
    .setImage(star.dance())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aB);
  }
  if(command === 'blush'){
    message.delete()
    const aA = message.author
    const aB = new Discord.MessageEmbed()
    .setDescription(aA.tag+' se ha sonrojado **uwu**')
    .setImage(star.blush())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aB);
  }
  if(command === 'fuckyou'){
    message.delete()
    let aA = message.author
    let aB = message.mentions.users.first()
    if(!aB) return message.channel.send('Menciona a un usuario para sacarle el dedo.');
    const aC = new Discord.MessageEmbed()
    .setDescription(aA.tag+' Le sacó el dedo medio a '+aB.tag)
    .setImage(star.fuckyou())
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(aC)
  }
if(command === 'meme') {
  meme('wholesomememes', function(err, data) {
    if (err) return message.reply(err)
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(data.url)
    message.channel.send(embed)
    })


}

if(command === 'voicekick'){
  let permi = message.member.hasPermission('MOVE_MEMBERS');
    if (!permi) return message.channel.send('No tienes suficientes permisos');

  let permibot = message.guild.me.hasPermission('MOVE_MEMBERS');
  if(!permibot) return message.channel.send('No tengo suficientes permisos');

  let kickuser= message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!kickuser) return message.channel.send('Menciona a alguien para expulsarlo de un canal de voz');

   if (kickuser.id == message.author.id) return message.channel.send('No puedes expulsarte a ti mismo');

  if (!kickuser.voice.channel) return message.channel.send(`Ese usuario no está en un canal de voz`);

  kickuser.voice.kick()

          message.channel.send(`Eché a **${kickuser.user.tag}** del canal de voz`)
  }

if(command === 'help'){
  const embed = new Discord.MessageEmbed()    
  .setTitle('Lista de comandos del bot:')
  .setDescription('Esta es la lista completa de los comandos del bot(más comandos serán agregados próximamente)')
  .addField('Comandos de reacciones','`hug`,`kiss`,`slap`,`lick`,`pat`,`happy`,`kill`,`cry`,`confused`,`blush`,`feed`,`sleep`,`dance`,`suicide`,`fuckyou`', false)
  .addField('Comandos de diversión', '`say`, `meme`, `ping`', false)
  .addField('Comandos de moderacion', '`purge`,`voicekick`,`ban`', false)
  .addField('Comandos NSFW', '`r34`,`hentai`,`cum`,`maid`,`blowjob`,`netorare`,`uniform`,`feet`,`ass`,`panties`,`femdom`,`orgy`', false)
  .setColor('RANDOM')
  .setFooter(message.guild.name, message.guild.iconURL())
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  console.log('help command used')
  message.channel.send(embed);
}
if(command === 'ban') {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter(message.guild.name, message.guild.iconURL())

if (!args[0]) {
    embed.setDescription('Debes que mencionar a un usuario.') 
    embed.setColor('RED')
    return message.channel.send(embed).then(m => m.delete({ timeout: 3000 }))
}

let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
if (!member || member.id == message.author.id) {
    embed.setDescription('Debes que mencionar a un usuario.') 
    embed.setColor('RED')
    return message.channel.send(embed)
}


if (!message.member.permissions.has('BAN_MEMBERS')) {
    embed.setDescription('No puedes usar este comando.') 
    embed.setColor('RED')
    return message.channel.send(embed)
}

if (message.guild.members.resolve(member.id)) {
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        embed.setDescription('No puedes banear a un usuario con mayor o igual nivel jerarquía que tú.') 
        embed.setColor('RED')
        return message.channel.send(embed)
    }
    if (!member.bannable) {
        embed.setDescription('No puedo banear a este usuario')
        embed.setColor('RED')
        return message.channel.send(embed)
    }
}

let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar" 
message.guild.members.ban(member.id, { reason: razon })
embed
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setTitle('¡Baneo exitoso!')
    .addField(`> Usuario Baneado`, !!member.user ? member.user.tag : member.tag)
    .addField('> Razón', razon)
    .setColor('AQUA')
    .setTimestamp()

if (!!member.user) member.user.send(embed).catch(e => e);
message.channel.send(embed)
}});


client.login(config.token); 
