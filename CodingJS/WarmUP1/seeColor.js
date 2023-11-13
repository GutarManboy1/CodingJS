// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

// Examples

// seeColor('redxx') → red
// seeColor('xxred') →
// seeColor('blueTimes') → blue

function seeColor(str){
    if (str.substring(0,4) == 'blue'){
      return str.slice(0,4)
        }else if (str.substring(0,3)== 'red'){
          return str.slice(0,3)
         }else{
         return ''
         } 
   }