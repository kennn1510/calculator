let a;
let operator;
let b;
const span = document.querySelector("span.display-right-padding");
const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".num");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("num")) {
      span.innerText = e.target.innerText;
      a = parseInt(e.target.innerText);
      console.log(a);
    } else {
      operator = e.target.innerText;
      console.log(operator);
    }
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
