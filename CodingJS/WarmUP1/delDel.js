// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

// Examples

// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel

function delDel(str){
    if (str.slice(1,4)=='del'){
      return str.charAt(0)+str.slice(4)
        }else{
        return str
        }
  }

  //first time using charAt()
//   The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

// charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt() and String.fromCodePoint().
// just returns the character at that index