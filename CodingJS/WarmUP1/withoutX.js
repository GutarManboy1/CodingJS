// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

// Examples

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi

function withoutX(str){

  if(str[0]=="x"&& str[str.length-1]=="x"){
    return str.slice(1,str.length-1)
     }
 
  if(str[0]=="x"){
    return str.slice(1)
     }
  
  if(str[str.length-1]=="x"){
    return str.slice(0,str.length-1)
     }
  
    return str

}

//holy shit! you can't access the last index of an array with -1!  
//here's a work around str[str.length-1]