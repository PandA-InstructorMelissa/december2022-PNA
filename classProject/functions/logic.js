const {messages} = require('./messages')
// Create Player Function

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

module.exports = {playerName}