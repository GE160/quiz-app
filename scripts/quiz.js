export function renderQuestion(question, onAnswerSelected) {
  const questionText = document.getElementById("question-text");
  const answersContainer = document.getElementById("answers-container");

  questionText.textContent = question.question;

  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.textContent = answer;

    button.classList.add("answer-btn");

    button.addEventListener("click", () => {
      onAnswerSelected(index);
    });

    answersContainer.appendChild(button);
  });
}
