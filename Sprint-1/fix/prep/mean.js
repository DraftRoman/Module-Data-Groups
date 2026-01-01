function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list[middleIndex];

  return median;
}
function calculateMean(list) {
  let total = 0;
  for (const item of list) {
    total += item;
    }
    return total / list.length;
}

const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
const mean = calculateMean(salaries);
module.exports = { calculateMedian, calculateMean };
console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
console.log(typeof salaries );

const list = [10, 20, 30];
console.log(typeof list);
if (typeof list === "object") {
  console.log("Object");
}
else {console.log("not object")
}
const copy = list; // This creates a reference, not a copy, so both variables point to the same array in memory.
// to avoid mutating the original array, we should create a shallow copy:
// const copy = list.slice();
// or using spread operator:
// const copy = [...list];
copy.push(60, 70);

console.log(list);
console.log(copy);

// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr) {
  if (arr.length < 2) return [...arr];

  const result = [...arr];
  [result[0], result[result.length - 1]] = [
    result[result.length - 1],
    result[0],
  ];

  return result;
}

const myArray = [5, 2, 3, 4, 1];
// console.log(swapFirstAndLast(myArray));
// console.log(myArray); // what output should we expect?
// const anotherArray = "!ello WorldH";
// console.log(swapFirstAndLast(anotherArray).join(""));