// Query Selectors
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer")
var inquiry = document.querySelector("#inquiry")
var possible1 = document.querySelector("#possible1")
var possible2 = document.querySelector("#possible2")
var possible3 = document.querySelector("#possible3")
var possible4 = document.querySelector("#possible4")
var questions = [
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Yes",
            "No ",
            "No ",
            "No "
        ]
    },
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Yes",
            "No ",
            "No ",
            "No "
        ]
    },
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Yes",
            "No ",
            "No ",
            "No "
        ]
    },
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Yes",
            "No ",
            "No ",
            "No "
        ]
    },
    {
        inquiry: "Do you like it?",
        correct: "Yes",
        possible: [
            "Yes",
            "No ",
            "No ",
            "No "
        ]
    }]

// The Main Function of the Program
function startQuiz() {
    var currentQuestionIndex = 0;

    function verification() {
        if (questions.possible = questions.correct) {
            console.log("Correct!")
            if (currentQuestionIndex <4) {
                currentQuestionIndex ++
            }
        } else {
            console.log("Incorrect! Please Try Again!")
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
            verification();
        });

        possible2.textContent = question.possible[1];
        let button2 = document.createElement("button");
        possible2.appendChild(button2);
        button2.textContent = "Select";
        button2.addEventListener("click", function () {
            verification();
        });

        possible3.textContent = question.possible[2];
        let button3 = document.createElement("button");
        possible3.appendChild(button3);
        button3.textContent = "Select";
        button3.addEventListener("click", function () {
            verification();
        });


        possible4.textContent = question.possible[3];
        let button4 = document.createElement("button");
        possible4.appendChild(button4);
        button4.textContent = "Select";
        button4.addEventListener("click", function () {
            verification();
        });         
    };

    function startTimer() {
        let seconds = 45;
        const interval = setInterval(function () {
            if (seconds === 0) {
                clearInterval(interval);
                alert("Time's Up!!!");
            }            
            console.log(seconds);
            timer.textContent = "Seconds Remaining: " + seconds;
            seconds--;
        }, 1000);
    };

    // startTimer();
    displayQuestion();
}




// Global Event Listeners
startButton.addEventListener("click", function () {
    startQuiz()
});