// Description:
// In this Kata, you need to create an calculator out of an array input.

// Example: evaluate(['10', '+', '20', '*','3']) // Returns 70 

// For an case where expretion is not having the correct or valid input then it should return undefined.

// evaluate(['10', '+', '20', '*','3', '*']) // Returns undefined 

// evaluate(['+', '20', '*','3']) // Returns undefined 

// evaluate(['10', '20', '*','3']) // Returns undefined 

// Supported operations

// Only plus(+) and multiply(*) binary operators Cosider priority of plus and multiply. 10 + 20 * 3 should return 70 not 90 i.e 10 + (20 * 3) not (10 + 20) * 3
// Note: You could not able to use the eval function for this.
    
array = ['10', '+', '20', '*','3', '+', '30'];


function evaluate(arr) {
    // let arr = array.slice(); // create a copy to avoid mutating the original array
    if (arr.length < 3 || arr[0] === "+" || arr[0] === "*" ||
        arr[arr.length - 1] === "+" || arr[arr.length - 1] === "*") {
        return undefined;
    }
    else {
        for (let i = 0; i < arr.length; i += 2) {
            if (isNaN(Number(arr[i]))) return undefined;
        }
        while (arr.includes('*')) {
            let index = arr.indexOf('*');
            let product = Number(arr[index - 1]) * Number(arr[index + 1]);
            arr.splice(index - 1, 3, product.toString());
        }
        while (arr.includes('+')) {
            let index = arr.indexOf('+');
            let sum = Number(arr[index - 1]) + Number(arr[index + 1]);
            arr.splice(index - 1, 3, sum.toString());
        }
      return Number(arr[0]);
      }
}
evaluate(array);


let sortArray = (value) => {
  return String(value)
    .split('')
    .sort((a, b) => a - b)
    .join('');
}
console.log(sortArray(143526));
