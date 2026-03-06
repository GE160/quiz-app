export async function loadQuestions() {
  const response = await fetch("data/questions.json");

  const data = await response.json();

  return data.questions;
}
