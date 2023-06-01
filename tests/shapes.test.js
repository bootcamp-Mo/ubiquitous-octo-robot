const { Circle, Triangle, Square } = require('../lib/shapes');
const { FontFamily } = require('../lib/text');


describe('Rendering Shape', () => {
	const testFontFamily = new FontFamily()

	// Circle test
	test('Circle shape should have a shape color, text, text font, and text color', () => {
		const colorText = 'black';
		const colorShape = 'lightBlue';
		const font = 'Serif';
		const text = 'Hey';

		const circle = new Circle(colorText, colorShape, font, text);

		const svg = circle.render();

		expect(svg).toContain(`fill="${colorShape}"`);
		expect(svg).toContain(`font-family="${font}"`);
		expect(svg).toContain(`fill="${colorText}"`);
		expect(svg).toContain(text);
	});

	// Triangle test
	test('Triangle shape should have a shape color, text, text font and text color', () => {

		const colorText = 'white';
		const colorShape = 'blue';
		const font = 'Sans Serif';
		const text = 'Ahh';

		const triangle = new Triangle(colorText, colorShape, font, text);

		const svg = triangle.render();

		expect(svg).toContain(`fill="${colorShape}"`);
		expect(svg).toContain(`font-family="${font}"`);
		expect(svg).toContain(`fill="${colorText}"`);
		expect(svg).toContain(text);
	});

	// Square test 
	test('Square shape should have a shape color, text, text font, and text color', () => {
		const colorText = 'black';
		const colorShape = 'green';
		const font = 'Handwriting';
		const text = 'Boo';

		const square = new Square(colorText, colorShape, font, text);

		const svg = square.render();

		expect(svg).toContain(`fill="${colorShape}"`);
		expect(svg).toContain(`font-family="${font}"`);
		expect(svg).toContain(`fill="${colorText}"`);
		expect(svg).toContain(text);
	});
})

/**----------------------
 *?    Jest and testing
 *------------------------**/

//* describe('string description', () => {call back function} )
/*
	 is a function that is used to group related test cases together.
	 It provides a way to create a test suite, which is a logical
	 grouping of tests that focus on a specific functionality or
	 component of your code.

	 The describe function takes two parameters: a string description;
	 and a callback function. The description is used to provide a;
	 human-readable name or summary for the test suite. The callback
	 function contains the actual test cases that are part of the test
	 suite.
*/
//* test('string description', () => {call back function})
/*
	is a function that is used to define an individual test case.
	It represents a single test scenario that verifies the behavior or
	outcome of a specific piece of code, such as a function, method,
	or module.

	The test function takes two parameters:
	a string description and a callback function.

	The description provides a clear and concise explanation of what
	the test is checking or what behavior is being tested. The callback
	function contains the actual test logic, including the assertions
	that validate the expected behavior.
*/

//* expect()
/*
	is a function that is typically used in combination with matchers 
	to perform various types of assertions. A matcher is a function that 
	accepts a value and returns a boolean indicating whether the 
	expectation is met or not.

!	 The expect function is a crucial part of the Jest testing framework

	examples:

*	expect(result).toBe(expected): 
	This matcher checks if the result is strictly equal (===) to the expected value.

*   expect(result).toEqual(expected): 
	This matcher performs a deep equality check between result and expected, 
	comparing their values recursively.

*   expect(result).toContain(expected): 
	This matcher checks if the result contains the expected value (for arrays or strings).

*   expect(result).toBeNull(): 
	This matcher verifies that the result is null.

*   expect(result).toBeTruthy(): 
	This matcher checks if the result evaluates to true in a boolean context.

*   expect(result).toHaveBeenCalledWith(arg1, arg2, ...): 
	This matcher validates that the function or method under test was called 
	with specific arguments.
*/