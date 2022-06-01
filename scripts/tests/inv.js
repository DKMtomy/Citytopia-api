import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
  }
  
  client.commands.register({
    name:"inv",
    description: "Check player inventories!",
    hidden: true
    }, (data) => {
        if(data.sender.getTags().includes("staff")) {
            const player = client.players.getByName(data.args.join(" "))
            if(!player) return data.sender.sendMessage("§cPlayer not found!")
  
            data.sender.sendMessage(`§7${player.getName()}§b's Inventory`)
            for(let i = 0; i < player.getInventory().inventorySize; i++) {
                if(i == 0) data.sender.sendMessage("Hotbar")
                if(i == 9) data.sender.sendMessage("Main Inventory")
                let item = player.getInventory().container.getItem(i)
                if(!item) continue
                let itemname = titleCase(item.id.split(":")[1].split("_").join(" "))
                if(i < 9) {
                    if(item.data == 0) {
                        data.sender.sendMessage(`§9Slot: §f${i + 1} §4| §f${item.amount} §3${itemname}`)
                    } else {
                        data.sender.sendMessage(`§9Slot: §f${i + 1} §4| §f${item.amount} §3${itemname} §4| §9Data: §f${item.data}`)
                    }
                }
                if(i >= 9) {
                    if(item.data == 0) {
                        data.sender.sendMessage(`§9Slot: §f${i - 8} §4| §f${item.amount} §3${itemname}`)
                    } else {
                        data.sender.sendMessage(`§9Slot: §f${i - 8} §4| §f${item.amount} §3${itemname} §4| §9Data: §f${item.data}`)
                    }
                }
            }
        }
  });