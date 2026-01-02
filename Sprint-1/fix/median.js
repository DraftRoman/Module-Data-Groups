// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let elements = 0;
  let arr = [];
  if (!Array.isArray(list))
    return null;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      elements += 1;
      arr.push(list[i]);
    }
  }
  if (elements === 0)
    return null;
  
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
  }
  
  if (arr.length % 2 === 0)
    return (arr[arr.length / 2 ] + arr[arr.length / 2 - 1]) / 2;
  else
    return arr[Math.floor(arr.length / 2)];
  
}
const array = [1, 2, 3, 4, "apple", 6];
console.log(calculateMedian(array));
// console.log(array);

module.exports = calculateMedian;
