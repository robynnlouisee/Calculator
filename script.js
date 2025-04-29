let firstNumber = '';
let secondNumber = '';
let operator = '';
let shouldResetDisplay = false;

const display = document.getElementById('display');

const clearBtn = document.getElementById('clear-button');
const doubleZeroBtn = document.getElementById('double-zero');
const zeroBtn = document.getElementById('zero');
const divideBtn = document.getElementById('divide');

const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const multiplyBtn = document.getElementById('multiply');

const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const minusBtn = document.getElementById('minus');

const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const plusBtn = document.getElementById('plus');

const decimalPointBtn = document.getElementById('decimal-point');
const equalsBtn = document.getElementById('equals')

clearBtn.addEventListener("click", handleClear);
function handleClear () {
    display.textContent = '0';
}

divideBtn.addEventListener("click", handleDivide);
function handleDivide () {
  display.textContent = '÷';
}

multiplyBtn.addEventListener("click", handleMultiply);
function handleMultiply () {
  display.textContent = 'x';
}

minusBtn.addEventListener("click", handleMinus);
function handleMinus () {
  display.textContent = '-'
}

plusBtn.addEventListener("click", handlePlus);
function handlePlus () {
  display.textContent = '+'
}


doubleZeroBtn.addEventListener("click", handleDoubleZero);
function handleDoubleZero () {
    display.textContent = '00';
}

zeroBtn.addEventListener("click", handleZero);
function handleZero () {
    display.textContent = '0';
}

sevenBtn.addEventListener("click", handleSeven);
function handleSeven () {
    display.textContent = '7';
}

eightBtn.addEventListener("click", handleEight);
function handleEight () {
    display.textContent = '8';
}

nineBtn.addEventListener("click", handleNine);
function handleNine () {
    display.textContent = '9';
}

fourBtn.addEventListener("click", handleFour);
function handleFour () {
    display.textContent = '4';
}

fiveBtn.addEventListener("click", handleFive);
function handleFive () {
    display.textContent = '5';
}

sixBtn.addEventListener("click", handleSix);
function handleSix () {
    display.textContent = '6';
}

oneBtn.addEventListener("click", handleOne);
function handleOne () {
    display.textContent = '1';
}

twoBtn.addEventListener("click", handleTwo);
function handleTwo () {
    display.textContent = '2';
}

threeBtn.addEventListener("click", handleThree);
function handleThree () {
    display.textContent = '3';
}

decimalPointBtn.addEventListener("click", handleDecimalPoint);
function handleDecimalPoint () {
    display.textContent = ".";
}

equalsBtn.addEventListener("click", handleEquals);
function handleEquals () {
    display.textContent = "=";
}