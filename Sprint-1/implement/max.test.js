/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");
it("Given an empty array, returns -Infinity", () => {
    const array = [];
    const result = findMax(array);
    expect(result).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
it("Given an array with one number, returns that number", () => {
    const array = [12];
    const result = findMax(array);
    expect(result).toBe(12);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
it("Given an array with positive and negative numbers, returns largest number", () => {
    const array = [4456, -234];
    const result = findMax(array);
    expect(result).toBe(4456);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
it("Given an array with negative numbers, returns largest number", () => {
    const array = [-4456, -234, -5];
    const result = findMax(array);
    expect(result).toBe(array[2]);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
it("Given an array with decimal numbers, returns largest number", () => {
    const array = [12.22, 45.67, 66.55, 1945.223, 5.678];
    const result = findMax(array);
    expect(result).toBe(array[3]);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
it("Given an array with non-number values, returns largest number, ignore non-numeric values", () => {
    const array = [30, 20, "a", 50, 100, -5];
    const result = findMax(array);
    expect(result).toBe(array[4]);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
it("Given an array with only non-number values, returns NaN", () => {
    const array = ["a", {}, null, undefined];
    const result = findMax(array);
    expect(Number.isNaN(result)).toBe(true);
});