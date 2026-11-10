document.documentElement.classList.add("js");

const lightbox = document.querySelector(".lightbox-dialog");
const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxCaption = lightbox.querySelector("#lightbox-caption");
const lightboxCount = lightbox.querySelector(".lightbox-count");
const previousButton = lightbox.querySelector(".lightbox-previous");
const nextButton = lightbox.querySelector(".lightbox-next");
let activeGallery = [];
let currentImageIndex = 0;
let touchStartX = null;

const showLightboxImage = (index, shouldAnimate = true) => {
  currentImageIndex = (index + activeGallery.length) % activeGallery.length;
  const imageButton = activeGallery[currentImageIndex];
  const image = imageButton.querySelector("img");
  const caption = imageButton.closest("figure").querySelector("figcaption");

  lightboxImage.classList.remove("is-changing");
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = caption?.textContent.trim() || image.alt;
  lightboxCount.textContent = `${String(currentImageIndex + 1).padStart(2, "0")} / ${String(activeGallery.length).padStart(2, "0")}`;
  previousButton.disabled = activeGallery.length < 2;
  nextButton.disabled = activeGallery.length < 2;

  if (shouldAnimate) {
    requestAnimationFrame(() => lightboxImage.classList.add("is-changing"));
  }
};

document.querySelectorAll(".image-open-button").forEach((button) => {
  button.addEventListener("click", () => {
    const gallery = button.closest(".image-sequence, .design-grid");
    activeGallery = gallery
      ? [...gallery.querySelectorAll(".image-open-button")]
      : [button];
    currentImageIndex = activeGallery.indexOf(button);
    showLightboxImage(currentImageIndex, false);

    if (!lightbox.open) {
      lightbox.showModal();
    }
  });
});

previousButton.addEventListener("click", () => {
  showLightboxImage(currentImageIndex - 1);
});

nextButton.addEventListener("click", () => {
  showLightboxImage(currentImageIndex + 1);
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

lightbox.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    lightbox.close();
    return;
  }

  if (activeGallery.length < 2) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showLightboxImage(currentImageIndex - 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showLightboxImage(currentImageIndex + 1);
  }
});

lightboxImage.addEventListener("pointerdown", (event) => {
  touchStartX = event.pointerType === "touch" ? event.clientX : null;
});

lightboxImage.addEventListener("pointerup", (event) => {
  if (touchStartX === null) {
    return;
  }

  const distance = event.clientX - touchStartX;
  touchStartX = null;

  if (Math.abs(distance) > 48 && activeGallery.length > 1) {
    showLightboxImage(currentImageIndex + (distance < 0 ? 1 : -1));
  }
});

lightboxImage.addEventListener("pointercancel", () => {
  touchStartX = null;
});
