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
				type: 'list',
				name: 'shape',
				message: 'What shape?',
				choices: ['Square-ish', 'Circle', 'Triangle-ish'],
			},
			{
				type: 'number',
				name: 'size',
				message: 'What size do you want the shape to be?',
				validate: function (value) {
					if (value < 10 || value > 500) {
						return 'Please enter a size between 10 and 500.';
					} else {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'colorShape',
				message: 'Enter a hexadecimal color code or select a preset color for the shape:',
				validate: function (value) {
					var hexRegex = /^#?[A-Fa-f0-9]{6}$/;
					if (hexRegex.test(value)) {
						return true;
					} else if (['Purple', 'Blue', 'Green'].includes(value)) {
						return true;
					} else {
						return 'Please enter a valid hexadecimal color code (e.g. #FF0000) or select a preset color.';
					}
				},
				filter: function (input) {
					switch (input.toLowerCase()) {
						case 'purple':
							return '#cbaacb';
						case 'orange':
							return '#ffaea5';
						case 'light tan':
							return '#eceae4';
						case 'custom color':
							return 'Custom color';
						default:
							return input.startsWith('#') ? input : `#${input}`;
					}
				}
			},
			{
				type: 'input',
				name: 'customColorShape',
				message: 'Enter a hexadecimal color code for the custom shape color (e.g. #FF0000):',
				validate: function (value) {
					var hexRegex = /^#?[A-Fa-f0-9]{6}$/;
					if (hexRegex.test(value)) {
						return true;
					} else {
						return 'Please enter a valid hexadecimal color code (e.g. #FF0000):';
					}
				},
				when: function (answers) {
					return answers.colorShape === 'Custom color';
				}
			},
			{
				type: 'input',
				name: 'colorText',
				message: 'Enter a hexadecimal color code or select a preset Shape color (e.g. #f1c0e8, Pink):',
				validate: function (value) {
					var hexRegex = /^#?[A-Fa-f0-9]{6}$/;
					if (hexRegex.test(value)) {
						return true;
					} else if (['Pink', 'Blue', 'Green'].includes(value)) {
						return true;
					} else {
						return 'Please enter a valid hexadecimal color code (e.g. #FF0000) or select a preset text color.';
					}
				},
				filter: function (input) {
					switch (input.toLowerCase()) {
						case 'pink':
							return '#f1c0e8';
						case 'blue':
							return '#90dbf4';
						case 'green':
							return '#b9fbc0';
						default:
							return input.startsWith('#') ? input : `#${input}`;
					}
				},
				when: function (answers) {
					return answers.colorText !== 'customTextColor';
				}
			},
			{
				type: 'input',
				name: 'customColorText',
				message: 'Enter a hexadecimal color code for the text color (e.g. #FF0000):',
				validate: function (value) {
					var hexRegex = /^#?[A-Fa-f0-9]{6}$/;
					if (hexRegex.test(value)) {
						return true;
					} else {
						return 'Please enter a valid hexadecimal color code (e.g. #FF0000):';
					}
				},
				when: function (answers) {
					return answers.colorText === 'customTextColor';
				},
				filter: function (input) {
					return input.startsWith('#') ? input : `#${input}`;
				}
			}
		])
		.then((answers) => {
			console.log('Answers from prompt:', answers); // print prompt answers
			const fontFamily = new FontFamily();
			const selectedFontFamily = fontFamily.getFontFamily(answers.font);
			const selectedFontSize = fontFamily.getFontSize(answers.size);

			let colorShape = answers.colorShape;
			let colorText = answers.colorText;

			if (answers.colorShape === 'Custom color') {
				colorShape = answers.customColorShape;
			}
			if (answers.colorText === 'Custom color') {
				colorText = answers.customTextColor;
			}

			let shape;
			switch (answers.shape) {
				case 'Circle':
					shape = new Circle(colorText, colorShape, 50, selectedFontFamily, answers.size, text, customColorText, customColorShape);
					break;
				case 'Triangle':
					shape = new Triangle(colorText, colorShape, selectedFontFamily, answers.size, text, customColorText, customColorShape);
					break;
				case 'Square-ish':
					shape = new Square(colorText, colorShape, 50, selectedFontFamily, answers.size, text, customColorText, customColorShape);
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
		})
		.catch((error) => {
			console.error('Error occurred:', error); // print error message
		});
};
question();

