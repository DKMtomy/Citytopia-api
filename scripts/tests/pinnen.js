import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import { clientname } from './add.js'

client.commands.register({
    name: 'pin',
    description: '-Pin < 1mil || 500k || 50k || 5k || 2.5k || 500 || 10 >',
    hidden: false
  }, (data) => {
    const player = data.sender

    if (data.args[0] == undefined) return player.sendMessage(`${clientname} §6-Pin < 1mil || 500k || 50k || 5k || 2.5k || 500 || 10 >`)

    switch (data.args[0]) {
      case '1mil':
            if(player.getScore("euro") >= 1000000) {
                player.executeCommand("scoreboard players remove @s euro 1000000")
                console.log('1mil')
                player.executeCommand("give @s emerald 20")
              }
              else player.sendMessage(`${clientname} §6niet genoeg geld!`)
            break;
            case '500k':
            if(player.getScore("euro") >= 500000) {
                player.executeCommand("scoreboard players remove @s euro 500000")
                console.log('500k')
                player.executeCommand("give @s emerald 10")
              }
              else player.sendMessage(`${clientname} §6niet genoeg geld!`)
            break;
      
      case '50k':
            if(player.getScore("euro") >= 50000) {
                player.executeCommand("scoreboard players remove @s euro 50000")
                console.log('50k')
                player.executeCommand("give @s emerald")
              }
              else player.sendMessage(`${clientname} §6niet genoeg geld!`)
            break;  
        case '5k':
            if(player.getScore("euro") >= 5000) {
                player.executeCommand("scoreboard players remove @s euro 5000")
                console.log('5k')
                player.executeCommand("give @s flint")
                player.sendMessage(`${data.args[0]} §6gepint niew saldo: ${data.sender.getscore('euro')}`)
              }
              else player.sendMessage(`${clientname} §6niet genoeg geld!`)
            break;

        case '2.5k' : 
        if(player.getScore("euro") >= 2500) {
            player.executeCommand("scoreboard players remove @s euro 2500")
            console.log('2.5k')
            player.executeCommand("give @s egg")
            player.sendMessage(`${data.args[0]} §6gepint niew saldo: ${data.sender.getscore('euro')}`)
          }
          else player.sendMessage(`${clientname} §6niet genoeg geld!`)
        break;
        case '500' : 
        if(player.getScore("euro") >= 500) {
            player.executeCommand("scoreboard players remove @s euro 500")
            console.log('500')
            player.executeCommand("give @s grass")
            player.sendMessage(`${data.args[0]} §6gepint niew saldo: ${data.sender.getscore('euro')}`)
          }
          else player.sendMessage(`${clientname} §6niet genoeg geld!`)
        break;
        case '10' : 
        if(player.getScore("euro") >= 10) {
            player.executeCommand("scoreboard players remove @s euro 10")
            console.log('10')
            player.executeCommand("give @s dirt")
            player.sendMessage(`${data.args[0]} §6gepint niew saldo: ${data.sender.getscore('euro')}`)
          }
          else player.sendMessage(`${clientname} §6niet genoeg geld!`)
        break;
    }
  });