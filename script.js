let a;
let operator;
let b;
const span = document.querySelector("span.display-right-padding");
const numbers = document.querySelectorAll(".num");

// I need to add addEventListener with click and executes function to add button's number to span display
numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    span.innerText = e.target.innerText;
  });
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
}
