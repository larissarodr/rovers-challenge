const chai = require('chai')
let stdout = require("test-console").stdout;
const Rover = require("../../model/Rover");

const expect = chai.expect

const printer = require('../../utils/printingUtil');

describe('Printer', () => {
  describe('Print coordinates for each rover', () => {   
    let rovers = {};
    rovers['Larissa'] = new Rover(0,0,'N');
    rovers['Tom'] = new Rover(0,0,'N');
    rovers['Nick'] = new Rover(0,0,'N');
    it('should print N messages where N is length of array', () => {
      let output = stdout.inspectSync(function() {
        printer.printCoordinatesForEachRover(rovers)
      });
      expect(output).to.have.lengthOf(Object.keys(rovers).length);
    })

  }),

  describe('Print coordinates for each rover', () => {   
    let rovers = {};
    rovers['Larissa'] = new Rover(0,0,'N');
    rovers['Tom'] = new Rover(0,0,'N');
    rovers['Nick'] = new Rover(0,0,'N');
    it('should print one message', () => {
      let output = stdout.inspectSync(function() {
        printer.printCoordinatesForSpecificRover('Larissa', rovers)
      });
      expect(output).to.have.lengthOf(1);
    })

  })

});