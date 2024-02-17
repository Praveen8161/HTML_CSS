const dropArea = document.getElementById("drop_area");
const fileInput = document.getElementById("file_input");
const imgView = document.getElementById("img_view");

fileInput.addEventListener("change", uploadImage);

function uploadImage() {
  let imageLink = URL.createObjectURL(fileInput.files[0]);
  imgView.style.backgroundImage = `url(${imageLink})`;
  imgView.textContent = "";
}

dropArea.addEventListener("dragover", (e) => {
  // Without it the browser will not allow DROP Event
  e.preventDefault();
});
dropArea.addEventListener("drop", (e) => {
  // without it browser will open the image in new tab
  e.preventDefault();

  fileInput.files = e.dataTransfer.files;
  uploadImage();
});
