function printMessage() {
  let message = document.getElementById("input").value;
  document.getElementById("message").innerHTML = message;

  let reset = document.getElementById("input");
  reset.value = null;
}
