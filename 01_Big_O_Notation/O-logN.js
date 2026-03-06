function findElement(arr, n) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(findElement([1, 2, 3, 4, 5, 6, 7, 8], 1));

findElement([1, 2, 3, 4, 5, 6, 7, 8], 1);

// this function keeps on dividing the entire funtion until it gets solution so the time complexity in here is described as O(log N) because log 8 with base 2 = 3. here it takes 3 operations.
