let selectField = document.getElementById('selectField');
let selectText = document.getElementById('selectText');
let options = document.getElementsByClassName('options');
let list = document.getElementById('list');
let arrowIcon = document.getElementById('arrowIcon')

// when you click on the select field this function starts
// it hides the field and toggle the rotate with a transition
selectField.onclick = function () {
  list.classList.toggle('hide');
  arrowIcon.classList.toggle("rotate");
}

// adding the above toggled features makes sure that it becomes part of the loop
// and happens automactically
for (options of options) {
  options.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrowIcon.classList.toggle("rotate");
  }

}
