function firstEle(nums, target) {
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

function lastEle(nums, target) {
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

function firstNdLast(nums, target) {
  let first = firstEle(nums, target);
  if (first === -1) return [-1, -1];

  let last = lastEle(nums, target);
  return [first, last];
}

console.log(firstNdLast([5, 7, 7, 8, 8, 10], 8));
