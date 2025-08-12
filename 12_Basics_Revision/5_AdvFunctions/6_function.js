/*
 * JavaScript Functions as Objects
 * 
 * In JavaScript, functions are objects (callable objects). This means they can:
 * - Be called (invoked)
 * - Have properties added/removed
 * - Be passed by reference
 */

// IMPORTS
const readline = require('readline');
const axios = require('axios');

// ===== NAME PROPERTY =====
// Functions automatically get a 'name' property

// 1. Named function declaration

function sayHi() {
  console.log("hi");
}
console.log(sayHi.name); // 'sayHi' = name comes from function declaration

// 2. Anonymous function expression - still gets a name

let sayHi2 = function() {
  console.log("HIII!!");
};
console.log(sayHi2.name); // "sayHi" - inferred from variable name

// 3. Default parameter function - also gets named
function f(sayHi = function() { }) {
  console.log(sayHi.name); // 'satHi' inferred from parameter name
}


// 4. Object methods
let user = {
  sayHi() { console.log('sayHi object of user object'); }, // method shorthand
  sayBye: function() { console.log('sayBye function of user object'); }
};

console.log(user.sayHi.name);
console.log(user.sayBye.name);


// cases where name can't be determined
let arr = [function() { console.log('function inside arr.') }];
console.log(arr[0].name);
console.log(arr[0]());


// LENGTH PROPERTY

// return the number of parameters (excluding rest parameter)
function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }

console.log(f1.length);
console.log(f2.length);
console.log(many.length); // 2(rest parameters not counted)

// Practical use case- polymorphism based on argument length 
/*
function ask(question, ...handlers) {
  let isYes = confirm(question);

  for (let handler of handlers) {
    if (handler.length === 0) { // no aeg handler
      if (isYes) handler();
    } else {
      handler(isYes);  // handler with args 
    }
  }
}
*/

/*
 * ask - prompts a yes/no question is Node.js
 * and calls handlers based on the arguments length 
 *
 * @param {string} question - the yes/no question  to ask
 * @param {...function} handlers - callback function
 * */

function ask(question, ...handlers) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`${question}(y/n)`, (answer) => {
    const isYes = /^y(es)?$/i.test(answer.trim());

    for (let handler of handlers) {
      if (handler.length === 0) {
        // no arg handler -> only run if user said yes
        if (isYes) handler();
      } else {
        // handler with args -> pass boolwan result
        handler(isYes);
      }
    }
    rl.close();
  });
}

// example usage
ask(
  "Do you love coding/programming/problem solving?",
  () => console.log('User said YES - no args hadnler.'),
  (result) => console.log(`User choice (boolean): ${result}`)
);

/*
 *How this works in Node.js:
  1.	readline.createInterface
Creates an interactive prompt in the terminal to replace browser confirm().
  2.	Regex test /^y(es)?$/i
Checks if the input starts with “y” or “yes” (case-insensitive) to determine isYes.
  3.	Polymorphism by handler.length
  •	handler.length === 0 → the callback expects no parameters, so we run it only if the user said “yes”.
  •	handler.length > 0 → the callback expects arguments, so we pass isYes to it.
  4.	Multiple Handlers
You can pass multiple callbacks — the function decides whether and how to call them based on their signature.

 * */


// CUSTOM Properties

// we  an add our own properties to functions

function sayHi() {
  console.log('Hello custom properties');
  sayHi.counter++; // increment custom property
}
sayHi.counter = 0;

sayHi();
sayHi();
console.log(`Custom sayHi Called ${sayHi.counter} times`);

// Important note: 
// Properties are NOT variables inside the function
// They exist in separate "worlds"

// Function Properties VS Closure

// alternative to closure based counter

function makeCounter() {
  function counter() {
    return counter.count++; // using function property
  }
  counter.count = 0;
  return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter())
console.log(makeCounter());

// difference from closure: property is accessible externally 
counter.count = 10;
console.log(counter());


// Named function expression (NFE)

// Function expression with internal name
let sayHi3 = function func(who) {
  if (who) {
    console.log(`Hello ${who}`);
  }
  else {
    func("Guest");
  }
};

sayHi3("John");
sayHi3();
sayHi3.func;

// Why NFE is useful:
let welcome = sayHi3;
sayHi3 = null;
welcome();
welcome("Alan");  // still works - calls func("Guest") internally


// without NFE, this would break;
sayHi3 = function(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  }
  else {
    sayHi3("Guest");
  }
}


welcome = sayHi3;
//sayHi3 = null; // if null: Error - sayHi3 is null or not defined
welcome();

// ===== KEY DIFFERENCES =====
// 1. Function Declarations can't have internal names
// 2. NFE names are only visible inside the function
// 3. Function properties are separate from variables


// ===== SUMMARY =====
// Functions are objects with special callability
// Key properties:
// - name: function name (usually inferred)
// - length: number of parameters (excluding ...rest)
// Can add custom properties
// NFE provides reliable self-reference
// Used by libraries (jQuery's $, lodash's _) to organize code


/*
 * Key points covered:

Functions are callable objects with properties

Automatic name property with smart inference

length property for parameter count (excludes rest parameters)

Adding custom properties to functions

Difference between function properties and variables

Named Function Expressions (NFE) and their benefits:

Reliable self-reference

Name is function-local

Solves issues with variable reassignment

Comparison with closures

Practical applications in libraries
*/


// 1 function "name" property in Debuggin & Logging 
// API endpoint handlers - useful for debugging
const apiHandlers = {
  getUser: function getUserHandler(id) {/*.......*/ },
  updateUser: function(id, data) {/*.....*/ }
};

// Logging middleware - prints function names for debugging 
function logCall(handler) {
  console.log(`Calling: ${handler.name}`);
  return handler();
}

logCall(apiHandlers.getUser);
logCall(apiHandlers.updateUser);


/*
 * Why?

Helps track which functions are called in logs.

Named Function Expressions (NFE) like getUserHandler provide clearer logs than anonymous functions.

*/

// 2. "length" Property for Dependency Injection

// Dependency injection based on argument count
function inject(dependencies, fn) {
  if (fn.length > dependencies.length) {
    throw new Error("Not enough dependencies!");
  }
  return fn(...dependencies.slice(0, fn.length));
}

// Mock database object with query method
const database = {
  query(sql) {
    // Simulate a DB query returning dummy data
    console.log(`Executing SQL: ${sql}`);
    return [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  }
};

// Example function needing 2 dependencies: db and logger
const dbQuery = (db, logger) => {
  logger.log("Querying DB...");
  return db.query("SELECT * FROM users");
};

// Dependencies array with database and console as logger
const dependencies = [database, console];

// Usage
try {
  const result = inject(dependencies, dbQuery);
  console.log("Query Result:", result);
} catch (err) {
  console.error("Injection error:", err.message);
}


/*
 * Why?

Frameworks like Angular use this to determine how many dependencies to inject.

Rest parameters (...deps) are ignored (consistent with fn.length behavior).
 * */


// 3) CUstom Properties for Rate-limiting

// Rate-limiting a fetch function
async function fetchData(url) {
  if (fetchData.callCount >= fetchData.limit) {
    throw new Error("Rate Limit exceeded!");
  }
  fetchData.callCount++;

  try {
    const response = await axios.get(url);
    return response.data;
  }
  catch (err) {
    throw new Error(`Request Failed: ${err.message}`);
  }
}

// Attach properties to trank calls
fetchData.callCount = 0;
fetchData.limit = 5;

// Optional : reset call count every minute
fetchData.resetInterval = setInterval(() => {
  fetchData.callCount = 0;
}, 60 * 1000);

(async () => {
  for (let i = 0; i < 6; i++) {
    try {
      const data = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
      console.log(`Call ${i + 1}:`, data);
    }
    catch (e) {
      console.error(`Call ${i + 1} failed:`, e.message);
    }
  }
})();

/*
 * Why?

Avoids external variables polluting scope.

Properties are part of the function's identity (e.g., fetchData.reset = () => { callCount = 0 }).
 * */



// 4. Named function expression NFE - for recursion

// Node.js-safe recursive JSON traversal
const jsonParser = function parse(data, indent = 0) {
  if (data && typeof data === "object") {
    return Object.entries(data)
      .map(([key, val]) => `${" ".repeat(indent)}${key}: ${parse(val, indent + 2)}`)
      .join("\n");
  }
  return String(data);
};

// Reassign to simulate accidental overwrite
const parser = jsonParser;
globalThis.jsonParser = null; // Works in Node, no const reassignment error

console.log(parser({ a: 1, b: { c: 2 } }));


/*
 * How it works
  1.	Named Function Expression (NFE)
  •	function parse(...) inside the assignment means the function can call itself recursively without needing the outer variable jsonParser.
  •	Even if jsonParser is overwritten, recursion still works because it refers to its own internal name parse.
  2.	globalThis.jsonParser = null;
  •	In Node.js, const jsonParser = ... cannot be reassigned, so instead of breaking it, we just overwrite a property on the global object to simulate “someone overwriting it.”
  •	This lets us test that recursion is not dependent on jsonParser.
  3.	Safe Object Traversal
  •	typeof data === "object" ensures only objects/arrays are traversed.
  •	Object.entries(data) iterates over keys and values.
  •	" ".repeat(indent) adds indentation per depth level.
  •	.map() + .join("\n") builds a pretty-printed string.
  4.	String Conversion
  •	String(data) ensures even null or numbers/booleans are printed safely.
 * */

// 5. Polymorphism with length (Real world UI)

// Generic event dispatcher with flexible handler signature
function handleEvent(event, ...handlers) {
  const isClick = event.type === 'click';

  handlers.forEach(handler => {
    if (handler.length === 0) {
      // If the handler expects no args, treat it as a "simple click" listener
      if (isClick) handler();
    } else {
      // if the handler expects args, pass the event object
      handler(event);
    }
  });
}

// Example usage in Nodejs environment
const event = { type: 'click' };

handleEvent(event,
  () => console.log('Simple click!'),
  (e) => console.log(`Full event: ${e.type}`)
);

function triggerHook(hookName, event, ...handlers) {
  handlers.forEach(handler => {
    if (handler.length === 0) {
      if (hookName === "onSave") handler();
    } else {
      handler(event);
    }
  });
}

// Plugin registration
triggerHook(
  "onSave",
  { file: "index.js", user: "Rishi" },
  () => console.log("File saved!"), // no context
  (e) => console.log(`Saved by ${e.user}`) // needs context
);


/*
 * How It Works
  1.	Purpose
This function is a flexible event handler invoker that supports:
  •	No-argument handlers (triggered only for "click" events)
  •	Full event handlers (receive the event object)
  2.	Logic
  •	const isClick = event.type === "click";
Pre-check if the event is a click.
  •	handler.length === 0
Checks how many arguments the function expects.
  •	If 0, it’s a “simple” click listener → run only if isClick is true.
  •	Otherwise, it’s a “full” event listener → always run with event passed in.
  •	...handlers uses rest parameters so you can pass any number of handlers.
  3.	Why This Works in Node.js
  •	No browser APIs are used.
  •	Works with any object shaped like { type: string } (custom event, message, etc.).
  •	Can be plugged into CLI apps, server event systems, or custom emitters.
 * */


// 6) FUnction porperties for Memoization
function fibonacci(n) {
  if (n in fibonacci.cache) return fibonacci.cache[n];
  const result = n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  fibonacci.cache[n] = result;
  return result;
}

fibonacci.cache = {};
console.log(`Type of fibonacci cache ${typeof fibonacci.cache}`);

console.log(fibonacci(10));

/*
 * Why?

Faster repeated calls (e.g., in dynamic programming).

Cache is encapsulated with the function (no global variables).
 * */


// 7. NFE for self-overwriting Fuctions ('Lazy Definition')

//self-overwriting function for one-time initialization
let initApp = function setup() {
  console.log("Initializing");

  // Overwrite itself after first run
  initApp = function() {
    console.log('Already initialized!');
  }

  //setup(); // internal call safe
}

initApp();
initApp();

/*
 * Key Takeaways
name: Debugging, logging, and metaprogramming.

length: Dependency injection, polymorphism.

Custom Properties: Stateful functions (rate limits, caches).

NFE: Reliable recursion and self-overwriting functions.
 * */








