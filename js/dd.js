const dropZone = document.getElementById("drop-area");
if (dropZone) {
  let hoverClassName = "hover";

  dropZone.addEventListener("dragenter", function (e) {
    e.preventDefault();
    dropZone.classList.add('on-drug');
  });

  dropZone.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  dropZone.addEventListener("dragleave", function (e) {
    e.preventDefault();
  });

  dropZone.addEventListener("drop", function (e) {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFileChange(files);
  });
}

document
  .getElementById("file-field")
  .addEventListener("change", function (event) {
    const files = event.target.files;
    handleFileChange(files);
  });

function handleFileChange(files) {
  const dropZone = document.getElementById("drop-area");

  if (files && files.length > 0) {
    dropZone.innerHTML = files[0].name;
  }
}
