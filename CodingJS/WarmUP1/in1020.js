// Given 2 int values, return true if either of them is in the range 10..20 inclusive.

// Examples

// in1020(12, 99) → true
// in1020(21, 12) → true
// in1020(8, 99) → false

function in1020(a, b){
    return (a>=10 && a<=20)||(b<=20 && b>=10)? true:false; 
  }