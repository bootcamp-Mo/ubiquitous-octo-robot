const { Circle, Triangle, Square } = require('../lib/shapes');
const { FontFamily } = require('../lib/text');

describe('Circle', () => {
	describe('render', () => {
		it('should render a circle SVG with the given font and color', () => {
			const circle = new Circle(50, 'Arial, sans-serif', 'white', 'blue');
			const svg = circle.render('Arial, sans-serif', '24px');
			expect(svg).toMatchSnapshot();
		});
	});
});

describe('Triangle', () => {
	describe('render', () => {
		it('should render a triangle SVG with the given font and color', () => {
			const triangle = new Triangle(100, 50, 50, 'Georgia, serif', 'black', 'yellow');
			const svg = triangle.render('Georgia, serif', '18px');
			expect(svg).toMatchSnapshot();
		});
	});
});

describe('Square', () => {
	describe('render', () => {
		it('should render a square SVG with the given font and color', () => {
			const square = new Square(50, 'cursive', 'white', 'red');
			const svg = square.render('cursive', '12px');
			expect(svg).toMatchSnapshot();
		});
	});
});

describe('FontFamily', () => {
	describe('getFontFamily', () => {
		it('should return the correct font family for a given font', () => {
			const fontFamily = new FontFamily();
			expect(fontFamily.getFontFamily('Serif')).toBe('Georgia, serif');
			expect(fontFamily.getFontFamily('Sans Serif')).toBe('Arial, sans-serif');
			expect(fontFamily.getFontFamily('Handwriting')).toBe('cursive');
			expect(fontFamily.getFontFamily('Monospace')).toBe('monospace');
		});
	});

	describe('getFontSize', () => {
		it('should return the correct font size for a given size', () => {
			const fontFamily = new FontFamily();
			expect(fontFamily.getFontSize('small')).toBe('12px');
			expect(fontFamily.getFontSize('medium')).toBe('18px');
			expect(fontFamily.getFontSize('large')).toBe('24px');
		});
	});
});