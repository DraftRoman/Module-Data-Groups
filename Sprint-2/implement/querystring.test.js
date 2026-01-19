// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});
test("parses empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});
test("parses querystring with multiple values", () => {
  expect(parseQueryString("name=John&age=30&city=NewYork")).toEqual({
    "name": "John",
    "age": "30",
    "city": "NewYork",
  });
});
test("parses querystring with missing value", () => {
  expect(parseQueryString("name=John&age=&city=NewYork")).toEqual({
    "name": "John",
    "age": "",
    "city": "NewYork",
  });
});
test("parses querystring with missing key", () => {
  expect(parseQueryString("=John&age=30&city=NewYork")).toEqual({
    "": "John",
    "age": "30",
    "city": "NewYork",
  });
});
test("parses querystring with repeated keys", () => {
  expect(parseQueryString("name=John&age=30&name=Jane")).toEqual({
    "name": "Jane",
    "age": "30",
  });
});
test("parses querystring with spaces around equals sign", () => {
  expect(parseQueryString("name = John & age = 30")).toEqual({
    "name ": " John ",
    " age ": " 30",
  });
});
test("parses querystring with empty key and value", () => {
  expect(parseQueryString("=&=")).toEqual({
    "": "",
  });
});

test('parses with extra & characters', () => {
  expect(parseQueryString("name=John&&age=30&city=NewYork&&")).toEqual({
    "name": "John", 
    "age": "30",
    "city": "NewYork",
  });
});
