/*
 * The "new Function" Syntax in JavaScript
 * ======================================
 *
 * This is an alternative, rarely-used method to create functions where the function
 * is constructed from strings at runtime. It's particularly useful in specific cases
 * like dynamically executing code received from a server or compiling functions from templates.
 */


// Basic Syntax:
// let func = new Function([arg1, arg2, ...argN], functionBody);
//
// Where:
// - arg1...argN: Function parameters as strings
// - functionBody: The function body as a string


// Ex 1: Function with Parameters
let sum = new Function('a', 'b', 'return a+b');
console.log(sum(1, 2));

// Ex 2: Function without paramters
let sayHi = new Function('console.log("Hello")');
sayHi(); // "hello"

/*
 * Key Characteristics:
 * 1. Dynamic Function Creation:
 *    The entire function is created from strings at runtime, unlike normal function
 *    declarations where code is written statically.
 *
 * 2. Server-Side Code Execution Example:
 */


let serverCode = 'console.log("Dynamically receieved code");'
let dynamicFunc = new Function(serverCode);
dynamicFunc();


/*
 * Closure Behaviour Difference:
 * Normally functions remember their creation enviromment(lexical scope),
 * but new Function Always reference the GLOBAL enviromnent instead.
 * */


function getFunc() {
  let value = "test";

  // new Function can't access outer variables 
  let func1 = new Function("console.log(value)");  // error: value is undefined

  // normal function can access outer variables
  let func2 = function() { console.log(value); }; // works

  return func2;
}

try {
  getFunc()(); // throws error: value is not defined
}
catch (e) {
  console.error("Expected error:", e.message);
}



/*
 * Why This Behavior Exists:
 * 1. Minification Safety:
 *    - Production code often uses minifiers that rename local variables
 *    - If new Function could access closures, it would break when variables are renamed
 *    - Example: Minifier might change `let userName` to `let a`
 *
 * 2. Architectural Benefits:
 *    - Explicit parameter passing is more reliable
 *    - Prevents accidental dependencies on outer scope
 *    - Makes code behavior more predictable
 */

/*
 * Parameter Syntax Variations:
 * For historical reasons, parameters can be passed in different formats:
 */

// 1) Basic Syntax (seperate strings)
let add1 = new Function('a', 'b', 'return a+b');

// 2. Comma-seperated string
let add2 = new Function('a,b', 'return a+b');

// 3. Comma-seperated with spaces
let add3 = new Function('a , b', 'return a+b');

// All three are equivalent
console.log(add1(1, 2), add2(1, 2), add3(1, 2));


/*
 * When To Use:
 * - Dynamic code execution (e.g., code from server/database)
 * - Template compilation in complex web apps
 * - Cases where function code isn't known until runtime
 *
 * When To Avoid:
 * - Regular function declarations are preferred when possible
 * - Potential security risks with executing arbitrary strings as code
 * - Less performant than standard function declarations
 */



/*
 * Security Note:
 * Using new Function with untrusted strings is dangerous as it can execute
 * arbitrary code, similar to eval(). Always validate/sanitize input first.
 */

/*
 * This comprehensive comment covers:

Basic syntax and examples

The unique closure behavior (global scope only)

Reasons for the design (minification, architecture)

Parameter syntax variations

Use cases and when to avoid it

Security considerations

Comparisons with normal function behavior
 * */


// REAL WORLD EXAMPLES


// 1. Dynamic Formaula Evaluater (Math/spreadsheet app)

/**
 * Real-world use case: A spreadsheet app or calculator that allows users
 * to input custom formulas as strings, which are then converted to executable functions.
 */

function createFormula(formulaStr) {
  if (!/^[0-9a-zA-Z+\-*/().\s]+$/.test(formulaStr)) {
    throw new Error("Invalid formula characters");
  }

  try {
    return new Function('x', 'y', `return ${formulaStr};`);
  } catch (e) {
    throw new Error("Invalid formula syntax");
  }
}



// Usage: 

const areaFormula = createFormula('x * y');
console.log(areaFormula(5, 10));

const energyFormula = createFormula("(x*y) / 2");
console.log(energyFormula(10, 20));

/*
 * Why new Function()?

The formula is unknown at coding time (user-provided).

Safer than eval() because it runs in a restricted scope.

Avoids manual parsing of math expressions.
 * */


// 2. Dynamic API Request Handler (Backend/Frontend)

/**
 * Real-world use case: A backend system that receives API handlers as strings
 * from a database or config file and converts them into executable middleware.
 */

/**
 * Real-world use case: A backend system that receives API handlers as strings
 * from a database or config file and converts them into executable middleware.
 */
function createAPIMiddleware(validationLogic) {
  return new Function('req', 'res', 'next', `
    try {
      ${validationLogic}
      next(); // Proceed if validation passes
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  `);
}

// Usage:
const validateUser = createAPIMiddleware(`
  if (!req.body.email.includes("@")) {
    throw new Error("Invalid email");
  }
  if (req.body.password.length < 8) {
    throw new Error("Password too short");
  }
`);

// Simulate an Express.js request
const mockReq = { body: { email: "test@example.com", password: "12345678" } };
const mockRes = { status: (code) => ({ json: (data) => console.log(code, data) }) };
const mockNext = () => console.log("Validation passed!");

validateUser(mockReq, mockRes, mockNext); // Runs the dynamic validation


/*
 * Why new Function()?

API validation rules might change without server restarts.

Business logic can be stored in a database or CMS
 * */


// 3. Plugin System (Modular extension)

/**
 * Real-world use case: A plugin architecture where third-party developers
 * can submit code snippets that extend core functionality.
 */

class PluginSystem {
  constructor() {
    this.plugins = [];
  }

  register(pluginCode) {
    const plugin = new Function('app', `
        const exports = {};
        (function(){${pluginCode}})();
        return exports;
    `);
    this.plugins.push(plugin);
  }

  runAll(appInstance) {
    this.plugins.forEach(plugin => plugin(appInstance));
  }
};

// Usage:
const myApp = { version: "1.0" };
const pluginSystem = new PluginSystem();

// Register a plugin (could be loaded from a database)
pluginSystem.register(`
  exports.name = "Logger";
  app.log = (msg) => console.log(\`[\${exports.name}] \${msg}\`);
`);

pluginSystem.runAll(myApp);
myApp.log("Hello!");  // "[Logger] Hello"

/*
 * Why new Function()?

Plugins are loaded at runtime.

Isolates plugin code in its own scope (no accidental global leaks).


 * */


// 4. Custom Rule Engine (Discount Rules)

/**
 * Real-world use case: An e-commerce platform where marketing teams
 * define dynamic discount rules without deploying new code.
 */


function createDiscountRule(condition, action) {
  return new Function('user', 'cart', `
    if(${condition}){
      return ${action};
}
    return 0;
`);
}

// Usage:
const highValueDiscount = createDiscountRule(
  'cart.total>1000',
  'cart.total*0.1' // 10% discount
);

const newUserDiscount = createDiscountRule(
  'user.joinDate > Date.now() - 86400 * 30 * 1000', // Joined <30 days
  '50'  // $50 off
);

const cart = { total: 1200 };
const user = { joinDate: Date.now() - 15 * 86400 * 1000 };

console.log(highValueDiscount(user, cart));
console.log(newUserDiscount(user, cart));

/*
 * Why new Function()?

Non-developers can edit rules via a UI (stored as strings in DB).

More flexible than hardcoded if/else logic.
 * */


// 5. Sandboxed Scripting (Safe code execution)
/**
 * Real-world use case: A browser-based coding playground where users
 * can write and execute JavaScript safely.
 */


function runInSandbox(code) {
  // Restrict access to sensitive APIs
  const safeGlobals = {
    console,
    Math,
    Date,
    Array,
    Object,
    // ... (other safe globals)
  };

  return new Function(...Object.keys(safeGlobals), `
    with (this) {
      try {
        ${code}
      } catch (err) {
        console.error("Execution error:", err);
      }
    }
  `).bind(safeGlobals)();
}

// Usage:
runInSandbox(`
  console.log("2+2 =", 2+2);
  // Fetch() or localStorage would throw an error (not in safeGlobals)
`);


/*
 * Why new Function()?

Safer than eval() (can restrict available globals).

Useful for educational apps or limited scripting environments
 
 * */
 












