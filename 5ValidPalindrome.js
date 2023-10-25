// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.



// O: a boolean determining whether the input is a palindrome or not
// I: a string of printable ASCII characters.
// C: (look above)
// E: if input is empty

var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  var inner = function(s) {
    if(s.length === 0) {
      return true;
    }

    if(s[0] === s[s.length - 1]) {
      return inner(s.slice(1, s.length - 1));
    } else {
      return false;
    }
  }

  return inner(s);
}


console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));