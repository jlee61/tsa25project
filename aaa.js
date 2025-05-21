document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".icon");

      answer.classList.toggle('open');
      question.classList.toggle('active');

      // Icon change
      icon.textContent = answer.classList.contains("open") ? "-" : "+";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // About section text
  const aboutTextElements = document.querySelectorAll(".about-text p, .about-text h4");
  aboutTextElements.forEach(el => observer.observe(el));

  // About section image
  const aboutImage = document.querySelector(".about-image img");
  if (aboutImage) observer.observe(aboutImage);

  // Menu section elements
  const menuTextElements = document.querySelectorAll(".menu-text h1, .menu-text p");
  menuTextElements.forEach(el => observer.observe(el));

  const menuImage = document.querySelector(".menu-section .about-image img");
  if (menuImage) observer.observe(menuImage);
  
  
});

