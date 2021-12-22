var questionContent = [
    {
        question: "Which of these is NOT like the others?",
        options: ["Apples", "Bananas", "Oranges", "Potatoes"],
        correct: "Potatoes"
    },
    {
        question: "Which of these is NOT like the others?",
        options: ["Spoon", "Fork", "Knife", "Car"],
        correct: "Car"
    },
    {
        question: "Which of these is NOT like the others?",
        options: ["Volleyball", "Soccer", "Swimming", "Drinking Coffee"],
        correct: "Drinking Coffee"
    },
    {
        question: "Which of these is NOT like the others?",
        options: ["Red", "Blue", "Yellow", "Dragons"],
        correct: "Dragons"
    },   
];

var time1;
var secondLeft = 60;
var timerCount;

var questions = "";
var answer = "";
var highscore = 0;

let startButton = document.getElementById("start-code-btn");
let timeEl = document.querySelector(".time");
let questionEl = document.querySelector("#question");
let answerEl = document.querySelector(".correct-answer");
let correctEl = "";
let currentQuestion = questions.length - 1;
let highscoreEl = document.querySelector("view-scores");
let initEl = document.getElementById("init");
let submitBtn = document.getElementById("submit");

var allScore = [];
var questionIndex = 0;

let totalPoints = 0;
const totalQuestionContent = 4;

var name2 = "";

function start() {
    time();
    getQuestion();
}

function time() {
    let timeInterval = setInterval(function () {
      if (secondLeft === 0 || questionIndex >= questionContent.length) {
        clearInterval(timeInterval);
        timeEl.textContent = "QUIZ OVER!!"
        document.querySelector("#scoreMenu").setAttribute("style", "display: block;")
        document.querySelector("#score").textContent = totalPoints
      } else {
        secondLeft--;
        timeEl.textContent = secondLeft;
      }
    }, 1000);
  }

  function getQuestion() {
    var index = 0;
    questionEl.innerHTML = ""
    answerEl.innerHTML = ""
    if (questionIndex < questionContent.length) {
      questionEl.append(questionContent[questionIndex].question);
      questionContent[questionIndex].options.forEach(function (singleanswer) {
        var rightButton = document.createElement("button");
        rightButton.id = "rightButton" + [index];
        rightButton.textContent = singleanswer;
        answerEl.append(rightButton);
    index++
      });
    }}

    document.addEventListener("click", function(event){
    if (event.target.nodeName == 'BUTTON' && document.getElementById(event.target.id).textContent !== 'Start Quiz'){ 
    if (document.getElementById(event.target.id).textContent == "Submit"){
    }
    else if(document.getElementById(event.target.id).textContent === questionContent[questionIndex].correct){
    console.log('CORRECT') 
    textContent = "You are right"
    totalPoints+= 10;
    questionIndex++;
    getQuestion()
    } else {
    console.log('INCORRECT')
    secondLeft -= 10
    questionIndex++;
    getQuestion()
    }
    }
    });
    
    function saveHighscore() {
      var init = initEl.value.trim();
       if (init !== "") {
         var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
    
         var newScore = {
           score: totalPoints,
           init: init
         };
    
         highscore.push(newScore);
         window.localStorage.setItem("highscore", JSON.stringify(highscore));
    
         window.location.href = "highscores.html"
       }
    }
    
    function checkEnter(event) {
      if (event.key === "Enter"){
        saveHighscore();
      }
    }
    
    submitBtn.onclick = saveHighscore;
    
    initEl.onkeyup = checkEnter; 
    
    startButton.addEventListener("click", start)