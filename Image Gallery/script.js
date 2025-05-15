const images = ["v.jpg", "hp.jpg", "kl.jpg", "jb.jpg"];
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  showImage();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  showImage();
}

function showImage() {
  document.getElementById("lightbox-img").src = images[currentIndex];
}
