import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register({
    name: '50k vouch',
    description: 'Pin 50000 euro',
    aliases: ['p50k'],
    hidden: true
  }, (data) => {
    const player = data.sender
    if (!data.sender.hasTag("vip")) return data.sender.sendMessage('§cje bent geen vip!')

    if(player.getScore("euro") >= 50000) {
      player.executeCommand("scoreboard players remove @s euro 50000")
      player.executeCommand("give @s pa:vouch1")
    }
    else player.sendMessage("§cniet genoeg geld!")
  });