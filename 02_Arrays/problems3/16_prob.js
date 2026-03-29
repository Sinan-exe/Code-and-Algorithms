// wwekly contest 29th March

function firstMatch(s) {
  let n = s.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] === s[n - i - 1]) {
      return i;
    }
  }
  return -1;
}

console.log(firstMatch("abcdab"));
