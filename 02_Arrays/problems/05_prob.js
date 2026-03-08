/* Sum of Array Elements
Write a function sumArray that takes an array of numbers and returns the sum of all elements.

Example: sumArray([5, 10, 15]) should return 30. */

function sumArray(arr) {
  let result = arr.reduce((acc, cur) => acc + cur, 0);
  return result;
}

// without inbuilt function
function sumArray(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
  }

  return acc;
}
