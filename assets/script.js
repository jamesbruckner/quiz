const Questions = [{
    q: "What is Green?",
    a: [{ text: 'Leaf', isCorrect: true },
    { text: 'An Idea', isIncorrect: true },
    { text: 'An Ideal', isIncorrect: true },
    { text: 'A color', isIncorrect: true }
    ]
},
{
    q: "These boots are made for:",
    a: [{ text: "Bootin'", isIncorrect: true },
    { text: "Scootin'", isCorrect: true },
    { text: "Goofin'", isIncorrect: true },
    { text: "Shootin'", isIncorrect: true }
    ]
},
{
    q: "What is the most profitable franchise?",
    a: [{ text: 'Star Wars', isIncorrect: true },
    { text: 'Disney', isIncorrect: true },
    { text: 'Pokemon', isCorrect: true },
    { text: 'Marvel', isIncorrect: true }
    ]
},
{
    q: "How many books are too many?",
    a: [{ text: 'A few', isIncorrect: true },
    { text: 'Lots', isIncorrect: true },
    { text: '7', isIncorrect: true },
    { text: 'four hundred thousand', isCorrect: true }
    ]
},
{
    q: "Scariest Cryptid?",
    a: [{ text: 'Bigfoot', isCorrect: true },
    { text: 'Skinwalker', isIncorrect: true },
    { text: 'Skywalker', isIncorrect: true },
    { text: 'Big-footed sky-skinner', isIncorrect: true }
    ]
}
]

let currentQuestion = 0
let score = 0

function start() {
    document.getElementById("count").style = "color:green";
    startTimer();
    loadQuestion();
};

function loadQuestion() {
    const question = document.getElementById("question")
    const option = document.getElementById("option")

    question.textContent = Questions[currentQuestion].q;
    option.innerHTML = ""

    for (let i = 0; i < Questions[currentQuestion].a.length; i++) {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currentQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        option.appendChild(choicesDiv);
        }
}

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}. Hope you had fun.`
}


function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("option").remove()
        document.getElementById("question").remove()
        document.getElementById("submitButton").remove()
        document.getElementById("startButton").remove()
        document.getElementById('count').remove()
        loadScore();
    }
}

var counter = 60

function checkAnswer() {
    const selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currentQuestion].a[selectedAnswer].isCorrect) {
        score++;
        console.log("Correct")
        // var right = document.getElementById('right')
        // right.innerText = "Nice."
        // document.getElementById('wrong').remove()
        nextQuestion();

        //I wanted it to show a right or wrong signifier but couldnt get them to remove and replace after the next question was answered
    }
    else if (Questions[currentQuestion].a[selectedAnswer].isIncorrect) {
        score--;
        counter -= 5;
        console.log("Wrong")
        // var wrong = document.getElementById('wrong')
        // wrong.innerText = "WRONG."
        // document.getElementById('right').remove()
        nextQuestion();
    }
}

function startTimer() {
    var counter = 60;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerText = `${counter} seconds remain`
        } if (counter === 0) {
            span.innerText = `YOU HAVE FAILED.`
            clearInterval(counter);
        }
    }, 1000);
}
