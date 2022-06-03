import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register(
  {
    name: 'tp',
    description: 'tp <player-name>',
  },
  (data) => {
    if(data.sender.getTags().includes("test")) {
        const player = client.players.getByName(data.args.join(" "))
        if(!player) return data.sender.sendMessage("§cPlayer not found!")  
        var xLoc = player.getLocation().x
        var yLoc = player.getLocation().y+1
        var zLoc = player.getLocation().z

     data.sender.executeCommand(`tp @s ${xLoc} ${yLoc} ${zLoc}`)
  }},
)