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
