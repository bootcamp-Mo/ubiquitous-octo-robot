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
			},
			{
				type: 'input',
				name: 'customColorShape',
				message: "Enter a hexadecimal color code for the Shape Color:",
				validate: function (value) {
					var hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
					if (hexRegex.test(value)) {
						return true;
					} else {
						return 'Please enter a valid hexadecimal color code (e.g. #FF0000):';
					}
				},
				when: function (answers) {
					return answers.colorShape === 'customShapeColor';
				}
			},
			{
				type: 'list',
				name: 'colorText',
				message: 'What text color?',
				choices: [
					{ name: 'Pink', value: '#f1c0e8' },
					{ name: 'Blue', value: '#90dbf4' },
					{ name: 'Green', value: '#b9fbc0' },
					{ name: 'Custom color', value: 'customTextColor' },
				],
			},
			{
				type: 'input',
				name: 'customColorText',
				message: 'Enter a hexadecimal color code for the text color (e.g. #FF0000):',
				validate: function (value) {
					var hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
					if (hexRegex.test(value)) {
						return true;
					} else {
						return 'Please enter a valid hexadecimal color code (e.g. #FF0000):';
					}
				},
				when: function (answers) {
					return answers.colorText === 'customTextColor';
				}
			}
		])
		.then((answers) => {
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
					console.log('Generated logo.svg');
				}
			});
		});
};

question();