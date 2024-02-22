let showSlider = document.getElementById("showslider");

const images = [
  "assets/image1.jpeg",
  "assets/image2.png",
  "assets/image3.jpeg",
  "assets/image4.jpeg",
];

let i = 0;

function sliderShow() {
  console.log("log");
  showSlider.setAttribute("src", images[i]);
  setTimeout(function () {
    sliderShow();
  }, 2000);
  i++;
  if (i === images.length) {
    i = 0;
  }
}

sliderShow();
