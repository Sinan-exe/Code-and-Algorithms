function difference(s, t) {
  let map = new Map();
  let extraChar = "";
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.get(char) > 0) {
      extraChar = char;
    }
    map.set(char, map.get(char) - 1);
  }

  return extraChar;
}

console.log(difference("", "y"));
