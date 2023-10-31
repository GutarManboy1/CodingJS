// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

// Examples

// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true

function sameFirstLast(nums){
    if (nums.length >= 1 && nums[0] == nums[nums.length-1]){
    return true;
    }else {
     return false;
    }   
   }

   //solved it! the the nums.length access the last number of the array and not the nums[-1] which would have been negative one! such an easy question if had known that!

// Test → Expected	Yours	Result
// sameFirstLast([1, 2, 3]) → false	true	✖	
// sameFirstLast([1, 2, 3, 1]) → true	true	✔	
// sameFirstLast([1, 2, 1]) → true	true	✔	
// sameFirstLast([7]) → true	true	✔	
// sameFirstLast([]) → false	true	✖	
// sameFirstLast([1, 2, 3, 4, 5, 1]) → true	true	✔	
// sameFirstLast([1, 2, 3, 4, 5, 13]) → false	true	✖	
// sameFirstLast([13, 2, 3, 4, 5, 13]) → true	true	✔	
// sameFirstLast([7, 7]) → true	true	✔	
