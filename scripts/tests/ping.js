import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register(
  {
    name: 'ping',
    description: 'Ping gametest scripts.',
    aliases: ['p'],
    hidden: true
  },
  (data) => {
    data.sender.sendMessage('§ePong!')
  },
)