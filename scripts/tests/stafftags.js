import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register(
  {
    name: 'stafftags',
    description: 'stafftags',
    hidden: true
  },
  (data) => {
    const player = data.sender
    if (player.hasTag('staff')) {
    player.addTag('vip')
    player.addTag('staff')
    player.addTag('mod')
    player.addTag('tomy')
    player.addTag('vekqi')
    player.addTag('rank:§6mod')
    player.addTag('rank:§ev§ai§bp')}  else return player.sendMessage(`${clientname} §6je bent geen staff!`)
  },
)