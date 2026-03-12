import { loadQuestions } from "./data-loader.js";
import { renderQuestion } from "./quiz.js";

const startButton = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const progressText = document.getElementById("progress-text");

const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", nextQuestion);

const resultScreen = document.getElementById("result-screen");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-btn");

restartButton.addEventListener("click", restartQuiz);

const reviewButton = document.getElementById("review-btn");
const reviewScreen = document.getElementById("review-screen");
const backButton = document.getElementById("back-btn");

reviewButton?.addEventListener("click", () => {
  resultScreen.classList.add("hidden");

  reviewScreen.classList.remove("hidden");

  renderReview();
});

backButton?.addEventListener("click", () => {
  reviewScreen.classList.add("hidden");

  resultScreen.classList.remove("hidden");
});

const shareToggleBtn = document.getElementById("share-toggle-btn");
const shareMenu = document.getElementById("share-menu");
const copyResultBtn = document.getElementById("copy-result-btn");

shareToggleBtn?.addEventListener("click", (e) => {
  e.stopPropagation();

  if (shareMenu.classList.contains("hidden")) {
    shareMenu.classList.remove("hidden");
  } else {
    shareMenu.classList.add("hidden");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".share-container")) {
    shareMenu?.classList.add("hidden");
  }
});

copyResultBtn?.addEventListener("click", async () => {
  const message = getShareMessage();

  try {
    await navigator.clipboard.writeText(message);
    alert("Result copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy result:", err);
  }

  shareMenu.classList.add("hidden");
});

let questions = [];
let currentQuestionIndex = 0;
let selectedAnswer;
let score = 0;

let userAnswers = [];

startButton.addEventListener("click", startQuiz);

async function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  questions = await loadQuestions();

  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;

  userAnswers = [];

  showQuestion();
}

function showQuestion() {
  selectedAnswer = null;

  const question = questions[currentQuestionIndex];

  progressText.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

  renderQuestion(question, handleAnswer);
}

function handleAnswer(index) {
  selectedAnswer = index;

  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn) => btn.classList.remove("selected"));

  buttons[index].classList.add("selected");
}

function nextQuestion() {
  if (selectedAnswer === null) {
    alert("Please select an answer");
    return;
  }

  const question = questions[currentQuestionIndex];

  userAnswers.push(selectedAnswer);

  if (selectedAnswer === question.correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  scoreText.textContent = `Your score: ${score} / ${questions.length}`;
}

function getShareMessage() {
  const percentage = Math.round((score / questions.length) * 100);

  return `I scored ${score}/${questions.length} (${percentage}%) on this programming quiz! Try it yourself!`;
}

function renderReview() {
  const reviewContainer = document.getElementById("review-container");

  reviewContainer.innerHTML = "";

  questions.forEach((question, index) => {
    const userAnswerIndex = userAnswers[index];

    const userAnswer = question.answers[userAnswerIndex];

    const correctAnswer = question.answers[question.correct];

    const div = document.createElement("div");

    div.classList.add("review-item");

    div.innerHTML = `
      <h3>Question ${index + 1}</h3>
      <p>${question.question}</p>
      <p><strong>Your answer:</strong> ${userAnswer}</p>
      <p><strong>Correct answer:</strong> ${correctAnswer}</p>
      <p class="explanation">${question.explanation}</p>
    `;

    reviewContainer.appendChild(div);
  });
}

function restartQuiz() {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}