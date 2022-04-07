var startcontainer = document.querySelector(".startContainer");
var startbutton = document.querySelector(".startbtn");
var questionContainer = document.querySelector(".questionContainer");
var secondsLeft = document.querySelector(".seconds");
var score = document.querySelector(".score");
var question = document.querySelector(".question");
var answerList = document.querySelector(".answerList");
var highScores = document.querySelector(".highScores");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var timer = document.querySelector(".timer");
var judgment = document.querySelector(".judgment");
var finished = document.querySelector(".finished");
var questionIndex = 0;
var actualScore = 60;
var initials = document.querySelector(".initials");
var submitInitials = document.querySelector(".submitInitials");
var textBeforeInput = document.querySelector(".textBeforeInput");
var displayHighscores = document.querySelector(".displayHighscores");
var ol = document.querySelector(".highScoreList");
var clearScores = document.querySelector(".clearScores");
var refresh = document.querySelector(".refresh");
var refresh2 = document.querySelector(".refresh2");

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
startbutton.addEventListener("click", startQuiz);


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
// finished.style.display = 'none';

function startQuiz (){
  console.log("startQuiz");
//  question.style.display = 'block';
  startcontainer.style.display = 'none';
  timer.style.display = 'block';
  highScores.style.display = 'block';
  displayQuestion(0);
  //start timer
  setTime();
}

function displayQuestion (i){
  //for (var i=0;i<questions.length;i++){
    console.log(questions[i].question);
    console.log(questions[i].choices);
    question.textContent=questions[i].question;
    choice1.style.display = 'block';
    choice2.style.display = 'block';
    choice3.style.display = 'block';
    choice4.style.display = 'block';
    choice1.textContent=questions[i].choices[0];
    choice2.textContent=questions[i].choices[1];
    choice3.textContent=questions[i].choices[2];
    choice4.textContent=questions[i].choices[3];
  //  displayHighscores.style.display = 'none';
 //   highScores.addEventListener("click",showHighScores);

// 
}

choice1.addEventListener("click",checkAnswer);
choice2.addEventListener("click",checkAnswer);
choice3.addEventListener("click",checkAnswer);
choice4.addEventListener("click",checkAnswer); 
highScores.addEventListener("click", function(){
  startcontainer.style.display = "none";
  showHighScores();
  retrieveScores();
//  logScore();
})  


var key = [questions[0].answers,
          questions[1].answers,
          questions[2].answers,
          questions[3].answers,
          questions[4].answers];
console.log(key);

 function checkAnswer(event){
    event.preventDefault();
  //  event.target;
    var ans = event.target.textContent;
    console.log(event.target.textContent);
 //   if (key.includes(ans)) {
  if (questions[questionIndex].answers === ans) {
//      console.log(key.includes(ans));
      judgment.textContent="Right!";
      judgment.style.display = 'block';
      var delayInMilliseconds = 2000; //2 second delay
      setTimeout(function() {
        judgment.style.display = 'none';
//        choice1.addEventListener("click",turnOnAnswer);
//       choice2.addEventListener("click",turnOnAnswer);
//       choice3.addEventListener("click",turnOnAnswer);
//       choice4.addEventListener("click",turnOnAnswer); 


      }, delayInMilliseconds);
      }
      else {
      judgment.textContent="Wrong!";
      judgment.style.display = 'block';
      var delayInMilliseconds = 2000; //2 second delay
      setTimeout(function() {
        judgment.style.display = 'none';
      }, delayInMilliseconds);
      secondsLeft=secondsLeft-10;
      }
  if (questionIndex<4){
    nextQuestion();
  } else {
    questionIndex++;
  } 
}   

//turnOnAnswer() {
//  judgment.style.display = 'block';
// }

function nextQuestion(){
  questionIndex++;
  displayQuestion(questionIndex)
}
secondsLeft=61;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    actualScore = secondsLeft;
    secondsLeft--;
    console.log(score);
    timer.textContent = "Timer:" + secondsLeft;
    if((secondsLeft < 0)||(questionIndex>4)) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      allDone();
    }
  }, 1000);
}
var winners = [];

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
    refresh2.style.display = 'block';
    refresh2.addEventListener("click",goBack);
  }
}
 function logScore() {
  score.style.display = 'none';
  finished.style.display = 'inline';
  textBeforeInput.style.display = 'inline';
  var currentInitials = initials.value;
console.log(currentInitials);
console.log 
if (localStorage.getItem("winners")) {
  winners = JSON.parse(localStorage.getItem("winners"));
  winners.push({winner: currentInitials, usersScore: actualScore});
  localStorage.setItem("winners", JSON.stringify(winners));
} else {
  localStorage.setItem("winners", '[]')
  winners = JSON.parse(localStorage.getItem("winners"));
  winners.push({winner: currentInitials, usersScore: actualScore});
  localStorage.setItem("winners", JSON.stringify(winners));
}
console.log(winners);
 showHighScores();
} 

function retrieveScores() {
  score.style.display = 'none';
if (localStorage.getItem("winners")) {
  winners = JSON.parse(localStorage.getItem("winners"));
} else {
  localStorage.setItem("winners", '[]')
}
console.log(winners);
 showHighScores();
} 




function showHighScores(){
//  secondsLeft = 0;
//  clearInterval(timerInterval);

  timer.style.display = 'none';
  question.style.display = 'none';
  choice1.style.display = 'none';
  choice2.style.display = 'none';
  choice3.style.display = 'none';
  choice4.style.display = 'none';
  judgment.style.display = 'none';
  score.style.display = 'none';

  //questionIndex=5;
  finished.style.display = "none";
  textBeforeInput.style.display = "none";
  initials.style.display = "none";
  submitInitials.style.display = "none";
  highScores.style.display = "none";
  displayHighscores.style.display = 'block';
  refresh.style.display = 'block';
  clearScores.style.display = 'block';
  winners.sort((a, b) => (a.usersScore < b.usersScore) ? 1 : -1);
  console.log(winners); 
  for (var i =0; i < winners.length; i++) { 
    var li = document.createElement('li');
    li.textContent = winners[i].winner + " - " + winners[i].usersScore;
    ol.appendChild(li);
  } 
  refresh.addEventListener("click",goBack);
  clearScores.addEventListener("click",clearHighscores)
}
function clearHighscores() {
  winners = [];
  localStorage.setItem("winners", JSON.stringify(winners));
  ol.style.display = 'none';
}

function goBack() {
  location.reload();
}