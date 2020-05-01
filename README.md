# Rovers on Mars

## The Challenge
A squad of rovers are to be sent by NASA to a plateau on Mars. The Agency must be able to control the movement of these rovers, to get a complete view of the terrain and send back to earth. A rover's position must be represented by a combination of an x and y coordinates and a letter representing one of the four cardinal compass points. The terrain to be explored in Mars is divided up into a grid to simplify navigation. An example of valid position is 0, 0, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters containing a set of the letters 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot, and 'M' means move forward one grid point maintaining the same direction, so the instruction M for a rover with a cordinate like 0, 0, N must be 0, 1, N .

## User interaction

### Configuration Input
The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

### Per Rover Input
1. Landing coordinates for the named Rover. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation. 
2. Navigation instructions for the named rover. i.e a string containing ('L', 'R', 'M').

## Executing the app

1. `git clone` this repository;
2. In the app folder, run `yarn install` to install dependencies;
3. Run the cli app `node src/index.js`