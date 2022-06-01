import { client, runCommand } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register({
  name: 'tpjail',
  description: 'tpjail',
  aliases: ['tp'],
  hidden: true
}, (data) => {
  if(data.sender.getTags().includes("staff")) {
      const player = client.players.getByName(data.args.join(" "))
      if(!player) return data.sender.sendMessage("§cPlayer not found!")

      runCommand(`tag "${player.getName()}" add tpjail`);
      runCommand(`tp "${player.getName()}" 16 13 51`)
  }
});