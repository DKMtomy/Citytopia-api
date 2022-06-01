import {doc1} from '../tests/DataBase/CreateDB.js'
import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
export const clientname = '§7[ §r§eCitytopia API§r§7 ]'




client.commands.register(
  {
    name: 'remove',
    description: 'remove a code',
    hidden: false
  },
  (data) => {
    var discordCode = data.args[1]
    var redeemCode = data.args[1]
    var packCode = data.args[1]
    var vipCode = data.args[1]
    if (data.sender.hasTag('aYp(NFhFZpDBMLtyGlzFZmHxE'))
 {   if (!data.args[0]) return data.sender.sendMessage(`-remove <packs || vip || discord> <code> `)
    switch (data.args[0]) {
            case 'packs':
              if (data.args[1] == undefined ) return data.sender.sendMessage('§cgeef een code die je wilt verwijderen')
              const index2 = doc1.packCode.indexOf(packCode);
                if (index2 > -1) {
                doc1.packCode.splice(index2, 1); // 2nd parameter means remove one item only
                    }
              console.log(`removed ${data.args[1]} to ${data.args[0]}`)
              data.sender.sendMessage(`${clientname} §6removed ${data.args[1]} to ${data.args[0]}`)
              doc1.save();
              break;
            case 'vip':
              if (data.args[1] == undefined ) return data.sender.sendMessage('§cgeef een code die je wilt verwijderen')
              const index1 = doc1.redeemCode.indexOf(redeemCode);
                if (index1 > -1) {
                doc1.redeemCode.splice(index1, 1); // 2nd parameter means remove one item only
                    }
              console.log(`removed ${data.args[1]} to ${data.args[0]}`)
              data.sender.sendMessage(`${clientname} §6removed ${data.args[1]} to ${data.args[0]}`)
              doc1.save();
              break;
            case 'discord':
              if (data.args[1] == undefined ) return data.sender.sendMessage('§cgeef een code die je wilt verwijderen')
              const index = doc1.discordCode.indexOf(discordCode);
                if (index > -1) {
        doc1.discordCode.splice(index, 1); // 2nd parameter means remove one item only
                }
              console.log(`removed ${data.args[1]} to ${data.args[0]}`)
              data.sender.sendMessage(`${clientname} §6removed ${data.args[1]} to ${data.args[0]}`)
              doc1.save();
              break;
              case 'vip+':
              if (data.args[1] == undefined ) return data.sender.sendMessage('§cgeef een code die je wilt verwijderen')
              const index3 = doc1.vipCode.indexOf(vipCode);
                if (index3 > -1) {
        doc1.vipCode.splice(index3, 1); // 2nd parameter means remove one item only
                }
              console.log(`removed ${data.args[1]} to ${data.args[0]}`)
              data.sender.sendMessage(`${clientname} §6removed ${data.args[1]} to ${data.args[0]}`)
              doc1.save();
              break;
            }} else return data.sender.sendMessage(`${clientname} §6je bent geen smoke/tomy!`)
  }
)