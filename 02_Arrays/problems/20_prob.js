function goodPairs(nums) {
  let count = 0;
  let map = {};

  for (let num of nums) {
    if (map[num]) {
      count += map[num];
    }
    map[num] = (map[num] || 0) + 1;
  }

  return count;
}

console.log(goodPairs([1, 1, 1, 1]));

// expected Output : 4
