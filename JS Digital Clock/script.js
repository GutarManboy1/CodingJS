let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  //js built in date function
  let currentTime = new Date();


  //gethours...are built in js functions being stored in the innerhtml variable
  hrs.innerHTML = currentTime.getHours()<10? "0":"" + currentTime.getHours();
  min.innerHTML = currentTime.getMinutes()<10? "0":"" + currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds()<10? "0":"" + currentTime.getSeconds();
}, 1000);


// console.log(currentTime.getMinutes());
