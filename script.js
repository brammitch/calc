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
 *
 * @param {Operator} operator
 * @param {number} a
 * @param {number} b
 * @returns number
 */
function operate(operator, a, b) {
  return operators[operator](a, b);
}

let display = "0";
let value = 0;
const displayEl = document.querySelector(".display");
displayEl.innerHTML = display;

function updateDisplay(num) {
  if (display === "0") {
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
