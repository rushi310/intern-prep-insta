const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const questionNumberElement = document.getElementById("question-number");

let currentQuestionIndex = 0;
let score = 0;
let timer;

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "H2SO4"],
    answer: "H2O",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "South Korea"],
    answer: "Japan",
  },
  {
    question: 'Who wrote the famous novel "To Kill a Mockingbird"?',
    options: ["J.K. Rowling", "Stephen King", "Harper Lee", "Mark Twain"],
    answer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    answer: "Au",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "Who is known as the father of modern physics?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Which country is famous for the Great Barrier Reef?",
    options: ["Australia", "Brazil", "Canada", "Mexico"],
    answer: "Australia",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    answer: "Nitrogen",
  },
  // New questions
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
    answer: "Sahara Desert",
  },
  {
    question: 'Who painted the famous artwork "Starry Night"?',
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Vincent van Gogh",
  },
  {
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "I"],
    answer: "Fe",
  },
];

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    questionNumberElement.textContent = `Question ${
      currentQuestionIndex + 1
    } of ${questions.length}`;
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  submitBtn.style.display = "none";
}
// submitBtn.addEventListener('click', () => {
//     const selectedOption = document.querySelector('.option.selected');
//     if (selectedOption) {
//         checkAnswer(selectedOption.textContent);
//     } else {
//         alert('Please select an option before submitting.');
//     }
// });


function startTimer(duration) {
  let timeLeft = duration;
  timer = setInterval(() => {
    timerElement.textContent = `Timer: ${timeLeft}s`;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

displayQuestion();
startTimer(60); // Set timer duration in seconds
