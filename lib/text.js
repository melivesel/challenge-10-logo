
class Text {
    constructor(content, x, y, color) {
        this.content = content;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    render() {
        return `<text x="${this.x}" y="${this.y}" fill="${this.color}">${this.content}</text>`;
    }
}


const textElement = new Text('Hello, World!', 50, 150, 'black');
console.log(textElement.render());

module.exports = { Text };