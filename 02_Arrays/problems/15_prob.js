// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.
// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function ransomNote(ransom, magazine) {
  let letters = new Map();

  for (let char of magazine) {
    letters.set(char, (letters.get(char) || 0) + 1);
  }

  for (let char of ransom) {
    if (!letters.get(char)) {
      return false;
    }
    letters.set(char, letters.get(char) - 1);
  }

  return true;
}

console.log(ransomNote("a", "b"));
