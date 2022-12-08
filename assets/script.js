var startBtnEl = document.getElementById('start-btn')
var nextBtn = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question-container') 
var questionEl = document.getElementById('question')
var choicesButtonsEl = document.getElementById('choices-button')
var timer = document.getElementById ('timer')
let shuffledQuestion, currentQuestionIndex
var countDownDate = new Date("2:00").getTime();
var answerBtnEl = document.getElementById('answer-button')
var score = 0;
let timeLeft = 120;
let currentIndex = 0;


/* start Timer*/
 console.log('started')

function startTime() {
  console.log("timer-function")
  let x = setInterval(function() {
    timeLeft--;
    document.getElementById("countdown-timer").innerHTML = timeLeft
  
  },1000)
  

  }
 /* Start Quiz Game */
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


/* Alert to the user whether the answer is correct or wrong */
function selectChoice(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
console.log(selectedButton.dataset)
 if((questions[currentIndex].answer === selectedButton.innerHTML)) {
  score++;
  alert("Correct!");
 } else {
  alert("Wrong! Try again")
 }
 alert("You got " + score +"/" + questions.length);
 }


 /* get questions */

function getNextQuestion(question) {
  choicesButtonsEl.innerHTML = ""
    questionEl.innerHTML = question.question
    question.choices.forEach(choice => {
      var button = document.createElement('button')
      button.innerHTML = choice.text
      button.classList.add('btn')
      if (choice.correct) {
        button.dataset.correct = choice.correct
      }
     button.addEventListener('click', selectChoice)
      choicesButtonsEl.appendChild(button)
    //  getQuestion(shuffledQuestion[currentQuestionIndex])
    })
  
    
}

/* Answer Button function */
function selectAnswer() {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button.datasrt.correct)
  })

}
 /* set class for correct and wrong */
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
   }
 }

 function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
 }

/* start and Next button function */
startBtnEl.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++
  getNextQuestion() 
})


/* Timer Stop */
 function stopTimer() {
  if (timer < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's UP!";
  }
} 1000;


/* Quiz questions */

var questions = [
    {
    question: 'Javascript is an _______ language?',
    choices: [
        { text: 'Object-Orientated'},
        { text: 'Object-Based'},
        { text: 'Procedural'},
        { text: 'None of the above'}

    ],
    answer: 'Object-Orientated' },
    {
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    choices: [
        { text: 'var' },
        { text: 'let'},
        { text: 'Both A and B'},
        { text: 'None of the Above'}

      ],
      answer: 'Both A and B' },
      {
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    choices: [
      { text: 'getElementById'},
      { text: 'getElementByClassName'},
      { text: 'Both A and B' },
      { text: 'None of the above'}

    ],
    answer: 'Both A and B' },
    {
    question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
    choices: [
      { text: 'Throws an error'},
      { text: 'ignores the statements'},
      { text: 'Gives a warning'},
      { text: 'None of the above'}

    ],
    answer: 'ignores the statements' },
    {
    question: 'Arrays in JavaScript are defined by which of the following statements?',
    choices: [
      { text: 'It is an ordered list of values'},
      { text: 'It is an ordered list of objects'},
      { text: 'It is an ordered list of string'},
      { text: 'It is an ordered list of functions'}

    ],
    answer: 'It is an ordered list of values' },
    {
    question: 'How can a datatype be declared to be a constant type?',
    choices: [
      { text: 'const'},
      { text: 'var'},
      { text: 'let'},
      { text: 'constant'}

    ],
    answer: 'const' },
    {
    question: ' Which of the following is not javascript data types?',
    choices: [
      { text: 'Null type'},
      { text: 'Undefined type'},
      { text: 'Number type'},
      { text: 'All of the above'}

    ],
    answer: 'All of the above' },
    {
    question: ' Which of the following object is the main entry point to all client-side JavaScript features and APIs?',
    choices: [
      { text: 'Position'},
      { text: 'Window'},
      { text: 'Standard'},
      { text: 'Location'}

    ],
    answer: 'Window' },
    {
    question: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
    choices: [
      { text: 'Both the datatype and the result of the expression are compatred'},
      { text: 'Only the datatyped of the expression is compared'},
      { text: 'Only the value of the expression is compared'},
      { text: 'None of the above'}

    ],
    answer: 'Both the datatype and the result of the expression are compatred' },
    {
    question: 'When an operator`s value is NULL, the typeof returned by the unary operator is:',
    choices:[
      { text: 'Boolean'},
      { text: 'Undefined'},
      { text: 'Object'},
      { text: 'Integer'}

    ],
    answer: 'Object' },
    

  ]

