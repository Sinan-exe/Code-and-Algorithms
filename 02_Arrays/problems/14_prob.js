function sameFrequency(num1, num2) {
  if (String(num1).length !== String(num2).length) return false;

  let frequency = {};
  for (let char of String(num1)) {
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
  }

  for (let char of String(num2)) {
    if (!frequency[char]) {
      return false;
    }
    frequency[char] - 1;
  }

  return true;
}

console.log(sameFrequency(182, 281));
