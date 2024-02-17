// get password.
// create a boolean value with value of false.
// check if user click on hidden
// change bool value to true and hidden the password
var isHidden = false;

function hiddenPassword() {
  let pass = document.getElementById("password");

  pass.type === "text" ? (pass.type = "password") : (pass.type = "text");
  //   if (pass.type === "text") {
  //     pass.type = "password";
  //   } else {
  //     pass.type = "text";
  //   }
}
