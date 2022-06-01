import { client } from "../beapi_modules/BEAPI_CORE_SCRIPT";
import { clientname } from "./add.js"

client.on('OnJoin', (data) => {
    if (data.hasTag("player")) return
    client.world.sendMessage(`${clientname} §6${data.getName()} is nieuw in de server, geef hem/haar een warm welkom!`)
    data.executeCommand('give @s bread 32')
    data.executeCommand('give @s flint 5')
    data.addTag("player")
  });