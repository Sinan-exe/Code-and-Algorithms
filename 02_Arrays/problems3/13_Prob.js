function intersect(nums1, nums2) {
  let map = new Map();
  let result = [];
  for (let num of nums1) {
    map[num] = map[num] + 1 || 1;
  }
  for (let num of nums2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }

  return result;
}
console.log(intersect([2, 1], [1, 1]));
