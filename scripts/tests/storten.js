import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import { clientname } from './add.js'

client.commands.register({
    name: 'stort',
    description: '-stort < 1mil || 500k || 50k || 5k || 2.5k || 500 || 10 >',
    hidden: false
  }, (data) => {
    const player = data.sender

    if (data.args[0] == undefined) return player.sendMessage(`${clientname} §6-stort < 1mil || 500k || 50k || 5k || 2.5k || 500 || 10 >`)

    switch (data.args[0]) {
        case '500k':
            player.executeCommand(`scoreboard players add @s[hasitem={item=emerald,quantity=10..}] euro 500000`)
            player.executeCommand(`clear @s[hasitem={item=emerald,quantity=10..}] emerald 0 10`);
            break;
            case '50k':
                player.executeCommand(`scoreboard players add @s[hasitem={item=emerald,quantity=1..}] euro 50000`)
                player.executeCommand(`clear @s[hasitem={item=emerald,quantity=1..}] emerald 0 1`);
                break; 
                    case '5k':
                    player.executeCommand(`scoreboard players add @s[hasitem={item=flint,quantity=1..}] euro 50000`)
                    player.executeCommand(`clear @s[hasitem={item=flint,quantity=1..}] flint 0 1`);
                    break;   
                        case '2.5k':
                            player.executeCommand(`scoreboard players add @s[hasitem={item=egg,quantity=1..}] euro 50000`)
                            player.executeCommand(`clear @s[hasitem={item=egg,quantity=1..}] egg 0 1`);
                            break;  
                                case '500':
                                    player.executeCommand(`scoreboard players add @s[hasitem={item=grass,quantity=1..}] euro 50000`)
                                    player.executeCommand(`clear @s[hasitem={item=grass,quantity=1..}] grass 0 1`);
                                    break;  
                                        case '10':
                                            player.executeCommand(`scoreboard players add @s[hasitem={item=dirt,quantity=1..}] euro 50000`)
                                            player.executeCommand(`clear @s[hasitem={item=dirt,quantity=1..}] dirt 0 1`);
                                                break; 
                                                case '1mil':
                                                        player.executeCommand(`scoreboard players add @s[hasitem={item=emerald,quantity=20..}] euro 1000000`)
                                                        player.executeCommand(`clear @s[hasitem={item=emerald,quantity=20..}] emerald 0 20`);
                                                        break; 
    }
  });