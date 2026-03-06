import { loadQuestions } from "./data-loader.js";

const startButton = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");

let questions = [];

startButton.addEventListener("click", startQuiz);

async function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  questions = await loadQuestions();

  console.log("Loaded questions:", questions);
}
