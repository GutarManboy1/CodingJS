//The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

// Examples

// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation){
  if (weekday && vacation){
    return true
  }else if (!weekday || vacation){
    return true
  }else (!weekday && !vacation){
    return false
  }
  
  sleepIn (weekday, vacation)