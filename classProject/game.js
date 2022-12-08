const {Player} = require('./class/Player')
const {Npc} = require('./class/Npc')
const {messages} = require('./functions/messages')
const {playerName} = require('./functions/logic')

// Global variables
var player = null


// Game
var playing = true // This sets us up to turn off the while loop but keep it running as long as it is true
function start() {
    while (playing) {
        console.log(messages.welcome)
        playerName()
        if (player != null) {
            console.log(player)
        }
        playing = false
    }
    
}
start()