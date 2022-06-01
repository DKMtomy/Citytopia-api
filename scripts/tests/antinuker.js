import { Player, world } from "mojang-minecraft";

/** 
 * The log of the players break times
 * @type {Object<Player.name: number>}
 */
const log = {};

/**
 * The tag that bypasses this check
 * @type {string}
 */
const byPassTag = "staff";

world.events.blockBreak.subscribe(
  ({ block, brokenBlockPermutation, dimension, player }) => {
    const old = log[player.name];
    log[player.name] = Date.now();
    if (old < Date.now() - 75 || player.hasTag(byPassTag)) return;
    dimension
      .getBlock(block.location)
      .setPermutation(brokenBlockPermutation.clone());
    dimension
      .getEntitiesAtBlockLocation(block.location)
      .filter((entity) => entity.id === "minecraft:item")
      .forEach((item) => item.kill());
  }
);

world.events.playerLeave.subscribe((data) => delete log[data.playerName]);