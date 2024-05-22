//all the colors associated to the poke type
const typeColor = {
  bug: "#0fa3b1",
  dragon: "#3a86ff",
  electric: "#ffbe0b",
  fairy: "#fb6f92",
  fighting: "#9e2a2b",
  fire: "#d62828",
  flying: "#80ed99",
  grass: "#06d6a0",
  ground: "#9c6644",
  ghost: "#343a40",
  ice: "#90e0ef",
  normal: "#ddb892",
  poisoin: " #480ca8",
  psychic: "#f7a072",
  rock: "#7f5539",
  water: "#0077b6"
};

//declare all the variable
const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

//generate a rando poke from 1 to 150
let getPokeData = () => {
  let id = Math.floor(Math.random() * 150) + 1;
  // console.log(id)

  //combine the pokeapi with pokemon id
  const finalUrl = url + id;
  // console.log(finalUrl);
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });
}

//generate card

let generateCard = (data) => {
  //get data and put into variables

  //this console log lets me see all the data and then i can assign it to the variables below
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1); //this lets me capitalize only the first letter
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  //set color to data types
  const themeColor = typeColor[data.types[0].type.name];


  //here i could of assigned all the innerHtmls but with this object literal i can just copy and past
  card.innerHTML = `
    <p class="hp">
        <span>HP</span>${hp}
      </p>
      <img src=${imgSrc}>
      <h2 class="poke-name">${pokeName}</h2>
      <div class="types">
      </div>
      <div class="stats">
        <div>
          <h3>${statAttack}</h3>
          <p>Attack</p>
        </div>
        <div>
          <h3>${statDefense}</h3>
          <p>Defense</p>
        </div>
        <div>
          <h3>${statSpeed}</h3>
          <p>Speed</p>
        </div>
      </div>`;

  appendTypes(data.types);
  styleCard(themeColor);
};
//this code above creates the card

//this code below adds color to the types
let appendTypes = (types) => {

  types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".types").appendChild(span);
  })
};


//this code gives the color to the semicirls and the spans
let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types span").forEach((typeColor) => {
    typeColor.style.background = color;
  });
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
