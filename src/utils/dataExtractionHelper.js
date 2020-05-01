module.exports = {

  extractLandingCoordinates(value){
    const x = value.split(',')[0].trim();
    const y = value.split(',')[1].trim();
    const d = value.split(',')[2].trim().toUpperCase();

    return {x, y, d};
  },

  extractRoverNameAndInstructions(value){
    const roverName = value.split('-')[0].toLowerCase();
    const setOfInstructions = value.split('-')[1].toUpperCase()

    return {roverName, setOfInstructions};
  },

  extractUpperRightCoordinates(value){
    const limitX = value.split(',')[0].trim();
    const limitY = value.split(',')[1].trim();

    return {limitX, limitY};
  }


}