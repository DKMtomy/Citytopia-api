import { client } from '../../beapi_modules/BEAPI_CORE_SCRIPT.js';
let cancelMessages = true;
let enabled = true;
let chatColor = '§f';
let senderColor = '§7';
client.on('OnChat', (data) => {

    const score = data.sender.getScore("hours")

    var _a, _b, _c;
    if (data.message.startsWith((_b = (_a = client.commands) === null || _a === void 0 ? void 0 : _a.prefix) !== null && _b !== void 0 ? _b : '-') || !enabled)
        return;
    if (cancelMessages)
        data.cancel();
    const ranks = (_c = getRanks(data.sender)) === null || _c === void 0 ? void 0 : _c.map((x) => `§7[§r${x}§r§7]§r`);
    console.log(ranks.length);
    if (ranks.length !== 0) {
        client.world.sendMessage(`${ranks.join(' ')}§r §7[§r${score} §r§bh§r§7]§r ${senderColor}${data.sender.getName()}§r ${chatColor}${data.message}`);
    }
    else {
        client.world.sendMessage(`§7[§emember§7] §7[§r${score} §r§bh§r§7]§r ${senderColor}${data.sender.getName()}:§r ${chatColor}${data.message}`);
    }
});

function getRanks(player) {
    const tags = player.getTags();
    if (!tags)
        return undefined;
    const filtered = tags.filter((x) => x.startsWith('rank:'));
    if (!filtered)
        return undefined;
    const cleaned = filtered.map((x) => x.replace('rank:', ''));
    if (!cleaned)
        return console.error('[ChatRanks]: Failed to clean filtered tags.');
    return cleaned;
}
function addRank(player, rank) {
    return player.addTag(`rank:${rank}`);
}
function removeRank(player, rank) {
    return player.removeTag(`rank:${rank}`);
}
export { cancelMessages, chatColor, senderColor, getRanks, addRank, removeRank, };
