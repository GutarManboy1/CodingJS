// if you want to add icons into a message like here it must be in single quotes.
let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i>You got it, Boss!';
let errorMsg = '<i class="fa-solid fa-square-xmark"></i>You done fucked up!';
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i>Uhhh, what you doing?';

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes('error')) {
    toast.classList.add('error');
  }
  if (msg.includes('invalid')) {
    toast.classList.add('invalid');
  }
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
