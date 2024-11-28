// Change css style by element id, set display: none
function cssDisplayNone() {
  document.getElementById("example1").style.display = "none";
}

// Remove element by id using DOM function
function jsRemove() {
  document.getElementById("example2").remove();
}

// Add class with visibility hidden
function cssHidden() {
  document.getElementById("example3").classList.add("hidden");
}

// Hidden and show element with adding and removing class-style
function cssHiddenShow(element) {
  if (!element) return;
  element.classList.toggle("hidden");
}

// Toggle visibility for elements from array
function cssHiddenShowAllBlocksByStyle(elements) {
  Array.from(elements).forEach((element) => {
    cssHiddenShow(element);
  });
}

// Toggle visibility using selector value
function changeVisisbilityUsingSelector() {
  const selectorInput = document.getElementById("query-selector");
  const elements = document.querySelectorAll(selectorInput.value);
  cssHiddenShowAllBlocksByStyle(elements);
}

// Change function on element
function showAlertAndAfterHidden(element) {
  alert("Hello");
  element.onclick = () => cssHiddenShow(element);
}

// Listen button and change visibility for red square
function listenRedSquare() {
  const redSquareButton = document.getElementById("red-square-button");
  const redSquare = document.getElementById("red-square");
  redSquareButton.addEventListener(
    "mouseover",
    () => (redSquare.style.visibility = "hidden")
  );
  redSquareButton.addEventListener(
    "mouseout",
    () => (redSquare.style.visibility = "visible")
  );
}

// Listen input and chane visibility for element
function inputListener() {
    const inputForListening = document.getElementById("focus-on-input");
    const greenRectangle = document.getElementById("green-rectangle");
    inputForListening.addEventListener(
      "focus",
      () => (greenRectangle.style.visibility = "visible")
    );
    inputForListening.addEventListener(
      "input",
      () => (greenRectangle.style.visibility = "hidden")
    );
}

// Run listeners after dom loading
document.addEventListener("DOMContentLoaded", () => {
  listenRedSquare();
  inputListener();
});

// Show image by entered url
function showImage() {
  const inputUrl = document.getElementById("image-url").value;
  const img = (document.getElementById("image-from-url").src = inputUrl);
}

// Show all imeges entered in the textarea
function showImages() {
  const imgArray = document.getElementById("images-url").value.split("\n");
  const imgCointainer = document.getElementById("show-images");
  imgCointainer.innerHTML = '';
  Array.from(imgArray).forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    imgCointainer.appendChild(img);
  });
}