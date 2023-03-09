// Nick Greiner
// 03/08/2023
// Creating the functions used for the calulator itself
let buttonField = document.querySelector('.buttonField')

// +
function add(num1, num2) {
    return num1 + num2;
}

// -
function subtract(num1, num2) {
    return num1 - num2;
}

// *
function multiply(num1, num2) {
    return num1 * num2;
}

// /
function divide(num1, num2) {
    return num1 / num2;
}

function operate(operation, num1, num2) {
    if (operation === '+') {
        return add(num1, num2);
    }
    if (operation === '-') {
        return subtract(num1, num2);
    }
    if (operation === '*') {
        return multiply(num1, num2);
    }
    if (operation === '/') {
        return divide(num1, num2);
    }
}

console.log(operate('+', 4, 5))
console.log(operate('/', 100, 5))
myOperations = ['Clear', 'Delete', '.', '1', '2', '3', '+', '-', '4', '5', '6', 'x', '/', '7', '8', '9', '0', '=']
console.log(myOperations.length)
for (let i = 0; i < 18; i++) {
    let calcButton = document.createElement('button');
    if ( myOperations[i] === 'Clear' || myOperations[i] === 'Delete') {
        calcButton.style.cssText = 'border: solid black 2px; width: 130px; height: 60px; font-size: 20px;';
    } else {
        calcButton.style.cssText = 'border: solid black 2px; width: 60px; height: 60px; font-size: 20px;';
    }
    calcButton.innerText = `${myOperations[i]}`
    calcButton.classList.add(`${myOperations[i]}`);
    
    
    buttonField.appendChild(calcButton);
}