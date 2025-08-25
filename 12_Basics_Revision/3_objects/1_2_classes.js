/*
 * JAVASCRIPT CLASSES OVERVIEW
 *
 * Classes in JavaScript are blueprints or templates for creating objects.
 * They encapsulate data (properties) and functions (methods) to manipulate that data.
 * Classes were introduced in ECMAScript 6 (ES6) in 2015 as syntactic sugar over
 * JavaScript's existing prototype-based inheritance.
 *
 * Key characteristics:
 * - Built on prototypes (like constructor functions)
 * - Use 'class' keyword for declaration
 * - Support constructors for initialization
 * - Methods are defined without 'function' keyword
 * - Always execute in strict mode
 * - Not hoisted (unlike functions)
 */

// CLASS DECLARATION VS CLASSS EXPRESSION

/**
 * CLASS DECLARATION
 *
 * Similar to function declarations but not hoisted
 * Syntax: class ClassName { class-body }
 */

class Car {
  // Class body containing constructor and methods
}

/**
 * CLASS EXPRESSION
 *
 * Similar to function expressions, can be named or unnamed
 * Syntax: const ClassName = class { class-body }
 */

const vehicle = class {
  // Class body
};

// CLass Type: Classes are functions

/**
 * Despite the class syntax, JavaScript classes are essentially functions
 * The typeof operator returns 'function' for classes
 */

console.log(typeof vehicle); // function

// Constructor Method

/*
 * The constructor() method is a special method:
 * - Automatically called when creating a new instance with 'new'
 * - Used to initialize object properties
 * - Takes parameters passed during instantiation
 * - Uses 'this' keyword to refer to the current instance
 * - Each class can have only one constructor
 */

class CarWithConstructor {
  constructor(brand, model, year) {
    // "this" refers to the instance being created
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

console.log(CarWithConstructor);

// CREATING OBJECTS (instantiation)

/**
 * Objects are created using the 'new' keyword followed by the class name
 * Arguments passed to the constructor initialize the instance properties
 */

const myCar = new CarWithConstructor("Toyota", "Camry", 2020);
console.log(myCar);

// Example 1: Class with Default values(No arguments)

class CarWithDefaults {
  constructor() {
    // Properties initialized with default values
    this.brand = "BMW";
    this.model = "X5";
    this.year = 2019;
  }
  getDetail() {
    console.log(
      `brand: ${this.brand} model : ${this.model} year: ${this.year}`
    );
  }
}

const carWithDef = new CarWithDefaults();

carWithDef.getDetail();

console.log(carWithDef.brand);
console.log(carWithDef.model);
console.log(carWithDef.year);

// Example 2: Class with parameters (Dynamic Values)

class CarWithParams {
  constructor(brand, model, price, year) {
    // Property initalized with parameter values
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.year = year;
  }
  getDetail() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Year: ${this.year}`
    );
  }
}

// Creating instance with arguments
const paramCar = new CarWithParams("BMW", "X5", 980000, 2019);

console.log(paramCar);

// CLASS METHODS
/**
 * Methods are functions defined inside the class body
 * Syntax: methodName(parameters) { method-body }
 * No 'function' keyword needed before method name
 * Methods are called on instances using dot notation
 */

class CarWithMethods {
  constructor(brand, model, price, year) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.year = year;
  }

  // Method to update price
  updatePrice(newPrice) {
    this.price = newPrice;
  }

  // Method to get car age
  getAge(currentYear) {
    return currentYear - this.year;
  }
}

// Using methods
const methodCar = new CarWithMethods("BMW", "X5", 980000, 2019);
console.log(methodCar);

methodCar.updatePrice(9999999);
console.log(methodCar.price);

console.log(methodCar.getAge(2023));

// CLASS HOISTING BEHAVIOR

/**
 * IMPORTANT: Class declarations are not hoisted
 * You must declare a class before using it
 * This will throw a ReferenceError:
 */

try {
  const hoistedCar = new NotDeclaredYet(); // Error: Cannot access before initialization
} catch (e) {
  console.error("Hoisting Error:", e.message);
}

class NotDeclaredYet {
  constructor() {
    this.value = 34;
  }
}

// this works correctly:
const correctCar = new NotDeclaredYet();
console.log(correctCar.value);

// Strict Mode in classes

/**
 * Class bodies always execute in strict mode:
 * - Variables must be declared with var, let, or const
 * - Assignment to undeclared variables throws errors
 * - Other strict mode restrictions apply
 */

class StrictExample {
  constructor() {
    // This would throw an error in strict mode (and does in classes):
    //undeclaredVar = 10; // ReferenceError: undeclaredVar is not defined

    // Correct way:
    let declaredVar = 10;
    this.value = declaredVar;
  }
}

const strictCar = new StrictExample();
console.log(strictCar.value);

// COMPARISION WITH CONSTRUCTOR FUNCTIONS (PRE ES6)

/**
 * Before ES6, constructor functions were used instead of classes
 * The class syntax is primarily syntactic sugar over this pattern
 */

// Constructor Function (pre-ES6)
function OldCar(brand) {
  this.brand = brand;
}

// Adding methods to prototype (pre-ES6)
OldCar.prototype.getBrand = function () {
  return this.brand;
};

// Creating instance
const oldCar = new OldCar("Audi");
console.log(oldCar.getBrand());

// ES6 Class equivalent
class NewCar {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}

const newCar = new NewCar("Jaguaar");
console.log(newCar.getBrand());

// COMPLETE EXAMPLE

/**
 * A complete Car class example with multiple properties and methods
 */

class CompleteCar {
  constructor(brand, model, year, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.isRunning = false;
  }

  // Method to start the car
  start() {
    this.isRunning = true;
    return `${this.brand} ${this.model} is now running.`;
  }

  // Method to stop the car
  stop() {
    this.isRunning = false;
    return `${this.brand} ${this.model} has been stopped.`;
  }

  // Method to update price
  updatePrice(newPrice) {
    const oldPrice = this.price;
    this.price = newPrice;
    return `Price updated from ${oldPrice} to ${newPrice}`;
  }

  // Method to get car details
  getDetails() {
    return `
      Brand: ${this.brand}
      Model: ${this.model}
      Year: ${this.year}
      Price: ${this.price}
      Status: ${this.isRunning ? "Running" : "Stopped"}
    `;
  }
}

// Using the CompleteCar class
const myCompleteCar = new CompleteCar("Telsa", "Model S", 2022, 80000);

console.log(myCompleteCar.getDetails());
console.log(myCompleteCar.start());
console.log(myCompleteCar.updatePrice(75000));
console.log(myCompleteCar.stop());
console.log(myCompleteCar.getDetails());

/*
Key Points to Remember:
    Classes are syntactic sugar over JavaScript's prototype-based inheritance

    Constructor method is called automatically when creating new instances

    Methods are defined without the 'function' keyword

    Classes are not hoisted - must be declared before use

    Class code always runs in strict mode

    The 'new' keyword is required to create instances
    
    'this' keyword refers to the instance inside class methods
*/
