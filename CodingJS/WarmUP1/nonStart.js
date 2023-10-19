// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava

function nonStart(a, b){
    let a = a.slice(1);
    let b = b.slice(1);
    return a.concat(b)
  }

  //remember that a string starts at one. i was looking at this like an array with an index//
  //i only needed to slice of the first character of the string//