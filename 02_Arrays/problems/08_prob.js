// leetcode problem 9

function palindrome(x) {
  let s = x.toString();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(palindrome(12321));
