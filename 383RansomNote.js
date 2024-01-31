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


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.




// O: a boolean
// I: 2 strings
// C: see above
// E: if one or both inputs are empty

var canConstruct = function(ransomNote, magazine) {
  var ransom = {};
  var mag = {};

  for (var i = 0; i < ransomNote.length; i++) {
    if(ransom[ransomNote[i]]) {
      ransom[ransomNote[i]]++;
    } else {
      ransom[ransomNote[i]] = 1;
    }
  }

  for (var i = 0; i < magazine.length; i++) {
    if(mag[magazine[i]]) {
      mag[magazine[i]]++;
    } else {
      mag[magazine[i]] = 1;
    }
  }

  for (var key in ransom) {
    if (ransom[key] > mag[key] || mag[key] === undefined) {
      return false;
    }
  }

  return true;

};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));