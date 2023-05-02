const readlineSync = require("readline-sync");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Cannot divide by zero!");
    return NaN;
  } else {
    return num1 / num2;
  }
}

let operation;
do {
  operation = readlineSync.question("Enter an operation (+, -, *, /): ");
} while (!["+", "-", "*", "/"].includes(operation));
const num1 = readlineSync.questionFloat("Enter the first number: ");
const num2 = readlineSync.questionFloat("Enter the second number: ");

let result;
switch (operation) {
  case "+":
    result = add(num1, num2);
    break;
  case "-":
    result = subtract(num1, num2);
    break;
  case "*":
    result = multiply(num1, num2);
    break;
  case "/":
    result = divide(num1, num2);
    break;
  default:
    console.log("Invalid operation!");
    result = NaN;
}

console.log(`Result: ${result}`);
