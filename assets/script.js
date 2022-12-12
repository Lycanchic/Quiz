var startBtnEl = document.getElementById('start-btn')
var nextBtn = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question-container') 
var questionsEl = document.getElementById('question')
var choicesButtons = document.getElementById('choices-button')
var timer = document.getElementById ('timer')
var timerEnd = questionsEl.length * 10;
var timerId;
let shuffledQuestion; 
var currentQuestionIndex = 0;
var countDownDate = new Date("2:00").getTime();
var answer = document.getElementById('answer')
var score = 0;
let timeLeft = 60;
let currentIndex = 0;
var initialsEl = document.getElementById('initials')


/* start Timer*/
 console.log('started')

function startTime() {
  console.log("timer")
  let x = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timerEnd
  
  },1000)
  

  } 

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timer.textContent = timer;

  /*getNextQuestion();



  /* Timer Stop */
 function timerEnd() {
  if (timer <= 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's UP!";
    const timeoutId = setTimeout(function(){
  }, 1000);
  
  clearTimeout(timeoutId);
  console.log(`Timeout ID ${timeoutId} has been cleared`);
    clearTimeout()
  }
} 1000;

if (timer <= 0 ) {
  quizEnd();
} else {
  getNextQuestion();
}


  // display new time on page
  timer.textContent = timer;


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

  /*choicesButtonsEl.innerHTML = '';*/
}


/* Alert to the user whether the answer is correct or wrong */
function selectChoice(e) {
  var selectedButton = e.target
//  var correct = selectedButton.dataset.correct
console.log(selectedButton.dataset)
if((choicesButtons.value !== questions[currentQuestionIndex].answer)) {
  score++;
  alert("Correct!");
 } else {
  alert("Wrong! Try again")
 }
 alert("You got " + score +"/" + questions.length);
 currentIndex = Math.floor(Math.random()*questions.length);
  shuffledQuestion = questions[currentIndex]


 // check if user guessed wrong

if (choicesButtons.value !== questions[currentQuestionIndex].answer) {
  // penalize time
  timer -= 15;

  if (timer < 0) {
    timer = 0;
  }
 }
}
 
 /* get questions */

function getNextQuestion(question) {
  choicesButtons.innerHTML = ""
    questions.innerHTML = questions.questions
    questions.choices.forEach(choice => {
      var button = document.createElement('button')
      button.innerHTML = choice.text
      button.classList.add('btn')
      if (choice.correct) {
        button.dataset.correct = choice.correct
      }
     button.addEventListener('click', selectChoice)
      choicesButtons.appendChild(button)
     //getNextQuestion(shuffledQuestion[currentQuestionIndex])
     choicesButtons.innerHTML = '';
    }) 
}

 // loop over choices
 for (var i = 0; i < currentQuestion.choices.length; i++) {
  // create new button for each choice
  var choice = currentQuestion.choices[i];
  var choiceNode = document.createElement('button');
  choiceNode.setAttribute('class', 'choice');
  choiceNode.setAttribute('value', choice);

  choiceNode.textContent = i + 1 + '. ' + choice;

  // display on the page
  choicesEl.appendChild(choiceNode);
}

function questionClick(event) {
var buttonEl = event.target;

// if the clicked element is not a choice button, do nothing.
if (!buttonEl.matches('.choice')) {
  return;
 }
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
  getNextQuestion(shuffledQuestion) 
})

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
      { text: 'Both the datatype and the result of the expression are compared'},
      { text: 'Only the datatyped of the expression is compared'},
      { text: 'Only the value of the expression is compared'},
      { text: 'None of the above'}

    ],
    answer: 'Both the datatype and the result of the expression are compared' },
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

