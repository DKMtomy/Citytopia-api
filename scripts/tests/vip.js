import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register({
    name: 'vip spawn',
    description: 'tp to vip spawn',
    aliases: ['vip'],
    hidden: true
  }, (data) => {
    if (!data.sender.hasTag("vip")) return data.sender.sendMessage('§c je bent geen vip!')
    if(data.sender.hasTag("tpjail")) {
      data.sender.sendMessage('§cje zit in de cell!')
    } else {
        data.sender.sendMessage("§aje bent getped naar vip spawn!")
           data.sender.executeCommand(`tp @s 1254 32 143`)
    }
  }); 