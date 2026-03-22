function identical(nums) {
  let output = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let left = nums.length - 1;
    while (left > i) {
      if (nums[i] === nums[left]) {
        output++;
      }
      left--;
    }
  }

  return output;
}

console.log(identical([1, 2, 3]));
