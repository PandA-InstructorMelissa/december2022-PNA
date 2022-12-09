const {messages} = require('./messages')
const {Player} = require('../class/Player')
// const {playerNotCreated} = require('../game')

let name = ''
let morals = ''
var player = ''
var health = 99

// Create Player Function
function playerName () {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What is your name ?\n ', function (theName) {
    rl.question('What side are you on Good or Bad ?\n ', function (theMorals) {
      console.log(`${theName}, you have chosen to be on the side of ${theMorals}`);
      name = theName
      morals = theMorals
      rl.close();
    });
  });

  rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    player = new Player(name, morals)
    // playerNotCreated = false
    health = 100
    process.exit(0);
  }); 
}

module.exports = {playerName, health}