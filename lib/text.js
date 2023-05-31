class FontFamily {
	constructor() {
		this.fontFamilies = {
			Serif: 'serif',
			'Sans Serif': 'sans-serif',
			Handwriting: 'cursive',
			Monospace: 'monospace',
		}
		// this.fontSize = {
		// 	small: '12px',
		// 	medium: '18px',
		// 	large: '24px',
		// }
	}
	getFontFamily(selectedFont) {
		return this.fontFamilies[selectedFont]
	}
	getFontSize(selectedSize) {
		const normalizeSized = selectedSize.toLowerCase()
		return this.fontSize[normalizeSized]
	}
}
module.exports = { FontFamily }