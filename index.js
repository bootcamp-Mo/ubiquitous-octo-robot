const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const { FontFamily } = require('./lib/text.js');

const question = function () {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'text',
				message: 'Enter the text:',
				default: 'Sample Text',
				validate: function (input) {
					const words = input.trim().split(/\s+/); // split on any whitespace characters
					let newText = '';
					for (let i = 0; i < Math.min(words.length, 3); i++) {
						newText += words[i][0];
					}
					return newText.length > 0 ? true : 'Please enter at least one word';
				},
			},
			{
				type: 'list',
				name: 'shape',
				message: 'Choose the shape:',
				choices: ['Circle', 'Triangle-ish', 'Square-ish'],
			},
			{
				type: 'list',
				name: 'font',
				message: 'What Font style?',
				choices: ['Serif', 'Sans Serif', 'Handwriting', 'Monospace'],
			},
			{
				type: 'list',
				name: 'sizeFont',
				message: 'Choose the font size:',
				choices: ['small', 'medium', 'large'],
			},
			{
				type: 'list',
				name: 'colorShape',
				message: 'Choose the color of the shape:',
				choices: ['red', 'blue', 'green', 'Custom Shape color'],
			},
			{
				type: 'input',
				name: 'customColorShape',
				message: 'Enter the custom color for the shape:',
				filter: function (input) {
					return '#' + input;
				},
				when: function (answers) {
					return answers.colorText === 'Custom Text color';
				},
			},
			{
				type: 'list',
				name: 'colorText',
				message: 'Choose the color of the text:',
				choices: ['black', 'white', 'Custom Text color'],
			},
			{
				type: 'input',
				name: 'customColorText',
				message: 'Enter the custom color for the text:',
				filter: function (input) {
					return '#' + input;
				},
				when: function (answers) {
					return answers.colorText === 'Custom Text color';
				},
			},
		])
		.then((answers) => {
			console.log('Answers from prompt:', answers); // print prompt answers
			const fontFamily = new FontFamily();
			const selectedFontFamily = fontFamily.getFontFamily(answers.font);
			const selectedFontSize = fontFamily.getFontSize(answers.sizeFont);

			let colorShape = answers.colorShape;
			let colorText = answers.colorText;

			if (answers.customColorShape) {
				colorShape = answers.customColorShape;
			}
			if (answers.customColorText) {
				colorText = answers.customColorText;
			}
			let shape;
			switch (answers.shape) {
				case 'Circle':
					shape = new Circle(
						colorText,
						colorShape,
						selectedFontFamily,
						selectedFontSize,
						answers.text
					);
					break;
				case 'Triangle-ish':
					shape = new Triangle(
						colorText,
						colorShape,
						selectedFontFamily,
						answers.text
					);
					break;
				case 'Square-ish':
					shape = new Square(
						colorText,
						colorShape,
						selectedFontFamily,
						selectedFontSize,
						answers.text
					);
					break;
				default:
					console.error('Invalid shape:', answers.shape);
					return;
			}
			const svg = shape.render();
			fs.writeFile('logo.svg', svg, (err) => {
				if (err) {
					console.error(err);
				} else {
					console.log('Generated logo.svg'); // print success message
				}
			});
		}).catch((error) => {
			console.error('Error occurred:', error); // print error message
		});
}
question();