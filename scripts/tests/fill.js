import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import { clientname } from './add.js';

client.commands.register(
  {
    name: 'fill',
    description: 'fill command',
  },
  (data) => {
    const player = data.sender
    var xLoc = player.getLocation().x
    var yLoc = player.getLocation().y+1
    var zLoc = player.getLocation().z
      const AR = data.args
    if (!AR[0]) return player.sendMessage(`${clientname} §cgeef een x cord mee!`)
    if (!AR[1]) return player.sendMessage(`${clientname} §cgeef een y cord mee!`)
    if (!AR[2]) return player.sendMessage(`${clientname} §cgeef een z cord mee!`)
    if (!AR[3]) return player.sendMessage(`${clientname} §cgeef een x cord mee!`)
    if (!AR[4]) return player.sendMessage(`${clientname} §cgeef een y cord mee!`)
    if (!AR[5]) return player.sendMessage(`${clientname} §cgeef een z cord mee!`)
    if (!AR[6]) return player.sendMessage(`${clientname} §cgeef een block mee cord mee!`)


    if (AR[0] == '~') return player.executeCommand(`fill ${xLoc} ${AR[1]} ${AR[2]} ${AR[3]} ${AR[4]} ${AR[5]} ${AR[6]}`)
    if (AR[1] == '~') return player.executeCommand(`fill ${AR[0]} ${yLoc} ${AR[2]} ${AR[3]} ${AR[4]} ${AR[5]} ${AR[6]}`)
    if (AR[2] == '~') return player.executeCommand(`fill ${AR[0]} ${AR[1]} ${zLoc} ${AR[3]} ${AR[4]} ${AR[5]} ${AR[6]}`)
    if (AR[3] == '~') return player.executeCommand(`fill ${AR[0]} ${AR[1]} ${AR[2]} ${xLoc} ${AR[4]} ${AR[5]} ${AR[6]}`)
    if (AR[4] == '~') return player.executeCommand(`fill ${AR[0]} ${AR[1]} ${AR[2]} ${AR[3]} ${yLoc} ${AR[5]} ${AR[6]}`)
    if (AR[5] == '~') return player.executeCommand(`fill ${AR[0]} ${AR[1]} ${AR[2]} ${AR[3]} ${AR[4]} ${zLoc} ${AR[6]}`)
    if (AR[0] == '~' && AR[1] == '~' && AR[2] == '~') player.executeCommand(`fill ${xLoc} ${yLoc} ${zLoc} ${AR[3]} ${AR[4]} ${AR[5]} ${AR[6]}`)
    if (AR[3] == '~' && AR[4] == '~' && AR[5] == '~') player.executeCommand(`fill ${AR[0]} ${AR[1]} ${AR[2]} ${xLoc} ${yLoc} ${zLoc} ${AR[6]}`)
    player.executeCommand(`fill ${AR[0]} ${AR[1]} ${AR[2]} ${AR[3]} ${AR[4]} ${AR[5]} ${AR[6]}`)

  },
)