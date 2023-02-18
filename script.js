var check = function() {
  if (document.getElementById('password').value !== 
  document.getElementById('confirm-password').value) {
    document.getElementById('password').classList.add("error");
    document.getElementById('confirm-password').classList.add("error");
    document.querySelector('.error-output').innerText = "*Passwords do not match";
  } else {
    document.getElementById('password').classList.remove("error");
    document.getElementById('confirm-password').classList.remove("error");
    document.querySelector('.error-output').innerText = "";
  }
}