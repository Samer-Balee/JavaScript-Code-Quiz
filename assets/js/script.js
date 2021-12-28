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
    answers: ["1- if = 5" , "2- if i = 5 then" , "3- if i == 5 then" , "4- if (i == 5) "],
    correct: "4- if (i == 5) ",    },
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
var timeEl = document.querySelector("#count");
var highscoresEl = document.querySelector("#viewHighScore");
var buttonEl = document.querySelector("#startBtn");
var questionDivEl = document.getElementById("question-div");
var askQuestionEl = document.getElementById("ask-question");
var firstCoiceAnsEl = document.getElementById("btn0");
var secondCoiceAnsEl = document.getElementById("btn1");
var thirdCoiceAnsEl = document.getElementById("btn2");
var forthCoiceAnsEl = document.getElementById("btn3");
var lineEl = document.getElementById("line");
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



