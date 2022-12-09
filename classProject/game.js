const {Player} = require('./class/Player')
const {Npc} = require('./class/Npc')
const {messages} = require('./functions/messages')
const {playerName} = require('./functions/logic')

// Global variables
var player = new Player(null, null)
health = 99
console.log(player.health)
var playerNotCreated = true

// Game
var playing = true // This sets us up to turn off the while loop but keep it running as long as it is true
function start() {
    while (playing) {
        console.log(messages.welcome)
        while (playerNotCreated) {
            console.log('1',player)
            if (health === 100) {
                playerNotCreated = false
            } else {
                player = playerName()
            }
        }
        playing = false
    }
    
}
start()

// module.exports = {playerNotCreated}