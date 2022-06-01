import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register(
  {
    name: 'staff',
    description: 'laat de staff commands zien, je moet eerst OP hebben om deze te kunnen gebruiken',
  },
  (data) => {
    if (!data.sender.hasTag("mod")) return data.sender.sendMessage(`${clientname} §6je bent geen staff!`)
    if (data.sender.hasTag("mod")) return data.sender.sendMessage(`${clientname} §6-vanish \n -inv \n -tpjail`)
  },
)