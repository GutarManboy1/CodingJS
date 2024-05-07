let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

pass.addEventListener('input', () => {
  if (pass.value.length > 0) {
    msg.style.display = "block"; //display block makes the message visible
  }
  else {
    msg.style.display = "none"; //obviously the opposite
  }
  if (pass.value.length < 4) {
    str.innerHTML = "WEAK!"
    //this is brand new to me and i didnt know i could do this.
    pass.style.borderColor = "#bc4749";
    msg.style.color = "#bc4749";
  }
  else if (pass.value.length >= 4 && pass.value.length <= 8) {
    str.innerHTML = "MORE PASSION!"
    pass.style.borderColor = "#f6bd60";
    msg.style.color = "#f6bd60";
  }
  else if (pass.value.length >= 8) {
    str.innerHTML = "OVER 9000!🦾!"
    pass.style.borderColor = "green";
    msg.style.color = "green";
  }
})
