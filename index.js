// Loading express server
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Express web server is running!')
})
app.listen(port, () => {
console.log(`Currently listening to localhost:${port}`)
}) 
// installing aoi.js
const aoijs = require("aoi.js")
const bot = new aoijs.AoiClient({
  token: process.env.TOKEN, // bot token
  prefix: "!", //bot prefix
  intents: ["GUILDS", "GUILD_MESSAGES"]
}) // gateway intents
bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/") // loading commands
require('./handler/status')(bot) // loading handlers
