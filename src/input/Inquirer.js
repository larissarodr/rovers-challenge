const inquirer = require('inquirer');
const validationHelper  = require('../utils/validationUtil');

module.exports = {
  askUpperRightCoordinates: () => {
    const questions = [
      {
        name: 'upperRightLimit',
        type: 'input',
        message: 'Enter the upper-right coordinates of the plateau on the following format -> [X],[Y]. E.g.: 5,5',
        validate: function( value ) {
          
          if (value.length) {            
            return validationHelper.isValidUpperRightCoordinates(value);
          } else {
            return 'Enter the upper-right coordinates of the plateau on the following format -> [X],[Y]. E.g.: 5,5';
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },

  askDesiredAction: () => {
    const questions = [
      {
        name: 'desiredAction',
        type: 'input',
        message: 'What would you like to do? (1) Print rovers coordinates (2) Move a rover (3) Exit',
        validate: function( value ) {
          
          if (value.length) {            
            return validationHelper.isValidDesiredAction(value);
          } else {
            return 'What would you like to do? (1) Print rovers coordinates (2) Move a rover (3) Exit';
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },

  askNumberOfRovers: () => {
    const questions = [
      {
        name: 'numOfRovers',
        type: 'input',
        message: 'How many rovers would you like to control? Please, enter a number.',
        validate: function(value) {
          if (value.length) {
            return validationHelper.isValidNumOfRovers(value);
          } else {
            return 'How many rovers would you like to control? Please, enter a number.';
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },

  askIfNameWillBeProvided: () => {
    const questions = [
      {
        name: 'willProvideNames',
        type: 'confirm',
        message: 'Would you like to provide a custom name to them?',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Would you like to provide a custom name to them?';
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },

  askRoverName: (roverArray, i) => {
    const questions = [
      {
        name: 'roverName',
        type: 'input',
        message: `${i} - Enter the name of the rover as a unique word. The name must be unique.`,
        validate: function(value) {
          if (value.length) {
            return validationHelper.isNameUnique(value, roverArray);
          } else {
            return `${i} - Enter the name of the rover as a unique word. The name must be unique.`;
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },

  askLandingCoordinates: (limitX, limitY, i) => {
    const questions = [
      {
        name: 'landingCoordinates',
        type: 'input',
        message: `${i} - Enter the landing coordinates for this rover on the following format -> [X],[Y],[D]. E.g.: 0,0,N`,
        validate: function(value) {
          if (value.length) {
            return validationHelper.isValidLandingCoordinates(value, limitX, limitY);
          } else {
            return `${i} - Enter the landing coordinates for this rover on the following format -> [X],[Y],[D]. E.g.: 0,0,N`;
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },

  askNavigationInstructions: (roverArray) => {
    const questions = [
      {
        name: 'instruction',
        type: 'input',
        message: 'Enter the navigation instructions for the desired rover on the following format -> [Rover Name/Number]-[Instructions]',
        validate: function(value) {
          if (value.length) {
            return validationHelper.isValidInstruction(value, roverArray);
          } else {
            return 'Enter the navigation instructions for the desired rover on the following format -> [Rover Name/Number]-[Instructions]';
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },

};