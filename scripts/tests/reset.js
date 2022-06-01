import { client, runCommand } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register({
  name: 'reset',
  description: 'reset',
  hidden: false
}, (data) => {
  if(data.sender.getTags().includes("staff")) {
      const player = client.players.getByName(data.args.join(" "))
      if(!player) return data.sender.sendMessage("§cPlayer not found!")
      const tags = player.getTags()
      player.executeCommand('scoreboard players reset @s')
      client.world.sendMessage(`${clientname} §6Removing ${tags.length} tags from ${player.name}§7!`);
      for (const tag of tags)
          if (tag !== 'v')
              player.removeTag(tag), client.world.sendMessage(`${clientname} §6Removed tag ${tag}`);
  }  else return data.sender.sendMessage(`${clientname} §6je bent geen staff!`)
});