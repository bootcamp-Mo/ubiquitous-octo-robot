const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const { FontFamily } = require('./lib/text.js')
const question = function () {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'text',
				message: 'Logo text:'
			},
			{
				type: 'list',
				name: 'font',
				message: 'What Font style?',
				choices: ['Serif', 'Sans Serif', 'Handwriting', 'Monospace'],
			},
			{
				type: 'list',
				name: 'size',
				message: 'What font size?',
				choices: ['Small', 'Medium', 'Large'],
			},
			{
				type: "input",
				name: "colorText",
				message: "Enter a hexadecimal color code for the Text Color, make sure to include the #:",
				validate: function (value) {
					// Check if the value is a valid hexadecimal color code
					var hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
					if (hexRegex.test(value)) {
						return true;
					} else {
						return "Please enter a valid hexadecimal color code, make sure to include the #:";
					}
				}
			},
			{
				type: 'list',
				name: 'shape',
				message: 'What shape?',
				choices: ['Square-ish', 'Circle-ish', 'Triangle-ish'],
			},
			{
				type: "input",
				name: "colorShape",
				message: "Enter a hexadecimal color code for the Shape Color:",
				validate: function (value) {
					// Check if the value is a valid hexadecimal color code
					var hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
					if (hexRegex.test(value)) {
						return true;
					} else {
						return "Please enter a valid hexadecimal color code.";
					}
				}
			},

		])
		.then((answers) => {
			const fontFamily = new FontFamily();
			const selectedFontFamily = fontFamily.getFontFamily(answers.font)
			const selectedFontSize = fontFamily.getFontSize(answers.size)
			let shape;
			switch (answers.shape) {
				case 'Circle-ish':
					shape = new Circle(50, answers.text, selectedFontFamily, selectedFontSize, answers.colorText, answers.colorShape);
					break;
				case 'Triangle-ish':
					shape = new Triangle(100, 50, 50, answers.text, selectedFontFamily, selectedFontSize, answers.colorText, answers.colorShape);
					break;
				case 'Square-ish':
					shape = new Square(50, answers.text, selectedFontFamily, selectedFontSize, answers.colorText, answers.colorShape);
					break;
				default:
					console.error('Invalid shape:', answers.shape);
					return;
			}
			const svg = shape.render(answers.text);
			fs.writeFile('logo.svg', svg, (err) => {
				if (err) {
					console.error(err);
				} else {
					console.log('Logo has been created');
				}
			});
		})
}
question();