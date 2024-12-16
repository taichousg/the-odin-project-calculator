// Variable Definition
let operation="";
let number1="";
let number2="";
let result="0";
let display;

// ADD Function
function addNumbers(number1, number2){
    result = number1+number2;
    return result;
}

// SUBSTRACT Function
function substractNumbers(number1, number2){
    result = number1-number2;
    return result;
}

// MULTIPLY Function
function multiplyNumbers(number1, number2){
    result = number1*number2;
    return result;
}

// REMAINDER Function
function remainderNumbers(number1, number2){
    if (number2=="0"){
        return "0";
    } else {
        has_decimals = hasDecimals(number1/number2);
        if (has_decimals){
            result = (number1%number2).toFixed(2);
        } else {
            result = (number1%number2);
        }
        return result;
    }
}

// DIVIDE Function
function divideNumbers(number1, number2){
    if (number2=="0"){
        return "0";
    } else {
        has_decimals = hasDecimals(number1/number2);
        if (has_decimals){
            result = (number1/number2).toFixed(2);
        } else {
            result = (number1/number2);
        }
        return result;
    }
}

function hasDecimals(dividend, divisor) {
    return Number.isInteger(dividend / divisor);
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
            operation = "remainder";
        }
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
        if (operation == "remainder"){
            result = remainderNumbers(Number(number1),Number(number2));
        }
        display.innerHTML = result;
        return result;
    }
}

function setNumbers(number){
    display = document.getElementById('result');
    if (operation=="" && number1==""){
        number1 = number;
        display.innerHTML = number1;
    } else if (operation=="" && number1!=""){
        number1 = number1.concat(number);
        display.innerHTML = number1;
    } else if (operation!="" && number2==""){
        number2 = number;
        display.innerHTML = number2;
    } else if (operation!="" && number2!=""){
        number2 = number2.concat(number);
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

function getBack(){
    display = document.getElementById('result');
    // Removing digit from number1
    if (number1!="" && number2=="" && operation==""){
        number1 = number1.substring(0,number1.length-1);
        console.log("number1 = " + number1);
        display.innerHTML = number1;
        return number1;
    }
    // Removing digit from number2
    if (number1!="" && number2!="" && operation!=""){
        number2 = number2.substring(0,number2.length-1);
        console.log("number2 = " + number2);
        display.innerHTML = number2;
        return number2;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    initializeCalculator();
});

function initializeCalculator(){
    // Initial Value of Display
    let display = document.getElementById('result');
    display.innerHTML = '0';   
}