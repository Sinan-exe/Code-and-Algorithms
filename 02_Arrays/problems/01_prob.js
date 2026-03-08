/* Implement a function createOddNumbersArray(n) that takes a positive integer n and returns an array containing the first n odd numbers.

Example: createOddNumbersArray(5) should return [1, 3, 5, 7, 9]. */

function createOddNumbersArray(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

console.log(createOddNumbersArray(5));
