// Retrieve user initials and scores from local storage
var userInitials = localStorage.getItem("userInitials");
var userScore = localStorage.getItem("userScore");
var homeButton = document.getElementById("home-button");


var highScoresContainer = document.getElementById("high-scores-container");

if (userInitials && userScore) {
    var highScoreElement = document.createElement("div");
    highScoreElement.textContent = userInitials + ": " + userScore;
    highScoresContainer.appendChild(highScoreElement);
} else {
    highScoresContainer.textContent = "No high scores available.";
}

homeButton.addEventListener("click", function () {
    window.location.href = "index.html";
});
