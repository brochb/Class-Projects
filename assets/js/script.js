// Query Selectors
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer")
var quiz = document.querySelector("#quiz")
var possible1 = document.querySelector("#possible1")
var possible2 = document.querySelector("#possible2")
var possible3 = document.querySelector("#possible3")
var possible4 = document.querySelector("#possible4")
var questions = [
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Y es",
            "No",
            "No",
            "No"
        ]
    },
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "yes",
            "No",
            "No",
            "No"
        ]
    },
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Yes",
            "No",
            "No",
            "No"
        ]
    },
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Yes",
            "No",
            "No",
            "No"
        ]
    },
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Yes",
            "No",
            "No",
            "No"
        ]
    }]

// The Main Function of the Program
function startQuiz() {
    var currentQuestionIndex = 0;

    function displayQuestion() {
        var question = questions[currentQuestionIndex];
        quiz.textContent = questions.title
            // possible1.textContent = questions.possible[0]
            // possible1.textContent = questions.possible[1]
            // possible2.textContent = questions.possible[2]
            // possible3.textContent = questions.possible[3]
        }


    function startTimer() {
        let seconds = 45;
        const interval = setInterval(function () {
            if (seconds <= 0) {
                clearInterval(interval);
                console.log("Loss!");

            }

            console.log(seconds);
            timer.textContent = "Seconds Remaining: " + seconds;
            seconds--;
        }, 1000);
    }
    // startTimer();
}

    // function startQuestion() {
    //     selectQuestion()
    //     // quiz.textContent = currentQuestion.inquiry
    //     // quiz.textContent = currentQuestion.possible



    // }
    // startQuestion();


// Event Listeners
startButton.addEventListener("click", function () {
    startQuiz()
});



