const aoijs = require("aoi.js") // installing aoi.js
console.log('SYSTEM :: Installing aoi.js')
const bot = new aoijs.AoiClient({ // creating new client
token: process.env.TOKEN, // bot token
prefix: "!", // bot prefix
intents: ["MessageContent", "Guilds", "GuildMessages"]
}) // client intents
bot.onMessage() // client events
const loader = new aoijs.LoadCommands(bot) // load command
loader.load(bot.cmd,"./src/commands/") // loading commands
//require('.src/handler/status')(bot) // loading handlers
const express = require('express'); // loading express
const app = express(); // defining app = express
app.get('/', (req, res) => {
  res.send('Hello Express app!') // send this
});
app.listen(3000, () => { // listen to port
  console.log('SYSTEM :: Express web server is now working!');
});
