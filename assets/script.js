var startBtnEl = document.getElementById('start-btn')
var nextBtn = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question-container') 
var questionEl = document.getElementById('question')
var choicesButtons = document.getElementById('choices-button')
var timer = document.getElementById ('timer')
var timerId;
var currentQuestionIndex = 0;
var countDownDate = new Date("1:00").getTime();
var answer = document.getElementById('answer')
var score = 0;
let timeLeft = 60;
var initialsEl = document.getElementById('initials')
let interval; 
let endScreenEl = document.getElementById('end-screen')
/*let finalscoreEL = document.getElementById('final-score')*/



/* start Timer*/
 console.log('started')

function startTime() {
  console.log("timer")
   interval = setInterval(function() {
    timeLeft--;
    timer.innerHTML = timeLeft
    endtimer()
  
  },1000)
  

  } 

  /* Timer Stop */
 function endtimer() {
  if (timeLeft <= 0) {
    endGame() 
  }
} 

function endGame() {
  // show final score
  currentQuestionIndex = 0
  questionContainerEl.classList.add('hide')
  clearInterval(interval);
  timer.innerHTML = "Time's UP!"; 
  if (timeLeft <= 0)
  timeLeft = 0
  endScreenEl.classList.remove('hide')
  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = timeLeft;
  var btnSubmitScoreEl = document.getElementById('btnSubmitScore')
  console.log(btnSubmitScoreEl)
btnSubmitScoreEl.addEventListener("click" , function(){
   /* let name = document.getElementById("inputScore").value
    scorePage(name, count)*/
    saveHighscore()
    console.log("hello world")
});
}

 /* Start Quiz Game */
function startGame() {
  startTime()
 
  console.log('Game Started')
  startBtnEl.classList.add('hide')
  questionContainerEl.classList.remove('hide')
  questionEl.classList.remove('hide')
  getNextQuestion()
}



/* Alert to the user whether the answer is correct or wrong */
function selectChoice(e) {
  var selectedButton = e.target

  //  var correct = selectedButton.dataset.correct
console.log(selectedButton.innerHTML)
if((selectedButton.innerHTML == questions[currentQuestionIndex].answer)) {
  score++;
  alert("Correct!");
 } else {
  alert("Wrong! Try again")
  timeLeft -= 15;

  if (timeLeft < 0) {
    timeLeft = 0;
  }
 }
 alert("You got " + score +"/" + questions.length);
 
 }

 /* get questions */

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


function getNextQuestion() {
  console.log(questions[currentQuestionIndex])
   let question = questions[currentQuestionIndex]
  choicesButtons.innerHTML = ""
    questionEl.innerHTML = question.question
    console.log(questionEl)
    question.choices.forEach(choice => {
      var button = document.createElement('button')
      button.innerHTML = choice.text
      button.classList.add('btn')
      if (choice.correct) {
        button.dataset.correct = choice.correct
      }
     button.addEventListener('click', selectChoice)
      choicesButtons.appendChild(button)
    }) 
}

/* start and Next button function */
startBtnEl.addEventListener('click', startGame)
nextBtn.addEventListener('click', (e) => {
  selectChoice(e)
  currentQuestionIndex++
  if (currentQuestionIndex >= 10) {
    endGame()
  }

  getNextQuestion()

})


// hide questions section
questionEl.setAttribute('class', 'hide');


function clockTick() {
// update time
timer--;
timer.textContent = timer;

// check if user ran out of time
if (timer <= 0) {
  endGame();

}}

 function saveHighscore() {
 // get value of input box
 var initials = initialsEl.value.trim();

  //make sure value wasn't empty//
 if (initials !== '') {
  //get saved scores from localstorage, or if not any, set to empty array//
  var highscores =
     JSON.parse(window.localStorage.getItem('highscores')) || [];

   //format new score object for current user//
  
   var newScore = {
     score: timer,
     initials: initials,   };

   // save to localstorage
   highscores.push(newScore);
   window.localStorage.setItem('highscores', JSON.stringify(highscores));

   // redirect to next page
  window.location.href = 'highscores.html';
  }
 }

function checkForEnter(event) {
   //"13" represents the enter key//
 if (event.key === 'Enter') {
   saveHighscore();
 }
 }

 /*user clicks button to submit initials*/
btnSubmitScoreEl.onclick = saveHighscore;

// // user clicks button to start quiz
 startBtnEl.onclick = startQuiz;

// // user clicks on element containing choices
// /*choicesEl.onclick = questionClick;*/

initialsEl.onkeyup = checkForEnter;




