var startcontainer = document.querySelector(".startContainer");
var startButton = document.querySelector(".startbtn");
var secondsLeft = document.querySelector(".seconds");
var score = document.querySelector(".score");
var question = document.querySelector(".question");
var highScores = document.querySelector(".highScores");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var timer = document.querySelector(".timer");
var judgment = document.querySelector(".judgment");
var finished = document.querySelector(".finished");
var initials = document.querySelector(".initials");
var submitInitials = document.querySelector(".submitInitials");
var textBeforeInput = document.querySelector(".textBeforeInput");
var displayHighscores = document.querySelector(".displayHighscores");
var ol = document.querySelector(".highScoreList");
var clearScores = document.querySelector(".clearScores");
var refresh = document.querySelector(".refresh");
var refresh2 = document.querySelector(".refresh2");
var questionIndex = 0;
var actualScore = 60;
var stopTimer = 0;

var winners = [];
var questions = [
  {
    question:"The acronym JSON stands for",
    choices:["JavaScript Open Nomenclature","Java5Sript Object Nomenclature","JavaScript Open Network","JavaScript Object Notation"],
    answers:"JavaScript Object Notation"
  },
  {
    question:"JSON is commonly used for",
    choices:["sending data between computers.","storing JS objects as JSON strings in local storage.","transmitting data in web applications.","All of the above"],
    answers:"All of the above"
  },
  {
    question:"The acronym API stands for",
    choices:["Advanced Programming Initiative","Application Programming Interface","Applied Performance Interoperability","Adverse Predictable Interference"],
    answers:"Application Programming Interface"
  },
  {
    question:"The acronym DOM stands for",
    choices:["Document Object Model","Domain Operability Management","Definitive Operating Model","Domain Operating Model"],
    answers:"Document Object Model"
  },
  {
    question:"Which statement is not true?",
    choices:["A method is a prebuilt function.","An object is a collection of properties.","A declared function independently executes a particular task.","Georgia Tech is a premiere, technical, educational institution!"],
    answers:"A declared function independently executes a particular task."
  }
];
startButton.addEventListener("click", startQuiz);


timer.style.display = 'none';
score.style.display = 'none';
initials.style.display = 'none';
submitInitials.style.display = 'none';
highScores.style.display = 'none';
choice1.style.display = 'none';
choice2.style.display = 'none';
choice3.style.display = 'none';
choice4.style.display = 'none';
textBeforeInput.style.display = 'none';
displayHighscores.style.display = 'none';
refresh.style.display = 'none';
refresh2.style.display = 'none';
clearScores.style.display = 'none';

function startQuiz (){
  startcontainer.style.display = 'none';
  timer.style.display = 'block';
  highScores.style.display = 'block';
  displayQuestion(0);
  // calling setTime starts timer
  setTime();
}

function displayQuestion (i){
    if (stopTimer !== 1) {
      question.textContent=questions[i].question;
      choice1.style.display = 'block';
      choice2.style.display = 'block';
      choice3.style.display = 'block';
      choice4.style.display = 'block';
      choice1.textContent=questions[i].choices[0];
      choice2.textContent=questions[i].choices[1];
      choice3.textContent=questions[i].choices[2];
      choice4.textContent=questions[i].choices[3];
    }
}

// waiting for answer selection so it can be checked
choice1.addEventListener("click",checkAnswer);
choice2.addEventListener("click",checkAnswer);
choice3.addEventListener("click",checkAnswer);
choice4.addEventListener("click",checkAnswer); 

highScores.addEventListener("click", function(){
  startcontainer.style.display = "none";
  // stopTimer variable stops program from running except for  
  // below two functions called to prevent unwanted displays 
  stopTimer = 1;
  showHighScores();
  retrieveScores();
  choice1.style.display = 'none';
  choice2.style.display = 'none';
  choice3.style.display = 'none';
  choice4.style.display = 'none';
})  

// key is the answer key
var key = [questions[0].answers,
          questions[1].answers,
          questions[2].answers,
          questions[3].answers,
          questions[4].answers];

function checkAnswer(event){
  event.preventDefault();
  if (stopTimer !== 1) {
    var ans = event.target.textContent;
    if (questions[questionIndex].answers === ans) {
        judgment.textContent="Right!";
        judgment.style.display = 'block';
        // 1.2 second delay allows Right! to disappear
        var delayInMilliseconds = 1200;
        setTimeout(function() {
          judgment.style.display = 'none';
        }, delayInMilliseconds);
    } else {
        judgment.textContent="Wrong!";
        judgment.style.display = 'block';
        // 1.2 second delay allows Wrong! to disappear
        var delayInMilliseconds = 1200; 
        setTimeout(function() {
          judgment.style.display = 'none';
        }, delayInMilliseconds);
        // 10 second penalty imposed for incorrect answer
        secondsLeft=secondsLeft-10;
    }
    if (questionIndex<4) {
        var delayInMilliseconds = 2000; 
        // adds 2 second delay between questions which avoids conflict
        // in case user selects answer to next question before right or wrong
        // display is finished
        setTimeout(function() {
        nextQuestion();
        }, delayInMilliseconds);
    } else {
    // Increments questionIndex to above 4 so timer knows to stop 
    // and to call allDone function
      questionIndex++;
    } 
  }
}   

function nextQuestion(){
  questionIndex++;
  displayQuestion(questionIndex)
}

// extra second provded so that it looks like it starts at 60 seconds
secondsLeft=61;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    actualScore = secondsLeft;
    secondsLeft--;
    timer.textContent = "Timer:" + secondsLeft;
    if ((secondsLeft < 0)||(questionIndex>4)) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // If 
      if (stopTimer !== 1) {
      allDone();
      }
    }
  }, 1000);
}

function allDone() {
  timer.style.display = 'none';
  question.style.display = 'none';
  highScores.style.display = 'none';
  choice1.style.display = 'none';
  choice2.style.display = 'none';
  choice3.style.display = 'none';
  choice4.style.display = 'none';
  judgment.style.display = 'none';
  score.style.display = 'block';
  finished.textContent = "All Done!";
  // In cases when the timer goes below zero because of a 10 
  // point deduction with less than 10 seconds left on timer,
  // I set the score to zero instead of having a negative score
  if (actualScore<0) {
    actualScore = 0;
  }
  score.textContent = "Your final score is " + actualScore + ".";
  // Can only log a high score if score is greater than zero 
  if (actualScore>0){
    initials.style.display = 'inline';
    submitInitials.style.display = "inline";
    textBeforeInput.style.display = 'inline';
    submitInitials.addEventListener("click",logScore);
  } else {
    refresh2.style.display = 'inline';
    refresh2.addEventListener("click",goBack);
  }
}

function logScore() {
  score.style.display = 'none';
  finished.style.display = 'inline';
  textBeforeInput.style.display = 'inline';
  var currentInitials = initials.value;
  // if aleady winners in storage, adds additional winner into 
  // readable array from storage and then adds new winner to
  // array and then stores it 
  if (localStorage.getItem("winners")) {
    winners = JSON.parse(localStorage.getItem("winners"));
    winners.push({winner: currentInitials, usersScore: actualScore});
    localStorage.setItem("winners", JSON.stringify(winners));
  } else {
    // adds empty array into storage, retrieves it, adds new 
    // winner to it, and then stores it in local storage 
    localStorage.setItem("winners", '[]')
    winners = JSON.parse(localStorage.getItem("winners"));
    winners.push({winner: currentInitials, usersScore: actualScore});
    localStorage.setItem("winners", JSON.stringify(winners));
  }
  showHighScores();
} 

// This is a shortened verion of logScore for when the user wants to 
// use the view high scores button without completing the quiz. It simply
// sees if there is high scores stored in local storage and retrieves 
// them while converting them to readable content if they are there.  
function retrieveScores() {
  score.style.display = 'none';
  if (localStorage.getItem("winners")) {
    winners = JSON.parse(localStorage.getItem("winners"));
  } else {
    localStorage.setItem("winners", '[]')
  }
  showHighScores();
} 

function showHighScores(){
  timer.style.display = 'none';
  question.style.display = 'none';
  choice1.style.display = 'none';
  choice2.style.display = 'none';
  choice3.style.display = 'none';
  choice4.style.display = 'none';
  judgment.style.display = 'none';
  score.style.display = 'none';
  finished.style.display = "none";
  textBeforeInput.style.display = "none";
  initials.style.display = "none";
  submitInitials.style.display = "none";
  highScores.style.display = "none";
  displayHighscores.style.display = 'block';
  refresh.style.display = 'block';
  clearScores.style.display = 'block';
  // displays scores (3 lines above) and sorts (below) the by high score
  winners.sort((a, b) => (a.usersScore < b.usersScore) ? 1 : -1);
  // creates a list of winners and there high scores that are 
  // already sorted
  for (var i =0; i < winners.length; i++) { 
    var li = document.createElement('li');
    li.textContent = winners[i].winner + " - " + winners[i].usersScore;
    ol.appendChild(li);
  } 
  refresh.addEventListener("click",goBack);
  clearScores.addEventListener("click",clearHighscores)
}

function clearHighscores() {
  // empties the array winners where high scores are stored
  winners = [];
  localStorage.setItem("winners", JSON.stringify(winners));
  ol.style.display = 'none';
}

// goBack function refreshes page
function goBack() {
  location.reload();
}