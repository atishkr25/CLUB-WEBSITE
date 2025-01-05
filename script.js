const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle the "active" class on both the hamburger and nav-menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close the menu when any nav link is clicked
document.querySelectorAll(".nav-links").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); // Corrected to navMenu
  });
});




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

// Card Animation
document.addEventListener("DOMContentLoaded", () => {
  const eventCards = document.querySelectorAll(".event-card");
  const options = {
    threshold: 0.4, // Trigger animation when 40% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class to the card
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  }, options);

  eventCards.forEach(card => {
    observer.observe(card); // Start observing each card
  });
});


// Gallery item animation js
document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animate");
        observer.unobserve(entry.target); // Stop observing after animation triggers
      }
    });
  }, { threshold: 0.3 }); // Trigger animation when 30% of the element is visible

  galleryItems.forEach((item, index) => {
    item.style.setProperty("--delay", index); // Add staggered delay
    observer.observe(item);
  });
});


// Team Section animation
document.addEventListener("DOMContentLoaded", () => {
  const teamCards = document.querySelectorAll(".team-card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("simple-fade-in");
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, { threshold: 0.2 });

  teamCards.forEach((card) => {
    observer.observe(card);
  });
});






