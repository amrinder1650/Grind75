// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.



// O: boolean determining whether parentheses are valid
// I: string of parentheses
// C: (look above)
// E: n/a given the constraints

var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  if (s[0] === ']' || s[0] === '}' || s[0] === ')') { return false; }
  if (s[s.length - 1] === '[' || s[s.length - 1] === '{' || s[s.length - 1] === '(') { return false; }

  var stack = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
      stack.push(s[i]);
    }

    if (s[i] === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    }
    if (s[i] === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    }
    if (s[i] === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    }
  }

  return stack.length === 0;
}


console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));