import {doc1} from "./CreateDB.js"

export function playerinDBS(player, check, data) {
    if (check == undefined)
        check = false;
    if (doc1.redeem.has(player) == false && !check) {
        doc1.redeem.set(player, {
            vipRedeemAmount: 0
        });
    }
    if (doc1.redeem.has(player) == true && check)
        return [true];
    if (doc1.redeem.has(player) == false && check)
        return [false, data.sender.sendMessage(`§c${player} §7is not in the database1!`)];
}