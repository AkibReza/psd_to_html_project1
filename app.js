// Select the carousel and slides
const carousel = document.querySelector("#carouselExample");
const carouselInner = document.querySelector(".carousel-inner");
const slides = document.querySelectorAll(".carousel-item");

// Initialize Hammer.js on the carousel
const hammer = new Hammer(carousel);

// Carousel drag state
let currentIndex = 0;

// Handle pan events for dragging
hammer.on("panleft", () => {
  if (currentIndex < slides.length - 1) {
    slides[currentIndex].classList.remove("active");
    currentIndex += 1;
    slides[currentIndex].classList.add("active");
  }
});

hammer.on("panright", () => {
  if (currentIndex > 0) {
    slides[currentIndex].classList.remove("active");
    currentIndex -= 1;
    slides[currentIndex].classList.add("active");
  }
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 0, // Continuous scrolling
    disableOnInteraction: false,
  },
  speed: 5000, // Controls the scroll speed
});
