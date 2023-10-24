// Query Selectors
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer")
var inquiry = document.querySelector("#inquiry")
var possible1 = document.querySelector("#possible1")
var possible2 = document.querySelector("#possible2")
var possible3 = document.querySelector("#possible3")
var possible4 = document.querySelector("#possible4")
var score = 0

var questions = [
    {
        inquiry: "WHhat can I do to improve my personal life?",
        correct: "Examine my personal behavior, and develop changes based on who I want to be.",
        possible: [
            "Nothing, I'm good enough as I am.",
            "Continue doing what I'm doing now without any changes or improvements.",
            "Examine my personal behavior, and develop changes based on who I want to be.",
            "Be consumed by media."
        ]
    },
    {
        inquiry: "What insights have you gained from being alive?",
        correct: "Introspection can reveal secrets about ones self that allow you to reflect with improved perception.",
        possible: [
            "None, because existence is a lie.",
            "Introspection can reveal secrets about ones self that allow you to reflect with improved perception.",
            "Meaning in reality is fools errand, bent on inflicting as much suffering on ones self as possible.",
            "Love is dead."
        ]
    },
    {
        inquiry: "Is the quiz difficult so far?",
        correct: "Yes",
        possible: [
            "Yes",
            "It shouldn't be.",
            "Nothing is hard if you put your mind to it.",
            "No"
        ]
    },
    {
        inquiry: "Has today been ruined by a misshapenstance this morning?",
        correct: "Only if I allow the emotions I experienced to echo throughout the rest of my experiences today.",
        possible: [
            "Figuratively speaking, yes.",
            "Yes",
            "Only if I allow the emotions I experienced to echo throughout the rest of my experiences today.",
            "No"
        ]
    },
    {
        inquiry: "What is the expected response to this quiz?",
        correct: "For the user to become enriched with the ability to critically examine themselves in a way that will provide self improvement.",
        possible: [
            "For the user to become emburdened with the weight of realities finite nature.",
            "To create a religion of the users.",
            "For the user to become enriched with the ability to critically examine themselves in a way that will provide self improvement.",
            "To allow the user to become lesser then he is now, ensnaring his mind to cause"
        ]
    }]

function highScores() {
    var userInitials = prompt("Enter your initials:");
    var userScore = score;

    // Store the user's initials and score in localStorage
    localStorage.setItem("userInitials", userInitials);
    localStorage.setItem("userScore", userScore);
    window.location.href = "high-scores.html"
}
// The Main Function of the Program
function startQuiz() {
    var currentQuestionIndex = 0;

    function verification(selectedAnswer) {
        if (selectedAnswer === questions[currentQuestionIndex].correct) {
            console.log("Correct!");
            score++;
            console.log("Score: " + score);
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                stopTimer();
                highScores();
            }
        } else {
            console.log("Incorrect! Please Try Again!");
            // Implement logic to deduct time for incorrect answers
        }
    }


    function displayQuestion() {

        let question = questions[currentQuestionIndex];

        inquiry.textContent = question.inquiry;
        
        possible1.textContent = question.possible[0];
        let button1 = document.createElement("button");
        possible1.appendChild(button1);
        button1.textContent = "Select";
        button1.addEventListener("click", function () { 
            verification(question.possible[0]);
        });

        possible2.textContent = question.possible[1];
        let button2 = document.createElement("button");
        possible2.appendChild(button2);
        button2.textContent = "Select";
        button2.addEventListener("click", function () {
            verification(question.possible[1]);
        });

        possible3.textContent = question.possible[2];
        let button3 = document.createElement("button");
        possible3.appendChild(button3);
        button3.textContent = "Select";
        button3.addEventListener("click", function () {
            verification(question.possible[2]);
        });


        possible4.textContent = question.possible[3];
        let button4 = document.createElement("button");
        possible4.appendChild(button4);
        button4.textContent = "Select";
        button4.addEventListener("click", function () {
            verification(question.possible[3]);
        });         
    };

    let interval;

    function startTimer() {
        let seconds = 45;
        interval = setInterval(function () {
            if (seconds === 0) {
                clearInterval(interval);
                alert("Time's Up!!!");
            }            
            console.log(seconds);
            timer.textContent = "Seconds Remaining: " + seconds;
            seconds--;
        }, 1000);
    };

    function stopTimer() {
        clearInterval(interval);
    }

    startTimer();
    displayQuestion();
}

// Global Event Listeners
startButton.addEventListener("click", function () {
    startQuiz()
});