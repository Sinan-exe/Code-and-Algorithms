function lengthOfLast(s) {
  let word = s.trim().split(" ");
  return word[word.length - 1].length;
}

console.log(lengthOfLast("luffy is still joyboy"));
