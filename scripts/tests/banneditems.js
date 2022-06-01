import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

const banned = [
    'tnt',
    'end_crystal',
    'tnt_minecart',
    'lava_bucket',
    'end_portal_frame',
    'command_block',
    'chain_command_block',
    'repeating_command_block',
    'command_block_minecart',
    'elytra',
    'beehive',
    'bee_nest',
    'bedrock',
]

client.on('Tick', () => {
    for(const [,player] of client.players.getAll()) {
        if(player.hasTag("staff")) continue
        banned.forEach(item => {
            for(let i = 0; i < player.getInventory().inventorySize; i++) {
                let itemm = player.getInventory().container.getItem(i)
                if(!itemm) continue
                if(item == itemm.id.replace("minecraft:", "")) {
                    if(i < 9) player.executeCommand(`replaceitem entity @s slot.hotbar ${i} air`);
                    player.executeCommand(`tp @s 100000 50 100000`);
                    client.world.sendMessage(`§7${player.getName()} §chad een illegaal item screen het en stuur het naar een admin!!`)
                    if(i >= 9) player.executeCommand(`replaceitem entity @s slot.inventory ${i - 9} air`)
                    if(item.includes(":")) client.world.sendMessage(`§7${player.getName()} §chad a §7${titleCase(item
                      .split(":")[1]
                      .split("_")
                      .join(" "))}§c!`)
                    else client.world.sendMessage(`§7${player.getName()} §chad a §7${titleCase(item
                      .split("_")
                      .join(" "))}§c!`)
                }
            }
        })
    }
})