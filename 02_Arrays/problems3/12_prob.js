function thirdMaximum(nums) {
  let set = [...new Set(nums)];
  set.sort((a, b) => b - a);
  return set.length >= 3 ? set[2] : set[0];
}
console.log(thirdMaximum([1, 2, 2, 5, 3, 5]));
