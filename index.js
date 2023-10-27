const feedbacks = document.querySelector('.feedbacks');
const clients = document.querySelectorAll('.client00');
let currentIndex = 0;

function nextFeedback() {
  currentIndex = (currentIndex + 1) % clients.length;
  updateSlider();
}

function updateSlider() {
  const offset = -currentIndex * 100;
  feedbacks.style.transform = `translateX(${offset}%)`;
}

// Automatically switch to the next feedback every 5 seconds
setInterval(nextFeedback, 5000);

