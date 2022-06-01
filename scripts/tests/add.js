import {doc1} from '../tests/DataBase/CreateDB.js';
import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
export const clientname = '§7[ §r§eCitytopia API§r§7 ]'

client.commands.register(
  {
    name: 'add',
    description: 'add a code',
    hidden: false
  },
  (data) => {
    if (data.sender.hasTag('aYp(NFhFZpDBMLtyGlzFZmHxE')) {
      if (!data.args[0]) return data.sender.sendMessage(`${clientname} §6-add <packs || vip || discord || vipP> <code> `)
    switch (data.args[0]) {
            case 'packs':
              if (data.args[1] == undefined ) return data.sender.sendMessage('§cgeef een code die je wilt toevoegen')
              doc1.packCode.push(data.args[1]);
              console.log(`added ${data.args[1]} to ${data.args[0]}`)
              data.sender.sendMessage(`${clientname} §6added ${data.args[1]} to ${data.args[0]}`)
              doc1.save();
              break;
            case 'vip':
              if (data.args[1] == undefined ) return data.sender.sendMessage('§cgeef een code die je wilt toevoegen')
              doc1.redeemCode.push(data.args[1]);
              console.log(`added ${data.args[1]} to ${data.args[0]}`)
              data.sender.sendMessage(`${clientname} §6added ${data.args[1]} to ${data.args[0]}`)
              doc1.save();
              break;
            case 'discord':
              if (data.args[1] == undefined ) return data.sender.sendMessage('§cgeef een code die je wilt toevoegen')
              doc1.discordCode.push(data.args[1]);
              console.log(`added ${data.args[1]} to ${data.args[0]}`)
              data.sender.sendMessage(`${clientname} §6added ${data.args[1]} to ${data.args[0]}`)
              doc1.save();
              break;
              case 'vip+':
                if (data.args[1] == undefined ) return data.sender.sendMessage('§cgeef een code die je wilt toevoegen')
                doc1.vipCode.push(data.args[1]);
                console.log(`added ${data.args[1]} to ${data.args[0]}`)
                data.sender.sendMessage(`${clientname} §6added ${data.args[1]} to ${data.args[0]}`)
                doc1.save();
                break;
            }
          } else return data.sender.sendMessage(`${clientname} §6je bent geen smoke/tomy!`)
  }
)