import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register({
    name: 'crate',
    description: 'koop een common crate voor 25k',
    aliases: ['rc'],
    hidden: true
  }, (data) => {
    const player = data.sender
    if (!data.sender.hasTag("zaterdag")) return data.sender.sendMessage('§c het is nog geen zaterdag, zaterdag kan je pas je crates opendoen!')
    if(data.sender.getScore("commonmax") <= 7) {

    if(data.sender.getScore("euro") >= 25000) {
      player.executeCommand("function common")
      player.executeCommand("scoreboard players add @s commonmax 1")
      player.executeCommand("scoreboard players remove @s euro 25000")
    }
    else player.sendMessage("§cniet genoeg geld!")
  }
  else player.sendMessage('§c je heb je common crate limit al berijkt kom volgendeweek terug!')
});
  
  client.commands.register({
    name: 'rare_crate',
    description: 'koop een rare crate voor 50k',
    aliases: ['ec'],
    hidden: true
  }, (data) => {
    const player = data.sender
    if (!data.sender.hasTag("zaterdag")) return data.sender.sendMessage('§c het is nog geen zaterdag, zaterdag kan je pas je crates opendoen!')
    if(data.sender.getScore("raremax" >= 8)) {
        data.sendMessage('§c je heb je common crate limit al berijkt kom volgendeweek terug!')
    
    if(data.sender.getScore("euro") >= 50000) {
      player.executeCommand("function rare")
      player.executeCommand("scoreboard players add @s raremax 1")
      player.executeCommand("scoreboard players remove @s euro 50000")
      data.sender.sendMessage('§a 1x rare crate gekocht je kan hem nu openen bij blackjack rechtsachter de bank')
    }
    else player.sendMessage("§cniet genoeg geld!")
  }
  else player.sendMessage('§c je heb je rare crate limit al berijkt kom volgendeweek terug!')
  });
  
  client.commands.register({
    name: 'legendary_crate',
    description: 'koop een legendary crate voor 75k',
    aliases: ['lc'],
    hidden: true
  }, (data) => {
    const player = data.sender
    if (!data.sender.hasTag("zaterdag")) return data.sender.sendMessage('§c het is nog geen zaterdag, zaterdag kan je pas je crates opendoen!')
    if(data.sender.getScore("legendarymax" >= 8)) {
        data.sendMessage('§c je heb je common crate limit al berijkt kom volgendeweek terug!')

    if(data.sender.getScore("euro") >= 80000) {
      player.executeCommand("function legendary")
      player.executeCommand("scoreboard players add @s legendarymax 1")
      player.executeCommand("scoreboard players remove @s euro 80000")
      data.sender.sendMessage(`§a 1x legendary crate gekocht je hebt er al ${data.sender.getScore("legendarymax")}/8`)
    }
    else player.sendMessage("§cniet genoeg geld!")
  }
  else player.sendMessage('§c je heb je common crate limit al berijkt kom volgendeweek terug!')
  });