// Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

// Examples

// equalIsNot('This is not') → false
// equalIsNot('This is notnot') → true
// equalIsNot('noisxxnotyynotxisi') → true

function equalIsNot(str){
    return str.match(/is/g).length === str.match(/not/g).length? true:false
  }

  // i didnt know that you could match and get the length at the same time