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
				type: 'list',
				name: 'colorShape',
				message: 'What shape color?',
				choices: [
					{ name: 'Purple', value: '#cbaacb' },
					{ name: 'Orange', value: '#ffaea5' },
					{ name: 'Tan?', value: '#eceae4' },
					{ name: 'Custom color', value: 'customShapeColor' },
				],
				when: (answers) => answers.colorShape !== 'customShapeColor',
				filter: (input) => input.toLowerCase()
			},
			{
				type: 'list',
				name: 'colorShape',
				message: 'What shape color?',
				choices: [
					{ name: 'Purple', value: '#cbaacb' },
					{ name: 'Orange', value: '#ffaea5' },
					{ name: 'Tan?', value: '#eceae4' },
					{ name: 'Custom color', value: 'customShapeColor' },
				],
			},
			{
				type: 'input',
				name: 'customColorShape',
				message: "Enter a hexadecimal color code for the Shape Color (e.g. FF0000):",
				validate: function (value) {
					var hexRegex = /^[A-Fa-f0-9]{6}$/;
					if (hexRegex.test(value)) {
						return true;
					} else {
						return 'Please enter a valid hexadecimal color code (e.g. FF0000):';
					}
				},
				when: function (answers) {
					return answers.colorShape === 'customShapeColor';
				}
			},
			{
				type: 'input',
				name: 'colorText',
				message: 'Enter a hexadecimal color code or select a preset text color (e.g. #f1c0e8, Pink):',
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
				},
			},
			{
				type: 'input',
				name: 'colorText',
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
				}
			},
		]).then((answers) => {
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
				colorText = answers.customColorText;
			}

			let shape;
			switch (answers.shape) {
				case 'Circle':
					shape = new Circle(50, colorShape, selectedFontFamily, selectedFontSize, colorText, answers.text);
					break;
				case 'Triangle':
					shape = new Triangle(colorShape, selectedFontFamily, selectedFontSize, colorText, answers.text);
					break;
				case 'Square-ish':
					shape = new Square(50, colorShape, selectedFontFamily, selectedFontSize, colorText, answers.text);
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

question()
