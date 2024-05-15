// here the color index is being set to 0
let index = 0;

function changeColors() {
  let colors = ["red", "pink", "yellow", "green", "blue", "purple", "gray", "magenta", "cyan", "seagreen"];

  // starting at 0 the style of the background is change in the index by one

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) {
    // if the index is more than the color array length from the last item it goes back to zero
    index = 0;
  }
}
