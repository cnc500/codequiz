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
]

startbutton.addEventListener("click", startQuiz); 

timer.style.display = 'none';
score.style.display = 'none';
// question.style.display = 'none';
highScores.style.display = 'none';
choice1.style.display = 'none';
choice2.style.display = 'none';
choice3.style.display = 'none';
choice4.style.display = 'none';



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
 // } 
}
//add event listenerfor answerButton to call functio
// 
/*choice1.addEventListener("click",nextQuestion);
choice2.addEventListener("click",nextQuestion);
choice3.addEventListener("click",nextQuestion);
choice4.addEventListener("click",nextQuestion);*/
choice1.addEventListener("click",checkAnswer);
choice2.addEventListener("click",checkAnswer);
choice3.addEventListener("click",checkAnswer);
choice4.addEventListener("click",checkAnswer);

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


  

function nextQuestion(){
  questionIndex++;
  displayQuestion(questionIndex)

 /* if (questionIndex<5) {
    displayQuestion(questionIndex)
  } else {
    var ans = event.target.textContent;
    if (key.includes(ans)) {
      console.log(key.includes(ans));
      judgment.textContent="Right!";
      var delayInMilliseconds = 3000; //3 second delay
      setTimeout(function() {
  //code to continue to be executed after 3 seconds
      }, delayInMilliseconds);
      allDone();
    }
      else {
      judgment.textContent="Wrong!";
      var delayInMilliseconds = 3000; //3 second delay
      setTimeout(function() {
  //code to continue to be executed after 3 seconds
      }, delayInMilliseconds);
      allDone();
      }
  } */
}
secondsLeft=61;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    score = secondsLeft;
    secondsLeft--;
    console.log(score);
    timer.textContent = "Timer:" + secondsLeft;

    if((secondsLeft === 0)||(questionIndex>4)) {

      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      allDone();
    }
  }, 1000);
}
console.log(secondsLeft);
function allDone() {
  timer.style.display = 'none';
  question.style.display = 'none';
  highScores.style.display = 'none';
  choice1.style.display = 'none';
  choice2.style.display = 'none';
  choice3.style.display = 'none';
  choice4.style.display = 'none';
  judgment.style.display = 'none';
 // score.style.display = 'block';
  finished.textContent = "All Done!";
  score.textContent = "Your final score is " + score + ".";
} 
