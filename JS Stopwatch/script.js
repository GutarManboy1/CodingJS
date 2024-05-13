let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
// timer starts off as null
let timer = null;

//this function increases the seconds by one once it reaches 60 it becomes 0
//next it increases the minutes by one; once it reaches 60 it becomes 0
//next it increases hours by one and so on and so forth until infinity.
function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  //if h, m ,s are less than 10 it adds a zero before it.
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}
function watchStart() {
  if (timer!== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
