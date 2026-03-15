function evenDigit(nums) {
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = String(nums[i]).length;
    if (count % 2 === 0) {
      value += 1;
    }
  }

  return value;
}

console.log(evenDigit([555, 901, 482, 1771]));
