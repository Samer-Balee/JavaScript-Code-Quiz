// Set of Questions
var allQuestions = [
    {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["1- <js>" , "2- <javascript>" , "3- <scripting" , "4- <script>"],
    correct: "4- <script>",    },
    {
    question: "How does a for loop start?",
    answers: ["1- for (i <= 5 ; i++)" , "2- for (i = 0 ; i <=5 ; i++)" , "3- for (i = 0 ; i <=5)" , "4- for i = 1 to 5 "],
    correct: "2- for (i = 0 ; i <=5 ; i++)",    },
    {
     question: "How to write an if statement in Java?",
    answers: ["1- if = 5" , "2- if i = 5 then" , "3- if i == 5 then" , "4- if (i == 5)"],
    correct: "4- if (i == 5)",    },
    {
    question: "How do you write Hello World in an alert box",
    answers: ["1- alert('Hello World')" , "2- msg('Hello World')" , "3- alertBox('Hello World')" , "4- msgBox('Hello World')"],
    correct: "1- alert('Hello World')",    },
    {
    question: "How can you add acomment in JavaScript",
    answers: ["1- <!this is a comment>" , "2- //this is a comment" , "3- *this is a comment*" , "4- <--this is a comment-->"],
    correct: "2- //this is a comment",    },

];
//declaring variables for elenents
var quizInitialEl = document.getElementById("initial-state");
var timeEl = document.querySelector("#count");
var highscoresEl = document.querySelector("#viewHighScore");
var startButtonEl = document.querySelector("#startBtn");
var questionDivEl = document.getElementById("question-div");
var askQuestionEl = document.getElementById("ask-question");
var firstCoiceAnsEl = document.getElementById("btn0");
var secondCoiceAnsEl = document.getElementById("btn1");
var thirdCoiceAnsEl = document.getElementById("btn2");
var forthCoiceAnsEl = document.getElementById("btn3");
// var lineEl = document.getElementById("line");
var ansCheckEl = document.getElementById("show-ans-result");
var scoreSectionEl = document.getElementById("score-section");
var scoreTitleEl = document.getElementById("score-title");
var finalScoreSpanEl = document.getElementById("final-score");
var inputEl = document.getElementById("initial-input");
var submitBtnEl = document.getElementById("submit-button");
var highscoresDivEl = document.getElementById("highscores");
var highscoresListEl = document.getElementById("highscores-list");
var backBtnEl = document.getElementById("back-button");
var clearBtnEl = document.getElementById("clear-button");


var correctAns = 0;
var questionNember = 0;
var scoreResult;
var questionIndex = 0;

var totalTime = 90;

//function to start quiz and set timer
function startQuiz() {
    questionIndex = 0;
    timeEl.textContent = totalTime;
    inputEl.textContent = "";

    quizInitialEl.setAttribute("style" , "display: none;");
    questionDivEl.setAttribute("style" , "display: block;");

    var startTimer = setInterval(function() {
        totalTime--;
        timeEl.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < allQuestions.length - 1) {
                quizFinish();
            }
        }
    },1000);

question();

}

function showQuestions() {
    
 question();

}


function question() {

    askQuestionEl.textContent = allQuestions[questionIndex].question;
    firstCoiceAnsEl.textContent = allQuestions[questionIndex].answers[0];
    secondCoiceAnsEl.textContent = allQuestions[questionIndex].answers[1];
    thirdCoiceAnsEl.textContent = allQuestions[questionIndex].answers[2];
    forthCoiceAnsEl.textContent = allQuestions[questionIndex].answers[3];
}

function checkAnswer (correct) {
    var lineEl = document.getElementById("line");
    lineEl.setAttribute("style" , "display: block;");
    ansCheckEl.setAttribute("style" , "display: block;"); 

    console.log(allQuestions[questionIndex].correct);
        console.log(allQuestions[questionIndex].answers[correct]);

    if (allQuestions[questionIndex].correct === allQuestions[questionIndex].answers[correct]) {
        
        correctAns ++;

        ansCheckEl.textContent = "Correct!"
        
        
    } else {

        totalTime -= 10;

        timeEl.textContent = totalTime;
        ansCheckEl.textContent = "Wrong!";
        
        
    }

    questionIndex ++;

    if (questionIndex < allQuestions.length) {
        
        question();
        
    } else {
        quizFinish();
    }
}

function answer1() { checkAnswer(0)};
function answer2() { checkAnswer(1)};
function answer3() { checkAnswer(2)};
function answer4() { checkAnswer(3)};







startButtonEl.addEventListener("click" , startQuiz);
firstCoiceAnsEl.addEventListener("click" , answer1);
secondCoiceAnsEl.addEventListener("click" , answer2);
thirdCoiceAnsEl.addEventListener("click" , answer3);
forthCoiceAnsEl.addEventListener("click" , answer4);









