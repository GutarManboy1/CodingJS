// Given an int array length 2, return true if it does not contain a 2 or 3.

// Examples

// no23([4, 5]) → true
// no23([4, 2]) → false
// no23([3, 5]) → false

function no23(nums){
    if(nums.includes(2) || nums.includes(3)){
      return false
       }else{
       return true
       }
  }