function printMessage() {
  let message = document.getElementById("input").value;

  if (message === null || message === "") {
    document.getElementById("error-msg").innerHTML = "Please enter a value";
    document.getElementById("error-msg").style.color = "red";
    document.getElementById("error-msg").style.fontSize = 16;
    document.getElementById("message").innerHTML = "";
  } else {
    document.getElementById("message").innerHTML = message;
    document.getElementById("error-msg").innerHTML = "";
  }
  let reset = document.getElementById("input");
  reset.value = null;
}
