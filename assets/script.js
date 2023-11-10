


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

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else if (Questions[currQuestion].a[selectedAns].isIncorrect) {
        score--;
        console.log("Wrong")
        InputDeviceInfo.textContent = 'Wrong' }
 else {
    nextQuestion();
}
}


// var currentQuestion = 0;

// var questionData = questions[currentQuestion];

// questionData.title;
// questionData.answers;

// var button = document.createElement('button')

// button.textcontent = 









// for (let i = 0; i < questionData.choices.length; i++) {
//     var li = document.createElement('li');
// }

function startTimer() {
    var counter = 60;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('YOU HAVE FAILED');
            clearInterval(counter);
        }
    }, 1000);
}
function start() {
    document.getElementById("count").style = "color:green;";
    startTimer();
};