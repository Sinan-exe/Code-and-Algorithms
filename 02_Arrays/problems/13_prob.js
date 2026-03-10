function majorityElement(nums) {
  let elements = {};

  for (let num of nums) {
    elements[num] = elements[num] ? elements[num] + 1 : 1;
  }

  let majority = 0;
  let maj = 0;
  for (let key in elements) {
    if (elements[key] > majority) {
      majority = elements[key];
      maj = key;
    }
  }

  return maj;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// another approach Boyer-moor majority voting

function maajorityElement(nums) {
  let candidate = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }
  return candidate;
}

// O(N): time complexity O(1):Space Complexity.
