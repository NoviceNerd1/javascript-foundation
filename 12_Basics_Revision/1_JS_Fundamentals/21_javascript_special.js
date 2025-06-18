// ===== JAVASCRIPT FUNDAMENTALS SUMMARY =====

// 1. CODE STRUCTURE
// Statements are delimited with semicolons (recommended)
console.log('Hello'); console.log('World');

// Line breaks also work as delimiters (automatic semicolon insertion)
console.log('Hello')
console.log('World')

// Be careful with automatic semicolon insertion - can cause errors:
// alert("Error example")[1, 2].forEach(alert) // This would break!

// No semicolons needed after code blocks {}
function example() {
  // function body
}

for(let i = 0; i < 3; i++) {
  // loop body
}

// 2. STRICT MODE
// Enable modern JavaScript features
'use strict';
// Must be at top of script or beginning of function

// 3. VARIABLES
// Three ways to declare variables:
let name = "John";           // Block-scoped, can be reassigned
const PI = 3.14159;          // Block-scoped, cannot be reassigned
var oldStyle = "legacy";     // Function-scoped (avoid in modern code)

// Variable names can include letters, digits, $, _
let user1 = "Alice";
let $element = document.body;
let _private = "hidden";

// Variables are dynamically typed
let x = 5;        // number
x = "John";       // now string
x = true;         // now boolean

// 4. DATA TYPES (8 types)
let num = 42;                    // number (integers and floats)
let bigNum = 123456789012345n;   // bigint (arbitrary length integers)
let str = "Hello World";         // string
let isActive = true;             // boolean (true/false)
let empty = null;                // null (intentionally empty)
let notSet;                      // undefined (not assigned)
let obj = {name: "John"};        // object (complex data)
let sym = Symbol("id");          // symbol (unique identifier)

// typeof operator (with quirks)
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof null);        // "object" (language error!)
console.log(typeof function(){}); // "function" (special case)

// 5. INTERACTION (Node.js environment)
// Browser functions (prompt, confirm, alert) are NOT available in Node.js
// Use readline for user input in Node.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Async function to get user input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Example usage (uncomment to test):
// (async () => {
//   let userName = await askQuestion("Your name? ");
//   console.log("Hello " + userName);
//   rl.close();
// })();

// For simple output, use console.log instead of alert
console.log("Hello World"); // Works in both browser and Node.js

// 6. OPERATORS

// Arithmetic operators
let a = 10, b = 3;
console.log(a + b);    // 13 (addition)
console.log(a - b);    // 7 (subtraction)
console.log(a * b);    // 30 (multiplication)
console.log(a / b);    // 3.333... (division)
console.log(a % b);    // 1 (remainder/modulo)
console.log(a ** b);   // 1000 (exponentiation)

// String concatenation with +
console.log('1' + 2);     // '12' (string concatenation)
console.log(1 + '2');     // '12' (number converted to string)
console.log(1 + 2 + '3'); // '33' (left to right: (1+2)+'3')

// Assignment operators
let score = 100;
score += 10;    // score = score + 10 (110)
score -= 5;     // score = score - 5 (105)
score *= 2;     // score = score * 2 (210)
score /= 3;     // score = score / 3 (70)

// Conditional (ternary) operator
let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Logical operators (short-circuit evaluation)
let user = null;
let guest = "Anonymous";
console.log(user || guest);        // "Anonymous" (returns first truthy value)
console.log(user && guest);        // null (returns first falsy value)
console.log(!user);                // true (logical NOT)

// Nullish coalescing operator (??)
let username = null;
let defaultName = "Guest";
console.log(username ?? defaultName); // "Guest" (only null/undefined trigger ??)

// Comparison operators
console.log(0 == false);    // true (loose equality, converts types)
console.log(0 === false);   // false (strict equality, no conversion)
console.log('10' > 5);      // true (string converted to number)
console.log(null == undefined); // true (special case)
console.log(null === undefined); // false (different types)

// 7. LOOPS

// while loop
let i = 0;
while (i < 3) {
  console.log("while: " + i);
  i++;
}

// do-while loop (executes at least once)
let j = 0;
do {
  console.log("do-while: " + j);
  j++;
} while (j < 2);

// for loop
for (let k = 0; k < 3; k++) {
  console.log("for: " + k);
}

// Loop control
for (let m = 0; m < 10; m++) {
  if (m === 2) continue;  // skip iteration
  if (m === 5) break;     // exit loop
  console.log(m); // prints: 0, 1, 3, 4
}

// Nested loop with labels
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer; // break outer loop
    console.log(i, j);
  }
}

// 8. SWITCH STATEMENT
// Note: In Node.js, we'll simulate user input instead of using prompt
let day = '1'; // Simulated input (in real Node app, get from command line args or readline)

switch (day) {
  case '1':
    console.log('Monday');
    break;
  case '2':
    console.log('Tuesday');
    break;
  case '3':
    console.log('Wednesday');
    break;
  default:
    console.log('Invalid day');
}

// Getting command line arguments in Node.js
// node script.js arg1 arg2
let args = process.argv.slice(2); // Remove 'node' and script name
console.log('Command line arguments:', args);

// Example: node script.js Monday
if (args[0]) {
  switch (args[0].toLowerCase()) {
    case 'monday':
    case 'mon':
      console.log('Start of work week');
      break;
    case 'friday':
    case 'fri':
      console.log('TGIF!');
      break;
    default:
      console.log('Just another day');
  }
}

// Switch with grouped cases
let grade = 'B';
switch (grade) {
  case 'A':
  case 'B':
    console.log('Excellent!');
    break;
  case 'C':
    console.log('Good');
    break;
  default:
    console.log('Keep trying');
}

// 9. FUNCTIONS

// Function Declaration (hoisted - can be called before definition)
function greet(name = "World") {  // default parameter
  return "Hello, " + name + "!";
}
console.log(greet());        // "Hello, World!"
console.log(greet("Alice")); // "Hello, Alice!"

// Function Expression (not hoisted)
let multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20

// Arrow Functions (ES6+)
// Single expression (implicit return)
let add = (a, b) => a + b;
console.log(add(3, 7)); // 10

// Multiple statements (explicit return needed)
let calculate = (a, b) => {
  let sum = a + b;
  let product = a * b;
  return {sum, product};
};

// No parameters
let getCurrentTime = () => new Date().toLocaleTimeString();

// Single parameter (parentheses optional)
let double = n => n * 2;
let square = x => x * x;

// Function scope and local variables
function example() {
  let localVar = "I'm local";        // only visible inside function
  console.log(localVar);
}
// console.log(localVar);  // Error: localVar is not defined

// Functions always return something
function noReturn() {
  console.log("No explicit return");
}
console.log(noReturn()); // undefined (implicit return)

// Higher-order function example
function processNumbers(arr, callback) {
  return arr.map(callback);
}
let numbers = [1, 2, 3, 4, 5];
let doubled = processNumbers(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// ===== BEST PRACTICES SUMMARY =====
/*
1. Always use 'use strict' in new code
2. Prefer let/const over var
3. Use const by default, let when reassignment needed
4. Always use semicolons after statements
5. Use === instead of == for comparisons
6. Use meaningful variable and function names
7. Prefer arrow functions for callbacks and short functions
8. Use default parameters instead of checking undefined
9. Handle null/undefined values explicitly
10. Use template literals for string interpolation: `Hello ${name}!`

NODE.JS SPECIFIC ADDITIONS:
11. Use console.log() for output instead of alert()
12. Use readline or process.argv for input instead of prompt()
13. Use require() for importing modules (CommonJS)
14. Use module.exports for exporting functions/objects
15. Handle async operations with Promises/async-await
16. Use process.env for environment variables
17. Use __dirname and __filename for file paths
*/

// NODE.JS SPECIFIC EXAMPLES:

// Module exports (CommonJS)
// module.exports = { greet, multiply, add };

// Environment variables
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';
console.log(`Running on port ${port} in ${nodeEnv} mode`);

// File system operations (require fs module)
// const fs = require('fs');
// const path = require('path');

// Path operations
console.log('Current directory:', __dirname);
console.log('Current file:', __filename);

// Async/await example for Node.js
async function processData() {
  try {
    // Simulate async operation
    const result = await new Promise(resolve => {
      setTimeout(() => resolve('Data processed'), 1000);
    });
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the async function
processData();

