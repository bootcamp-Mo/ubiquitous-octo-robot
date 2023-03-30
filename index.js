const inquirer = require('inquirer');
const fs = require('fs');
con

const question = function () {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'font',
				message: 'What Font style?',
				choices: ['Serif', 'Sans Serif', 'Handwriting', 'Monospace'],
			},
			{
				type: "input",
				name: "colorText",
				message: "Enter a hexadecimal color code for the Text Color:",
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
			// The user's input is stored in the answers object
			fs.writeFile('logo.svg', shapes(answers), (err) =>
				err ? console.error(err) : console.log('Logo has been created')
			)
		})
}
question()