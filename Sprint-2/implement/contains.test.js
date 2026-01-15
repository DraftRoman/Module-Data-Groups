const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'
*/
test("contains returns true for existing property", () => {
    const object = { a: 1, b: 2 };
    const result = contains(object, 'a');
    expect(result).toBe(true);});

/* E.g. contains({a: 1, b: 2}, 'c')  returns false
as the object doesn't contains a key of 'c'
*/

test("contains returns false for non-existing property", () => {
    const object = { a: 1, b: 2 };
    const result = contains(object, 'c');
    expect(result).toBe(false);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains returns false for non-object input", () => {
    expect(contains(null, 'a')).toBe(false);
    expect(contains(42, 'a')).toBe(false);
    expect(contains('string', 'a')).toBe(false);
    expect(contains([], 'a')).toBe(false);
});

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
    const object = {};
    expect(contains(object, 'a')).toBe(false);
});

test("Given invalid parameters like an array", () => {
    const object = [2, 56, 'a', 'b', [], null];
    const result = contains(object, []);
    expect(contains(result)).toBe(false);
});
