const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

it("Given an empty array, it returns an empty array", () => {
    const arr = [];
    const result = dedupe(arr);
    expect(result).toEqual([]);
});


// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
it("Given an array with duplicates, it returns without duplicates", () => {
    const arr = ['a', 'b', 'c', 4, 4, 'c', 'b', 'a', 5, 4];
    const result = dedupe(arr);
    expect(result).toEqual(['a', 'b', 'c', 4, 5]);
});


// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
it("Given an array without duplicates, the same array", () => {
    const arr = ['a', 'bc', 'c', 45, 5, 454];
    const result = dedupe(arr);
    expect(result).toEqual(['a', 'bc', 'c', 45, 5, 454]);
});
it("Given an array, with null and undefined, it returns without duplicates", () => {
    const arr = ['b', null, 'a', 'ddb', null, null, undefined, undefined];
    const result = dedupe(arr);
    expect(result).toEqual(['b', null, 'a', 'ddb', undefined]);
});

it("Given an array, didn't mutate", () => {
    const arr = ['b', null, 'a', 'ddb', 55, 145, 'array', 'Hello!', 145, 'Hello!'];
    const result = dedupe(arr);
    expect(arr).toEqual(['b', null, 'a', 'ddb', 55, 145, 'array', 'Hello!', 145, 'Hello!']);
});
