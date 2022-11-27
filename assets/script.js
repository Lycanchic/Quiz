var startBtnEl = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container') 
var questionEl = document.getElementById('question')
var choicesButtonsEl = document.getElementById('choices-button')
var timer = document.getElementById ('timer')
var nextEl = document.getElementById ('next') 
let shuffledQuestion, currentQuestionIndex
var countDownDate = new Date("1:00").getTime();
let timeLeft = 100;
let currentIndex = 0;
/* start quiz*/

 
  console.log('started')

function startTime() {
  console.log("timer-function")
  let x = setInterval(function() {
    timeLeft--;
    document.getElementById("countdown-timer").innerHTML = timeLeft
  },1000)
  

  }

function startGame() {
  startTime()
  console.log('Game Started')
  startBtnEl.classList.add('hide')
  console.log(Math.floor(Math.random()*questions.length))
  currentIndex = Math.floor(Math.random()*questions.length);
  shuffledQuestion = questions[currentIndex]
  console.log(shuffledQuestion)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide')
  getNextQuestion(shuffledQuestion)
}
function selectChoice(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
console.log(selectedButton.dataset)
 if((questions[currentIndex].answer === selectedButton.innerHTML)) {
  alert("correct-answer");
 } else {
  alert("incorect-answer")

 }
 }


 /* get questions */

function getNextQuestion(question) {
  choicesButtonsEl.innerHTML = ""
    questionEl.innerText = question.question
    question.choices.forEach(choice => {
      var button = document.createElement('button')
      button.innerText = choice.text
      button.classList.add('btn')
      if (choice.correct) {
        button.dataset.correct = choice.correct
      }
     button.addEventListener('click', selectChoice)
      choicesButtonsEl.appendChild(button)
    })
}

function selectAnswer() {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct

}

startBtnEl.addEventListener('click', startGame)

/* timer */

//Start the timer
     
//document.addEventListener('click', () => {
 // setInterval(timer, 1000);
//}, { once: true })
//console.log('timer-started')


/* Timer Stop */
 function stopTimer() {
  if (timer < 0) {
    clearInterval(x);
    document.getElementById("timer-clock").innerHTML = "Time's UP!";
  }
} 1000;


/* Quiz questions */

var questions = [
    {
    question: 'Javascript is an _______ language?',
    choices: [
        { text: 'Object-Orientated', correct: true },
        { text: 'Object-Based', correct: false },
        { text: 'Procedural', correct: false },
        { text: 'None of the above', correct: false }

    ],
    answer: 'Object-Orientated' },
    {
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    choices: [
        { text: 'var', correct: false },
        { text: 'let', correct: false },
        { text: 'Both A and B', correct: true },
        { text: 'None of the Above', correct: false }

      ],
      answer: 'Both A and B' },
      {
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    choices: [
      { text: 'getElementById', correct: false },
      { text: 'getElementByClassName', correct: false },
      { text: 'Both A and B', correct: true },
      { text: 'None of the above', correct: false }

    ],
    answer: 'Both A and B' },
    {
    question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
    choices: [
      { text: 'Throws an error', correct: false },
      { text: 'ignores the statements', correct: true },
      { text: 'Gives a warning', correct: false },
      { text: 'None of the above', correct: false }

    ],
    answer: 'ignores the statements' },
    {
    question: 'Which of the following methods can be used to display data in some form using Javascript?',
    choices: [
      { text: 'document.write()', correct: false },
      { text: 'console.log()', correct: false },
      { text: 'window.alert()', correct: true },
      { text: 'All of the above', correct: true }

    ],
    answer: 'ignores the statements' },
    {
    question: 'How can a datatype be declared to be a constant type?',
    choices: [
      { text: 'const', correct: true },
      { text: 'var', correct: false },
      { text: 'let', correct: false },
      { text: 'constant', correct: false }

    ],
    answer: 'ignores the statements' },
    {
    question: 'What keyword is used to check whether a given property is valid or not?',
    choices: [
      { text: 'in', correct: true },
      { text: 'is in', correct: false },
      { text: 'exists', correct: true },
      { text: 'lies', correct: false }

    ],
    answer: 'ignores the statements' },
    {
    question: 'What is 2 + 2',
    choices: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '4', correct: true },
      { text: '22', correct: false }

    ],
    answer: 'ignores the statements' },
    {
    question: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
    choices: [
      { text: 'Both the datatype and the result of the expression are compatred', correct: true },
      { text: 'Only the datatyped of the expression is compared', correct: false },
      { text: 'Only the value of the expression is compared', correct: false },
      { text: 'None of the above', correct: false }

    ],
    answer: 'ignores the statements' },
    {
    question: 'When an operator`s value is NULL, the typeof returned by the unary operator is:',
    choices:[
      { text: 'Boolean', correct: false },
      { text: 'Undefined', correct: false },
      { text: 'Object', correct: true },
      { text: 'Integer', correct: false }

    ],
    answer: 'ignores the statements' },
    

  ]

