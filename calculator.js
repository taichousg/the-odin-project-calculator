// Operation:
// number, operator, another number, like 3 + 5
// Another function, operate:
// Take operator and the 2 numbers, and then calls one of the above functions

let operation="";
let number1="";
let number2="";
let result="0";
let display;

// ADD Function
function addNumbers(number1, number2){
    result = number1+number2;
    console.log("adding numbers, " + result);
    return result;
}

// SUBSTRACT Function
function substractNumbers(number1, number2){
    result = number1-number2;
    console.log("substracting numbers, " + result);
    return result;
}

// MULTIPLY Function
function multiplyNumbers(number1, number2){
    result = number1*number2;
    console.log("multiplying numbers, " + result);
    return result;
}

// DIVIDE Function
function divideNumbers(number1, number2){
    if (number2=="0"){
        return "0";
    } else {
        result = (number1/number2).toFixed(2);
        console.log("dividing numbers, " + result);
        return result;
    }
}

function setOperation(operator){
    display = document.getElementById('result');
    if (operation!="" && number2!=""){
        number1 = operate();
        number2 = "";
        result = "";
        operation = "";
    }
    if (operation=="" && number2==""){
        if (operator == "/"){
            operation = "divide";
        }
        if (operator == "+"){
            operation =  "add";
        }
        if (operator == "-"){
            operation =  "substract";
        }
        if (operator == "*"){
            operation =  "multiply";
        }
        if (operator == "%"){
            operation = "percentage";
        }
        console.log("operation = " + operation);
    }
}

// OPERATE Function
function operate(){
    if (number1=="" && number2=="" && operation==""){
        return "0";
    } else {
        display = document.getElementById('result');
        if (operation == "add"){
            result = addNumbers(Number(number1),Number(number2));
        }
        if (operation == "substract"){
            result = substractNumbers(Number(number1),Number(number2));
        }
        if (operation == "multiply"){
            result = multiplyNumbers(Number(number1),Number(number2));
        }
        if (operation == "divide"){
            result = divideNumbers(Number(number1),Number(number2));
        }
        console.log("result = " + result);
        display.innerHTML = result;
        return result;
    }
}

function setNumbers(number){
    display = document.getElementById('result');
    if (operation=="" && number1==""){
        number1 = number;
        console.log("number1 = " + number1);
        display.innerHTML = number1;
    } else if (operation=="" && number1!=""){
        number1 = number1.concat(number);
        console.log("number1 = " + number1);
        display.innerHTML = number1;
    } else if (operation!="" && number2==""){
        number2 = number;
        console.log("number2 = " + number2);
        display.innerHTML = number2;
    } else if (operation!="" && number2!=""){
        number2 = number2.concat(number);
        console.log("number2 = " + number2);
        display.innerHTML = number2;
    }
}

function clearData(){
    operation="";
    number1="";
    number2="";
    result="";
    display = document.getElementById('result');
    display.innerHTML = '0';
}

document.addEventListener('DOMContentLoaded', function(){
    initializeCalculator();
});

function initializeCalculator(){
    let display = document.getElementById('result');
    display.innerHTML = '0';   
}