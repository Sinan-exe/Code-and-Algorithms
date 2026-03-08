/* Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.

Example: reverseArray([1, 2, 3, 4]) should return [4, 3, 2, 1]. */

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4]));

// another way of doing using built-in function
function reverseArray(arr) {
  let reversed = arr.reverse();
  return reversed;
}
