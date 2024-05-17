const messageInput = document.getElementById("message-input");

// in case i dont want to click on the submit button add an eventlistener on the input box
messageInput.addEventListener("keydown", function (event){
   if(event.key == "Enter") //if the event equals Enter it triggers the get message function
    getMessage();
})

function getMessage() {
  document.getElementById("message-output").innerHTML = messageInput.value;
  messageInput. value = "";
}
