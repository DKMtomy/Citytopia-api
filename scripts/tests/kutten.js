import { client } from  '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register(
  {
    name: 'nee',
    description: 'niet doen',
  },
  (data) => {
      const player = data.sender
    
      
      switch (data.args[0]) {
        
        case 'erika': if(data.sender.hasTag("negertje")) {
    client.world.sendMessage(`${clientname} 
§6Auf der Heide blüht ein kleines Blümelein 
Und das heißt
Erika
Heiß von hunderttausend kleinen Bienelein
Wird umschwärmt
Erika
Denn ihr Herz ist voller Süßigkeit
Zarter Duft entströmt dem Blütenkleid
Auf der Heide blüht ein kleines Blümelein
Und das heißt
Erika
In der Heimat wohnt ein blondes Mägdelein
Und das heißt
Erika
Dieses Mädel ist mein treues Schätzelein
Und mein Glück
Erika
Wenn das Heidekraut rot-lila blüht
Singe ich zum Gruß ihr dieses Lied
Auf der Heide blüht ein kleines Blümelein
Und das heißt
Erika \n\naangevraagd door: ${data.sender.getName()}`)} else return
break;

case 'rick': if(data.sender.hasTag("negertje")) {client.world.sendMessage(`§aNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\naangevraagd door: ${data.sender.getName()}`)}
break;
}
  },
)