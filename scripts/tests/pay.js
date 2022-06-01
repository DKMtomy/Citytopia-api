import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
client.commands.register(
  {
    name: 'pay',
    description: '-pay <amount> <player>',
    hidden: false
  },
  (data, args) => {
    const player = client.players.getByName(data.args.slice(1).join(" "))
    if(!player) return data.sender.sendMessage("§czeg aan ie je geld wild geven!")

    if(data.sender.getScore("euro") >= data.args[0]) {
        data.sender.executeCommand(`scoreboard players remove "${data.sender.getName()}" euro ${data.args[0]}`)
        data.sender.executeCommand(`scoreboard players add "${player}" euro ${data.args[0]}`)
        client.world.sendMessage(`§a ${data.args[0]} aan ${player}'s bank acount toegevoegd \n je nieuw saldo ${data.sender.getScore("euro")}` )
  }},
)