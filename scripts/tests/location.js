import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register(
  {
    name: 'location',
    description: 'zeg je cords in chat',
  },
  (data) => {
      const player = data.sender
    var xLoc = player.getLocation().x
    var yLoc = player.getLocation().y+1
    var zLoc = player.getLocation().z
    player.sendMessage(`${clientname} §6je cords: x: ${xLoc} y: ${yLoc} z: ${zLoc}`)
  },
)