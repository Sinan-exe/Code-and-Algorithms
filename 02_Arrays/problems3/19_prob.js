function singleNumber(nums) {
  let map = new Map();
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(singleNumber([1]));
