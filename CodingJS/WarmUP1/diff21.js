// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// Examples

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

function diff21(n){
    const dif = Math.abs(n - 21);
      return n > 21 ? 2 * dif : dif;
  }

  //absolute difference is the space between two intergers. ex 19 -21 would be 2. if n  were greater than 21 the dif would get doubled in this problem//