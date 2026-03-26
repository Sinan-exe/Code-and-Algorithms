function majorityElement(nums) {
  let map = new Map();
  let result = [];
  let n = nums.length;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value > n / 3) {
      result.push(key);
    }
  }
  return result;
}

console.log(majorityElement([2, 2]));
