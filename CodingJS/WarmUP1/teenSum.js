// Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

// Examples

// teenSum(3, 4) → 7
// teenSum(10, 13) → 19
// teenSum(13, 2) → 19

function teenSum(a, b){
 if ((a >=13 && a <= 19)|| (b>=13 && b<=19)){
   return 19
 }else ((a <=12 && a >= 20)|| (b<=12 && b>=20)){
   return (a+b)
 }
}