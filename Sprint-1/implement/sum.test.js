/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");
// Acceptance Criteria:
// Given an empty array
// When passed to the sum function
// Then it should return 0
it("Given an empty array, returns 0", () => {
    const array = [];
    const result = sum(array);
    expect(result).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
it("Given an array, with one number", () => {
    const array = [5];
    const result = sum(array);
    expect(result).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
it("Given an array, with negative numbers", () => {
    const array = [-4, -2234, 23.24, 45, 25];
    const result = sum(array);
    expect(result).toBe(-2144.76);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
it("Given an array, with decimal/float numbers", () => {
    const array = [-4, -2234, 23.24, 45, 25];
    const result = sum(array);
    expect(result).toBe(-2144.76);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

it("Given an array, with decimal/float numbers", () => {
    const array = ['b', 'a', 23.24, 45, 25];
    const result = sum(array);
    expect(result).toBe(93.24);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
it("Given an array, with only non-number values", () => {
    const array = ['b', 'a', 'ddb', null, undefined];
    const result = sum(array);
    expect(result).toBe(null);
});