// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};
// we have to use address.anyProperty to access to that property, and not just number.
console.log(`My house number is ${address.houseNumber} on ${address.street} in ${address.city}, ${address.postcode}, ${address.country}.`);

// const profileData = {
//   firstName: "Francesco",
//   lastName: "Leoni",
//   age: 33,
// };



// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", "my"));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /dog/i;
// console.log(paragraph.replace(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"
// let query = "colour=blue&sort=newest";
// const obj = query
//   .split("&")
//   .map(pair => pair.split("=")).reduce((acc, [key, value]) => {
//     acc[key] = value;
//     return acc;
//   }, {});

// console.log(obj);