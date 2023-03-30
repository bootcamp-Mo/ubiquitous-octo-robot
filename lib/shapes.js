// todo: Implement the Shape classes: Create the Circle, Triangle, and Square classes. You can use inheritance to place any common functionality and properties shared by the Shape classes in a parent Shape class.
class Shape {
	constructor(font, colorText, colorShape) {
		this.font = font
		this.colorText = colorText
		this.colorShape = colorShape
	}
	setColorShape(color) {
		this.colorShape = color;
	}
	render() {

	}
}
class Circle extends Shape {
	// circle-specific properties and methods
	constructor(radius, font, colorText, colorShape, font) {
		super(font, colorText, colorShape);
		this.radius = radius;

	}

	get area() {
		return Math.PI * this.radius * this.radius;
	}
	render() {
		const svg = `<svg viewBox="0 0 ${2 * this.radius} ${2 * this.radius}" xmlns="http://www.w3.org/2000/svg">
		  <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.colorShape}" />
		  <text x="${this.radius}" y="${this.radius + 12}" text-anchor="middle" font-size="24" fill="${this.colorText}">${this.font}</text>
		</svg>`;
		return svg;
	}
}

class Triangle extends Shape {
	// triangle-specific properties and methods
	constructor(side1, side2, side3, font, colorText, colorShape) {
		super(font, colorText, colorShape);
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}
	get area() {
		return 0.5 * (this.side1 + this.side2 + this.side3);
	}
	render() {
		const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		  <polygon points="100,10 190,190 10,190" fill="${this.colorShape}" />
		  <text x="100" y="100" text-anchor="middle" font-size="24" fill="${this.colorText}">${this.font}</text>
		</svg>`;
		return svg;
	}
}

class Square extends Shape {
	// square-specific properties and methods
	constructor(side, font, colorText, colorShape) {
		super(font, colorText, colorShape);
		this.side = side;
	}
	get area() {
		return this.side * this.side;
	}
	render() {
		const svg = `<svg viewBox = "0 0 200 200" xmlns = "http://www.w3.org/2000/svg" >
			<rect x="${this.side}" y="${this.side}" width="100" height="100" fill="${this.colorShape}" />
			<text x="100" y="100" text-anchor="middle" font-size="24" fill="${this.colorText}">${this.font}</text>
		</svg>`;
		return svg;
	}
}