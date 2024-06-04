let button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.classList.add("active");

  setTimeout(() => {
    button.classList.remove("active");
    document.querySelector("i").classList.replace("fa-regular fa-cloud-arrow-down", "fa-solid fa-circle-check");
    document.querySelector(".button-text").innerText = "Completed";
  }, 6000);
});
