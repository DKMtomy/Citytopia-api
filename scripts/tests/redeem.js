import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import { clientname } from './add.js';
import {doc1} from './DataBase/CreateDB.js';
import {playerinDBS} from './DataBase/database.js';


client.commands.register({
    name: 'redeem',
    description: 'redeem reward'
}, (data) => {
  switch (data.args[0]) {
    case 'vip':
      var redeemCode = data.args[1]
      var player = data.sender.getName();
      playerinDBS(player);

      for (var code of doc1.redeemCode) {
        if (redeemCode != code ) continue 
        data.sender.executeCommand('function vipredeem')
        const index = doc1.redeemCode.indexOf(redeemCode);
        if (index > -1) {
          doc1.redeemCode.splice(index, 1); // 2nd parameter means remove one item only
        }
        client.world.sendMessage(`${player} redeemed reward.`)
        doc1.save()
        return
      } 
      data.sender.sendMessage("§ccode is fout of is al gebruikt")
      break;
    case 'discord': 
    var discordCode = data.args[1]
    var player = data.sender.getName();
    playerinDBS(player);

    for (var code of doc1.discordCode) {
      if (discordCode != code ) continue 
      data.sender.executeCommand('give @s diamond')
      const index = doc1.discordCode.indexOf(discordCode);
      if (index > -1) {
        doc1.discordCode.splice(index, 1); // 2nd parameter means remove one item only
      } 
      client.world.sendMessage(`${player} redeemed reward.`)
      doc1.save()
      return
    } 
    data.sender.sendMessage("§ccode is fout of is al gebruikt")
      break
    case 'packs':
      var packCode = data.args[1]
      var player = data.sender.getName();
      playerinDBS(player);
  
      for (var code of doc1.packCode) {
        if (packCode == undefined) return console.log(undefined)
        else if (packCode != code ) continue
        data.sender.executeCommand('give @s emerald')
        const index = doc1.packCode.indexOf(packCode);
        if (index > -1) {
          doc1.packCode.splice(index, 1); // 2nd parameter means remove one item only
        } 
        client.world.sendMessage(`${player} redeemed reward.`)
        doc1.save()
        return
      } 
      
    break;
    case 'vipP':
      var vipCode = data.args[1]
      var player = data.sender.getName();
      playerinDBS(player);
  
      for (var code of doc1.vipCode) {
        if (vipCode == undefined) return console.log(undefined)
        else if (vipCode != code ) continue
        data.sender.executeCommand('function vipP')
        const index = doc1.vipCode.indexOf(vipCode);
        if (index > -1) {
          doc1.vipCode.splice(index, 1); // 2nd parameter means remove one item only
        } 
        client.world.sendMessage(`${clientname} §6${player} redeemed Vip+ reward.`)
        doc1.save()
        return
      } 
      
    break;
    default:
      data.sender.sendMessage(`sorry ${data.args[0]} is niet juist`)
  }
});