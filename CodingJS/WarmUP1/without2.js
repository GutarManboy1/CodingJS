// Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

// Examples

// without2('HelloHe') → lloHe
// without2('HelloHi') → HelloHi
// without2('Hi') →

function without2(str){
    if (str.length < 2){
      return str
        }
     
     if (str.substring(0,2) == str.slice(-2)){
         return str.slice(2);
         }
   
     return str
   
   }

   //another a-ha moment! as long as the return is within the function i can call it without having to set up a conditional. remember the difference between substring and slice

//    The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.



