const chalk = require('chalk');
const figlet = require('figlet');
const log = console.log;

function printSpecificInstructions(willProvideNames){
  if(willProvideNames) {
    module.exports.logInBlue('[Name]-[Instructions] E.g.: Mike-MMRMLM');
  } else {
    module.exports.logInBlue('[Number]-[Instructions] E.g.: 1-MMRMLM');
  }
}

module.exports = {

  logInRed(text){
    log(chalk.red(text));
  },

  logInBlue(text){
    log(chalk.cyanBright(text));
  },

  logInBlueBold(text){
    log(chalk.cyanBright.bold(text));
  },

  printWelcomeMessage(text){
    module.exports.logInBlue(
      figlet.textSync('Rovers on Mars', { horizontalLayout: 'full'})
    );
  },

  printGoodbyeMessage(text){
    module.exports.logInBlue(
      figlet.textSync('Mission accomplished!', { horizontalLayout: 'full'})
    );
  },

  printLaunchingMessage(rovers){
    module.exports.logInBlueBold('The following rovers were sent to Mars:');
    module.exports.printCoordinatesForEachRover(rovers);
  },

  printInstructionsToUser(rovers, willProvideNames){
    
    module.exports.logInBlue('The instructions available for each rover are: M - Move, R - Spin 90 degrees right, L - Spin 90 degrees left');
    module.exports.logInBlue('Please, provide in the following format:');

    printSpecificInstructions(willProvideNames);
  },

  printCoordinatesForEachRover(rovers){
    for(x in rovers) module.exports.logInBlueBold(`${x} - Landing position: ${rovers[x].x},${rovers[x].y},${rovers[x].d.toUpperCase()}`);
  },

  printCoordinatesForSpecificRover(roverName, rovers){
    module.exports.logInBlue(`The position for rover ${roverName} is: ${rovers[roverName].x},${rovers[roverName].y},${rovers[roverName].d}`);
  }
}