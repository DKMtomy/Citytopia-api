import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register(
  {
    name: 'clearchat',
    description: 'clear de chat',
  },
  (data) => {
      const player = data.sender
      if(data.sender.hasTag("staff")) {
        let space = '  ';
    for (let i = 0; i < 100; i++)
    client.world.sendMessage(space.repeat(100));
    client.world.sendMessage(`${clientname} §6chat gecleared door: ${player.getName()}`)
      } else return player.sendMessage(`${clientname} §6je bent geen staff!`)
  },
)