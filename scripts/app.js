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

let questions = [];
let currentQuestionIndex = 0;
let selectedAnswer;
let score = 0;

startButton.addEventListener("click", startQuiz);

async function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  questions = await loadQuestions();

  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;

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

function restartQuiz() {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}
