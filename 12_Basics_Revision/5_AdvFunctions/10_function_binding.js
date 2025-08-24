/*
 * FUNCTION BINDING IN JAVASCRIPT
 *
 * Problem: When object methods are passed as callbacks (e.g., to setTimeout),
 * the object context ('this') is lost because the method gets separated from its object.
 */

// Example of losing "this"

let user = {
  firstname: "John",
  sayHi() {
    console.log(`Hello, ${this.firstname}!`);
  },
};

// This fails because setTimeout receives just user.sayHi (the function),
// not the object context
setTimeout(user.sayHi, 1000); // "Hello undefined"

// Equivalent to:
let f = user.sayHi;
setTimeout(f, 1000); // same problem - context is lost

/*
    Reasons:
        - In browsers, setTimeout sets this=window
        - In Node.js, this becomes the timer object
        - In most cases, this becomes undefined in strict mode
*/

// Solution 1: Wrapper Function
setTimeout(function () {
  user.sayHi(); // works - gets user from outer lexical environment
}, 1000);

// Arrow function version:
setTimeout(() => user.sayHi(), 1000); // same effect

/*
    Wrapper Vulnerability:
      If "user" changes before setTimeout fires, it calls the new user's method
*/

// user = {
//   sayHi() {
//     console.log("Hacked!");
//   },
// };
// After 1 second: "Hacked!" insted of "Hello John"

// SOLUTION 2 : bind
/*
Function.prototype.bind creates a new function with fixed "this" context
Syntax: let boundFunc = func.bind(context,[arg1],[arg2],...);
*/

// Basic bind example
function func() {
  console.log(this.firstname);
}
let funcUser = func.bind(user);
funcUser();

// Binding with arguments
function greet(phrase) {
  console.log(`${phrase}, ${this.firstname}!`);
}
let greetUser = greet.bind(user);
greetUser("Hello");

// Binding object methods
let sayHi = user.sayHi.bind(user);
sayHi(); // "Hello, John" - works without object
setTimeout(sayHi, 1500); // still works even if user changes

/*
    bindAll Pattern:
        - When an object has multiple methods to bind
*/

for (let key in user) {
  if (typeof user[key] === "function") {
    user[key] = user[key].bind(user);
  }
}

// PARTIAL FUNCTION APPLICATION

/*
    bind can also fix initial arguments, creating specialized functions
    Useful when we want to create variants of general functions
*/

function mul(a, b) {
  return a * b;
}

// Create double function by fixing first argument as 2
let double = mul.bind(null, 2);
console.log(double(3)); // 6 (2*3)
console.log(double(4)); // 8 (2*4)

// Create triple by fixing first arguments as 3
let triple = mul.bind(null, 3);
console.log(triple(3)); // 9 (3*3)

/*
 * Partial Application Without Context:
 * When we want to fix arguments but keep original 'this'
 * (Native bind requires context, so we need a custom solution)
 */

function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args);
  };
}

// Usage Example:
let user2 = {
  firstname: "Alice",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstname}:${phrase}`);
  },
};

// Create partial method with fixed time but keeping user2 as "this"
user2.sayNow = partial(user2.say, new Date().toLocaleTimeString());
user2.sayNow("Hello"); // "[current time] Alice: Hello"

/*
 * SUMMARY:
 * 1. Use wrapper functions when context is available lexically
 * 2. Use bind() for reliable context binding, especially with callbacks
 * 3. Use bind() for partial function application to create specialized functions
 * 4. For partials without context binding, implement custom solution
 *
 * Libraries like lodash provide additional utilities (_.bindAll, _.partial)
 */

/*
Key points covered:

    The problem of losing this when methods are passed as callbacks

    Two main solutions (wrappers and bind)

    Vulnerability of wrapper approach

    Detailed bind() syntax and usage

    Partial function application with bind()

    Custom solution for partials without context binding

    Practical examples for each concept

    Performance considerations and alternatives

*/

// Real worl examples

// User Profile
class UserProfile {
  constructor(name, buttonId, bindType) {
    this.name = name;
    this.button = document.getElementById(buttonId);

    if (bindType === "bad") {
      // ❌ LOSES "this"
      this.button.addEventListener("click", this.showProfile);
    } else if (bindType === "good-arrow") {
      // ✅ Arrow Function keeps lexical "this"
      this.button.addEventListener("click", () => this.showProfile());
    } else if (bindType === "good-bind") {
      // ✅ bind() fixes "this" explicitly
      this.button.addEventListener("click", this.showProfile.bind(this));
    }
  }

  showProfile() {
    console.log(`Loading profile for: ${this.name}`);
  }
}

// Bad binding example - will log "Loading profile for: undefined"
const profileBad = new UserProfile("Sarah", "bad-btn", "bad");

// Good binding example - will log "Loading profile for : Sarah"
const profileGood = new UserProfile("Sarah", "good-btn", "good-arrow");

/*
Why it works:
The arrow function creates a closure that captures the correct this value from the class instance.
*/

// bind() - API Service Class
/*
Scenario: An API service where methods need bound context for callbacks
Problem: Class methods lose context when passed as callbacks
Solution: Bind methods in constructor
*/

class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    // Bind all methods that will be used as callback
    this.fetchUser = this.fetchUser.bind(this);
    this.fetchPost = this.fetchPost.bind(this);
  }

  fetchUser(userId, callback) {
    fetch(`${this.baseUrl}/users/${userId}`)
      .then((response) => response.json())
      .then((data) => callback(null, data))
      .catch(callback);
  }

  // Mock of third party Library
  fetchPost(userId, callback) {
    // without binding, "this" would be undefined here
    fetch(`${this.baseUrl}/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((posts) => {
        console.log(`Fetched from ${this.baseUrl}`); // needs correct "this"
        callback(null, posts);
      })
      .catch(callback);
  }
}

// Mock of a third party library that accepts callbacks
function someThirdPartyLibrary(fn) {
  // Without binding, 'this' would be undefined here
  console.log("Third part lib callback");
  fn(1, (err, data) => {
    if (err) {
      console.error("Error: ", err);
    } else {
      console.log("Data Received");
    }
  });
}

const api = new ApiService("https://jsonplaceholder.typicode.com");

// bind button actions
document.getElementById("fetch-user-btn").addEventListener("click", () => {
  api.fetchUser(1, (err, user) => {
    if (err) {
      console.error(err);
    } else {
      console.log("User data:", user);
    }
  });
});

document.getElementById("fetch-post-btn").addEventListener("click", () => {
  api.fetchPost(1, (err, posts) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Posts Data:", posts);
    }
  });
});

// Passing a bound method to a third party lib - works because of ".bind()"

someThirdPartyLibrary(api.fetchUser);

// Bound Price Calculator - City Price Calculator

// General price calculator: price is LAST so bind works correctly
function calculatePrice(taxRate, discount = 0, price) {
  return (price - discount) * (1 + taxRate);
}

// Bind taxRate and discount first, leaving price open
const calculateNYCPrice = calculatePrice.bind(null, 0.08875, 0); // NYC
const calculateChicagoPrice = calculatePrice.bind(null, 0.1025, 0); // Chicago

// Hook up buttons
document.getElementById("nyc-btn").addEventListener("click", () => {
  const price = parseFloat(document.getElementById("price").value);
  if (isNaN(price)) return alert("Enter a valid price");
  document.getElementById(
    "result"
  ).textContent = `NYC Price: $${calculateNYCPrice(price).toFixed(2)}`;
});

document.getElementById("chi-btn").addEventListener("click", () => {
  const price = parseFloat(document.getElementById("price").value);
  if (isNaN(price)) return alert("Enter a valid price");
  document.getElementById(
    "result"
  ).textContent = `Chicago Price: $${calculateChicagoPrice(price).toFixed(2)}`;
});

//ServerLogger with Partial - Server Logger

// Custom partial implementation
function partialLog(func, ...fixedArgs) {
  return function (...dynamicArgs) {
    return func.apply(this, [...fixedArgs, ...dynamicArgs]);
  };
}

// Logger class
class ServerLogger {
  constructor(serviceName) {
    this.serviceName = serviceName;

    // Pre-configured log methods using partial
    this.logError = partialLog(this.log, "ERROR");
    this.logWarning = partialLog(this.log, "WARNING");
  }

  log(level, message) {
    const entry = `[${new Date().toISOString()}] ${
      this.serviceName
    } ${level}: ${message}`;
    console.log(entry);
    // in real apps: send entry to external logging service
  }
}

// Instantiate logger
const authLogger = new ServerLogger("AuthService");

// Hook up buttons
document.getElementById("error-btn").addEventListener("click", () => {
  authLogger.logError("Invalid token");
});

document.getElementById("warning-btn").addEventListener("click", () => {
  authLogger.logError("Deprecated API Called");
});

// bind() vs Wrapper - Animation Frame

class Animator {
  constructor(element) {
    this.element = element;
    this.position = 0;

    // Approach 1: Bind once
    this.animateBound = this.animate.bind(this);

    // Approach 2: Wrapper arrow function
    this.animateWrapped = () => this.animate();
  }

  animate() {
    this.position += 2; // move faster for demo
    this.element.style.transform = `translateX(${this.position}px)`;
    console.log(`Current position: ${this.position}`);

    if (this.position < 300) {
      // Both approaches possible:
      requestAnimationFrame(this.animateBound);
      // OR:
      // requestAnimateFrame(this.animateWrapped);
    }
  }

  reset() {
    this.position = 0;
    this.element.style.transform = `translateX(0px)`;
  }
}

const box = document.getElementById("box");
const animator = new Animator(box);

document.getElementById("start-bind").addEventListener("click", () => {
  animator.reset();
  requestAnimationFrame(animator.animateBound);
});

document.getElementById("start-arrow").addEventListener("click", () => {
  animator.reset();
  requestAnimationFrame(animator.animateWrapped);
});

/*
Key Takeaways:
    Wrapper Functions - Best for simple cases where you control the call site

    bind() - Ideal for class methods that will be reused as callbacks

    Partial Application - Creates specialized functions from general ones

    Custom Partial - When you need to fix arguments but keep dynamic this

    bindAll - Saves time when many methods need binding


Each approach has its place depending on whether you need:
    To preserve this context

    To pre-set some arguments

    To create reusable bound methods

    To maintain clean code structure
*/

// ShoppingCart with bindAll

// Utility: bind all methods to the instance
function bindAll(obj) {
  for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))) {
    if (typeof obj[key] === "function" && key != "constructor") {
      obj[key] = obj[key].bind(obj);
    }
  }
}

// Fake payment processor
function processPayment(items, onSuccess) {
  log(`Processing Payment for ${items.length} items...`);
  setTimeout(() => {
    log(
      `Payment successful! Total Charged: $${items
        .reduce((sum, i) => sum + i.price, 0)
        .toFixed(2)}`
    );
    onSuccess();
  }, 1000);
}

function log(message) {
  const div = document.getElementById("log");
  div.innerHTML += `<p>${message}</p>`;
  console.log(message);
}

class ShoppingCart {
  constructor() {
    this.items = [];
    bindAll(this);
  }

  addItem() {
    const item = {
      name: `Item ${this.items.length + 1}`,
      price: (Math.random() * 20 + 5).toFixed(2) * 1,
    };
    this.items.push(item);
    log(`Added ${item.name} - $${item.price}`);
    this.updateTotal();
  }

  updateTotal() {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    log(`Cart total: $${total.toFixed(2)}`);
  }

  checkout() {
    if (this.items.length === 0) {
      log(`Cart is empty. Add items before you checkout.`);
      return;
    }
    processPayment(this.items, this.clearCart);
  }

  clearCart() {
    this.items = [];
    log(`Cart cleared.`);
  }
}

// Setup

const cart = new ShoppingCart();
document.getElementById("add-btn").addEventListener("click", cart.addItem);
document
  .getElementById("checkout-btn")
  .addEventListener("click", cart.checkout);
