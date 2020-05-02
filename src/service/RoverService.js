const inquirer  = require('../input/Inquirer');
const printingUtil  = require('../utils/printingUtil');
const dataExtraction  = require('../utils/dataExtractionUtil');

const Rover = require("../model/Rover");

module.exports = {

  async defineAndPrepareRovers(limitX, limitY, rovers){

    const { numOfRovers } = await inquirer.askNumberOfRovers();
    const { willProvideNames } = await inquirer.askIfNameWillBeProvided();


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

    printingUtil.printLaunchingMessage(rovers);
    
  }

}