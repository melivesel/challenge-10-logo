class Text {
    constructor(text, textcolor) {
        this.text = text.toUpperCase().substring(0, 3); 
        this.textcolor = textcolor;
    }

    truncateText() {
        this.content = this.content.substring(0, 3); 
    }

    render() {
        return `<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${this.textcolor}" font-size="50">${this.text}</text>`;
    }
}

module.exports = { Text };