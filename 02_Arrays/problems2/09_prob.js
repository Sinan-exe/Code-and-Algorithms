function reverseVowel(s) {
  let vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let arr = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !vowel.has(arr[left])) {
      left++;
    }
    while (left < right && !vowel.has(arr[right])) {
      right--;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseVowel("IceCreAm"));

// ["leotcede"]
