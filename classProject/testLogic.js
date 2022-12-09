const {Player} = require('./class/Player')

// Message Logic

const messages = {
    'welcome': 'Welcome to our Adventure game. Please tell us your name worthy gamer',
    'lostExit': 'Sorry but you did not find our missing xxx, you have lost the game',
    'congratsExit': 'You found the missing xxx and have won the game',
    'settingStage': 'You have been told that in this dark forest xxx is missing.  Your job is to find them.  Would you like a clue?',
    'firstClue': ''
}
// console.log("*****", messages)
let name = ''
let morals = ''
// Create player name Function - will redo later once class is built
var player = ''
console.log('before player instance', player)
function playerName () {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What is your name ?\n ', function (theName) {
    rl.question('What side are you on Good or Bad ?\n ', function (theMorals) {
      console.log(`${theName}, is on the side of ${theMorals}`);
      name = theName
      morals = theMorals
      rl.close();
    });
  });

  rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    player = new Player(name, morals)
    console.log('did we create a instance:', player)
    process.exit(0);
  }); 
}
playerName()

// Need to set something up to allow the player to enter name before any other commands are run right now it prints the following console before we can type, allows us to type but doesn't re run the last console.


