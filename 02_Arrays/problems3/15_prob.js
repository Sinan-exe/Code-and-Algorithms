function topFrequent(nums, k) {
  let map = new Map();

  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let arr = Array.from(map.entries());
  arr.sort((a, b) => b[1] - a[1]);

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }

  return result;
}

console.log(topFrequent([1, 1, 1, 2, 2, 3], 2));
