// Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

// Examples

// endUp('Hello') → HeLLO
// endUp('hi there') → hi thERE
// endUp('hi') → HI

function endUp(str){
    return str.substring(0,str.length -3)+ str.substring(str.length-3).toUpperCase()
      }

      //cut a string from 0 to up to the last 3 in reverse order characters
      // then add another substring of the last 3 characters from the end in upper case to the first string.

      // you can put in the str.length in the params of the substring! 