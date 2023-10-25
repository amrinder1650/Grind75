// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.




// O: a boolean determining whether the inputs are anagrams.
// I: two strings or phrases
// C: (look above)
// E: empty strings?

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var obj1 = {};
  var obj2 = {};

  for (var i = 0; i < s.length; i++) {
    obj1[s[i]] ? obj1[s[i]]++ : obj1[s[i]]=1;
  }

  for (var j = 0; j < t.length; j++) {
    obj2[t[j]] ? obj2[t[j]]++ : obj2[t[j]]=1;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (var key in obj1) {
    if (obj1[key] !== obj2[key]) {return false}
  }
  // for (var key in obj2) {
  //   if (obj2[key] !== obj1[key]) {return false}
  // }

  return true;
}



console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));