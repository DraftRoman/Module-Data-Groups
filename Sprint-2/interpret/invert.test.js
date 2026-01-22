const invert = require("./invert.js");
// a) What is the current return value when invert is called with { a : 1 }
// { "1": "a"}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {'1': 'a', '2': 'b'}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// {'1': 'a', '2': 'b'}
// c) What does Object.entries return? Why is it needed in this program?
// It returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// d) Explain why the current return value is different from the target output
// The current implementation uses invertedObj.key = value; which sets a property literally named "key"
// on the invertedObj object, instead of using the value of the variable key as the property name. 
// This results in incorrect keys in the output object.


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
test("invert swaps keys and values in the object", () => {
    const input = { a: 1, b: 2 };
    const expectedOutput = { "1": "a", "2": "b" };
    const result = invert(input);
    expect(result).toEqual(expectedOutput);
});

test("invert handles single key-value pair", () => {
    const input = { a: 1 };
    const expectedOutput = { "1": "a" };
    const result = invert(input)
    expect(result).toEqual(expectedOutput);
});
test("invert handles empty object", () => {
    const input = {};
    const expectedOutput = {};
    const result = invert(input);
    expect(result).toEqual(expectedOutput);
});

test("invert handles multiple key-value pairs", () => {
    const input = { x: 10, y: 20, z: 30 };
    const expectedOutput = { "10": "x", "20": "y", "30": "z" };
    const result = invert(input);
    expect(result).toEqual(expectedOutput);
});