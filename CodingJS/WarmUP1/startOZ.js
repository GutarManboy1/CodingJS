// Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

// Examples

// startOz('ozymandias') → oz
// startOz('bzoo') → z
// startOz('oxx') → o

function startOz(str){
    if(str.length <= 2){
      return str
    }
     
    if (str.includes('oz')){
      return str.substring(0,2)
        }
     
     if (str.charAt(0)== 'o'){
       return str.substring(0,1)
         }
     
     if (str.charAt(1)== 'z'){
       return str.substring(1,2)
         }
         
     return ('')
   } 