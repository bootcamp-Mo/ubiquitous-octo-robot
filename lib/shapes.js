const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
	constructor(colorText, colorShape, text, customColorText, customColorShape) {
		this.colorText = colorText;
		this.colorShape = colorShape;
		this.text = text;
		this.customColorText = customColorText;
		this.customColorShape = customColorShape;
	}
	render() {
	}
}

class Circle extends Shape {
	constructor(colorText, colorShape, font, text, customColorText, customColorShape) {
		super(colorText, colorShape, text, customColorText, customColorShape);
		this.font = font;
	}
	render() {
		const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		<circle 
			cx="100" 
			cy="100" 
			r="80" 		
			fill="${this.colorShape === 'Custom Shape color' ? this.customColorShape : this.colorShape}" />
			<text
			x="100" 
			y="120" 
			text-anchor="middle" 
			font-family="${this.font}" 
			fill="${this.colorText === 'Custom Text color' ? this.customColorText : this.colorText}"
			>${this.text}</text>
	  </svg>`;
		return svg;
	}
}

class Triangle extends Shape {
	constructor(colorText, colorShape, font, text, customColorText, customColorShape) {
		super(colorText, colorShape, text, customColorText, customColorShape);
		this.font = font;
	}
	render() {
		const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		<polygon 
		  points="100,20 40,180 160,180"
		  fill="${this.colorShape === 'Custom Shape color' ? this.customColorShape : this.colorShape}" />
		<text
		  x="100" 
		  y="120" 
		  text-anchor="middle" 
		  font-family="${this.font}" 
		  fill="${this.colorText === 'Custom Text color' ? this.customColorText : this.colorText}"
		  >${this.text}</text>
	  </svg>`;
		return svg;
	}
}

class Square extends Shape {
	constructor(colorText, colorShape, font, text, customColorText, customColorShape) {
		super(colorText, colorShape, text, customColorText, customColorShape);
		this.font = font;
	}
	render() {
		const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		<rect 
		  x="50" 
		  y="50" 
		  width="100" 
		  height="100" 
		  fill="${this.colorShape === 'Custom Shape color' ? this.customColorShape : this.colorShape}" />
		<text
		  x="100" 
		  y="120" 
		  text-anchor="middle" 
		  font-family="${this.font}" 
		  fill="${this.colorText === 'Custom Text color' ? this.customColorText : this.colorText}"
		  >${this.text}</text>
	  </svg>`;
		return svg;
	}
}
module.exports = {
	Square: Square,
	Circle: Circle,
	Triangle: Triangle
};