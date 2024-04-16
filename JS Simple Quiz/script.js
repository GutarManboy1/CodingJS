const questions = [
  {
    question: "Which was once a moon of another planet in our solar system?",
    answers: [
      { text: "Pluto", correct: false },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Yo momma", correct: true },
    ]
  },
  {
    question: "Which of the following is the fastest in MPH?",
    answers: [
      { text: "The speed of light", correct: false },
      { text: "Orbit of the planet Mercury", correct: false },
      { text: "The speed of Sound", correct: false },
      { text: "Yo momma running to get her welfare check", correct: true },
    ]
  },
  {
    question: "What serial killer performed crimes in Kansas City?",
    answers: [
      { text: "John Gacy", correct: false },
      { text: "Sal Costa", correct: false },
      { text: "Sammy Sosa", correct: false },
      { text: "Yo momma", correct: true },
    ]
  },
  {
    question: "In a vacuum, such as space, sound does what?",
    answers: [
      { text: "Sound doesn't travel in a vacuum", correct: false },
      { text: "Slows down", correct: false },
      { text: "Travels faster than light", correct: false },
      { text: "Yo momma", correct: true },
    ]
  }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You got ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Try Again!";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }

}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
