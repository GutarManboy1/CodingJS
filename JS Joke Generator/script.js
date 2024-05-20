const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

// remember to use an api you declare it in a url like Above
// then fetch
// then have the data made into a json which is a method

let getJoke = () => {
  jokeContainer.classList.remove("fade")
  fetch(url)
    .then(data => data.json())
    .then(item => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click", getJoke);
getJoke();
