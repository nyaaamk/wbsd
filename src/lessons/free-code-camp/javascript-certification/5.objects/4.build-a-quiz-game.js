const questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices : ["3", "4", "5"],
    answer  : "4"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices : ["Earth", "Mars", "Venus"],
    answer  : "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices : ["Berlin", "Madrid", "Paris"],
    answer  : "Paris"
  },
  {
    category: "Programming",
    question: "Which language runs in the browser?",
    choices : ["Python", "Java", "JavaScript"],
    answer  : "JavaScript"
  },
  {
    category: "History",
    question: "Who was the first president of the USA?",
    choices : ["George Washington", "Abraham Lincoln", "John Adams"],
    answer  : "George Washington"
  }
];

const getRandomQuestion = (questionsArray) => {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
};

const getRandomComputerChoice = (choicesArray) => {
  const index = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[index];
};

const getResults = (questionObj, computerChoice) => {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
};