/* global variables */

var points = 0;
var rounds = 0;
var level = 1;
var currentResult;
var correctAnswer;

function checkInput() {
    if(document.getElementById("id-input").value == currentResult) {
        document.getElementById("id-input").style.background = "green";
        points++;
    } else {
        document.getElementById("id-input").style.background = "red";
    }

    setTimeout(giveTask, 1000);
    return false;
}

function saveProgress() {
    localStorage.setItem("points", points);
    localStorage.setItem("rounds", rounds);
    localStorage.setItem("level", level);
}
    
function loadProgress() {
    if(localStorage.getItem("rounds") != null) {
        points = parseInt(localStorage.getItem("points"));
        rounds = parseInt(localStorage.getItem("rounds"));
        level = parseInt(localStorage.getItem("level"));
    }
    document.getElementById("id-load-paragraph").innerHTML = "Level " + level + " Points " + points + " Rounds " + rounds + " have been succesfully loaded.";
}

function resetProgress() {
    localStorage.clear();
    points = 0;
    rounds = 0;
    level = 1;
    return;
}

function giveTask() {
    document.getElementById("id-display-container").classList.remove("cl-display-container-hide");
    document.getElementById("id-display-container").classList.add("cl-display-container-show");
    document.getElementById("id-button-container").classList.remove("cl-button-container-show");
    document.getElementById("id-button-container").classList.add("cl-button-container-hide");
    document.getElementById("id-save-button-container").classList.remove("cl-save-button-container-hide");
    document.getElementById("id-save-button-container").classList.add("cl-save-button-container-show");
    document.getElementById("id-load-container").classList.remove("cl-save-button-container-show");
    document.getElementById("id-load-container").classList.add("cl-save-button-container-hide");
    document.getElementById("id-input").style.background = "#EEDF7A";
    document.getElementById("id-input").value = "";

    rounds++;
    if ( points > level * 5 ) {
    level++;
    }

    var output;
    var firstNumber = Math.round(Math.random() * level * 5 +0.5);
    var secondNumber = Math.round(Math.random() * level* 5 +0.5);
    var operator = Math.round(Math.random() * 2 + 0.5);

    if (level === 1) {
        output = `What is ${firstNumber} + ${secondNumber}?`;
        currentResult = firstNumber + secondNumber;
    } else if (level === 2) {
        switch (operator) {
            case 1:
                output = `What is ${firstNumber} + ${secondNumber}?`;
                currentResult = firstNumber + secondNumber;
            break;
            case 2:
                if(secondNumber > firstNumber) {
                    var tempNumber = firstNumber;
                    firstNumber = secondNumber;
                    secondNumber = tempNumber;
                }
                output = `What is ${firstNumber} - ${secondNumber}?`;
                currentResult = firstNumber - secondNumber;
            break;
            default:
                alert(`What"s that brother?`);
    }} else if (level === 3) {
        operator = Math.round(Math.random() * 3 + 0.5);
        switch (operator) {
            case 1:
                output = `What is ${firstNumber} + ${secondNumber}?`;
                currentResult = firstNumber + secondNumber;
            break;
            case 2:
                if(secondNumber > firstNumber) {
                    var tempNumber = firstNumber;
                    firstNumber = secondNumber;
                    secondNumber = tempNumber;
                }
                output = `What is ${firstNumber} - ${secondNumber}?`;
                currentResult = firstNumber - secondNumber;
            break;
            case 3:
                output = `What is ${firstNumber} * ${secondNumber}?`;
                currentResult = firstNumber * secondNumber;
            break;
            default:
                alert(`What"s that brother?`);
    }} else if (level === 4) {
        operator = Math.round(Math.random() * 4 + 0.5);
        switch (operator) {
            case 1:
                output = `What is ${firstNumber} + ${secondNumber}?`;
                currentResult = firstNumber + secondNumber;
            break;
            case 2:
                if(secondNumber > firstNumber) {
                    var tempNumber = firstNumber;
                    firstNumber = secondNumber;
                    secondNumber = tempNumber;
                }
                output = `What is ${firstNumber} - ${secondNumber}?`;
                currentResult = firstNumber - secondNumber;
            break;
            case 3:
                output = `What is ${firstNumber} * ${secondNumber}?`;
                currentResult = firstNumber * secondNumber;
            break;
            case 4:
                if(secondNumber > firstNumber) {
                    var tempNumber = firstNumber;
                    firstNumber = secondNumber;
                    secondNumber = tempNumber;
                }
                do {
                    firstNumber = Math.round(Math.random() * level * 5 +0.5);
                    secondNumber = Math.round(Math.random() * level * 5 +0.5);
                } while (currentResult = (firstNumber / secondNumber) % 2 !== 0);
                output = `What is ${firstNumber} / ${secondNumber}?`;
                currentResult = firstNumber  / secondNumber;
            break;
            default:
                alert(`What"s that brother?`);
    }} else if (level === 5) {
        operator = Math.round(Math.random() * 5 + 0.5);
        switch (operator) {
            case 1:
                output = `What is ${firstNumber} + ${secondNumber}?`;
                currentResult = firstNumber + secondNumber;
            break;
            case 2:
                if(secondNumber > firstNumber) {
                    var tempNumber = firstNumber;
                    firstNumber = secondNumber;
                    secondNumber = tempNumber;
                }
                output = `What is ${firstNumber} - ${secondNumber}?`;
                currentResult = firstNumber - secondNumber;
            break;
            case 3:
                output = `What is ${firstNumber} * ${secondNumber}?`;
                currentResult = firstNumber * secondNumber;
            break;
            case 4:
                if(secondNumber > firstNumber) {
                    var tempNumber = firstNumber;
                    firstNumber = secondNumber;
                    secondNumber = tempNumber;
                }
                do {
                    firstNumber = Math.round(Math.random() * level * 5 +0.5);
                    secondNumber = Math.round(Math.random() * level* 5 +0.5);
                } while (currentResult = (firstNumber / secondNumber) % 2 !== 0);
                output = `What is ${firstNumber} / ${secondNumber}?`;
                currentResult = firstNumber / secondNumber;
            break;
            case 5:
                firstNumber = Math.round(Math.random() * 9 + 0.5);
                secondNumber = Math.round(Math.random() * 3 +0.5);
                output = `What is ${firstNumber} ** ${secondNumber}?`;
                currentResult = firstNumber ** secondNumber;
            break;
            default:
                alert(`What"s that brother?`);
    }}

    if (level === 6) {
        document.getElementById("id-display-container").classList.remove("cl-display-container-show");
        document.getElementById("id-display-container").classList.add("cl-display-container-hide");
        document.getElementById("id-save-button-container").classList.add("cl-save-button-container-hide");
        document.getElementById("id-save-button-container").classList.remove("cl-save-button-container-show");
        document.getElementById("id-subtext-paragraph").innerHTML = "Congratulations Hero! You have saved the realm with your calculus prowess!"
        document.getElementById("id-winning-container").classList.remove("cl-winning-container-hide");
        document.getElementById("id-winning-container").classList.add("cl-winning-container-show");
        document.getElementById("id-finish-container").classList.remove("cl-finish-container-hide");
        document.getElementById("id-finish-container").classList.add("cl-finish-container-show");
        document.getElementById("id-finish-button-container").classList.remove("cl-finish-button-container-hide");
        document.getElementById("id-finish-button-container").classList.add("cl-finish-button-container-show");
    }

    document.getElementById("id-answer-paragraph").innerHTML = "Level " + level + " Points " + points + " Rounds " + rounds;
    document.getElementById("id-question-paragraph").innerHTML = output;
}

function quitGame() {
    document.getElementById("id-display-container").classList.add("cl-display-container-hide");
    document.getElementById("id-display-container").classList.remove("cl-display-container-show");
    document.getElementById("id-button-container").classList.add("cl-button-container-show");
    document.getElementById("id-button-container").classList.remove("cl-button-container-hide");
    document.getElementById("id-save-button-container").classList.add("cl-save-button-container-hide");
    document.getElementById("id-save-button-container").classList.remove("cl-save-button-container-show");
}

function newGame() {
    document.getElementById("id-finish-container").classList.remove("cl-finish-container-show");
    document.getElementById("id-finish-container").classList.add("cl-finish-container-hide");
    document.getElementById("id-winning-container").classList.remove("cl-winning-container-show");
    document.getElementById("id-winning-container").classList.add("cl-winning-container-hide");
    document.getElementById("id-finish-container").classList.remove("cl-finish-container-show");
    document.getElementById("id-finish-container").classList.add("cl-finish-container-hide");
    document.getElementById("id-finish-button-container").classList.remove("cl-finish-button-container-show");
    document.getElementById("id-finish-button-container").classList.add("cl-finish-button-container-hide");
    resetProgress();
    saveProgress();
    giveTask();

}

