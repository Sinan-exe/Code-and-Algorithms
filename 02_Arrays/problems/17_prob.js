function runningSum(nums) {
  let sum = 0;
  return nums.map((num) => (sum += num));
}

console.log(runningSum([1, 2, 3, 4]));

// expected output:[1, 3, 6, 10]
