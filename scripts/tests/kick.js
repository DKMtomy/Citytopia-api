import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';;

client.on('Tick', () => {
    for(const [,player] of client.players.getAll()) {
        if(player.hasTag("kick")) {
          player.executeCommand(`tp "${player.getName()} 100000 50 100000"`)
          client.world.sendMessage(`${player.getName()} has been kicked!`)
        } else {continue}
    }
  }
);
