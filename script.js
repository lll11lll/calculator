// Nick Greiner
// 03/08/2023
// Creating the functions used for the calulator itself
let buttonField = document.querySelector('.buttonField')
let inputField = document.querySelector('.inputField')

operationArray = []

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

function factorial(num) {
    num = parseInt(num, 10);
    if(num === 0  || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
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
myOperations = ['Clear', 'Delete', '...', '1', '2', '3', '+', '-', '4', '5', '6', 'x', '/', '7', '8', '9', 'N!', 'N²', '0', '.', '+/-', '=']
myClassName = ['clear', 'delete', 'pValue', 'one', 'two', 'three', 'addition', 'subtraction', 'four', 'five', 'six', 'multiplication', 'division', 'seven', 'eight', 'nine', 'factorial', 'squared', 'zero', 'decimal', 'signChange', 'equal']
console.log(myOperations.length)
for (let i = 0; i < 22; i++) {
    let calcButton = document.createElement('button');
    if ( myOperations[i] === 'Clear' || myOperations[i] === 'Delete') {
        calcButton.classList.add(`setting`);
    } else if (myOperations[i] === '=' ) {
        calcButton.classList.add('equal')
    } else if (myOperations[i] === '+' || myOperations[i] === '-' || myOperations[i] === 'x' || myOperations[i] === '/' || myOperations[i] ==='N!' || myOperations[i] ==='N²' ) {
        calcButton.classList.add(`operations`);
    } else if (myOperations [i] === 'pValue') {
        calcButton.style.cssText = 'color: black; background-color: white; border: solid black 2px; width: 60px; height: 60px; font-size: 20px;';
    } else {
        calcButton.classList.add('numberClass')
    }
    calcButton.innerText = `${myOperations[i]}`;
    calcButton.classList.add(`${myClassName[i]}`);
    
    buttonField.appendChild(calcButton);
}
inputField.addEventListener('input', () => {
    const input = document.getElementById("numberInput");
    const regex = /^\d*\.?\d*$/; // only allow digits and one decimal point
    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^\d.]/g, ""); // remove any non-numeric or non-decimal characters
      input.value = input.value.replace(/^(\d*\.\d*).*$/, '$1'); // only keep one decimal point
    }

    inputField.value = value;
});

let previousValue = document.querySelector('.pValue');
let oneButton = document.querySelector('.one');
oneButton.addEventListener('click', () => {
    inputField.value += '1';
});

let twoButton = document.querySelector('.two');
twoButton.addEventListener('click', () => {
    inputField.value += '2';
});

let threeButton = document.querySelector('.three');
threeButton.addEventListener('click', () => {
    inputField.value += '3';
});

let fourButton = document.querySelector('.four');
fourButton.addEventListener('click', () => {
    inputField.value += '4';
});

let fiveButton = document.querySelector('.five');
fiveButton.addEventListener('click', () => {
    inputField.value += '5';
});

let sixButton = document.querySelector('.six');
sixButton.addEventListener('click', () => {
    inputField.value += '6';
});

let sevenButton = document.querySelector('.seven');
sevenButton.addEventListener('click', () => {
    inputField.value += '7';
});

let eightButton = document.querySelector('.eight');
eightButton.addEventListener('click', () => {
    inputField.value += '8';
});

let nineButton = document.querySelector('.nine');
nineButton.addEventListener('click', () => {
    inputField.value += '9';
});

let zeroButton = document.querySelector('.zero');
zeroButton.addEventListener('click', () => {
    inputField.value += '0';
});

let decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    if (!inputField.value.includes('.')) {
        inputField.value += '.';
    }
});

let plusMinusButton = document.querySelector('.signChange');
plusMinusButton.addEventListener('click', () => {
    inputField.value *= -1;
});

let additionButton = document.querySelector('.addition');
additionButton.addEventListener('click', () => {
    operationArray.push(Number(inputField.value))
    operationArray.push('+')
    previousValue.textContent = inputField.value
    inputField.value = ''  
});

let subtractionButton = document.querySelector('.subtraction');
subtractionButton.addEventListener('click', () => {
    operationArray.push(Number(inputField.value))
    operationArray.push('-')
    previousValue.textContent  = inputField.value
    inputField.value = ''

});

let multiplicationButton = document.querySelector('.multiplication');
multiplicationButton.addEventListener('click', () => {
    operationArray.push(Number(inputField.value))
    operationArray.push('*')
    previousValue.textContent = inputField.value
    inputField.value = ''
});

let divisionButton = document.querySelector('.division');
divisionButton.addEventListener('click', () => {
    operationArray.push(Number(inputField.value));
    operationArray.push('/');
    previousValue.textContent = inputField.value;
    inputField.value = ''
});

let equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    operationArray.push(Number(inputField.value));
    inputField.value = `${operate(operationArray[1], operationArray[0], operationArray[2])}`
    operationArray = [];
})

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    inputField.value = '';
    previousValue.textContent = '...'
});

let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    myInputList = inputField.value.split('');
    myInputList.pop();
    inputField.value = myInputList.join('');
});

let squaredButton = document.querySelector('.squared');
squaredButton.addEventListener('click', () => {
    inputField.value *= inputField.value 
}); 

let factorialButton = document.querySelector('.factorial');
factorialButton.addEventListener('click', () => {
    inputField.value = factorial(inputField.value)
}); 