/* Minimum and Maximum
Implement a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.

Example: findMinMax([3, 5, 7, 2, 8]) should return { min: 2, max: 8 }.

 */

function findMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return { min, max };
}

// second type

function findMinMax(arr) {
  let result = {
    min: arr[0],
    max: arr[0],
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < result.min) {
      result.min = arr[i];
    }
    if (arr[i] > result.max) {
      result.max = arr[i];
    }
  }

  return result;
}

console.log(findMinMax([3, 5, 7, 2, 8]));
