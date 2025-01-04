// JavaScript for Modal Functionality
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const caption = document.getElementById("caption");
const closeModal = document.getElementById("close-modal");

// Open Modal on Image Click
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = item.src;
    caption.textContent = item.alt;
  });
});

// Close Modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// for-review-section
const slider = document.querySelector(".testimonial-slider");
const slides = document.querySelectorAll(".testimonial-card");
let currentIndex = 0;
const slideInterval = 1000; // Time in milliseconds (3 seconds)

// Function to show the next slide
function showNextSlide() {
  // Remove the active class from the current slide
  slides[currentIndex].classList.remove("active");

  // Update the current index
  currentIndex = (currentIndex + 1) % slides.length;

  // Add the active class to the next slide
  slides[currentIndex].classList.add("active");

  // Scroll to the active slide
  slider.scrollLeft = slides[currentIndex].offsetLeft;
}

// Start auto-sliding
setInterval(showNextSlide, slideInterval);