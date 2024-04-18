const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

//displays notes
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// keeps notes in storage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// once btn is clicked everything becomes visible
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img)
})

//deletes the note after the trash can is clicked and updates
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      }
    })
  }
})

//adds a line break to the notes
document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})
