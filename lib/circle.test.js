const { Circle } = require('./shapes');

describe('Circle Class', () => {
    test('Circle should render correctly with the specified color', () => {
        const circle = new Circle('blue');
        const expectedSVG = '<circle cx="50" cy="50" r="100" fill="blue" />';
        
        expect(circle.render()).toEqual(expectedSVG);
    });
});