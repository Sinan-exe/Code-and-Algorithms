function containesDuplicate(nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let result = Math.abs(map.get(nums[i]) - i);
      if (result <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
}

console.log(containesDuplicate([1, 0, 1, 1], 1));
