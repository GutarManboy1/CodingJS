const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Big Nerd";
  }, 0);
  setTimeout(() => {
    text.textContent = "Dreamer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Fighter";
  }, 8000);
}
textLoad();
setInterval(textLoad, 12000);
// all of this is new to me
