var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Pripoj sa!",
assets : {
large_image : "csgologo",
large_text : "CSGO SERVERY" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "EternalJump" , url : "steam://connect/82.208.17.109:27494"},{label : "CoreGaming-Public",url : "steam://connect/82.208.17.101:27584"}]
}
})
})
client.login({ clientId : "824526481316118539" }).catch(console.error);