// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

// Examples

// lastTwo('coding') → codign
// lastTwo('cat') → cta
// lastTwo('ab') → ba

function lastTwo(str){
  
    return str.slice(0,str.length-2)+str.slice(-1)+str.slice(-2,-1)
  }