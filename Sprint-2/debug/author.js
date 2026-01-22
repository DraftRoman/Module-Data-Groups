// Predict and explain first...
// I think this program will print in the console the unknown error because
// we tried to work with the object as an iterable, but objects are not working
// like that. 
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
console.log(author); // this will print the whole object 
console.log(Object.values(author));  // this is the way to get all value of on object. We have two more methods for getting keys and entries. 
for (const value of Object.values(author)) { // for (const value of author) is incorrect because author is not iterable
  console.log(value);
}
