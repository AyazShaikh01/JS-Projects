const quizData = [
  {
    question: "What is 5 + 3?",
    options: ["8", "10", "12", "6"],
    answer: "8",
  },
  {
    question: "What is 12 - 7?",
    options: ["5", "7", "4", "10"],
    answer: "5",
  },
  {
    question: "What is 6 * 2?",
    options: ["10", "12", "8", "14"],
    answer: "12",
  },
  {
    question: "What is 20 / 4?",
    options: ["4", "5", "6", "8"],
    answer: "5",
  },
  {
    question: "What is the result of 10 - (3 * 2)?",
    options: ["10", "4", "6", "14"],
    answer: "4",
  },
  {
    question: "What is the product of 7 and 9?",
    options: ["56", "63", "72", "14"],
    answer: "63",
  },
  {
    question: "What is 48 divided by 6?",
    options: ["8", "7", "6", "9"],
    answer: "8",
  },
  {
    question: "What is the result of 15 + (4 * 3)?",
    options: ["27", "19", "21", "17"],
    answer: "27",
  },
  {
    question: "What is 18 divided by 3?",
    options: ["6", "7", "5", "4"],
    answer: "6",
  },
  {
    question: "What is 2 plus 2 multiplied by 2?",
    options: ["8", "6", "4", "10"],
    answer: "6",
  },
];


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const optionElement = document.createElement('button');
    optionElement.innerText = option;
    optionElement.classList.add('option-btn');
    optionElement.addEventListener('click', () => checkAnswer(option));
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.innerText = '';
  optionsElement.innerHTML = '';
  submitButton.style.display = 'none';
  resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();
