var startcontainer = document.querySelector(".startContainer");
var startbutton = document.querySelector(".startbtn");
var questionContainer = document.querySelector(".questionContainer");
var secondsLeft = document.querySelector(".seconds");
var score = document.querySelector(".score");
var question = document.querySelector(".question");
var answerList = document.querySelector(".answerList");
var highScores = document.querySelector(".highScores");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var timer = document.querySelector(".timer");
var judgment = document.querySelector(".judgment");
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
question.style.display = 'none';
highScores.style.display = 'none';
answer1.style.display = 'none';
answer2.style.display = 'none';
answer3.style.display = 'none';
answer4.style.display = 'none';



function startQuiz (){
  console.log("startQuiz");
  question.style.display = 'block';
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
    answer1.style.display = 'block';
    answer2.style.display = 'block';
    answer3.style.display = 'block';
    answer4.style.display = 'block';
    answer1.textContent=questions[i].choices[0];
    answer2.textContent=questions[i].choices[1];
    answer3.textContent=questions[i].choices[2];
    answer4.textContent=questions[i].choices[3];
 // } 
}
//add event listenerfor answerButton to call functio
// 
answer1.addEventListener("click",nextQuestion);
answer2.addEventListener("click",nextQuestion);
answer3.addEventListener("click",nextQuestion);
answer4.addEventListener("click",nextQuestion);
answer1.addEventListener("click",checkAnswer);
answer2.addEventListener("click",checkAnswer);
answer3.addEventListener("click",checkAnswer);
answer4.addEventListener("click",checkAnswer);

var key = [questions[0].answers,
          questions[1].answers,
          questions[2].answers,
          questions[3].answers,
          questions[4].answers];
console.log(key);

function checkAnswer(event){
    event.target;
    var ans = event.target.textContent
    console.log(event);
    console.log(event.target)
    console.log(event.target.textContent)
    if (key.includes(ans)) {
      console.log(key.includes(ans));
      judgment.textContent="Right!";
    }
      else {
      judgment.textContent="Wrong!";
      secondsLeft=secondsLeft-10;
      }
}   


  

function nextQuestion(){
  questionIndex++;
  if (questionIndex<5) {
    displayQuestion(questionIndex)
  } else {
  allDone ();
  //stop timer in allDone
  }
}
secondsLeft=61;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    
    secondsLeft--;
    timer.textContent = "Timer:" + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      allDone();
    }
  }, 1000);
}

function allDone() {

}
