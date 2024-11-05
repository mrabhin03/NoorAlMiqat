const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  // Hide the current slide
  slides[currentIndex].classList.remove('show');

  // Calculate the next slide index
  currentIndex = (currentIndex + 1) % slides.length;

  // Show the next slide
  slides[currentIndex].classList.add('show');
}

// Show the first slide initially
slides[currentIndex].classList.add('show');

// Set an interval to change slides every 3 seconds
setInterval(showNextSlide, 3000);
