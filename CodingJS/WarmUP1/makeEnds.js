// Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

// Examples

// makeEnds([1, 2, 3]) → 1,3
// makeEnds([1, 2, 3, 4]) → 1,4
// makeEnds([7, 4, 6, 2]) → 7,2

function makeEnds(nums){
    let firstNums = nums[0];
    let lastNums = nums[nums.length-1]
    
    return [firstNums,lastNums]
  }

  //by enclosing the varibles in brackets and a comma i was able to get the exact answer i wanted