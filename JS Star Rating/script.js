const stars = document.querySelectorAll(".stars i");
// console.log(stars)

stars.forEach((star, index1) => {
  //add event listener for the triggered event
  star.addEventListener("click", () => {
    //loop through the stars list
    // console.log(index1);
    stars.forEach((star, index2) => {
      //add active class and remove with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});
