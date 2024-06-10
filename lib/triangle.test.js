const { Triangle } = require('./shapes');

describe('Triangle Class', () => {
    test('Triangle should render correctly with the specified color', () => {
        const triangleInstance = new Triangle('blue');
        const expectedSVG = '<polygon points="50,0 0,100 100,100" fill="blue" />';
        
        expect(triangleInstance.render()).toEqual(expectedSVG);
    });
});