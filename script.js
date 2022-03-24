/**
 *
 * @param {number} a
 * @param {number} b
 * @returns a + b
 */
function add(a, b) {
  return a + b;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns a - b
 */
function subtract(a, b) {
  return a - b;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns a * b
 */
function multiply(a, b) {
  return a * b;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns a / b
 */
function divide(a, b) {
  return a / b;
}

const operators = {
  add,
  subtract,
  multiply,
  divide,
};

/**
 * @typedef { 'add' | 'subtract' | 'multiply' | 'divide' } Operator
 */

/**
 * @typedef { '+' | '-' | '*' | '/' | '=' } OperatorChar
 */

/**
 *
 * @param {Operator} o
 * @param {number} a
 * @param {number} b
 * @returns number
 */
function operate(o, a, b) {
  return operators[o](a, b);
}

let display = "0";
let operationComplete = false;
let operator = null;
let storedInput = "";
let value = null;

const displayEl = document.querySelector(".display");
displayEl.innerHTML = display;

const storedInputEl = document.querySelector(".stored-input");
storedInputEl.innerHTML = storedInput;

function updateDisplay(num) {
  if (display === "0" || operationComplete) {
    operationComplete = false;
    display = `${num}`;
  } else {
    display += num;
  }

  displayEl.innerHTML = display;
}

const zeroEl = document.getElementById("zero");
zeroEl.addEventListener("click", () => {
  updateDisplay(0);
});
const oneEl = document.getElementById("one");
oneEl.addEventListener("click", () => {
  updateDisplay(1);
});
const twoEl = document.getElementById("two");
twoEl.addEventListener("click", () => {
  updateDisplay(2);
});
const threeEl = document.getElementById("three");
threeEl.addEventListener("click", () => {
  updateDisplay(3);
});
const fourEl = document.getElementById("four");
fourEl.addEventListener("click", () => {
  updateDisplay(4);
});
const fiveEl = document.getElementById("five");
fiveEl.addEventListener("click", () => {
  updateDisplay(5);
});
const sixEl = document.getElementById("six");
sixEl.addEventListener("click", () => {
  updateDisplay(6);
});
const sevenEl = document.getElementById("seven");
sevenEl.addEventListener("click", () => {
  updateDisplay(7);
});
const eightEl = document.getElementById("eight");
eightEl.addEventListener("click", () => {
  updateDisplay(8);
});
const nineEl = document.getElementById("nine");
nineEl.addEventListener("click", () => {
  updateDisplay(9);
});

function clearDisplay() {
  value = null;
  display = "0";
  storedInput = "";
  displayEl.innerHTML = display;
  storedInputEl.innerHTML = storedInput;
}

const clearEl = document.getElementById("clear");
clearEl.addEventListener("click", () => {
  clearDisplay();
});

const deleteEl = document.getElementById("delete");
deleteEl.addEventListener("click", () => {
  display = display.slice(0, -1);
  displayEl.innerHTML = display;
});

// const decimalEl = document.getElementById("decimal");
/**
 *
 * @param {Operator} o
 * @param {OperatorChar} oc
 * @returns void
 */
function handleOperator(o, oc) {
  operator = o;
  const displayValue = parseInt(display, 10);
  if (value === null) {
    value = displayValue;
    operationComplete = true;
  } else {
    if (o === "divide" && displayValue === 0) {
      clearDisplay();
      display = "Cannot divide by zero!";
      displayEl.innerHTML = display;
      operationComplete = true;
      return;
    } else {
      value = operate(operator, value, displayValue);
      operationComplete = true;
    }
  }
  display = `${value}`;
  displayEl.innerHTML = display;
  if (oc === "=") {
    operationComplete = true;
    storedInput = "";
    value = null;
  } else {
    storedInput = value + ` ${oc} `;
  }
  storedInputEl.innerHTML = storedInput;
}

const addEl = document.getElementById("add");
addEl.addEventListener("click", () => {
  handleOperator("add", "+");
});

const subtractEl = document.getElementById("subtract");
subtractEl.addEventListener("click", () => {
  handleOperator("subtract", "-");
});

const multiplyEl = document.getElementById("multiply");
multiplyEl.addEventListener("click", () => {
  handleOperator("multiply", "*");
});

const divideEl = document.getElementById("divide");
divideEl.addEventListener("click", () => {
  handleOperator("divide", "/");
});

const equalsEl = document.getElementById("equals");
equalsEl.addEventListener("click", () => {
  handleOperator(operator, "=");
});
