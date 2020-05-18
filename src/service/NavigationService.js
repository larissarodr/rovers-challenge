const inquirer  = require('../input/Inquirer');
const printingUtil  = require('../utils/printingUtil');
const dataExtraction  = require('../utils/dataExtractionUtil');
const navigationUtil = require('../utils/navigationUtil');

module.exports = {

  async handleNavigationInstructions(limitX, limitY, rovers){

    let { desiredAction } = await inquirer.askDesiredAction();
    let keepAsking = (desiredAction != 3);
  
    while (keepAsking){
      if(desiredAction == 2) {

        printingUtil.printInstructionsToUser();
        const { instruction } = await inquirer.askNavigationInstructions(rovers);
        const { roverName, setOfInstructions } = dataExtraction.extractRoverNameAndInstructions(instruction);  
        
        const allInstructions = setOfInstructions.split('');
        for (let i = 0; i < allInstructions.length; i++) {
          try{
            switch(allInstructions[i]){
              case ('M'):
                const newCoordinates = navigationUtil.move(rovers[roverName].x, rovers[roverName].y, rovers[roverName].d, limitX, limitY);
                rovers[roverName].x = newCoordinates.x;
                rovers[roverName].y = newCoordinates.y;
                break;
              case ('L'):
                const dAfterFlipLeft = navigationUtil.flip90left(rovers[roverName].d);
                rovers[roverName].d = dAfterFlipLeft.d;
                break;
              case ('R'):
                const dAfterFlipRight = navigationUtil.flip90right(rovers[roverName].d);
                rovers[roverName].d = dAfterFlipRight.d;
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

      } else {

        printingUtil.printCoordinatesForEachRover(rovers);

      }
      
      const response = await inquirer.askDesiredAction();
      desiredAction = response.desiredAction;
      keepAsking = (desiredAction != 3);
    }

  }

}