let arr = [1, 2, 3, 4, 5, 8];
function findArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findArray(arr, 10));

// This is the one of the way to search the array. linear search

// indexOf
let arr1 = [1, 2, 3, 4, 5, 6];
const result = arr1.indexOf(6);
console.log(result);

// find
let arr2 = [2, 3, 4, 7, 9];
const result2 = arr2.find(function (element) {
  return element > 5;
});

console.log(result2);
