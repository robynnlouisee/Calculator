let firstNumber = '';
let secondNumber = '';
let operator = '';
let shouldResetDisplay = false;

const display = document.getElementById('display');
display.textContent = '0';

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

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetDisplay) {
      display.textContent = number;
      shouldResetDisplay = false;
    } else {
      display.textContent += number;
    }
  }

oneBtn.addEventListener('click', () => appendNumber('1'));
twoBtn.addEventListener('click', () => appendNumber('2'));
threeBtn.addEventListener('click', () => appendNumber('3'));
fourBtn.addEventListener('click', () => appendNumber('4'));
fiveBtn.addEventListener('click', () => appendNumber('5'));
sixBtn.addEventListener('click', () => appendNumber('6'));
sevenBtn.addEventListener('click', () => appendNumber('7'));
eightBtn.addEventListener('click', () => appendNumber('8'));
nineBtn.addEventListener('click', () => appendNumber('9'));
zeroBtn.addEventListener('click', () => appendNumber('0'));
doubleZeroBtn.addEventListener('click', () => appendNumber('00'));

function setOperator(op) {
    if (operator !== '') return;
      firstNumber = display.textContent;
      operator = op;
      shouldResetDisplay = true;
  }

plusBtn.addEventListener('click', () => setOperator('+'));
minusBtn.addEventListener('click', () => setOperator('-'));
multiplyBtn.addEventListener('click', () => setOperator('*'));
divideBtn.addEventListener('click', () => setOperator('/'));
