const chai = require('chai')
const expect = chai.expect

const navigator = require('../../utils/navigator');

describe('Navigator', () => {
  describe('Move', () => {
    it('should move', () => {
      expect(navigator.move(0,0,'n',3,3)).to.eql({x: 0, y: 1});
      expect(navigator.move(0,0,'E',3,3)).to.eql({x: 1, y: 0});
      expect(navigator.move(2,2,'w',3,3)).to.eql({x: 1, y: 2});
      expect(navigator.move(3,3,'S',3,3)).to.eql({x: 3, y: 2});
    }),

    it('should not move', () => {
      expect(navigator.move(0,0,'s',3,3)).to.eql({x: 0, y: 0});
      expect(navigator.move(0,0,'W',3,3)).to.eql({x: 0, y: 0});
      expect(navigator.move(3,3,'N',3,3)).to.eql({x: 3, y: 3});
      expect(navigator.move(3,3,'e',3,3)).to.eql({x: 3, y: 3});
      expect(navigator.move(3,3,'P',3,3)).to.eql({x: 3, y: 3});
    })

  }),

  describe('Flip 90 degrees right', () => {
    it('should flip', () => {
      expect(navigator.flip90right('n')).to.eql({ d: 'E' });
      expect(navigator.flip90right('E')).to.eql({ d: 'S' });
      expect(navigator.flip90right('s')).to.eql({ d: 'W' });
      expect(navigator.flip90right('W')).to.eql({ d: 'N' });
      
    }),

    it('should not flip', () => {
      expect(navigator.flip90right('P')).to.eql({ d: 'P'});
      expect(navigator.flip90right('K')).to.eql({ d: 'K'});
      expect(navigator.flip90right('9')).to.eql({ d: '9'});      
    })

  }),

  describe('Flip 90 degrees left', () => {
    it('should flip', () => {
      expect(navigator.flip90left('n')).to.eql({ d: 'W' });
      expect(navigator.flip90left('E')).to.eql({ d: 'N' });
      expect(navigator.flip90left('s')).to.eql({ d: 'E' });
      expect(navigator.flip90left('W')).to.eql({ d: 'S' });
      
    }),

    it('should not flip', () => {
      expect(navigator.flip90left('P')).to.eql({ d: 'P'});
      expect(navigator.flip90left('K')).to.eql({ d: 'K'});
      expect(navigator.flip90left('9')).to.eql({ d: '9'});      
    })

  })


});