const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Thomas Jefferson", "George Washington", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answer: "Paris"
  },
  {
    category: "Math",
    question: "What is 7 × 8?",
    choices: ["54", "56", "64"],
    answer: "56"
  },
  {
    category: "Sports",
    question: "How many players are on a soccer team on the field?",
    choices: ["9", "10", "11"],
    answer: "11"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

function getRandomComputerChoice(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

const randomQuestion = getRandomQuestion(questions);
console.log(randomQuestion);

const randomComputerChoice = getRandomComputerChoice(questions);
console.log(randomComputerChoice);

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
};

getResults(questions, "Mars");
// "The computer's choice is correct!"

getResults(questions, "Earth");
// "The computer's choice is wrong. The correct answer is: Mars"