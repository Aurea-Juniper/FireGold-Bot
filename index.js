/* ==== Installing required packages ==== */
const { AoiClient, LoadCommands } = require("aoi.js");
const express = require("express")
/* ==== Defining configuration folder ==== */
const config = ("./config.json");
/* ==== Creating new aoi.js client ==== */
const bot = new AoiClient({
  /* === Bot token === */
  token: config.client.TOKEN,
  /* === Bot Prefix === */
  prefix: config.client.PREFIX,
  /* === Client intents === */
  intents: ["GuildMessages", "MessageContent", "Guilds"],
  /* === Client events === */
  events: ["onMessage"]
})
/* === Bot commands === */
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands");
/* === Bot status === */
bot.status({
  text: config.status.text,
  /* === The text for status === */
  type: config.status.type, 
  /* === The type of status ===
    Valid stuff which can be used:
    PLAYING, LISTENING, WATCHING or COMPETING */
  status: config.status.status, 
  /* === Bot status ===
  Valid stuff which can be used:
  dnd, online, idle or offline */
  // url: 
});
/* Creating web server using express */
const app = express();
app.get('/', (req, res) => {
  res.send('Express web server is working!')
});
app.listen(config.express.port, () => {
  console.log('EXPRESS: Express web server is working!');
})
