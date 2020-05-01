const chalk = require('chalk');
const log = console.log;

function logInRed(text){
  log(chalk.red(text));
};

module.exports = {

  move(x, y, d, limitX, limitY){
    let newY = y, newX = x;
    switch (d.toUpperCase()){
      case('N'):
        if(parseInt(y) + 1 > limitY ){
          logInRed("Cannot go further North. This rover has reached the limit of the plateau.");
          break;
        }
        newY = parseInt(y) + 1;
        break;
      case('S'):
        if(parseInt(y) - 1 < 0){
          logInRed("Cannot go further South. This rover has reached the limit of the plateau.");
          break;
        }
        newY = parseInt(y) - 1;
        break;
      case('E'):
        if(parseInt(x) + 1 > limitX){
          logInRed("Cannot go further East. This rover has reached the limit of the plateau.");
          break;
        }
        newX = parseInt(x) + 1;
        break;
      case('W'):
        if(parseInt(x) - 1 < 0){
          logInRed("Cannot go further West. This rover has reached the limit of the plateau.");
          break;
        }
        newX = parseInt(x) - 1;
        break;
      default:
        logInRed('Invalid move. This should have been caught earlier.');
    }
    return {
      x: newX,
      y: newY
    };
  },

  flip90left(d){
    let newD = d;
    switch (d.toUpperCase()){
      case('N'):
        newD = 'W';
        break;
      case('S'):
        newD = 'E';
        break;
      case('E'):
        newD = 'N';
        break;
      case('W'):
        newD = 'S';
        break;
    }
    return { d: newD };
  },

  flip90right(d){
    let newD = d;
    switch (d.toUpperCase()){
      case('N'):
        newD = 'E';
        break;
      case('S'):
        newD = 'W';
        break;
      case('E'):
        newD = 'S';
        break;
      case('W'):
        newD = 'N';
        break;
    }
    return { d: newD };
  }

}