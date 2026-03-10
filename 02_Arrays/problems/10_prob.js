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

// console.log(validAnagram("aaz", "zza"));

function vaalidAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    if (!lookup[str2[i]]) {
      return false;
    }
    lookup[str2[i]]--;
  }

  return true;
}

console.log(vaalidAnagram("aaz", "zza"));
