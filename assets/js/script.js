var startcontainer = document.querySelector(".startContainer");
var startbutton = document.querySelector(".startbtn");
var questionContainer = document.querySelector(".questionContainer");
var timer = document.querySelector(".timer");
var score = document.querySelector(".score");
var question = document.querySelector(".question");
var answerList = document.querySelector(".answerList");
var highScores = document.querySelector(".highScores");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var questionIndex = 0;



var questions = [
  {
    question:"The acronym JSON stands for",
    choices:["JavaScript Open Nomenclature","JavaSript Object Nomenclature","JavaScript Open Network","JavaScript Object Notation"],
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
question.style.display = 'none';
highScores.style.display = 'none';

function startQuiz (){
  console.log("startQuiz");
  question.style.display = 'block';
  startcontainer.style.display = 'none';
  timer.style.display = 'block';
  highScores.style.display = 'block';
  displayQuestion(0);
  //start timer

}

function displayQuestion (i){
  //for (var i=0;i<questions.length;i++){
    console.log(questions[i].question);
    console.log(questions[i].choices);
    question.textContent=questions[i].question;
    answer1.textContent=questions[i].choices[0];
    answer2.textContent=questions[i].choices[1];
    answer3.textContent=questions[i].choices[2];
    answer4.textContent=questions[i].choices[3];
 // } 
}
//add event listenerfor answerButton to call functio
// 

/*function checkAnswer(){
  if true {}
}
function nextQuestion(){
  questionIndex++;
  if questionIndex<5 {
  displayQuestion(questionIndex);
  } else
  allDone ();
  //stop timer in allDone
}
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time:" + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

question1 = "The acronym JSON stands for";
choice1 = ["JavaScript Open Nomenclature","JavaSript Object Nomenclature","JavaScript Open Network","JavaScript Object Notation"];
answer1 = "JavaScript Object Notation";
question2 = "JSON is commonly used for";
choice2 = ["sending data between computers.","storing JS objects as JSON strings in local storage.","transmitting data in web applications.","All of the above"];
answer2 = "All of the above";
question3 = "The acronym API stands for";
choice3 = ["Advanced Programming Initiative","Application Programming Interface","Applied Performance Interoperability","Adverse Predictable Interference"];
answer3 = "Application Programming Interface";
question4 = "The acronym DOM stands for";
choice4 = ["Document Object Model","Domain Operability Management","Definitive Operating Model","Domain Operating Model"];
answer4 = "Document Object Model";
question5 = "Which statement is not true?"
choice5 = ["A method is a prebuilt function.","An object is a collection of properties.","A declared function independently executes a particular task.","Georgia Tech is a premiere, technical, educational institution!"];
*/