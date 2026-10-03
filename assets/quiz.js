document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  const feedback = quiz.querySelector("[data-quiz-feedback]");

  quiz.querySelectorAll("button[data-correct]").forEach((button) => {
    button.addEventListener("click", () => {
      feedback.textContent = button.dataset.feedback;
      feedback.classList.add("visible");
      feedback.dataset.result = button.dataset.correct === "true" ? "correct" : "incorrect";
    });
  });
});