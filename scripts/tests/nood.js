import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register(
  {
    name: '112',
    description: 'bel de politie',
  },
  (data) => {
      const player = data.sender
    var xLoc = player.getLocation().x
    var yLoc = player.getLocation().y+1
    var zLoc = player.getLocation().z
    client.world.sendMessage(`${clientname} §6noodgeval op x: ${xLoc} y: ${yLoc} z: ${zLoc}`)
  },
)