let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Bill Gates",
    answer_3: "Tim Berners-Lee",
    answer_4: "Steve Jobs",
    right_answer: 3,
  },
  {
    question: "Wie definiert man in JavaScript eine Variable?",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100;",
    answer_4: "let rate = 100;",
    right_answer: 4,
  },
  {
    question: "Was ist CSS?",
    answer_1: "Cascading Style Sheets",
    answer_2: "Computer Style Sheets",
    answer_3: "Creative Style Sheets",
    answer_4: "Colorful Style Sheets",
    right_answer: 1,
  },
  {
    question: "Was ist die Hauptaufgabe von HTML?",
    answer_1: "Die Struktur einer Webseite zu definieren",
    answer_2: "Die Interaktivität einer Webseite zu ermöglichen",
    answer_3: "Die Gestaltung einer Webseite zu definieren",
    answer_4: "Die Datenbank einer Webseite zu verwalten",
    right_answer: 1,
  },
  {
    question:
      "Welches Attribut wird verwendet, um ein Bild in HTML einzufügen?",
    answer_1: "src",
    answer_2: "href",
    answer_3: "alt",
    answer_4: "link",
    right_answer: 1,
  },
  {
    question: "Was ist JavaScript?",
    answer_1: "Ein Grafikdesign-Tool",
    answer_2: "Ein Framework für Webentwicklung",
    answer_3: "Ein Datenbankmanagementsystem",
    answer_4: "Eine Programmiersprache für Webentwicklung",
    right_answer: 4,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("question_text").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectetQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectetQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).classList.add("bg-success");
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  document.getElementById("next-button").disabled = true;

  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").classList.remove("bg-danger");
  document.getElementById("answer_1").classList.remove("bg-success");
  document.getElementById("answer_2").classList.remove("bg-danger");
  document.getElementById("answer_2").classList.remove("bg-success");
  document.getElementById("answer_3").classList.remove("bg-danger");
  document.getElementById("answer_3").classList.remove("bg-success");
  document.getElementById("answer_4").classList.remove("bg-danger");
  document.getElementById("answer_4").classList.remove("bg-success");
}
