import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import { clientname } from './add.js';

client.commands.register(
  {
    name: 'setup',
    description: 'setup gametest scripts.',
    hidden: true
  },
  (data) => {
      const player = data.sender
    if (player.hasTag("staff")) {
        player.executeCommand(`scoreboard objectives add euro dummy`)
        player.executeCommand(`scoreboard objectives add block dummy`)
        player.executeCommand(`scoreboard objectives add hours dummy`)
        client.world.sendMessage(`${clientname} §6setup complete`)
    }
  },
)