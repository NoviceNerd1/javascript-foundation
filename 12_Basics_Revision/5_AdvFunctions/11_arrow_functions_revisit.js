// // /*
// //  * Arrow Functions Revisited - Detailed Summary
// //  *
// //  * Arrow functions (=>) are more than just shorthand for small functions. They have
// //  * specific behaviors that make them useful in particular contexts.
// //  */

// // // Key feature 1: No own "this" Context

// // /*
// //  * Arrow functions don't have their own 'this'. They inherit 'this' from the enclosing
// //  * lexical context. This makes them ideal for use in callbacks where we want to
// //  * maintain the surrounding context.
// //  */

// // // Example : Using arrow function in object method callback

// // const group = {
// //   title: "Our Group",
// //   students: ["John", "Pete", "Alice"],

// //   showList() {
// //     // Arrow function inherits this from showList( which is the group object)
// //     this.students.forEach(
// //       (student) => console.log(this.title + " : " + student) // works: "this" is group
// //     );
// //   },
// // };

// // group.showList();

// // // Compare with regular function (would fail):
// // const brokenGroup = {
// //   title: "Our Group",
// //   students: ["John", "Pete", "Alice"],

// //   showList() {
// //     this.students.forEach(function (student) {
// //       // Error: "this" is undefined (or window in non-strict mode)
// //       console.log(this.title + " : " + student);
// //     });
// //   },
// // };
// // brokenGroup.showList();

// // // Key Feature 2: Cannot be Used as Constructors

// // /*
// //     Arrow functions cannot be called with "new" because they lack
// //     their own "this" and other constructor-related mechanisms.
// // */

// // const ArrowFunc = () => {};
// // //new ArrowFunc();    //TypeError: ArrowFunc is not a constructor

// // // Key Feature 3: No "arguments" object

// // /*
// //     Arrow Functions don't have their own "arguments" object. They inherit
// //     it from the enclosing fuction if one exists.
// // */

// // function defer(f, ms) {
// //   return function () {
// //     // Arrow function can access "arguments" from the other functions
// //     setTimeout(() => f.apply(this, arguments), ms);
// //   };
// // }

// // function sayHi(who) {
// //   console.log("Hello, " + who);
// // }

// // const sayHiDeferred = defer(sayHi, 2000);
// // sayHiDeferred("John");

// // // Equivalent without arrow function would require workarounds:
// // function deferRegular(f, ms) {
// //   return function (...args) {
// //     const ctx = this;
// //     setTimeout(function () {
// //       return f.apply(ctx, args);
// //     }, ms);
// //   };
// // }

// // // Key feature 4: Differences from .bind()

// // /*
// //     While .bind(this) creates a new function with bound context, arrow
// //     functions don't bind "this" - they simply don't have their own "this"
// //     at all.
// //     The lookup is done lexically (like regular variable lookup) rather
// //     than through binding.
// // */

// // // Additional Notes

// // /*
// //     Arrow Functions also don't have:
// //         - "super" (relavent in class inheritance)
// //         - "new.target" property

// //     They're best suited for:
// //         1. Short callbacks that need lexical "this"
// //         2. Functions that should inherit context from surrounding code
// //         3. Cases where you want to avoid binding additional variables

// //     Not suitable for:
// //         1. Methods that need their own "this" (object methods)
// //         2. Constructor functions
// //         3. Functions that need the arguments object
// //         4. Function that might need function hoisting
// // */

// // // WHEN TO USE ARROW FUNCTIONS

// // // Good for:
// // //  - Array operations
// // console.log([1, 2, 3, 4, 5].map((x) => x * 2));

// // //  - Event Listeners that need context
// // // button.addEventListener("click",()=> this.handleClick());

// // //  - Promise chains

// // // Not ideal for:
// // //  - Object methods (use regular funcitons)
// // //  - Prototype methods
// // //  - Functions that need access to their own "this"  or "arguments"

// // /*
// // This comprehensive summary covers all the key aspects of arrow functions including:
// //     Their lexical this behavior
// //     Constructor limitations
// //     Handling of arguments
// //     Differences from .bind()
// //     Appropriate use cases
// //     Comparison with regular functions
// //     Practical examples demonstrating each concept
// // */

// // // ============================================================

// // // REAL WORLD EXAMPLES

// // // `this` Binding in Event Listeners

// // class Button {
// //   constructor(id, userArrow) {
// //     this.button = document.getElementById(id);
// //     this.count = 0;
// //     this.name = `Button-${id}`;

// //     if (!this.button) {
// //       throw new Error(`No button found with id "${id}"`);
// //     }

// //     if (userArrow) {
// //       // ✅ Arrow function keeps "this" bound to class instance
// //       this.button.addEventListener("click", () => {
// //         console.log(`Inside arrow listener:`, this);
// //         this.count++;
// //         console.log(`${this.name} clicked ${this.count} times`);
// //       });
// //     } else {
// //       // ❌ Regular function loses `this` (points to DOM element)
// //       this.button.addEventListener("click", function () {
// //         console.log(`Inside regular function listener:`, this);
// //         try {
// //           this.count++;
// //           console.log(`Clicked ${this.count} times`);
// //         } catch (e) {
// //           console.error(`Error: ${e.message}`);
// //         }
// //       });
// //     }
// //   }

// //   justAnotherMethod() {
// //     console.log('Just a method to debug "Class with only constructor error"');
// //   }
// // }

// // // Example usage
// // new Button("badButton", false); // function -> wrong this
// // new Button("goodButton", true); // arrow -> correct this

// // // ---------------------

// // // Filter / Map / forEach with Arrow Functions

// // const users = [
// //   { id: 1, name: "Alice", age: 25 },
// //   { id: 2, name: "Bob", age: 30 },
// //   { id: 3, name: "Charlie", age: 22 },
// //   { id: 4, name: "Dave", age: 17 },
// // ];

// // document.getElementById("runBtn").addEventListener("click", () => {
// //   const outputEl = document.getElementById("output");

// //   console.clear();
// //   console.log("=== Original Users Array ===");
// //   console.table(users);

// //   // ❌ Verbase : Regular Function
// //   const adultsVerbose = users.filter(function (user) {
// //     return user.age >= 18;
// //   });
// //   console.log("Verbose filter result:", adultsVerbose);

// //   // ✅ Cleaner: Arrow Function
// //   const adultsArrow = users.filter((user) => user.age >= 18);
// //   console.log("Arrow filter result:", adultsArrow);

// //   // Chaining with arrow functions
// //   const namesOver20 = users
// //     .filter((user) => user.age > 20)
// //     .map((user) => user.name);

// //   namesOver20.forEach((name) => console.log(`Name over 20: ${name}`));

// //   // Show results in UI
// //   outputEl.textContent = `
// //     Verbose filter (function):
// //         ${JSON.stringify(adultsVerbose, null, 2)}

// //     Arrow Filter:
// //         ${JSON.stringify(adultsArrow, null, 2)}

// //     Names Over 20:
// //     ${namesOver20.join(", ")}
// //   `;
// // });

// // // ---------------------------

// // // Promises & Async/Await (Avoid Binding this)
// // // Fixing "this" with Arrow Functions

// // const OUT = document.getElementById("fix_this_output");
// // function log(...parts) {
// //   OUT.textContent += parts.join(" ") + "\n";
// // }
// // function clearLog() {
// //   OUT.textContent = "";
// // }

// // class DataFetcher {
// //   constructor(url) {
// //     this.url = url;
// //     this.data = null;
// //   }

// //   async fetchDataDemo() {
// //     clearLog();
// //     log("URL:", this.url);

// //     // 1) WRONG: Regular function loses "this"
// //     await new Promise((resolve) => {
// //       fetch(this.url)
// //         .then(function (res) {
// //           return res.json();
// //         })
// //         .then(function (data) {
// //           try {
// //             this.data = data; // fails
// //             log("Wrong -> unexpectedly wroked?");
// //           } catch (err) {
// //             log("WRONG ->", err.name + ":", err.message);
// //           } finally {
// //             resolve();
// //           }
// //         });
// //     });

// //     // 2) CORRECT: Arrow function
// //     await new Promise((resolve) => {
// //       fetch(this.url)
// //         .then((res) => res.json())
// //         .then(
// //           function (data) {
// //             this.data = data;
// //             log("BIND -> OK");
// //             resolve();
// //           }.bind(this)
// //         );
// //     });

// //     // 3) CORRECT: bind
// //     await new Promise((resolve) => {
// //       fetch(this.url)
// //         .then(function (res) {
// //           return res.json();
// //         })
// //         .then(
// //           function (data) {
// //             this.data = data;
// //             log("Bind -< OK");
// //             resolve();
// //           }.bind(this)
// //         );
// //     });

// //     // 4). CORRECT: self = this
// //     await new Promise((resolve) => {
// //       const self = this;
// //       fetch(this.url)
// //         .then(function (res) {
// //           return res.json();
// //         })
// //         .then(function (data) {
// //           self.data = data;
// //           log("SELF -> OK");
// //           resolve();
// //         });
// //     });

// //     log("\nDone. FInal this.data logged in console.");
// //     console.log("Final this.data", this.data);
// //   }
// // }

// // document.getElementById("runDemo").addEventListener("click", () => {
// //   const df = new DataFetcher("https://dummyjson.com/users/1");
// //   df.fetchDataDemo().catch((e) => log("Fatal:", e.message));
// // });

// // log("Ready. Click run demo.");
// // Run with: node demo.js
// // Requires Node 18+ (built-in fetch)

// class DataFetcher {
//   constructor(url) {
//     this.url = url;
//     this.data = null;
//   }

//   async fetchData() {
//     console.log("Fetching from:", this.url);

//     // ❌ Problem: `this` is lost in a regular function
//     await fetch(this.url)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         // Here, "this" is undefined, not the class instance
//         try {
//           this.data = data;
//         } catch (err) {
//           console.error("WRONG ->", err.message);
//         }
//       });

//     // ✅ Solution: Arrow functions preserve lexical `this`
//     await fetch(this.url)
//       .then((response) => response.json())
//       .then((data) => {
//         this.data = data; // Now correctly bound to the instance
//         console.log("ARROW -> Works!");
//         console.log("Data snippet:", {
//           id: data.id,
//           firstName: data.firstName,
//           age: data.age,
//         });
//       });
//   }
// }

// const fetcher = new DataFetcher("https://dummyjson.com/users/1");
// fetcher.fetchData();

// // 4. setTimeout/setInterval (Lexical this)

// // Problem: this is lost in timers
// // solution: Arrow function capture outer "This"
// // Run with: node timer.js

// class Timer {
//   constructor() {
//     this.seconds = 0;
//   }

//   start() {
//     console.log("Starting timer...");

//     // ❌ Problem: `this` is undefined inside setInterval with regular function
//     setInterval(function () {
//       try {
//         this.seconds++;
//         console.log(`(WRONG) Elapsed: ${this.seconds}s`);
//       } catch (err) {
//         console.error("(WRONG) Error:", err.message);
//       }
//     }, 1000);

//     // ✅ Solution: Arrow function keeps lexical `this` (the Timer instance)
//     setInterval(() => {
//       this.seconds++;
//       console.log(`(CORRECT) Elapsed: ${this.seconds}s`);
//     }, 1000);
//   }
// }

// const timer = new Timer();
// timer.start();

// // 5. Object Methods (When NOT to Use Arrow Functions)

// // Problem: Arrow functions don't work for object methods needing their own "this"
// // Solution: Use regular function for methods

// const person = {
//   name: "Alice",

//   // WRONG: Bad: Arrow function takes "this" from outer scope (undefined in strict mode)
//   greet: () => {
//     console.log(`(Wrong) Hi I'm ${this?.name}`);
//   },

//   // CORRECT Good: Regular function binds "this" to the object
//   greetProperly: function () {
//     console.log(`(Correct) Hi, I'm ${this.name}`);
//   },

//   // CORRECT: Modern short syntax (same as above)
//   greetShorthand() {
//     console.log(`(CORRECT) Hi Again, I'a ${this.name}`);
//   },
// };

// person.greet(); // Wrong : Hi, I'm undefined
// person.greetProperly(); // Correct: Hi, I'm Alice
// person.greetShorthand(); // Correct: Hi

// 6. Debouncing with Arrow Functions (Real-World Utility)

// Problem: Need to delay a function (e.g. Search Input)
// Solution: Arrow functions simplify debounce implementation

// debounce.js
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    // ✅ Arrow function preserves lexical `this`
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args); // preserves `this`
    }, delay);
  };
}

// Example: simulating a "search" input in Node
class SearchBox {
  constructor() {
    this.query = "";
    // wrap handler with debounce
    this.handleSearch = debounce(this.handleSearch.bind(this), 500);
  }

  // Normal function (correct dynamic `this`)
  handleSearch(query) {
    this.query = query;
    console.log(`Searching for: ${this.query}`);
  }

  // Simulate typing events
  simulateTyping(inputs) {
    inputs.forEach((word, i) => {
      setTimeout(() => this.handleSearch(word), i * 200);
    });
  }
}

// Usage
const search = new SearchBox();
search.simulateTyping(["h", "he", "hel", "hell", "hello"]);

/*
Summary: When to Use Arrow Functions
Use Case	Example	Why?
Event Listeners	button.addEventListener('click', () => {...})	Keeps this from class/component
Array Methods	users.map(user => user.name)	Shorter syntax
Promises	.then(data => this.data = data)	No .bind(this) needed
Timers	setInterval(() => this.update(), 1000)	Correct this context
Avoid Object Methods	greet() { ... } (regular function)	Needs own this
Key Takeaways:
✅ Use arrow functions for callbacks (events, timers, promises).
✅ Use them for short inline functions (array methods).
❌ Avoid them for object methods or constructors.

*/
