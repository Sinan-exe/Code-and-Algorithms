function firstOccurence(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let first = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return first;
}

function lastOccurence(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return last;
}

function sortedFrequency(nums, target) {
  let start = firstOccurence(nums, target);
  if (start === -1) return -1;
  let last = lastOccurence(nums, target);
  return last - start + 1;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
