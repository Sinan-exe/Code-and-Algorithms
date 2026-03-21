function minSortedArray(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < nums[right]) {
      return nums[left];
    }
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

console.log(minSortedArray([5, 6, 7, 1, 2, 3, 4]));
