function shuffleArray(nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
}

console.log(shuffleArray([2, 5, 1, 3, 4, 7], 3));

// expected output: [2, 3, 5, 4, 1, 7]
