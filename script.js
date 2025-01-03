let a = 0;
let operator = undefined;
let b = 0;
let isFirstNumber = true;
const span = document.querySelector("span.display-right-padding");
const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".num");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("num")) {
      if (!operator) {
        if (isFirstNumber === true) {
          span.innerText = button.innerText;
          a = parseInt(span.innerText);
          isFirstNumber = false;
        } else {
          span.innerText += button.innerText;
          a = parseInt(span.innerText);
        }
      } else {
        if (operator)
          if (isFirstNumber === true) {
            span.innerText = button.innerText;
            b = parseInt(span.innerText);
            isFirstNumber = false;
          } else {
            span.innerText += button.innerText;
            b = parseInt(span.innerText);
          }
      }
    }
    if (button.classList.contains("dot")) {
    }
    if (button.classList.contains("operand")) {
      operator = button.innerText;
      isFirstNumber = true;
    }
    if (button.classList.contains("equal")) {
      span.innerText = operate(a, operator, b);
      a = parseInt(span.innerText);
    }
    if (button.classList.contains("clear")) {
      clear();
    }
  });
});

function clear() {
  a = 0;
  b = 0;
  operator = undefined;
  isFirstNumber = true;
  span.innerText = "0";
}

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
