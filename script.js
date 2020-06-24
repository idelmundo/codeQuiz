//Create HTML with header, h1, button and timmer.
// event handler, while loop
// We will need to make a unique id for each items.
// Make 5 questions about anything 
// record high scores and name. 

var quizBox = document.getElementById("quiz");
var submitButton = document.getElementById("submit");
var highscorebox = document.getElementById("result");
var timer = document.getElementById("time");
var startOfquestion = document.getElementById("question");
var answersOfQuestion = document.getElementById("answers");
var counter = 0; //move to the next question
var time = 15; //give 15sec total time game
var score = 0;
var intialTime; // helps clear interval stop timer


function start() {
    initialTime = setInterval(gameTime, 1000);
    nextQuestion();
}

function compareAnswer() {
    if (this.textContent === myQuestions[counter].correctAnswer) {
        score++, time += 2
        alert(score);
    } else {
        time -= 2;
    }
    counter++
    nextQuestion()
}

function nextQuestion() {
    // clear old qs 
    if (counter <= 4) {


        startOfquestion.textContent = myQuestions[counter].question
        answersOfQuestion.innerHTML = "";
        myQuestions[counter].answer.forEach(element => {
            var answerButton = document.createElement("button");
            answerButton.textContent = element;
            answerButton.onclick = compareAnswer;
            answersOfQuestion.appendChild(answerButton);
        });
    } else {
        endGame();
    }
}

// use modal ffor high score. 

function gameTime() {
    time--;
    timer.textContent = time;
    if (time <= 0) {
        endGame()
    }
}
// endGame only clears questions.
function endGame() {
    clearInterval(initialTime);
    // highScore input needs to be recored 
    // const highscorebox = document.querySelector("#showHighscore")
    // quiz.style.display = "block";
    const quiz = document.querySelector("#quiz"); // at the end of the questions it goes back to the main page. 
    quiz.style.display = "none";
}


// Question starts here
const myQuestions = [{
        question: "What car did Tesla produce first?",
        answer: [
            "Model S",
            "Model X",
            "Model Y",
            "Roadster"
        ],
        correctAnswer: "Roadster"
    },
    {
        question: "What type of body style is Rivian making?",
        answer: [
            "Coupe",
            "Truck",
            "Sedan",
            "Hatch"
        ],
        correctAnswer: "Truck"
    },
    {
        question: "What is cruise trying to establish?",
        answer: [
            "Automotive",
            "Robot",
            "Autopilot",
            "Self-driving vehicle service"
        ],
        correctAnswer: "Self-driving vehicle service"
    },
    {
        question: "What is cruise trying to establish?",
        answer: [
            "Automotive",
            "Robot",
            "Autopilot",
            "Self-driving vehicle service"
        ],
        correctAnswer: "Self-driving vehicle service"
    },
    {
        question: "How much is tesla net worth",
        answer: [
            "$15 billion",
            "$24.6 billion",
            "$10 billion",
            "$25 million"
        ],
        correctAnswer: "$24.6 billion"
    },
]

// submit button 
submitButton.addEventListener('click', start);