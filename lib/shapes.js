// ! !!!!!! Order matters !!!!!! don't forget the pain 


class Shape {
	constructor(colorText, colorShape, text, customColorText, customColorShape) {
		this.colorText = colorText;
		this.colorShape = colorShape;
		this.text = text;
		this.customColorText = customColorText;
		this.customColorShape = customColorShape;
	}
	render(font, size) {

	}
}

class Circle extends Shape {
	constructor(radius, colorShape, font, size, colorText, text) {
		super(colorText, colorShape, text);
		this.radius = radius;
		this.font = font;
		this.size = size;
		this.colorText = colorText;
		this.colorShape = colorShape;
	}

	get area() {
		return Math.PI * this.radius * this.radius;
	}

	render() {
		const defaultShapeColor = '#cbaacb';
		const defaultTextColor = '#f1c0e8';
		const svg = `<svg viewBox="0 0 ${2 * this.radius} ${2 * this.radius}" xmlns="http://www.w3.org/2000/svg">
		<circle 
			cx="${this.radius}" 
			cy="${this.radius}" 
			r="${this.radius}" 		
			fill="${this.colorShape === 'cCShape' ? this.customColorShape : this.colorShape}" />
			<text
			x="${this.side + 50}" 
			y="${this.side + 60}" 
			text-anchor="middle" 
			font-family="${this.font}" 
			font-size="${this.size}" 
			fill="${this.colorText === 'cCText' ? this.customColorText : this.colorText}"
			>${this.text}</text>
	  </svg>`;
		return svg;
	}
}
module.exports.Circle = Circle;

// ! don't make rounded corner triangles it wastes time
//  I dint stop 
class Triangle extends Shape {
	constructor(colorShape, font, size, colorText, text) {
		super(colorText, colorShape, text);
		this.font = font;
		this.size = size;
		this.colorText = colorText;
		this.colorShape = colorShape;
	}

	render() {
		const defaultShapeColor = '#cbaacb';
		const defaultTextColor = '#f1c0e8';
		const colorShape = answers.colorShape === 'Custom color' ? answers.customColorShape : defaultShapeColor;
		const colorText = answers.colorText === 'Custom color' ? answers.customColorText : defaultTextColor;
		const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		<path 
				d="M39.7,21.8C26.6,45.6,-26,45.4,-39.2,21.6C-52.3,-2.2,-26.2,-49.8,0.1,-49.8C26.4,-49.7,52.7,-2,39.7,21.8Z" 
				transform="translate(100 100)"
				fill="${this.colorShape === 'cCShape' ? this.customColorShape : this.colorShape}" />
				<text
				x="${this.side + 50}" 
				y="${this.side + 60}" 
				text-anchor="middle" 
				font-family="${this.font}" 
				font-size="${this.size}" 
				fill="${this.colorText === 'cCText' ? this.customColorText : this.colorText}"
				>${this.text}</text>
		</svg>`;
		return svg;
	}
}
module.exports.Triangle = Triangle;

class Square extends Shape {
	// square-specific properties and methods
	constructor(side, colorShape, font, size, colorText, text) {
		super(colorText, colorShape, text);
		this.side = side;
		this.font = font;
		this.size = size;
		this.colorText = colorText;
		this.colorShape = colorShape;
	}
	get area() {
		return this.side * this.side;
	}
	render() {
		const defaultShapeColor = '#cbaacb';
		const defaultTextColor = '#f1c0e8';
		const colorShape = answers.colorShape === 'Custom color' ? answers.customColorShape : defaultShapeColor;
		const colorText = answers.colorText === 'Custom color' ? answers.customColorText : defaultTextColor;
		const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<rect 
			x="${this.side}" 
			y="${this.side}" 
			width="100" 
			height="100" 
			rx="10" 
			ry="10" 
			fill="${this.colorShape === 'cCShape' ? this.customColorShape : this.colorShape}" />
			<text
			x="${this.side + 50}" 
			y="${this.side + 60}" 
			text-anchor="middle" 
			font-family="${this.font}" 
			font-size="${this.size}" 
			fill="${this.colorText === 'cCText' ? this.customColorText : this.colorText}">${this.text}</text>
		</svg>`;
		return svg;
	}
}
module.exports = { Circle, Triangle, Square }