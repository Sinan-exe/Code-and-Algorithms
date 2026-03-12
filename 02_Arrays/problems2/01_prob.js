function moveZero(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      if (i !== j) {
        nums[i] = nums[j];
        nums[j] = 0;

        i++;
      }
    }
  }
  return nums;
}

console.log(moveZero([1]));
