// Operate with 2 number
function addition (a, b) {
	return +a + +b;
}

function subtract (a, b) {
	return +a - +b;
}

function multiply (a, b) {
	return +a * +b;
}

function divide (a, b) {
    if(a == "0" || b == "0") {
        alert("You can\'t Divide by Zero!");
    } else {
        return +a / +b;
    }
}

function operate(operator, a, b) {
    if(operator == "+") {
        return addition(a,b);
    } else if(operator == "-") {
        return subtract(a,b);
    } else if(operator == "x") {
        return multiply(a,b);
    } else if(operator == "/") {
        return divide(a,b);
    }
}

const userInput = document.querySelector(".userInput");
const result = document.querySelector(".result");

let numberBtns = [];
for(let i = 0; i < 10; i++) {
    numberBtns[i] = document.getElementById(`${i}`);
    numberBtns[i].addEventListener("click", () => userInput.textContent += `${i}`);
}

const decPoint = document.getElementById("point");
decPoint.addEventListener("click", () => { 
    userInput.textContent += "."
});

const div = document.getElementById("divide");
div.addEventListener("click", () => userInput.textContent += "/");

const mul = document.getElementById("multiply");
mul.addEventListener("click", () => userInput.textContent += "x");

const sub = document.getElementById("substract");
sub.addEventListener("click", () => userInput.textContent += "-");

const add = document.getElementById("add");
add.addEventListener("click", () => userInput.textContent += "+");

// evaluate when = is clicked
const eval = document.getElementById("eval");
eval.addEventListener("click", evaluate);

// remove last character from user input
const backspace = document.getElementById("back");
backspace.addEventListener("click", clearCharacter);

function evaluate() {
    // 2 arrays, 1 for number other for signs
    let numbers = userInput.textContent.split(/[-+x/]/);
    let operators = userInput.textContent.match(/[-+x/]/g);
    
    // combine arrays
    let expression = numbers;
    let i = 0;
    let j = 1;
    while(i < operators.length) {
        expression.splice(j, 0, operators[i]);
        i++;
        j = j + 2;
    }

    let operationResult = 0;
    let indexOfOperator;

    while(expression.includes("x") || expression.includes("/")) {
       expression.forEach(element => {
            if(element == "x" || element == "/") {
                indexOfOperator = expression.indexOf(element);
                operationResult = operate(expression[indexOfOperator], expression[indexOfOperator-1], 
                    expression[indexOfOperator+1]);
                expression.splice(indexOfOperator-1, 3, operationResult.toString());
            }
        });
    }
    
    while(expression.includes("-") || expression.includes("+")) {
        expression.forEach(element => {
            if (element == "-" || element == "+") {
                indexOfOperator = expression.indexOf(element);
                operationResult = operate(expression[indexOfOperator], expression[indexOfOperator-1], 
                    expression[indexOfOperator+1]);
                expression.splice(indexOfOperator-1, 3, operationResult.toString());
            }
        });
    }

    result.textContent = `${Math.round(operationResult * 100)/100}`;
    decPoint.disabled = false
}

// clear function
const clear = document.getElementById("clear");
clear.addEventListener("click", clearDisplay);

function clearDisplay() {
    userInput.textContent = "";
    result.textContent = "";
}

// clear character
function clearCharacter() {
    let str = userInput.textContent;
    str = str.substr(0, str.length - 1);
    userInput.textContent = `${str}`;
    decPoint.disabled = false;
}