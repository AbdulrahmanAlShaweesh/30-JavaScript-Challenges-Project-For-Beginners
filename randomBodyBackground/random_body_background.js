let body = document.body.style;

const colors = ["red", "green", "blue", "black", "pink", "skyblue"];

function radomBodyBackground() {
  body.backgroundColor =
    colors[Math.floor(Math.random(0, colors.length + 1) * colors.length)];

  setTimeout(function () {
    radomBodyBackground();
  }, 2000);
  let x = Math.floor(Math.random(0, colors.length) * colors.length + 1);
  console.log(x);
}

radomBodyBackground();
