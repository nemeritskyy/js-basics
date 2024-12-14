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

// Show image by entered url
function showImage() {
  const inputUrl = document.getElementById("image-url").value;
  const img = (document.getElementById("image-from-url").src = inputUrl);
}

// Show all imeges entered in the textarea
function showImages() {
  const imgArray = document.getElementById("images-url").value.split("\n");
  const imgCointainer = document.getElementById("show-images");
  imgCointainer.innerHTML = "";
  Array.from(imgArray).forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    imgCointainer.appendChild(img);
  });
}

// Track position of the cursor and show it in the element
function trackPosition(cursor) {
  document.getElementById("coordinates").innerHTML =
    "Х: " + cursor.pageX + ", У: " + cursor.pageY;
}

addEventListener("mousemove", trackPosition, false);

// Get language by abriviatura
function getLanguage(userLanguage) {
  switch (userLanguage) {
    case "uk-UA":
      return "Ukrainian";
    case "en-US":
      return "English (US)";
    case "en-GB":
      return "English (UK)";
    case "fr-FR":
      return "French";
    case "de-DE":
      return "German";
    default:
      return "Language not defined";
  }
}

// Show user language in element
document.getElementById("user-language").innerHTML =
  "User language is<br><b>" + getLanguage(navigator.language) + "</b>";

// Show user coordinates
function getCoordinates() {
  const coordinatesContainer = document.getElementById("user-coordinates");
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    coordinatesContainer.innerHTML = "Ш: " + lat + ", Д: " + long;
  });
}

// Run listeners after dom loading
document.addEventListener("DOMContentLoaded", () => {
  onload();
  listenRedSquare();
  inputListener();
  updateStorage();
  // getCoordinates();

  listenBlocks();
  listenForm();
});

// Check data onload
function onload() {
  const elementLocalStorege = document.getElementById("local-storage");
  elementLocalStorege.value = localStorage.getItem("example1");

  const elementCookie = document.getElementById("coockie");
  elementCookie.value = document.cookie.substring(9);

  const elementSessionStorage = document.getElementById("session-storage");
  elementSessionStorage.value = sessionStorage.getItem("example3");
}

// Update storage if input changed
function updateStorage() {
  const elementLocalStorege = document.getElementById("local-storage");
  elementLocalStorege.addEventListener("input", () =>
    localStorage.setItem("example1", elementLocalStorege.value)
  );

  const elementCookie = document.getElementById("coockie");
  elementCookie.addEventListener(
    "input",
    () => (document.cookie = "example2=" + elementCookie.value)
  );

  const elementSessionStorage = document.getElementById("session-storage");
  elementSessionStorage.addEventListener("input", () =>
    sessionStorage.setItem("example3", elementSessionStorage.value)
  );
}

// Scroll to the top
function slideUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const button = document.getElementById("button-up");
  button.style.visibility = "hidden";
  button.style.opacity = "0";
}

// Listen scroll and show hidden div
window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    const button = document.getElementById("button-up");
    button.style.visibility = "visible";
    button.style.opacity = "1";
  }
});

// Add block listeners
function listenBlocks() {
  const parrentBlock = document.getElementById("parrent-block");
  const childBlock = document.getElementById("child-block");

  childBlock.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Child");
  });
  parrentBlock.addEventListener("click", () => alert("Parrent"));
}

// Disable scroll
function showGreySquare() {
  const greySquare = document.getElementById("grey-sq");
  greySquare.style.visibility = "visible";
  document.body.style.overflow = "hidden";

  greySquare.addEventListener("click", () => {
    greySquare.style.visibility = "hidden";
    document.body.style.overflow = "visible";
  });
}

function listenForm() {
  const myForm = document.getElementById("my-form");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Data sended without reload");
  });
}