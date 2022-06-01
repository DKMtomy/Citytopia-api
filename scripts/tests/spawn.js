import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register({
    name: 'spawn',
    description: 'tp to spawn',
    aliases: ['tp'],
    hidden: true
    
  }, (data) => {
    if (data.sender.hasTag("tpjail")) return data.sender.sendMessage('§cje zit in de cell!')
    if(data.sender.hasTag("tpjail")) {
        data.sender.executeCommand(``)
    } else {
        data.sender.executeCommand(`tp @s -23 33 37`);
        data.sender.sendMessage("§awelkom bij spawn")
    }
  });