document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});


function runGame(gameType) {
  let num1 =  Math.floor(Math.random() * 25) + 1;
  let num2 =  Math.floor(Math.random() * 25) + 1;
  getElementById("answer-box").textContent = "";
  if (gameType === "addition") {
      displayAdditionQuestion(num1, num2);
  } else if (gameType === "subtraction") {
      displaySubtractionQuestion(num1, num2);
  } else if (gameType === "multiplication") {
      displayMultiplicationQuestion(num1, num2);
  } else if (gameType === "division") {
      displayDivisionQuestion(num1, num2);
  } else {
      alert(`Unknown game type ${gameType}`);
      throw `Unknown game type ${gameType}, aborting!`;
  }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        incrementScore();
    } else {
        incrementIncorrect();
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtraction"];
    } else if (operator === "*") {
        return [operand1 * operand2, "multiplication"];
    } else if (operator === "/") {
        while (operand1 % operand2 != "0") {
            operand1 = Math.floor(Math.random() * 24) + 2;
            operand2 = Math.floor(Math.random() * 8) + 1;
        }
        return [operand1 * operand2, "division"];
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`;
    }
}

function incrementScore() {
    let score = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++score;
}

function incrementIncorrect() {
    let incorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++incorrect;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operator").textContent = "+";
    document.getElementById("operand2").textContent = operand2;
}

function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operator").textContent = "-";
    document.getElementById("operand2").textContent = operand2;
}

function displayMultiplicationQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operator").textContent = "*";
    document.getElementById("operand2").textContent = operand2;
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operator").textContent = "/";
    document.getElementById("operand2").textContent = operand2;
}