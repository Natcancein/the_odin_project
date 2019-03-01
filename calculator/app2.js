/* 
FIRST OPERATION IN THE CONSOLE:------

function add(a,b){
return parseInt(a)+parseInt(b);
}

function sustract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function operate(operator,a,b){

    switch(true){
        case (operator==="+"):
        return add(a,b);
        break;
        case (operator==="-"):
        return sustract(a,b);
        break;
        case (operator==="*"):
        return multiply(a,b);
        break;
        case (operator==="/"):
        return divide(a,b);
        break;
    }
}

console.log(operate("/","2","2"));
*/

const screen = document.getElementById("screen");
const buttons =  Array.from(document.getElementsByClassName("btn"));
buttons.forEach(btn => btn.addEventListener("click",type));
//cal.addEventListener("click",type);
const equal = document.getElementById("equal");
equal.removeEventListener("click",type);
equal.addEventListener("click",operate);
var allInput="";
//Operators Buttons
const addButton = document.getElementById("add");
addButton.addEventListener("click", operator);
const subtractButton = document.getElementById("subtract");
subtractButton.addEventListener("click", operator);
const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", operator);
const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", operator);
//clear Button
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);

function operator(){
    return operator = this.childNodes[0].nodeValue;
    //return operator;
}

function type (){
   let input = this.innerText;
   // also serves: let input = this.childNodes[0].nodeValue;
   allInput += input;
   screen.textContent =allInput;
  // also serves: screen.innerHTML
  if (allInput.length > 11){
        console.log("LIMIT!!!!")
        buttons.forEach(btn => btn.removeEventListener("click",type));
  }
  return allInput;
}

// OPERATIONS
function operate(){

    if(allInput.indexOf(operator) > 0){
    const indexOperator= allInput.indexOf(operator); 
    let inputA = allInput.substring(0,indexOperator);
    let inputB = allInput.substring(indexOperator+1, allInput.length);
        if(operator==="+"){
            return add(inputA,inputB);
        } else if (operator==="-"){
            return subtract(inputA,inputB);
        } else if (operator==="x"){
            return multiply(inputA,inputB);
        } else if (operator==="/"){
            return divide(inputA,inputB);
        } else {
            return nothing();
        }
    
    } 
}

function add(inputA,inputB){
    return screen.textContent = parseInt(inputA) + parseInt(inputB);
    }
function subtract(inputA,inputB){
   return screen.textContent = parseInt(inputA) - parseInt(inputB);
    }
function multiply(inputA,inputB){
   return screen.textContent = parseInt(inputA) * parseInt(inputB);
    }
    function divide(inputA,inputB){
    return screen.textContent = parseInt(inputA) / parseInt(inputB);
    }

function clear(){
    location.reload();
}