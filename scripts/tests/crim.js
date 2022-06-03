import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register(
  {
    name: 'player',
    description: 'krijg de cords van players',
  },
  (data) => {
    if(data.sender.getTags().includes("popo")) {
        const player = client.players.getByName(data.args.join(" "))
        if(!player) return data.sender.sendMessage("§cPlayer not found!")  
    var xLoc = player.getLocation().x
    var yLoc = player.getLocation().y+1
    var zLoc = player.getLocation().z
    data.sender.sendMessage(`${clientname} §6${player.getName()} zijncords: x: ${xLoc} y: ${yLoc} z: ${zLoc}`)
  }},
)