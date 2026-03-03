#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 * Supports: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Node.js CLI Calculator');
console.log('Supported operations: + (add), - (subtract), * (multiply), / (divide)');

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter operation (+, -, *, /): ', (op) => {
    rl.question('Enter second number: ', (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;
      switch (op) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          if (b === 0) {
            console.log('Error: Division by zero');
            rl.close();
            return;
          }
          result = a / b;
          break;
        default:
          console.log('Invalid operation. Use +, -, *, or /.');
          rl.close();
          return;
      }
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
