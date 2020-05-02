const chai = require('chai')
const expect = chai.expect

const validator = require('../../utils/validationUtil');

describe('Validator', () => {
  
  describe('Check if coordinates provided are valid', () => {
    it('should return true', () => {
      expect(validator.isValidLandingCoordinates('0,0,N',3,3)).to.equal(true);
      expect(validator.isValidLandingCoordinates('0,0,s',3,3)).to.equal(true);
      expect(validator.isValidLandingCoordinates('0,0,W',3,3)).to.equal(true);
      expect(validator.isValidLandingCoordinates('3,3,E',3,3)).to.equal(true);
      expect(validator.isValidLandingCoordinates('0,0     ,N',3,3)).to.equal(true);
      expect(validator.isValidLandingCoordinates('0,     0,  N',3,3)).to.equal(true);
    }),

    it('should return a validation message', () => {
      expect(validator.isValidLandingCoordinates('0,0,P',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('0,0,NP',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('0,0,N%',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('4,0,N',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('0,4,W',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('4,4,W',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('0,0,       k',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('0;0;N',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('00N',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('-1,-1,N',3,3)).to.be.a('string');
      expect(validator.isValidLandingCoordinates('2.5,2,S',3,3)).to.be.a('string');
    })
  }),

  describe('Check if number provided is valid', () => {
    it('should return true', () => {
      expect(validator.isValidNumOfRovers(3)).to.equal(true);
      expect(validator.isValidNumOfRovers(2147483647)).to.equal(true);
    }),

    it('should return a validation message', () => {
      expect(validator.isValidNumOfRovers(0)).to.be.a('string');
      expect(validator.isValidNumOfRovers(-3)).to.be.a('string');
      expect(validator.isValidNumOfRovers(3.5)).to.be.a('string');
      expect(validator.isValidNumOfRovers('a')).to.be.a('string');
      expect(validator.isValidNumOfRovers(214748364899)).to.be.a('string');
    })
  }),

  describe('Check if instruction provided is valid', () => {
    let rovers = {};
    rovers['Larissa'] = null;
    rovers['Tom'] = null;
    rovers['Nick'] = null;

    it('should return true', () => {
      expect(validator.isValidInstruction('larissa-MRL', rovers)).to.equal(true);
      expect(validator.isValidInstruction('LaRiSsa-M', rovers)).to.equal(true);
      expect(validator.isValidInstruction('TOM-l', rovers)).to.equal(true);
    }),

    it('should return a validation message', () => {
      expect(validator.isValidInstruction('Lariss-MRL', rovers)).to.be.a('string');
      expect(validator.isValidInstruction('Lari-M', rovers)).to.be.a('string');
      expect(validator.isValidInstruction('--', rovers)).to.be.a('string');
      expect(validator.isValidInstruction(' M', rovers)).to.be.a('string');
      expect(validator.isValidInstruction(' -M', rovers)).to.be.a('string');
      expect(validator.isValidInstruction('Nick-O', rovers)).to.be.a('string');
      expect(validator.isValidInstruction('Nick-MRLL6', rovers)).to.be.a('string');
      expect(validator.isValidInstruction('9', rovers)).to.be.a('string');
      expect(validator.isValidInstruction('%-MRL', rovers)).to.be.a('string');
    })
  }),

  describe('Check if upper-right coordinates are valid', () => {
    
    it('should return true', () => {
      expect(validator.isValidUpperRightCoordinates('3,3')).to.equal(true);
      expect(validator.isValidUpperRightCoordinates('2147483647,2147483647')).to.equal(true);
    }),

    it('should return a validation message', () => {
      expect(validator.isValidUpperRightCoordinates('0,0')).to.be.a('string');
      expect(validator.isValidUpperRightCoordinates('-1,3')).to.be.a('string');
      expect(validator.isValidUpperRightCoordinates('3,-1')).to.be.a('string');
      expect(validator.isValidUpperRightCoordinates('3.5,3')).to.be.a('string');
      expect(validator.isValidUpperRightCoordinates('00')).to.be.a('string');
      expect(validator.isValidUpperRightCoordinates('55')).to.be.a('string');
      expect(validator.isValidUpperRightCoordinates('5;5')).to.be.a('string');
      expect(validator.isValidUpperRightCoordinates('')).to.be.a('string');
      expect(validator.isValidUpperRightCoordinates('2.2')).to.be.a('string');
    })
  }),

  describe('Check if name is unique within an Array', () => {
    let rovers = {};
    it('should return true', () => {
      rovers['Nick'] = null;
      rovers['Tom'] = null;
      const response = validator.isNameUnique('Larissa', rovers);
      expect(response).to.equal(true);
    })

    it('should return a validation message', () => {
      //let rovers = {};
      rovers['Larissa'] = null;
      rovers['Tom'] = null;
      const response = validator.isNameUnique('Larissa', rovers);
      expect(response).to.be.a("string")
    })

  })
  
})