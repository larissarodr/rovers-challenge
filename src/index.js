#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const inquirer  = require('./utils/inquirer');
const navigator  = require('./utils/navigator');
const dataExtraction  = require('./utils/dataExtractionHelper');
const log = console.log;

clear();

logInYellow(figlet.textSync('Rovers on Mars', { horizontalLayout: 'full'}));

const run = async () => {
  
  const { upperRightLimit } = await inquirer.askUpperRightCoordinates();
  const { limitX, limitY } = dataExtraction.extractUpperRightCoordinates(upperRightLimit);
  const { numOfRovers } = await inquirer.askNumberOfRovers();
  const { willProvideNames } = await inquirer.askIfNameWillBeProvided();

  let rovers = {};

  for(let i = 0; i < numOfRovers; i++){
    let roverName;
    if(willProvideNames) {
      const response = await inquirer.askRoverName(rovers, i+1);
      roverName = response.roverName.toLowerCase();
    } else {
      roverName = i + 1;
    }
    const { landingCoordinates } = await inquirer.askLandingCoordinates(limitX, limitY, i+1);
    const { x, y, d } = dataExtraction.extractLandingCoordinates(landingCoordinates);
    rovers[roverName] = new Rover(x,y,d);
  }

  printInstructionsToUser(rovers, willProvideNames);

  const { provideInstructions } = await inquirer.askIfWouldLikeToProvideInstructions();
  let keepAsking = provideInstructions;

  while (keepAsking){
    
    const { instruction } = await inquirer.askNavigationInstructions(rovers);
    const { roverName, setOfInstructions } = dataExtraction.extractRoverNameAndInstructions(instruction);  
    
    setOfInstructions.split('').forEach(navigate);
    
    function navigate(value){
      let response;
      switch(value){
        case ('M'):
          response = navigator.move(rovers[roverName].x, rovers[roverName].y, rovers[roverName].d, limitX, limitY);
          rovers[roverName].x = response.x;
          rovers[roverName].y = response.y;
          break;
        case ('L'):
          response = navigator.flip90left(rovers[roverName].d);
          rovers[roverName].d = response.d;
          break;
        case ('R'):
          response = navigator.flip90right(rovers[roverName].d);
          rovers[roverName].d = response.d;
          break;
        default:
          logInYellow('Invalid instruction. This should have been caught earlier.');
      }
    }

    logInYellow(`The position for rover ${roverName} is: ${rovers[roverName].x},${rovers[roverName].y},${rovers[roverName].d}`);
    
    response = await inquirer.askIfWouldLikeToProvideInstructions();
    keepAsking = response.provideInstructions;
  }

  log(
    chalk.yellow(
      figlet.textSync('Goodbye', { horizontalLayout: 'full'})
    )
  );

};

function logInYellow(text){
  log(chalk.yellow(text));
};

function printInstructionsToUser(rovers, willProvideNames){
  logInYellow('The following rovers were sent to Mars:');
  for(x in rovers) logInYellow(`${x} - Landing position: ${rovers[x].x},${rovers[x].y},${rovers[x].d.toUpperCase()}`);
  logInYellow('The instructions available for each rover are: M - Move, R - Spin 90 degrees right, L - Spin 90 degrees left');
  logInYellow('Please, provide in the following format:');

  if(willProvideNames) {
    logInYellow('[Name]-[Instructions] E.g.: Mike-MMRMLM');
  } else {
    logInYellow('[Number]-[Instructions] E.g.: 1-MMRMLM');
  }
}

function Rover(x, y, d) {
  this.x = x;
  this.y = y;
  this.d = d;
};

run();