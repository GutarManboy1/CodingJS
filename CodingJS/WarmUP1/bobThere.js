// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

// Examples

// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false

function bobThere(str){
    let counter=0;
    
    for(let i=0; i<str.length; i++){
      if(str.substring(i,i+1)=="b"&&
        str.slice(i+2,i+3)=="b"){
        counter++
         }
       }
     return counter>0
   }

   //return counter>0 produces a boolean based on 0, 1