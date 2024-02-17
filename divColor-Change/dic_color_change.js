// change div theme color.
var counter = 0;
function changeTheme() {
  const colors = ["red", "green", "black"];

  if (counter < 3) {
    document.getElementById("contents").style.backgroundColor = colors[counter];
    counter++;
  } else {
    counter = 0;
  }
  console.log(counter);
}
