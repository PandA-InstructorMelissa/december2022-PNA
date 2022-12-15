const {messages} = require('./messages')
const {Player} = require('../class/Player')
// const {playerNotCreated} = require('../game')

let name = ''
let morals = ''
var player = ''
var health = 99

// Create Player Function
async function playerName () {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const answer  = await new Promise (resolve => {
    rl.question('What is your name ?\n ', function (theName) {
      rl.question('What side are you on Good or Bad ?\n ', function (theMorals) {
        console.log(`${theName}, you have chosen to be on the side of ${theMorals}`);
        name = theName
        morals = theMorals
        rl.close();
      });
    });

    rl.on('close', function () {
      // console.log('\nBYE BYE !!!');
      player = new Player(name, morals)
      // playerNotCreated = false
      health = 100
      resolve(player)
      // process.exit(0);
    }); 
  })
  console.log(answer)
  return answer


}

module.exports = {playerName, health}