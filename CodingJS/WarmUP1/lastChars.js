// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

// Examples

// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@

function lastChars(a, b){
    if(a==""&&b==""){
      return ("@"+"@");
    }else if (b == ""){
      return  a.slice(0,1)+"@";
    }else if (a == ""){
      return "@"+b.slice(-1);
    }else{
      return (a.slice(0,1).concat(b.slice(-1));
    }
}