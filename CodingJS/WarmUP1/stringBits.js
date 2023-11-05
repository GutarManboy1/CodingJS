// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// Examples

// stringBits('Hello') → Hlo
// stringBits('Hi') → H
// stringBits('Heeololeo') → Hello

function stringBits(str){
    return str.split('').filter((c, i) => (i + 1) % 2 !== 0).join('');
  }

  //first split the string
  //next filter the character and index
  //index plus 1 divided by 2 does not equal zero
  //finally join the string back together again