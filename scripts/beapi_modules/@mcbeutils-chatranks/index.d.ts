import { Player } from '../../beapi_modules/BEAPI_CORE_SCRIPT.js';
declare let cancelMessages: boolean;
declare let chatColor: string;
declare let senderColor: string;
declare function getRanks(player: Player): string[] | undefined;
declare function addRank(player: Player, rank: string): boolean;
declare function removeRank(player: Player, rank: string): boolean;
export { cancelMessages, chatColor, senderColor, getRanks, addRank, removeRank, };