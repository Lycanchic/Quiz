var highScores = document.getElementById("highScores");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

//Enter in name//
function storeHighScores(event) {
  event.preventDefault();

  //Stop function//
  if (initialInput.value === "") {
      alert("Please enter your initials!");
      return;
  } 

  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";   

  //Move score to savedHighScores @ localstorage//
  var savedHighScores = localStorage.getItem("high scores");
  var scoresArray;

  if (savedHighScores === null) {
      scoresArray = [];
  } else {
      scoresArray = JSON.parse(savedHighScores)
  }

  var userScore = {
      initials: initialInput.value,
      score: finalScore.textContent
  };

  console.log(userScore);
  scoresArray.push(userScore);

  JSON.stringify
  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);
  
  //Start of Highscores//
  showHighScores();
}

//Function for HighScores//
var i = 0;
function showHighScores() {

  startDiv.style.display = "none";
  timer.style.display = "none";
  questionDiv.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
   highScoreSection.style.display = "block";

  //Local Storage check//
   var savedHighScores = localStorage.getItem("high scores");

  if (savedHighScores === null) {
    return;
   }
  console.log(savedHighScores);

   var storedHighScores = JSON.parse(savedHighScores);

   for (; i < storedHighScores.length; i++) {
      var eachNewHighScore = document.createElement("p");
       eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
       listOfHighScores.appendChild(eachNewHighScore);
   }
 }

 startQuizBtn.addEventListener("click", newQuiz);
 choiceA.addEventListener("click", chooseA);
 choiceB.addEventListener("click", chooseB);
 choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

 btnSubmitScore.addEventListener("click", function(event){ 
   storeHighScores(event);
 });

 viewHighScore.addEventListener("click", function(event) { 
   showHighScores(event);
});

 replay-btn.addEventListener("click", function() {
  startDiv.style.display = "block";
  //highScoreSection.style.display = "none";//
 });

 clearHighScoreBtn.addEventListener("click", function(){
   window.localStorage.removeItem("high scores");
   listOfHighScores.innerHTML = "High Scores Cleared!";
  listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
 });