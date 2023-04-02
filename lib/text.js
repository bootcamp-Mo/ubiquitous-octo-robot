class FontFamily {
	constructor() {
		this.fontFamilies = {
			Serif: 'Georgia, serif',
			'Sans Serif': 'Arial, sans-serif',
			Handwriting: 'cursive',
			Monospace: 'monospace',
		}
		this.fontSize = {
			small: '12px',
			medium: '18px',
			large: '24px',
		}
	}
	getFontFamily(selectedFont) {
		return this.fontFamilies[selectedFont]
	}
	getFontSize(selectedSize) {
		return this.fontSize[selectedSize]
	}
}
module.exports = { FontFamily };