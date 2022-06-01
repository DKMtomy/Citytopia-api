import { getRanks } from '../beapi_modules/@mcbeutils-chatranks/index.js';
import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
client.commands.register({
    name: 'ranks',
    description: 'test',
    hidden: true
}, (data) => {
    if(data.sender.getTags().includes("staff")) {
        const player = client.players.getByName(data.args.join(" "))
        if(!player) return data.sender.sendMessage("§cPlayer not found!")

    const ranks = getRanks(player);
    data.sender.sendMessage(`${player.getName()} heeft ${ranks.length} rank/ranks:`);
    data.sender.sendMessage(`${ranks}`)
}});