const quizData = [
  {
    question: "What kind of musical instrument Electric Guitar is?",
    a: "Brass Instrument",
    b: "Electric Instrument",
    c: "Percussion Instrument",
    d: "Woodwind Instrument",
    correct: "b",
  },
  {
    question: "In what period Electronic instruments were invented?",
    a: "In the B.C. era",
    b: "18th Century",
    c: "21st Century",
    d: "20th Century",
    correct: "d",
  },
  {
    question: "What kind of musical instrument Piano is?",
    a: "String instrument",
    b: "Electronic instrument",
    c: "Both String and Percussion instrument",
    d: "Percussion instrument",
    correct: "c",
  },
  {
    question:
      "It needs to be plugged to produce sound. What musical instrument is this?",
    a: "Piano",
    b: "Helicon",
    c: "Theremin",
    d: "none of the above",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const correctAnswers = document.getElementById("correctAnswers");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> 
      <button onclick="location.reload()">Reload</button>`;
      correctAnswers.innerHTML = `<h4>Correct Answers:</h4> <p>1) Elecric Instrument 2) 20th Century 3) Both String and Percussion instrument 4) Theremin</p>`;
    }
  }
});
