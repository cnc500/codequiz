var startcontainer = document.querySelector(".startcontainer");
var startbutton = document.querySelector(".startbtn");
var questioncontainer = document.querySelector(".questioncontainer");
var timer = document.querySelector(".timer");
var score = document.querySelector(".score");
var question = document.querySelector(".question");
var answerlist = document.querySelector(".answerList");
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
  }
]
function displayQuestion (){
  for (var i=0;i<questions.length;i++){
    console.log(questions[i].question);
    console.log(questions[i].choices);
    question.textContent=questions[i].question
  }
}
displayQuestion();

function checkAnswer(){

}
function nextQuestion(){
  
}


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
