class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        // Base implementation for rendering a shape
        return '';
    }
}

// Circle class
class Circle extends Shape {
    render() {
        return `<circle cx="200" cy="100" r="100" fill="${this.color}" />`;
    }
}

// Triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="50,0 0,100 100,100" fill="${this.color}" />`;
    }
}

// Square class
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="150" height="150" fill="${this.color}" />`;
    }
}
 
module.exports = { Circle, Triangle, Square };