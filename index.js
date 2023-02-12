const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Express web server is running!')
})
app.listen(port, () => {
console.log(`Currently listening to localhost:${port}`)
}) 
const aoijs = require("aoi.js")
const bot = new aoijs.AoiClient({
  token: process.env.TOKEN,
  prefix: "!",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})
bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
require('./handler/status')(bot) 
