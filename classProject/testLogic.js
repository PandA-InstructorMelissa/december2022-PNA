// Message Logic

const messages = {
    'welcome': 'Welcome to our Adventure game. Please tell us your name worthy gamer',
    'lostExit': 'Sorry but you did not find our missing xxx, you have lost the game',
    'congratsExit': 'You found the missing xxx and have won the game',
    'settingStage': 'You have been told that in this dark forest xxx is missing.  Your job is to find them.  Would you like a clue?',
    'firstClue': ''
}
// console.log("*****", messages)

// Create player name Function - will redo later once class is built
var player = null

function playerName () {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    //   The \n creates a new terminal line making the terminal easier to read
      readline.question(`What's your name?\n`, name => {
        console.log(`Hi ${name}!`);
        player = name
        readline.close();
        console.log(messages.settingStage)
        
        return player
      });
}
// Need to set something up to allow the player to enter name before any other commands are run right now it prints the following console before we can type, allows us to type but doesn't re run the last console.


console.log(player)
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