function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    let j = nums.length - 1 - i;
    let left = i + 1;
    let right = j - 1;
    while (left < right) {
      let sum = nums[i] + nums[j] + nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right], nums[j]]);
        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}

console.log(fourSum([2, 2, 2, 2, 2], 8));
