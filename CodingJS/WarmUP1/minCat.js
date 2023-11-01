// Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

// Examples

// minCat('Hello', 'Hi') → loHi
// minCat('Hello', 'java') → ellojava
// minCat('java', 'Hello') → javaello

function minCat(a, b){
    if(a.length == b.length){
      return a.concat(b)
    }
    
    if(a.length > b.length){
      let differ = a.length - b.length
      return a.substring(differ)+b
       }
    
    if(a.length < b.length){
      let differ = b.length - a.length
      return a+b.substring(differ)
       }
  }

  //i didnt know that you could leave a if statement as is and not have to you else.