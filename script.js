<<<<<<< HEAD
// Scroll animation
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
=======
<script>
  // Show a welcome message when the page loads
  window.onload = function() {
    alert("Welcome to Sommer's Portfolio Page!");
    console.log("Page loaded successfully.");
  };
>>>>>>> 3cd75f567400b3e91be3583c585418a171ae7445
