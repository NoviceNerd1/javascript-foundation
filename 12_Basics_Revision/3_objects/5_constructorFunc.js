// Constructor Functions & the 'new' Operator in JS

// Constructor functions are used to create multiple similar objects with shared structure and initialization logic.
//
// Constructor is:
//  - a regular funcition (NOT arrow)...
//  - ... intended to be called only with 'new'.
//  - Named with a CapitalLetter by convention.
//
//
// The 'new' operator does the following steps under the hood:
//   1) Creates a new empty object : 'this'={}
//   2) Links it to the prototype: 'this.__proto__ = Constructor.prototype'
//   3) Executes the constructor function with 'this' bound
//   4) Returns the object unless the function explicitly returns another object
//
// Naming convention : Capitalized (eg. User), and only called with 'new' keyword.


// When called with 'new', a funciton does:
// 1) creates a empty object : this = {};
// 2) Executes the function body (modifying 'this').
// 3) Returns the object: return this;


// Example constructor:

function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user1 = new User("Jack");
let user2 = new User("Alice");

console.log(user1.name);
console.log(user1.isAdmin);
console.log(user2.name);
console.log(user2.isAdmin);


// Equivalent object (manual creation):
let manual = {
	name: "Jack",
	isAdmin: false
};

console.log(manual);


// Advanced : one-off object using IIFE-style constructor

let singleUser = new function() {
	this.name = "Jason";
	this.isAdmin = false;
	// more setup logic here
};

console.log(singleUser.name);  // "Jason"

// Arrow function cannot be constructors :
// Because they don't bind their own 'this'

// This will throw an error:
let ArrowUser = (name) => {
	this.name = name;
}

// let user = new ArrowUser("Dave"); // TypeError: ArrowUser is not a contructor

//---------------
// Summary
// - When u need to instantiate many similar objects
// - When u want reusable, maintainable intialization logic
// - When u plan to add shared methods via prototype later
//
// Avoid them for one-off objects - user object literals or IIFE instead



// -------------------------
// Advanced Constructor Mechanics in JS
// Covers: new.target , constructor return behaviour , inline methods


// new.target - detect if a function is called with 'new'

// if called with 'new', new.target is the constructor function
// if called without 'new', it's 'undefined'

function User(name) {
	if(!new.target) {
		return new User(name);
	}

	this.name = name;
}

//let john = User("John");  // still works, returns User instance
//console.log(john.name);  // It was working before then it gave error! CHECKKK!!
//
//WHY ERROR??!

let sam = new User("Sam");  // standard Usage
console.log(sam.name);


// -------------------------------
// Constructor Return Values

// 1) if a constructor returns an object -> that object is returned
// 2) if it returns a primitive or nothing -> 'this' is returned

function bigUser() {
	this.name= "John";
	return { name:"Godzilla" };  // custom object returned
}

console.log(new bigUser().name); // Godzilla

function smallUser() {
	this.name = "John";
	return 42;  // PRIMITIVE IS IGNORED
}

console.log(new smallUser().name)



//---------------------
// Optional Parentheses with 'new'


// Permissable, but poor readability

function Foo() {
	this.name = "Anonymous";
}

let a = new Foo;  // Permitted but not "good style"
let b = new Foo();

console.log(a.name)
console.log(b.name)


//--------------------
// Methods in Constructor


// we can use constructor functions to create objects ,more flexible
// CONSTRUCTOR FUNCTION may have parameter that define how to construct the object and what to put in it.


// - Every instance gets its own  copy (useful for dynamic behaviour)
// - But NOT memory-efficient if method is identical across instances


function User(name) {
	this.name = name;

	this.sayHi = function() {
		console.log("My name is: "+ this.name);
	};
}

let johnny = new User("John");

johnny.sayHi();


/*
 
 john = {
	name: "John",
	sayHi: function(){...}
 }

  */

// To create complex objects, there's more advanced syntax , classes, that we'll cover later.


// SUMMARY
// 1) constructor functions, or , breifly, constructors, are regular functions , but there's a common agreement to name them with capital letter first.
// Constructor functions should ONLY be called using new. Such call implies, a cration of empty this at start and returning the populatedd one at the end.


// Built-in Constructors

// Ex:
let now = new Date();
let tags = new Set(["hg","serdf","wewe","hg"]);
let error = new Error("Something Broke");

console.log(now.toISOString());
console.log(tags.size);
console.log(error.message)




















