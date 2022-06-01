import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';

client.commands.register(
  {
    name: 'codelist',
    description: 'codeList'
  },
  (data) => {
    for (var code of doc1.vipCode) {
        data.sender.sendmessage(`${code}`)
    }
  },
)