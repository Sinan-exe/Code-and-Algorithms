// Given Two Strings, write a function to determine if the second string is the anagram of the first string. An Anagram is a word, phase, or name formed by rearranging the letter of another,such as cinema formed from iceman

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequency1 = {};
  let frequency2 = {};

  for (let char of str1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }
    if (frequency2[key] !== frequency1[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("aaz", "zza"));
