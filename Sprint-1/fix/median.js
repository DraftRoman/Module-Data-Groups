// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let middleIndex = Math.floor(list.length / 2);
  let median = list[middleIndex];
  let elements = 0;
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      elements += 1;
      arr.push(list[i]);
    }
  }
  arr.sort((a, b) => b - a);
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2]) / 2;
  }
  else {
    return arr[Math.floor(arr.length / 2)];
  }
  
}
const array = ["banana", 5, 3, "apple", 1, 4, 2]
console.log(calculateMedian(array));
console.log(array);

module.exports = calculateMedian;
