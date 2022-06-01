import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register(
  {
    name: 'discord',
    description: 'krijg de invite link van de discord.',
    aliases: ['p'],
  },
  (data) => {
    data.sender.sendMessage('§ehttps://discord.gg/XS3ugMgMqk')
  },
)