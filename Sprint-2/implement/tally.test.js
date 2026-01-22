const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("tally returns an object with counts for each unique item", () => {
    const array = ['a', 'b', 'c']
    const target = { a: 1, b: 1, c: 1 };
    const result = tally(array);
    expect(result).toEqual(target);
});
// Given an empty array
// When passed to tally
// Then it should return an empty object
test("Tally on an empty array returns an empty object", () => {
    const array = []
    const target = {};
    const result = tally(array);
    expect(result).toEqual(target);
});
// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally returns an object with counts for each unique item", () => {
    const array = ['a', 'a', 'b', 'c', 'c'];
    const target = { a: 2, b: 1, c: 2 };
    const result = tally(array);
    expect(result).toEqual(target);
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally throws an error when passed a string", () => {
    const array = "a";
    expect(() => tally(array)).toThrow();
});