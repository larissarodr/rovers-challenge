const inquirer  = require('../input/Inquirer');
const dataExtraction  = require('../utils/dataExtractionUtil');

module.exports = {

  async definePlateau(){

    const { upperRightLimit } = await inquirer.askUpperRightCoordinates();
    return dataExtraction.extractUpperRightCoordinates(upperRightLimit);

  }
}