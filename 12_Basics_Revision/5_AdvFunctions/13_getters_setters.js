/*
 * JavaScript Property Getters and Setters
 *
 * There are two types of object properties:
 * 1. Data properties - regular properties we normally use
 * 2. Accessor properties - functions that execute on get/set but appear as regular properties
 */

// ======================
// Basic Getter and Setter
// ======================

/*
 * Accessor properties are defined using 'get' and 'set' methods in object literals.
 * Syntax:
 *   get propName() { ... }  - called when property is read
 *   set propName(value) { ... } - called when property is assigned
 */

let obj = {
  get propName() {
    // Executed when obj.popname is accesed
    return this._propName; // Typically stored in a "backing field"
  },

  set propName(value) {
    // Executed when obj.propName = value is called
    this._propName = value;
  },
};

// Practical Example: Full name property

let user = {
  name: "John",
  surname: "Smith",

  // getter for cocmputed property fullName
  get fullName() {
    return `${this.name} ${this.surname}`; // Combines name and surname
  },

  // Setter for fullName that decomposes value
  set fullName(value) {
    // Splits the input string and assigns to name/surname
    [this.name, this.surname] = value.split(" ");
  },
};

// using the getter
console.log(user.fullName); // "John Smith" - (getter is called)

// Using the setter
user.fullName = "Alice Cooper"; // setter is called
console.log(user.name);
console.log(user.surname);
