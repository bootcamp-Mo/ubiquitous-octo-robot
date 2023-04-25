// !!!!!!! Order matters !!!!!!! don't forget the pain 

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
			x="${this.radius}" 
			y="${this.radius}" 
			text-anchor="middle" 
			font-family="${this.font}" 
			font-size="${this.size}" 
			fill="${this.colorText === 'cCText' ? this.customColorText : this.colorText}"
			>${this.text}</text>
	  </svg>`;
		return svg;
	}
}

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
		const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		<polygon 
		  points="100,20 40,180 160,180"
		  fill="${this.colorShape === 'cCShape' ? this.customColorShape : this.colorShape}" />
		<text
		  x="100" 
		  y="120" 
		  text-anchor="middle" 
		  font-family="${this.font}" 
		  font-size="${this.size}" 
		  fill="${this.colorText === 'cCText' ? this.customColorText : this.colorText}">
		  ${this.text}
		</text>
	  </svg>`;
		return svg;
	}
}
module.exports.Triangle = Triangle;

class Square extends Shape {
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
		const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		<rect 
		  x="0" 
		  y="0" 
		  width="${this.side}" 
		  height="${this.side}" 
		  fill="${this.colorShape === 'cCShape' ? this.customColorShape : this.colorShape}" />
		<text
		  x="${this.side / 2}" 
		  y="${this.side / 2 + 10}" 
		  text-anchor="middle" 
		  font-family="${this.font}" 
		  font-size="${this.size}" 
		  fill="${this.colorText === 'cCText' ? this.customColorText : this.colorText}">
		  ${this.text}
		</text>
	  </svg>`;
		return svg;
	}
}
module.exports.Square = Square;
