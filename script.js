let a;
let operator;
let b;
const span = document.querySelector("span.display-right-padding");
const numbers = document.querySelectorAll(".num");

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    span.innerText = e.target.innerText;
    a = parseInt(e.target.innerText);
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
