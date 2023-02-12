module.exports = (bot) => {
    bot.status({
  text: "Pokémon FireGold v1.4.1", // status text
  type: "PLAYING", // status type
      /* valid entries: PLAYING, LISTENING, STREAMING, WATCHING, COMPETING, STREAMING (you need to put streaming url) */
  status: "dnd" // status of bot
      /* valid entries: dnd, idle, offline, online */
})
}
