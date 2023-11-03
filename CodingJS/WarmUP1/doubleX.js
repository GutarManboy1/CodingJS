// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// Examples

// doubleX('axxbb') → true
// doubleX('axaxax') → false
// doubleX('xxxxx') → true

function doubleX(str){
    let indexOfFirstX = str.indexOf('x')
    
    if (str[indexOfFirstX+1]=='x'){
      return true
        }else{
        return false
        }
  }