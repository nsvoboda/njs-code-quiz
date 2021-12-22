// Set all elements to be used in this script
var viewHSLink = document.getElementById("view-hs-link")
var timeDisplay = document.getElementById("time-display")
var startQuizBtn = document.getElementById("start-quiz-btn")
var quizQuestion = document.getElementById("question-display")
var quizAnswers = document.getElementById("answer-list")
var feedback = document.getElementById("feedback")
var scoreDisplay = document.getElementById("score-display")
var getInitials = document.getElementById("initials-input")
var submitInitials = document.getElementById("submit-initials-btn")
var highScoreList = document.getElementById("highscore-list")
var goBack = document.getElementById("go-to-starting-page-btn")
var clearHighScores = document.getElementById("clear-highscores-btn")

// What happens when hit start button
startQuizBtn.addEventListener('click', function(){
    "starting-page".classList.add("page-visible");
})