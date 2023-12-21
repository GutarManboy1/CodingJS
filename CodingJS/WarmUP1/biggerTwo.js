// Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

// Examples

// biggerTwo([1, 2], [3, 4]) → 3,4
// biggerTwo([3, 4], [1, 2]) → 3,4
// biggerTwo([1, 1], [1, 2]) → 1,2

function biggerTwo(a, b){
 
  let sum = 0
  
  for(let i = 0; i < a.length; i++ ){
    sum += a[i]
  }
  
  for (let i = 0; i < b.length; i++){
    sum += b[i]
  }
  if(a[0]+a[1]==b[0]+b[1]){
    return a
     }
  
  if(a > b){
    return a
  }else
    return b
  } 