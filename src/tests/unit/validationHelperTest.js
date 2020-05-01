const chai = require('chai')
const expect = chai.expect

const validationHelper = require('../../utils/validationHelper');

describe('Validation Helper', () => {
  
  describe('Check if coordinates provided are valid', () => {
    it('should return true', () => {
      expect(validationHelper.isValidLandingCoordinates('0,0,N',3,3)).to.equal(true);
      expect(validationHelper.isValidLandingCoordinates('0,0,s',3,3)).to.equal(true);
      expect(validationHelper.isValidLandingCoordinates('0,0,W',3,3)).to.equal(true);
      expect(validationHelper.isValidLandingCoordinates('3,3,E',3,3)).to.equal(true);
      expect(validationHelper.isValidLandingCoordinates('0,0     ,N',3,3)).to.equal(true);
      expect(validationHelper.isValidLandingCoordinates('0,     0,  N',3,3)).to.equal(true);
    }),

    it('should return a validation message', () => {
      expect(validationHelper.isValidLandingCoordinates('0,0,P',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('0,0,NP',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('0,0,N%',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('4,0,N',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('0,4,W',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('4,4,W',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('0,0,       k',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('0;0;N',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('00N',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('-1,-1,N',3,3)).to.be.a('string');
      expect(validationHelper.isValidLandingCoordinates('2.5,2,S',3,3)).to.be.a('string');
    })
  }),

  describe('Check if number provided is valid', () => {
    it('should return true', () => {
      expect(validationHelper.isValidNumOfRovers(3)).to.equal(true);
      expect(validationHelper.isValidNumOfRovers(2147483647)).to.equal(true);
    }),

    it('should return a validation message', () => {
      expect(validationHelper.isValidNumOfRovers(0)).to.be.a('string');
      expect(validationHelper.isValidNumOfRovers(-3)).to.be.a('string');
      expect(validationHelper.isValidNumOfRovers(3.5)).to.be.a('string');
      expect(validationHelper.isValidNumOfRovers('a')).to.be.a('string');
      expect(validationHelper.isValidNumOfRovers(214748364899)).to.be.a('string');
    })
  }),

  describe('Check if instruction provided is valid', () => {
    let rovers = {};
    rovers['Larissa'] = null;
    rovers['Tom'] = null;
    rovers['Nick'] = null;

    it('should return true', () => {
      expect(validationHelper.isValidInstruction('larissa-MRL', rovers)).to.equal(true);
      expect(validationHelper.isValidInstruction('LaRiSsa-M', rovers)).to.equal(true);
      expect(validationHelper.isValidInstruction('TOM-l', rovers)).to.equal(true);
    }),

    it('should return a validation message', () => {
      expect(validationHelper.isValidInstruction('Lariss-MRL', rovers)).to.be.a('string');
      expect(validationHelper.isValidInstruction('Lari-M', rovers)).to.be.a('string');
      expect(validationHelper.isValidInstruction('--', rovers)).to.be.a('string');
      expect(validationHelper.isValidInstruction(' M', rovers)).to.be.a('string');
      expect(validationHelper.isValidInstruction(' -M', rovers)).to.be.a('string');
      expect(validationHelper.isValidInstruction('Nick-O', rovers)).to.be.a('string');
      expect(validationHelper.isValidInstruction('Nick-MRLL6', rovers)).to.be.a('string');
      expect(validationHelper.isValidInstruction('9', rovers)).to.be.a('string');
      expect(validationHelper.isValidInstruction('%-MRL', rovers)).to.be.a('string');
    })
  }),

  describe('Check if upper-right coordinates are valid', () => {
    
    it('should return true', () => {
      expect(validationHelper.isValidUpperRightCoordinates('3,3')).to.equal(true);
      expect(validationHelper.isValidUpperRightCoordinates('2147483647,2147483647')).to.equal(true);
    }),

    it('should return a validation message', () => {
      expect(validationHelper.isValidUpperRightCoordinates('0,0')).to.be.a('string');
      expect(validationHelper.isValidUpperRightCoordinates('-1,3')).to.be.a('string');
      expect(validationHelper.isValidUpperRightCoordinates('3,-1')).to.be.a('string');
      expect(validationHelper.isValidUpperRightCoordinates('3.5,3')).to.be.a('string');
      expect(validationHelper.isValidUpperRightCoordinates('00')).to.be.a('string');
      expect(validationHelper.isValidUpperRightCoordinates('55')).to.be.a('string');
      expect(validationHelper.isValidUpperRightCoordinates('5;5')).to.be.a('string');
      expect(validationHelper.isValidUpperRightCoordinates('')).to.be.a('string');
      expect(validationHelper.isValidUpperRightCoordinates('2.2')).to.be.a('string');
    })
  }),

  describe('Check if name is unique within an Array', () => {
    let rovers = {};
    it('should return true', () => {
      rovers['Nick'] = null;
      rovers['Tom'] = null;
      const response = validationHelper.isNameUnique('Larissa', rovers);
      expect(response).to.equal(true);
    })

    it('should return a validation message', () => {
      //let rovers = {};
      rovers['Larissa'] = null;
      rovers['Tom'] = null;
      const response = validationHelper.isNameUnique('Larissa', rovers);
      expect(response).to.be.a("string")
    })

  })
  
})