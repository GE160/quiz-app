export function renderQuestion(question) {
  const questionText = document.getElementById("question-text");
  const answersContainer = document.getElementById("answers-container");

  questionText.textContent = question.question;

  answersContainer.innerHTML = "";

  // create answer buttons
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.textContent = answer;

    button.classList.add("answer-btn");

    button.dataset.index = index;

    answersContainer.appendChild(button);
  });
}
