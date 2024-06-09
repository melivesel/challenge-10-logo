const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Choose a color or enter a hexadecimal number for your text',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Choose a color or enter a hexadecimal number for your shape',
        name: 'shapecolor',
    },
];

function init() {
    inquirer.prompt(questions).then((data) => {
        const { shape, shapecolor, text, textcolor } = data;
        let shapeInstance;
        switch (shape) {
            case 'Triangle':
                shapeInstance = new Triangle(shapecolor);
                break;
            case 'Square':
                shapeInstance = new Square(shapecolor);
                break;
            case 'Circle':
                shapeInstance = new Circle(shapecolor);
                break;
            default:
                console.log('Invalid shape choice');
                return;
        }
        const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${shapeInstance.render()}
          <text x="25" y="55" fill="${textcolor}">${text}</text>
        </svg>
        `;
        writeToFile('logo.svg', svgContent);
    });
}

function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log('Generated logo.svg');
    } catch (err) {
        console.error(err);
    }
}

init();