// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


// O: a boolean
// I: an array of numbers
// C: see above
// E: if the array is empty

var containsDuplicate = function(nums) {
  var obj = {};

    for (var i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {return true;} else {
            obj[nums[i]] = 1;
        }
    }

    return false;
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))