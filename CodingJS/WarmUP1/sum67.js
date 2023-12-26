// Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

// Examples

// sum67([1, 2, 2]) → 5
// sum67([1, 2, 2, 6, 99, 99, 7]) → 5
// sum67([1, 1, 6, 7, 2]) → 4

function sum67(nums){
  
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++){
      if(nums[i]!==6){
          sum+= nums[i]
         }     //this part makes sense to me. if nums[i] isn't 6 return sum
      
      if(nums[i]==6){
        for(let j=i; j< nums.length; j++){  //first time using this idea
          if(nums[j]==7){
            i=j  //i assume from a range of 6 and the numbers between to 7 it breaks
            break
            }
         }
      } 
    }
    return sum
  }

  //this is my first time using the break command