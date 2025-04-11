// Primitive Data Types
// JavaScript has 7 primitive data types: String, Number, Boolean, null, undefined, Symbol, and BigInt

const score = 100; // Number (integer)
const scoreVal = 100.3; // Number (floating point)
const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null (special primitive type representing an empty value)
let userEmail; // Undefined (variable declared but not assigned a value)

const id = Symbol("123"); // Symbol (unique and immutable primitive value)
const anotherId = Symbol("123"); // Even though both have the same description, they are unique

const bigNum = 23131312424453n; // BigInt (used for large numbers beyond Number limit)

// Comparing two Symbols always results in false because Symbols are unique
console.table([
  score,
  scoreVal,
  isLoggedIn,
  outsideTemp,
  userEmail,
  id == anotherId, // false, as Symbols are unique
  bigNum,
]);

// Reference (Non-Primitive) Data Types
// JavaScript has 3 main non-primitive types: Arrays, Objects, and Functions

const heros = ["shaktimaan", "naagraj", "doga"]; // Array (object type in JavaScript)
console.log(heros);
console.log(typeof heros); // Output: 'object', as arrays are a type of object

let myObj = {
  name: "Rishi",
  age: 22,
}; // Object (collection of key-value pairs)
console.log(myObj);
console.log(typeof myObj); // Output: 'object'

const myFunc = function () {
  console.log("Hello World");
}; // Function (which is also an object in JavaScript)

console.log(typeof bigNum); // Output: 'bigint'
console.log(typeof myFunc); // Output: 'function'

// =================================================================

// Stack(Primitive) , Heap(Non-primitive)

let myYtName = "SoloEvolver";

let anotherName = myYtName;

anotherName = "ChaiAurCode";
console.log(anotherName);
console.log(myYtName);

let userOne = {
  email: "user@gmail.com",
  phone: 32142,
};
let userTwo = userOne;

userTwo.email = "abc@gmail.com";

console.log(userOne);
console.log(userTwo);
