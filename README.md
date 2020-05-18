![alt text][logo]

[logo]: https://github.com/larissarodr/rovers-challenge/blob/master/src/assets/welcome.PNG "Welcome Message"

# Rovers on Mars

## The Challenge
A squad of rovers are to be sent by NASA to a plateau on Mars. The Agency must be able to control the movement of these rovers, to get a complete view of the terrain and send back to earth. A rover's position must be represented by a combination of an x and y coordinates and a letter representing one of the four cardinal compass points. The terrain to be explored in Mars is divided up into a grid to simplify navigation. An example of valid position is 0, 0, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters containing a set of the letters 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot, and 'M' means move forward one grid point maintaining the same direction, so the instruction M for a rover with a cordinate like 0, 0, N must be 0, 1, N .

## User interaction

### Configuration Input
The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

### Per Rover Input
1. Landing coordinates for the named Rover. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation. 
2. Navigation instructions for the named rover. i.e a string containing ('L', 'R', 'M').

## My Implementation
Validation was included in each step to ensure user comply with the formats that are expected.

1. Enter the upper-right coordinates of the plateau on the following format -> [X],[Y]. E.g.: 5,5.
2. How many rovers would you like to control? Please, enter a number.
3. Would you like to provide a custom name to them? (Y/n).

      If answer is `N`, go to step 5.
      If answer is `Y`, go to step 4.

For each rover, the app will ask for the name and landing coordinates:

4. Enter the name of the rover as a unique word. The name must be unique.
5. Enter the landing coordinates for this rover on the following format -> [X],[Y],[D]. E.g.: 0,0,N.

Once information is provided for all rovers, the app will show the rovers' coordinates:
```
The following rovers were sent to Mars:
jake - Position: 0,1,E
james - Position: 0,0,N
```

6. The app will give the user the freedom to choose between the following options:

      `(1) Print rovers coordinates` - Coordinates for all rovers will be printed.

      `(2) Move a rover` - Instructions on how to move a rover will be displayed to the user. The user, then, must provide the moving instruction as expected.

      `(3) Exit` - Exit message will be displayed and the app will be terminated.

## Unit test coverage (generated via Istanbul)

File                    | % Stmts | % Branch | % Funcs | % Lines |
------------------------|---------|----------|---------|---------|
All files               |   96.37 |      100 |   90.16 |   96.34 | 
 error                  |     100 |      100 |     100 |     100 | 
  InvalidMoveError.js   |     100 |      100 |     100 |     100 | 
 model                  |     100 |      100 |     100 |     100 | 
  Rover.js              |     100 |      100 |     100 |     100 | 
 test/unit              |     100 |      100 |     100 |     100 | 
  navigationUtilTest.js |     100 |      100 |     100 |     100 | 
  printingUtilTest.js   |     100 |      100 |     100 |     100 | 
  validationUtilTest.js |     100 |      100 |     100 |     100 | 
 utils                  |   91.59 |      100 |   73.91 |   91.43 | 
  navigationUtil.js     |     100 |      100 |     100 |     100 | 
  printingUtil.js       |   47.06 |      100 |   33.33 |   43.75 |
  validationUtil.js     |     100 |      100 |     100 |     100 | 


## Executing the app
1. `git clone` this repository;
2. In the app folder, run `yarn install` to install dependencies;
3. Run the cli app `yarn start`

## Testing the app
1. `git clone` this repository;
2. In the app folder, run `yarn install` to install dependencies;
3. Run the cli app `yarn test`
