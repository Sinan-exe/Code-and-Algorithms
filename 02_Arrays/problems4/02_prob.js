function reverseString(s, k) {
  let arr = s.split("");
  for (let i = 0; i < s.length - 1; i += k + 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr.join("");
}

console.log(reverseString("abcd", 2));

// ("a b c d e f g");

// let a = 10;
// let b = 20;

// [[a, b]] = [[b, a]];

// console.log(a);
// console.log(b);
