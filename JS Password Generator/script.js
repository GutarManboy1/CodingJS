const passwordBox = document.getElementById("password");
//keeps the length to 12 chars
const length = 12;
//all the acceptable chars
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}{[]<>/-=";
//this variable brings all the above as allChars varible
const allChars = upperCase + lowerCase + number + symbol;


//this function only creates 4 chars but we need 12 total
function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random()* upperCase.length)];
  password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
  password += number[Math.floor(Math.random()* number.length)];
  password += symbol[Math.floor(Math.random()* symbol.length)];

  //here it continues adding from allChars till it reaches 12
  while (length > password.length) {
    password += allChars[Math.floor(Math.random()* allChars.length)];
  }
  //here the password is saved in the box.value
  passwordBox.value = password;
}

//this function copies the password with select method
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  console.log(copyPassword)
}
