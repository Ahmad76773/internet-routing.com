function searchAnswer() {
  const question = document.getElementById("question").value;
  if(question) {
    alert("Searching for: " + question);
    // You can replace the alert with a real search functionality later
  } else {
    alert("Please enter a question.");
  }
}
// banner js
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  // Show the first slide initially
  showSlide(currentIndex);

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);
});

    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


function toggleAnswer(answerId, element) {
  const answer = document.getElementById(answerId);
  const icon = element.querySelector('.icon');

  if (answer.style.display === 'block') {
      answer.style.display = 'none';
      icon.innerHTML = '&#9654;'; // Right arrow
  } else {
      answer.style.display = 'block';
      answer.style.animation = 'fadeIn 0.5s ease-in-out'; // Trigger fade-in animation
      icon.innerHTML = '&#9660;'; // Down arrow
  }
}

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function showSlide(n) {
  let slides = document.querySelectorAll('.banner-slide');
  
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}
function toggleDetails(card) {
  card.classList.toggle("active");
}
function searchAnswer() {
  const question = document.getElementById("question").value;
  if (question) {
      const url = `https://www.answerme.com/search?q=${encodeURIComponent(question)}+internet+routing`;
      window.open(url, "_blank");
  } else {
      alert("Please enter a question.");
  }
}

// Allow Enter key to trigger search
document.getElementById("question").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      searchAnswer();
  }
});
  // Function to toggle the visibility of the answer and rotate the icon
  function toggleAnswer(answerId, element) {
    const answer = document.getElementById(answerId);
    const isVisible = answer.style.display === "block";

    // Toggle display of the answer
    answer.style.display = isVisible ? "none" : "block";

    // Toggle the icon rotation
    element.classList.toggle("open");
}
// services animantion java script
function toggleDetails(card) {
  const details = card.querySelector('.card-details');
  details.classList.toggle('active');
}
// login page java script

