import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import { clientname } from './add.js';

client.commands.register({
    name: 'vanish',
    description: 'vanish command',
    aliases: ['v'],
    hidden: true
}, (data) => {
    if (!data.sender.hasTag("mod")) return data.sender.sendMessage('You dont have permission')
    if(data.sender.hasTag("vanished")) {
        data.sender.executeCommand(`execute @s ~~~ effect @s clear`)
        data.sender.executeCommand(`tag @s remove vanished`);
        data.sender.sendMessage("§cUnvanished")
    } else {
        data.sender.executeCommand(`effect @s invisibility 999999 255 true`);
        data.sender.executeCommand(`effect @s night_vision 999999 255 true`);
        data.sender.executeCommand(`tag @s add vanished`);
        data.sender.sendMessage("§aVanished")
    }
});
client.on('Death', (data) => {
  data.executeCommand(`tag @s remove vanished`);
  data.executeCommand(`scoreboard players remove @s euro 5000`)
  data.executeCommand(`scoreboard players remove @s fitheid 500`)
  data.sendMessage(`${clientname} §6 je hebt 5k betaald aan ziekenhuis kosten! \n en je hebt ook 500 fitheid verloren`)
});