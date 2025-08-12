/*
 * Summary of 'var' behavior in JavaScript (for understanding legacy code)
 * 
 * NOTE: Modern code should use let/const instead. This is for understanding old scripts.
 */


// 1 Basic Declaration

// Similar to let at first glance, but behaves very differently internally

var message = "Hi";
console.log(message);

// 2 No block scope

// var is function-scoped or global, ignores code blocks

// Ex 1 ) if block
if (true) {
  var test = true; // var penetrates block scope
}
console.log(test);  // true- variable exists outside if block

// compare with let
if (true) {
  let testLest = true;
}
//console.log(testLet); // ReferenceError - proper block scoping

// Example 2: Loop
for (var i = 0; i < 10; i++) {
  var one = 1;
}
console.log(i);  // 10 - i is global
console.log(one);  // 1 - one is global


// Ex 3) functin scope contains var
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }
  console.log(phrase); // works: var is function scoped
}
sayHi();
//console.log(phrase);  // referenceError:  not global



// 3) Allows Redeclaration

var user = "Pete";
var user = "John";  // No error - just reassigns

console.log(user);

// Compare with let:
// let userLet;
// let userLet; // SyntaxError: already declared


// 4 ) Hoisting Behavior
// var declaration are processed at funciton start (hoisted),
// but assignments happen when they appear

function sayHi() {
  phrase = "Hello"; // Assignment works
  console.log(phrase);
  var phrase; // Declaration hoisted to top
}
sayHi();


// Equivalent to:
function sayHi() {
  var phrase;  // declaration hoisted
  phrase = "Hello";
  console.log(phrase);
}
sayHi();


// Hoisting example with undefined value

function sayHiHoisted() {
  console.log(phrase); // undefined (decalred but not assigned yet)
  var phrase = "Hello";
}
sayHiHoisted();


// Even non-executed blocks affect hoisting
function weirdHoist() {
  phrase = "Hello";
  if (false) {
    var phrase;
  }
  console.log(phrase);
}

weirdHoist();

// 5) IIFE PATTERN (legacy)

// Immediately-Invoked Function expressions were used to crate scope 
// before let/const existed. Not needed in modern code.

// Classic IIFE:
(function() {
  var message = "Hello IIFE";
  console.log(message); // Has its own scope
})();


// Alternative IIFE patterns
!function() {
  console.log('IIFE with !');
}();

+function() {
  console.log('IIFE with +');
}();

/*
 * function() { // SyntaxError - can't have nameless function declaration
  var message = "Hello";
}();
 * */

// =====================
// Key Differences Summary
// =====================
// 1. var has no block scope - only function/global
// 2. var allows redeclaration in same scope
// 3. var declarations are hoisted to function top
// 4. var creates properties on global object (when declared globally)

// Modern best practice: Always use let/const instead of var


// Note: For migration of old code, be aware of these differences when
// replacing var with let/const to avoid unexpected behavior changes.


// ===================================================

// 1) Accidental Global variables

// Legacy code with var in loops
function processUser(users) {
  for (var i = 0; i < user.length; i++) {
    var user = users[i]; // var leaks out of block
    // proces user
  }

  // still accessiable - potential bug
  console.log("Last Processed:", user);
  console.log("Loop ran:", i, "times");
}


// Modern fix with let(safer)
function processUserSafe(users) {
  for (let i = 0; i < user.length; i++) {
    let user = users[i]; // block scoped
    // proess user
  }

  // console.log(user); // reference error: as expected
  // console.log(i);  // ReferenceError: as expected
}


// 2) Variable Hoisting (confusing behaviour)


// Legacy code with confusing hoisting
function calculateTotal(price, quantity) {
  console.log("Subtotal:", subtotal); // undefined (hoisted but not assigned)

  if (quantity) {
    var discount = 0.1; // var gets hoisted
    var subtotal = price * quantity * (1 - discount);
  }
  else {
    var subtotal = price * quantity;
  }

  return subtotal;
}

console.log(calculateTotal(5, 5));


// Modern equivalent with clear scope

function calculateTotalModern(price, quantity) {
  let subtotal; // Explicit declaration at top

  if (quantity > 10) {
    const discount = 0.1; // proper block scope
    subtotal = price * quantity * (1 - discount);
  } else {
    subtotal = price * quantity;
  }

  return subtotal;
}

console.log(calculateTotalModern(5, 5));


// 3) IIFE PATTERN (LEGACY MODEULE SIMULATION)

// old-school module pattern with IIFE
var shoppingCart = (function() {
  var items = []; // private variable

  function addItem(item) {
    items.push(item);
  }

  function getCount() {
    return items.length;
  }

  return {
    add: addItem,
    count: getCount
  };
})();


// Usage
shoppingCart.add({ id: 1, name: 'Product' });
console.log(shoppingCart.count());
//console.log(items); // referenceError : truly private


// Modern equivalent with block scope
{
  let items = []; // scope to this block

  shoppingCartModern = {
    add(item) {
      items.push(item);
    },
    count() {
      return items.length;
    }
  };
}


const e = require('cors');
// 4) EVENT HANDLERS (CLASSIC LOOP PROBLEMS)

const { EventEmitter } = require('events');

// Classic closure issue with var
function setButtonsVar() {
  const buttons = [];

  for (var i = 1; i <= 3; i++) {
    const button = new EventEmitter();
    button.label = 'Button' + i;

    button.on('click', function() {
      console.log('Clicked', i); // always logs "Clicked 4"
    });

    buttons.push(button);
  }

  // Simulate button click
  buttons.forEach((btn, idx) => {
    console.log(`Simulating click on: ${btn.label}`);
    btn.emit('click');
  });
}

setButtonsVar();

function setupButtonsLet() {
  const buttons = [];

  for (let i = 1; i <= 3; i++) {
    const button = new EventEmitter();
    button.label = 'Button' + i;

    button.on('click', function() {
      console.log('Clicked', i); // logs 1,2,3 correctly
    });

    buttons.push(button);
  }

  // simulate button clicks
  buttons.forEach((btn, idx) => {
    console.log(`simulating click on:${btn.label}`);
    btn.emit('click');
  });
}

setupButtonsLet();



// 5) Temporary variable leak

// FUnction scopr variable leak
// Anti-pattern: var leaks entire function scope unnecessarily

function findUser(users, targetId) {
  var result; // unnecessary function-wide scope

  for (var i = 0; i < users.length; i++) {
    if (users[i].id === targetId) {
      result = users[i];  // works, but scope is wider than needed
      break;
    }
  }

  // result is still alive even if not needed
  return result || null;
}

/*
 * 🔍 Why This Is Bad (in 2025)
  •	var hoists result to the top of the function — it exists longer than needed.
  •	Makes functions harder to read, refactor, or parallelize (e.g. if multiple search logic segments are added later).
 * */


// Modern, scoped version

// Modern approach: block-scoped , early exit
function findUserModern(users, targetId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === targetId) {
      return users[i]; // exits early, no leaking
    }
  }
  return null;
}

/*
 * ✅ Why This Is Better
  •	No unused temp variable.
  •	Memory and GC-friendlier in tight loops or hot paths.
  •	Easier to inline, debug, or convert to Array.prototype.find() later if needed.
 * */

// Idiomatic version 2025+
function findUserFunctional(users, targetId) {
  return user.find(user => user.id === targetId) || null;
}

// ============================================
// Key Takeaways for Modern Development:
// ============================================
// 1. Always prefer let/const over var
//    - Block scoping prevents accidental leakage
//    - Clearer intent (const for constants, let for variables)
//
// 2. Watch for these legacy patterns:
//    - Variables declared in loops with var
//    - Variables used before declaration
//    - IIFE patterns that can be replaced with blocks
//    - Functions with multiple var redeclarations
//
// 3. When updating old code:
//    - Replace var with let/const carefully
//    - Check for dependencies on hoisting behavior
//    - Verify closure behavior in callbacks

// ============================================
// 4. STRICT MODE IMPACT
// ============================================
function strictModeDifferences() {
  'use strict';

  // var still works the same
  // But these become errors that were silent failures:
  // - Assigning to undeclared variables
  // - Deleting variables
  // - Duplicate parameter names
}

// ============================================
// 5. PERFORMANCE CONSIDERATIONS
// ============================================
// Modern JS engines optimize let/const as well as var
// However, var hoisting can sometimes lead to:
// - Less predictable optimization
// - Harder-to-debug scope issues
// - Micro-performance hits from variable recreation

// ============================================
// 6. TRANSITIONING LEGACY CODE
// ============================================
// When updating var to let/const:

// A. Watch for:
// 1. Function-scoped variables used in closures
// 2. Variables accessed before declaration
// 3. Variables intentionally redeclared


// ============================================
// 7. HISTORICAL CONTEXT (Why var Behaves This Way)
// ============================================
// - var was designed in 5 days for Netscape in 1995
// - Block scope wasn't originally planned
// - Hoisting was a side effect of early compilation
// - IIFE pattern emerged before proper modules existed

// ============================================
// 8. BEST PRACTICES IN 2023+
// ============================================
// 1. Always use const by default
// 2. Use let when rebinding is needed
// 3. Never use var in new code
// 4. Use block scope ({}) to control visibility
// 5. Prefer modules over global scope
// 6. Use linters (ESLint) to catch var usage

// ============================================
// 9. SPECIAL CASES WHERE VAR STILL APPEARS
// ============================================
// A. Legacy codebases
// B. Some bundler output
// C. Old documentation examples
// D. Quick console experimentation
// E. Certain metaprogramming patterns








