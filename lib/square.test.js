const { Square } = require('./shapes');

describe('Square Class', () => {
    test('Square should render correctly with the specified color', () => {
        const squareInstance = new Square('blue');
        const expectedSVG = '<rect x="-25" y="-25" width="150" height="150" fill="blue" />';
        
        expect(squareInstance.render()).toEqual(expectedSVG);
    });
});