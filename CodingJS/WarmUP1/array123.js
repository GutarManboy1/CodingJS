// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.


function array123(nums){
  return nums.match(/1,2,3/)?true:false;
}
