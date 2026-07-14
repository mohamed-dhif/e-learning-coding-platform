// Names: Abdullah Al Wazzan 1080027, Mohamed Dhif 1089194
// Course: CSC307 Web Design and Programming
// Instructor: Dr. Farid Ibrahim

// Function to render HTML code
function renderHTML() {
    var htmlCode = document.getElementById("htmlInput").value;
    document.getElementById("output").innerHTML = htmlCode;
}

//Chapter1.html
function showGreeting() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerText = "Hello, " + name + "!";
}

// Chapter 2.html
function showLink() {
    var url = document.getElementById("urlInput").value;
    var link = "<a href='" + url + "'>Click here</a>";
    document.getElementById("link").innerHTML = link;

}

// Chapter 4.html
function applyBgColor() {
    var color = document.getElementById("bgColor").value;
    var testDiv = document.getElementById("testDiv");
    testDiv.style.backgroundColor = color;
}

// Chapter 5.html
function applyTextShadow() {
    var color = document.getElementById("textShadowColor").value;
    var shadowText = document.getElementById("shadowText");
    shadowText.style.textShadow = `2px 2px 5px ${color}`;
}

// Chapter 6.html
function showGreetingChapter6() {
    var name = document.getElementById("nameInputChapter6").value;
    alert("Hello, " + name + "! Welcome to JavaScript learning.");
}

// Chapter 7.html
function checkNumber() {
    var number = parseInt(document.getElementById("controlInput").value);
    var result = "";
    if (number > 10) {
        result = number + " is greater than 10.";
    } else {
        result = number + " is not greater than 10.";
    }
    document.getElementById("controlResult").innerHTML = result;
}

// Chapter 8.html
function showForLoopIterations() {
    var num = parseInt(document.getElementById("forLoopInput").value);
    var result = "";
    for (var i = 0; i < num; i++) {
        result += "Iteration " + i + "<br>";
    }
    document.getElementById("forLoopResult").innerHTML = result;
}

// Chapter 9.html
function showDiceRoll() {
    var result = rollDice();
    document.getElementById("diceResult").innerText = "You rolled a " + result;
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Check Quiz Answers
function checkQuiz(chapter) {
    var quizForm = document.getElementById("quizForm");
    var result = document.getElementById("quizResult");
    var score = 0;
    var totalQuestions = 0;

    if (chapter === 1) {
        totalQuestions = 1;
        var answer1 = quizForm.question1.value;
        if (answer1 === "a") {
            score++;
        }
    } else if (chapter === 2) {
        totalQuestions = 2;
        var answer1 = quizForm.question1.value;
        var answer2 = quizForm.question2.value;
        if (answer1 === "a") {
            score++;
        }
        if (answer2 === "a") {
            score++;
        }
    } else if (chapter === 3) {
        totalQuestions = 2;
        var answer1 = quizForm.question1.value;
        var answer2 = quizForm.question2.value;
        if (answer1 === "a") {
            score++;
        }
        if (answer2 === "a") {
            score++;
        }
    } else if (chapter === 4) {
        totalQuestions = 2;
        var answer1 = quizForm.question1.value;
        var answer2 = quizForm.question2.value;
        if (answer1 === "a") {
            score++;
        }
        if (answer2 === "a") {
            score++;
        }
    } else if (chapter === 5) {
        totalQuestions = 2;
        var answer1 = quizForm.question1.value;
        var answer2 = quizForm.question2.value;
        if (answer1 === "a") {
            score++;
        }
        if (answer2 === "a") {
            score++;
        }
    } else if (chapter === 6) {
        totalQuestions = 2;
        var answer1 = quizForm.question1.value;
        var answer2 = quizForm.question2.value;
        if (answer1 === "a") {
            score++;
        }
        if (answer2 === "d") {
            score++;
        }
    } else if (chapter === 7) {
        totalQuestions = 2;
        var answer1 = quizForm.question1.value;
        var answer2 = quizForm.question2.value;
        if (answer1 === "a") {
            score++;
        }
        if (answer2 === "b") {
            score++;
        }
    } else if (chapter === 8) {
        totalQuestions = 2;
        var answer1 = quizForm.question1.value;
        var answer2 = quizForm.question2.value;
        if (answer1 === "a") {
            score++;
        }
        if (answer2 === "a") {
            score++;
        }
    } else if (chapter === 9) {
        totalQuestions = 2;
        var answer1 = quizForm.question1.value;
        var answer2 = quizForm.question2.value;
        if (answer1 === "a") {
            score++;
        }
        if (answer2 === "c") {
            score++;
        }
    }

    result.innerText = "You scored " + score + "/" + totalQuestions + ".";
}