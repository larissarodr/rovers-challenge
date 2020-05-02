
function isPositiveIntegerOrZero(n) {
  return n >>> 0 === parseFloat(n);
}

function isPositiveInteger(n) {
  return n > 0 && n >>> 0 === parseFloat(n);
}

function doesRoverNameExist(name, roverArray) {
  for(x in roverArray){
    if(x.toUpperCase() == name.toUpperCase()){
      return true;
    }
  }
  return false;
}

function isValidCardinalCompassPoint(value) {
  return (value == 'N' || value == 'S' || value == 'W' || value == 'E');
}

function isWithinPlateauLimit(x, y, limitX, limitY) {
  return (x <= limitX && y <= limitY);
}

module.exports = {

  isValidUpperRightCoordinates(value){
    const limitValues = value.split(',');

    if(limitValues[0] == undefined || limitValues[1] == undefined){
      return 'Please, follow the expected format -> [X],[Y]. E.g.: 5,5';
    }

    if(!isPositiveIntegerOrZero(limitValues[0].trim()) || !isPositiveIntegerOrZero(limitValues[1].trim())) {
      return 'Please, follow the expected format -> [X],[Y]. E.g.: 5,5';
    }

    if(parseInt(limitValues[0].trim()) == 0 && parseInt(limitValues[1].trim()) == 0){
      return 'The upper-right coordinates cannot be 0,0. Please, provide valid upper-right coordinates. ';
    }

    return true;
  },

  isValidDesiredAction(value){
    return (value == '1' || value =='2' || value =='3');
  },

  isValidNumOfRovers(value){
    if(!isPositiveInteger(value)){
      return 'Please, follow the expected format -> [X]. E.g.: 2';
    }

    return true;
  },

  isNameUnique(name, rovers){
    for(x in rovers){
      if(x.toUpperCase() == name.toUpperCase()){
        return 'The name provided is not unique. Please, provide a unique name.';
      }
    }
    return true;
  },

  isValidLandingCoordinates(value, limitX, limitY){
    
    if(value.split(',')[0] == undefined || value.split(',')[1] == undefined || value.split(',')[2] == undefined){
      return 'Please, follow the expected format -> [X],[Y],[D]. E.g.: 0,0,N';
    }

    const x = value.split(',')[0].trim();
    const y = value.split(',')[1].trim();
    const d = value.split(',')[2].trim().toUpperCase();

    if(!isPositiveIntegerOrZero(x) || !isPositiveIntegerOrZero(y)){
      return 'Please, follow the expected format -> [X],[Y],[D]. E.g.: 0,0,N';
    }
    

    if(!isValidCardinalCompassPoint(d)){
      return 'The cardinal compass point provided is invalid. Please, enter N, S, E or W.';
    }

    if(!isWithinPlateauLimit(x, y, limitX, limitY)){
      return 'The landing coordinates are out of the established limits for this plateau.';
    }

    return true;
  },

  isValidInstruction(value, roverArray){
    const instructions = value.split('-');

    const roverName = instructions[0];

    if(!doesRoverNameExist(roverName, roverArray)) {
      return 'The rover Name/Number entered is invalid.';
    }

    const setOfInstructions = instructions[1].toUpperCase()
    if (!setOfInstructions.toLowerCase().match('^[mrl]+$')) {
      return 'Please, enter instructions following the expected format -> [Name/Number]-[Instructions (M|L|R)]';
    }

    return true;
  }

}