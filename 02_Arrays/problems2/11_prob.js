function containesDuplicate3(arr, indexDiff, valueDiff) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    for (let [num, index] of map) {
      if (
        Math.abs(index - i) <= indexDiff &&
        Math.abs(num - arr[i]) <= valueDiff
      ) {
        return true;
      }
    }

    map.set(arr[i], i);
  }
  return false;
}

console.log(containesDuplicate3([1, 2, 3, 1], 3, 0));

// this is O(n2) solution
