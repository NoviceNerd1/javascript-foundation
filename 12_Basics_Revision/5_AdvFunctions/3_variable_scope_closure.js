// Variable scope & closures IN JS

/*
 *  * JavaScript has function-level and block-level scoping rules that determine variable accessibility.
 * Understanding scope and closures is fundamental to writing effective JavaScript code.
 * */


// 1) Block scope (let/const)


{
  // Variable declared with let/const are block-scoped
  // They only exist within their enclosing block {...}

  let message = "Hello";
  console.log(message);
}

//console.log(message)  // Error - message is not accessible outside the block


// This allows us to create isolated blocks with same variable names:

{
  let x = 1;
  console.log(x);  // 1
}

{
  let x = 2;
  console.log(x);  // 2 - no conflict with previous x
}



// 2) Function Scope

function sayHi() {
  let phrase = "Hello"; // function scoped variable 
  console.log(phrase);
}

sayHi();
// console.log(phrase); // Error - phrase not accessible outside function

// 3) NEsted function

function outer() {
  let outerVar = "I'm outside";

  function inner() {
    // inner function has access to outer function's variable scope
    console.log(outerVar);
  }
  inner();
}

outer();

// 4 closures

function makeCounter() {
  let count = 0; // local variable in makeCounter's scope

  // this returned function forms a closure 
  return function() {
    // it "remembers" the count variable from its parent scope
    return count++;
  };
}

let counter = makeCounter();

// each call remebers and updates the same count variable

console.log(counter());
console.log(counter());
console.log(counter());

// 5) Lexical enviromnent (Theory)

/*
 * Behind the scenes, JavaScript uses Lexical Environments to track variables:
 * 
 * 1. Every function/block/script has an associated Lexical Environment object
 * 2. It has two parts:
 *    - Environment Record (stores local variables)
 *    - Reference to outer Lexical Environment
 * 
 * When code accesses a variable:
 * - It first checks the current Lexical Environment
 * - If not found, checks outer environments recursively
 * - If not found anywhere, throws ReferenceError
 * 
 * Closures work because functions remember their creation environment via [[Environment]]
 * */

// 6) Garbage Collection

function createFunction() {
  let bigData = new Array(1000).fill('data');

  return function() {
    // this closure keeps bigData in memory
    console.log(bigData.length);
  };
}

let holdFunction = createFunction();

// bigData stays in memory as long as holdFunction exist
holdFunction();

// to free memory:
holdFunction = null; // now bigData can be garbage collected

// 7) Real world optimization

/*
 * JavaScript engines optimize closures by:
 * - Removing unused outer variables
 * - This can cause debugging surprises in Chrome DevTools
 * 
 * Example where optimization might hide variables:
 * */

function optimized() {
  let visible = 'i am here';
  let unused = 'i am optimized away';

  return function() {
    debugger;
    // in chrome console typing 'visible works but 'unused' does not'
    console.log(visible);
  };
}

let debugExample = optimized();
debugExample();



// ======================
// KEY TAKEAWAYS
// ======================

/**
 * 1. let/const are block-scoped
 * 2. Functions create their own scope
 * 3. Nested functions can access outer variables (scope chain)
 * 4. When a function remembers its outer variables and accesses them, it's a closure
 * 5. All JavaScript functions are closures (except new Function)
 * 6. Lexical Environments explain how scope works under the hood
 * 7. Closures keep referenced variables in memory
 * 8. Engines optimize by removing unused outer variables
 */


// 1) Module Pattern (Data encapsulation)

// create a counter module with private variables
const counterModule = (function() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(`Count: ${count}`);
    },

    reset: function() {
      count = 0;
      console.log('Counter Reset!');
    }
  };
})();

counterModule.increment();
counterModule.increment();
counterModule.increment();
counterModule.increment();
counterModule.reset();
counterModule.increment();
//console.log(count);  // Reference error: Count not defined

/*
 *Why?

Uses an IIFE (Immediately Invoked Function Expression) to create a closure.

count is private (cannot be modified directly from outside).

Only increment() and reset() can modify count.
 * */

/*
// 2) Event Handlers with Closures

// Dynamically create buttons with unique IDs
function setupButtons() {
  for (let i = 0; i <= 3; i++) {
    const button = document.createElement('button');
    button.textContent = `Button${i}`;

    // Each click handler remebers it's own 'i' due to block scope
    button.addEventListener('click', function() {
      console.log(`Button ${i} clicked!`);
    });

    document.body.appendChild(button);
  }
}

setupButtons();



Why?

Without let, i would be shared (all buttons log Button 4 clicked!).

let creates a new i for each loop iteration (closure preserves the correct value).
*/

// 3) Debounce Function (Performance optimization)

// Debounce: Delay a function call until after a certain wait time
/*
function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId); // reset timer if called again

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage: Delay search input processing
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce(function() {
  console.log("Searching for:", this.value);
}, 500));

Why?

timeoutId is preserved between calls (closure).

Prevents rapid firing of expensive operations (e.g., API calls).
*/

// 4) Caching/Memoization(Optimize Expensive Calculation)

function memoize(fn) {
  const cache = {}; // stores previous results

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("Returning cached result");
      return cache[key];
    }

    console.log('Calculating new result');

    const result = fn(...args);
    cache[key] = result;
    return result;

  };
}


// Expensive function to memoize
const factorial = memoize(function(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5));
console.log(factorial(5));

/*
 *Why?

cache persists between calls (closure).

Avoids recalculating for the same inputs.
 */

// 5) Private data in Classes (Pre- ES6)

// Simulate private class fields(before ES6)
function Person(name) {
  // Private variable (closure)
  let age = 0;

  this.name = name;

  this.birthday = function() {
    age++;
    console.log(`${this.name} is now ${age} years old.`);
  };
}

const john = new Person("John");
john.birthday(); // John is 1 year old
john.birthday(); // John is 2 yr old

/*
 Why?

age is inaccessible outside Person (encapsulation).

birthday() retains access via closure.
 * */

/*
// Trottle function (rate limiting)

function throttle(func, limit) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      func.apply(this, args);
      lastCall = now;
    }
  };
}

// Usage: Limit scroll event firing

//window.addEventListener('scroll', throttle(function() {
//  console.log("Scroll event fired at:", Date.now());
//}, 1000));

const EventEmitter = require('events');
const emitter = new EventEmitter();

const throttledLog = throttle(function() {
  console.log('Throttled event fired at : ', new Date().toISOString());
}, 1000);

// Simulare a "scroll"-like rapid event burst
setInterval(() => {
  emitter.emit('scroll');
}, 100); // Emits every 100ms

emitter.on('scroll', throttledLog);

*/


// COMMON PITFALLS & EDGE CASES

// 1.1 Loop + Closure (var VS let)

// Problem: All alert show "3" (var leaks to global scope)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3,3,3
}

// Fix: Use 'let' (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0,1,2
}

/*
 Why?

var is function-scoped, so i is shared across iterations.

let creates a new i for each iteration (closure preserves the correct value).

 */


// 1.2 Accidental global variables 

function leaky() {
  undeclaredVar = "Oops!"; // Auto-creates a global variable!
}
leaky();
console.log(undeclaredVar);


/*
 * Fix: Always use let/const/var. Enable strict mode ("use strict") to throw errors for this.
 * */


// Advanced Closure Uses

// 2.1) Currying (Partial Function Application)
function multiply(a) {
  return function(b) {
    return a * b;  // remembers 'a' via closure
  };

}
const double = multiply(2);
console.log(double(5));


/*
  Use Case:

Create specialized functions from general ones (e.g., event handlers with preset configs).

 * */


// 2.2 Statueful Function (React Hooks Inspiration)
function useState(initialValue) {
  let state = { value: initialValue };

  function setState(newValue) {
    state.value = newValue;
  }

  return [state, setState]; // exposes state via closure
}

const [count, setCount] = useState(0);
setCount(5);
console.log("Count state:", count.value);


// Update useState with getter - React-like

function useState2(initialValue) {
  const stateContainer = { value: initialValue };

  function setState(newValue) {
    stateContainer.value = newValue;
  }

  function getState() {
    return stateContainer.value;
  }

  return [getState, setState];
}

const [newCount, setNewCount] = useState2(0);
setNewCount(5333);
console.log("New Count: ", newCount());

// 3) Scope CHain surprises

// 3.1 Shadowing Variables
let x = 10;
function outer() {
  let x = 20;

  function inner() {
    console.log(x);
  }
  inner();
}
outer();

// 3.2 Block scope in switch statement

let action = "draw";
switch (action) {
  case "draw":
    let result = "🎨"; // block scoped to the 'case'
  case "sing":
    //let result = "🎤"; // error : 'Result' already declared
    break;
}

//Fix: Use blocks {} inside case to isolate scope.


// 4 Execution Context vs Lexical scope

const obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name); // "Alice" (this = obj) 
    setTimeout(function() {
      console.log(this.name); // undefined (this = window)
    }, 1000);
  }
};

obj.greet();

/*
 *Why?

this is dynamic (depends on how the function is called).

Arrow functions solve this by inheriting this lexically:
setTimeout(() => console.log(this.name), 1000); // "Alice"
 * */


// 5) Memory Leaks with Closures

function setupHeavyTask() {
  const hugeData = new Array(1000000).fill("📦");
  return function() {
    console.log("Holding reference to hugeData...");
  };
}

let task = setupHeavyTask();
task();
// even if 'task' is idle, 'hugeData' stays in memory
task = null;  // allows garbage collection


// 6) Closures vs Classes(Modern JS)

// closure-based counter
function createCounter() {
  let count = 0;

  return {
    increment() { count++ },
    getCount() { return count }
  };
}

const functionCounter = createCounter();
functionCounter.increment();
console.log(functionCounter.getCount());
/*
 *✅ How it works:
  •	count is scoped inside createCounter()
  •	It is preserved between calls by the returned object (via closure)
  •	increment and getCount close over count and mutate/read it

🔐 Encapsulation:
  •	count is truly private — no access outside except via increment()/getCount()
  •	You can’t do counter.count — undefined
 * */


// Class-based counter (ES6)
class Counter {
  #count = 0; // Private field
  increment() { this.#count++ }
  getCount() { return this.#count }
}

const c = new Counter();
c.increment();
console.log("Class Count:", c.getCount());

/*
 * ✅ How it works:
  •	#count is a private class field introduced in ES2022 (strictly private)
  •	Access is limited to within class body only
  •	Can’t do c.#count — throws syntax error

🔐 Encapsulation:
  •	Clean OOP-style encapsulation
  •	Ensures internal state is protected — not just by convention (_count) but enforced by syntax
 * */








