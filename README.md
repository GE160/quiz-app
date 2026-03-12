# Quiz Web App

A simple, fully client-side quiz application designed to test programming knowledge. The project is built with vanilla HTML, CSS, and JavaScript, emphasizing clarity, maintainability, and ease of modification.

---

## 📑 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Data Format](#data-format)
7. [Development](#development)
8. [Customization](#customization)
9. [Known Limitations](#known-limitations)

---

## 🔍 Overview

This repository contains a lightweight quiz application that runs entirely in the browser. Questions are loaded from an external JSON file, and the app handles navigation, scoring, result review and sharing.

---

## 🎯 Features

- **Modular codebase** using ES modules (`app.js`, `quiz.js`, `data-loader.js`).
- **Single-page flow** with start, quiz, result, and review screens.
- **Dynamic question rendering** based on JSON data.
- **Answer selection and validation** with score tracking.
- **Review mode** showing user choices, correct answers, and explanations.
- **Result sharing** via clipboard copy.
- **No external dependencies**; works with any static file server.

---

## 🗂️ Project Structure

```
quiz-app/
├── index.html
├── css/
│   └── style.css
├── data/
│   └── questions.json
└── scripts/
    ├── app.js
    ├── data-loader.js
    └── quiz.js
```

---

## 🛠️ Getting Started

1. **Clone the repository** (or copy the files) to your machine:

   ```bash
   git clone https://github.com/GE160/quiz-app.git quiz-app
   cd quiz-app
   ```

2. **Serve the files** over HTTP. Browsers block `fetch` on the `file://` protocol, so a simple static server is required.

   ```bash
   # Python 3
   python -m http.server 8000
   ```

   Alternatively, use an editor extension such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

3. **Open your browser** and navigate to `http://localhost:8000` (adjust port as needed).

---

## ▶️ Usage

- Click **Start Quiz** to begin.
- Select an answer for each question; use the **Next Question** button to proceed.
- After the final question, your score will be displayed.
- Click **Review Answers** to inspect your responses, correct answers, and any explanations.
- Use **Restart Quiz** to start over.
- In the results screen, click the share icon and then **Copy Result** to copy your score to the clipboard.

---

## 📄 Data Format

Questions are stored in `data/questions.json` with the following schema for each entry:

```json
{
  "question": "What is ...?",
  "answers": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 2, // zero-based index of correct answer
  "explanation": "Optional explanation text."
}
```

Modify or extend the array to change the quiz content. The application does not perform validation on this file, so ensure the structure is maintained.

---

## 🧪 Development

No build tools are required; simply edit the files directly. To test changes:

1. Save your modifications in `scripts/` or `css/`.
2. Refresh the browser window running the local server.

For debugging, open the browser's developer console to observe any runtime errors.

---

## 🛠️ Customization

- **Styling**: Edit `css/style.css` to adjust layout, colors, fonts, or responsiveness.
- **Question bank**: Add new entries or categories to `data/questions.json`.
- **Behavior**: Extend `app.js` to include timers, randomization, or persistent scores.

The modular design makes it straightforward to replace or enhance components.

---

Thank you for using the Quiz Web App. Feel free to fork, adapt, or integrate it into your own projects!
