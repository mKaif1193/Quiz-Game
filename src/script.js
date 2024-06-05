const questionsList = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "c",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    answer: "b",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "George Orwell",
    ],
    answer: "b",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "c",
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1912", "1918", "1905", "1898"],
    answer: "a",
  },
  {
    question: "What is the process by which plants make their food?",
    options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
    answer: "b",
  },
  {
    question: "Which of these is a prime number?",
    options: ["21", "29", "33", "35"],
    answer: "b",
  },
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "French", "Portuguese", "English"],
    answer: "c",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent Van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "c",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Yuan", "Dollar"],
    answer: "a",
  },
];

let index = 0;
let score = 0;
let totalQuestions = questionsList.length;

let qNo = document.getElementById("questionNo");
let questions = document.getElementById("question");
let choices = document.querySelectorAll(".choices");
let submitBtn = document.getElementById("submitBtn");

const loadQuestion = () => {
  if (index === totalQuestions) {
    exitGame();
    return;
  }

  reset();

  qNo.innerText = `Question No. ${index + 1}`;

  questions.innerText = questionsList[index].question;

  choices[0].nextElementSibling.innerText = questionsList[index].options[0];
  choices[1].nextElementSibling.innerText = questionsList[index].options[1];
  choices[2].nextElementSibling.innerText = questionsList[index].options[2];
  choices[3].nextElementSibling.innerText = questionsList[index].options[3];
};

const submitAns = () => {
  index++;
  loadQuestion();
};

const checkAns = () => {
  choices.forEach((choice) => {
    if (choice.value == questionsList[index].answer) {
      if (choice.checked) {
        score++;
      }
    }
  });

  submitAns();
};

const exitGame = () => {
  let container = document.querySelector(".container");
  container.innerHTML = ` <h1>Quiz Game</h1>
  <div id="result">Your Score is ${score} / ${totalQuestions} (${
    (score / totalQuestions) * 100
  }%)</div>
  <button id="playBtn">Play Again</button>
  `;

  let playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", () => {
    window.location.reload();
  });
};

const reset = () => {
  choices.forEach((choice) => {
    choice.checked = false;
  });
};

loadQuestion();

submitBtn.addEventListener("click", () => {
  checkAns();
});
