// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

// Examples

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str){
  
    if(str.length <2){
      return false
       }
    
    if(str.substring(0,2)==str.substring(str.length-2)){
      return true
       }else{
       return false
       }
   
  }