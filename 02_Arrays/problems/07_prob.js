// Leetcode Problem number 27

function removeElements(arr, val) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[k] = arr[i];
      k++;
    }
  }
  return k;
}

console.log(removeElements([3, 2, 2, 3], 3));
