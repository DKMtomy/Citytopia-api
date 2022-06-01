import { client } from '../beapi_modules/BEAPI_CORE_SCRIPT.js';
import {clientname} from './add.js'

client.commands.register(
    {
      name: 'daily',
      description: 'test',
    },
    (data) => {
      const daily_reward_hours = 24;
      const cooldown = parseInt(data.sender.getTags().find((tag) => tag.startsWith("daily_reward:"))?.substring(13)) ?? 0;
      if (data.sender.hasTag("vip")) {
        if(cooldown > Date.now()) return data.sender.sendMessage(`${clientname} §6je hebt je daily reward al geclaimed! je moet nog §b${Math.ceil((cooldown - Date.now()) / 3.6e6)} uur wachten!`); else {
          cooldown !== 0 ? data.sender.removeTag('daily_reward:' + JSON.stringify(cooldown)) : null;
          data.sender.addTag('daily_reward:' + (Date.now() + (3.6e6 * daily_reward_hours)));
          data.sender.executeCommand(`give @s bread 32`);
          data.sender.executeCommand(`scoreboard players add @s euro 50000`)
          data.sender.sendMessage(`${clientname} §6je hebt de daily kit geclaimed: 50k, 16 brood`);
        }
      } else {
      if(cooldown > Date.now()) return data.sender.sendMessage(`${clientname} §6je hebt je daily reward al geclaimed! je moet nog §b${Math.ceil((cooldown - Date.now()) / 3.6e6)} uur wachten!`); else {
        cooldown !== 0 ? data.sender.removeTag('daily_reward:' + JSON.stringify(cooldown)) : null;
        data.sender.addTag('daily_reward:' + (Date.now() + (3.6e6 * daily_reward_hours)));
        data.sender.executeCommand(`give @s bread 16`);
        data.sender.sendMessage(`${clientname} §6je hebt de daily kit geclaimed: 16 brood`);
      }}
    }
  );