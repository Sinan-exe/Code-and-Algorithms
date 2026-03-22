function targetArray(nums, index) {
  let arr = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < nums.length) {
    arr.splice(index[p1], 0, nums[p2]);
    p1++;
    p2++;
  }

  return arr;
}

console.log(targetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
