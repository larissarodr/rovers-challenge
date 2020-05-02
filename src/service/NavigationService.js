const inquirer  = require('../input/Inquirer');
const printingUtil  = require('../utils/printingUtil');
const dataExtraction  = require('../utils/dataExtractionUtil');
const navigationUtil = require('../utils/navigationUtil');

module.exports = {

  async handleNavigationInstructions(limitX, limitY, rovers){
    const { provideInstructions } = await inquirer.askIfWouldLikeToProvideInstructions();
    let keepAsking = provideInstructions;
  
    while (keepAsking){
      
      const { instruction } = await inquirer.askNavigationInstructions(rovers);
      const { roverName, setOfInstructions } = dataExtraction.extractRoverNameAndInstructions(instruction);  
      
      const allInstructions = setOfInstructions.split('');
      for (let i = 0; i < allInstructions.length; i++) {
        let response;
        try{
          switch(allInstructions[i]){
            case ('M'):
              response = navigationUtil.move(rovers[roverName].x, rovers[roverName].y, rovers[roverName].d, limitX, limitY);
              rovers[roverName].x = response.x;
              rovers[roverName].y = response.y;
              break;
            case ('L'):
              response = navigationUtil.flip90left(rovers[roverName].d);
              rovers[roverName].d = response.d;
              break;
            case ('R'):
              response = navigationUtil.flip90right(rovers[roverName].d);
              rovers[roverName].d = response.d;
              break;
            default:
              printingUtil.logInRed('Invalid instruction. This should have been caught earlier.');
          }
        } catch (err ){
          printingUtil.logInRed(err.message);
          printingUtil.logInRed('Further instructions were ignored.')
          break;
        }
      }     
  
      printingUtil.printCoordinatesForSpecificRover(roverName, rovers);
      
      response = await inquirer.askIfWouldLikeToProvideInstructions();
      keepAsking = response.provideInstructions;
    }

  }

}