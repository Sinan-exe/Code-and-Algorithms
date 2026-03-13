function countUniqueValues(nums) {
  let i = 0;
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
