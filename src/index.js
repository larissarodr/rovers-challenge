#!/usr/bin/env node

const clear = require('clear');
const printingUtil  = require('./utils/printingUtil');

const RoverService = require("./service/RoverService");
const NavigationService = require("./service/NavigationService");
const DefinePlateauService = require("./service/DefinePlateauService");

let rovers = {};
let limitX, limitY;

const run = async () => {

  clear();

  printingUtil.printWelcomeMessage()

  const response = await DefinePlateauService.definePlateau();
  limitX = response.limitX;
  limitY = response.limitY;
  
  await RoverService.defineAndPrepareRovers(limitX, limitY, rovers);
  
  await NavigationService.handleNavigationInstructions(limitX, limitY, rovers);

  printingUtil.printGoodbyeMessage();

};

run();