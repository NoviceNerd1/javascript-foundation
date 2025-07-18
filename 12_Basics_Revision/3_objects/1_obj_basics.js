// ===========================
// OBJECTS
// ---------------------------

//================================================
//			SUMMARY
//================================================

// Objects are associative arrays with enhanced capabilities.
// They store "key-value" pairs.

// -------------------------
// Keys must be strings or symbols
// values can be of any type 


let user0 = {
	name: "Alice",
	age: 32,
	isAdmin: true,
	skills:["JS","REACT"],
};

// ------------------------
// Accessing properties

console.log(user0.name);
console.log(user0["skills"])

let keyIsAdmin = "isAdmin";
console.log(user0[keyIsAdmin])

//-----------------------
//Deleting properties

delete user0.age;  // removes age from user0

//------------------------
//CHecking property Existence

console.log('name' in user0)
console.log('age' in user0)

//--------------------------
// Iterating properties 

for(let key in user0){
	console.log(key);

	console.log(user0[key]);
}

//---------------------------
// Other built-in Object types

let arr=[1,2,4,5];	// Array-> special object with length & index
let now = new Date();	// Date-> object with time utilities
let err = new Error("OOps!")	// Error-> object for error handling

// Akk of the above are derived from the base Object type and extent it with extra features.

// ---------------------------
// Recap

/*
 1) JS objects hold dynamic key-value pairs.
 2) keys- strings or symbols
 3) Values- any JS type
 4) Access- dot or square backet
 5) Check existence- "key" in object
 6) Delete - delete object.key
 7) Iterate - for(let key in Object).
 8) Arrays,Dates,Errors are all objects with extra features
 9) Objects are foundational; advanced topics like classes and prototypes build on them.

*/

//================================================



// Objects are "non-primitive" used to store keyed collection(key:value pairs) of various data and more complex entities.
// An Object can be created with figure brackets {...} with an optional list of properties. Property is "key:value" pair, where:
// 		1) key - string(called "property name")
// 		2) values - can be anything

let objUser  = new Object();  // "Object constructor" syntax
let anotherObjUser = {};  // "Object literal" syntax


// ==================
// Literals and properties
// ------------------

//Objects defined by putting some properties into {...} as "key:value" pairs:

let user = {		// an object
	name:"Jamaica", // by key "name" store value "jamaica"
	age:3400	// by key "age" store value 3400
}


// a property(key:value pair) has a key(ie,. "name" or "identifier") before the colon ":" and a value to the right of it.
//
// Object "user" has two properties:
// 1) the name "name" and the value "Jamaica"
// 2) the name "age" and the value 3400.

//---------------
//
//We can add,remove and read files from it at any time.
//
//Property values are accessable using dot notation

console.log(user.name);
console.log(user.age);

// value can be of any time
// adding new "bool" type property to "user" 
user.isAdmin = true;

console.log(user)


// To remove a property we can use the "delete" operator:

delete user.age;

console.log(user)

// IMP: We can add "multi-word" propery names, but THEY MUST BE QUOTED =>

let newUser = {
	name:"jason",
	age:23,
	"likes coding":true,	// comma at end: "trailing" or "hanging" comma. Makes it easy to alter properties,all will besame.
}

console.log(newUser)

// ----------------------
// SQUARE Brackets
// ---------------------

// for multiword properties dot access wont work:

// Syntax Error
// user.line birds = true
let key = "like birds"; // -----> KEY
user.key = false; // works because we have declared it in Global scope
console.log("does key work?:"+user.key)

// Instead user SQUARE BRACKETS
user["likes birds"] = true;  // SET
console.log(user)
console.log(user["likes birds"]);  //GET

delete user["likes birds"];
console.log(user);


// We can also use square brackets 
// key defined previously
user[key] = true;

user.age = 30;
console.log(user)

let userKey = "like birds"; 
//user.userKey = true;	// Works because declared in global
console.log(user.userKey);	//otherwise , "undefined"


// ----------------------
// Computed properties
// ---------------------

// We can use square brackets in an object literal, when creating an object.
// That's called "COMPUTED PROPERTIES".

let fruit = "apple"; // altertive for taking prompt/reading for now

let bag = {
	[fruit]:5, // name of the property is taken from the variable fruit
}

console.log(bag.apple)


// [fruit] - means that the property name should be taken from "fruit".

// Similarly, we can write like this:

let fruitNext = 'apple';
let bagNext = {};

bag[fruit] = 8;
console.log(bag.apple)

bagNext = {
	[fruit+'Computers']:23
}
console.log(bagNext.appleComputers)


// Squares =>> more powerful
// For simple work => use dot
// For Complex work => use square brackets []


// ------------------
// Property value shorthand
// ------------------

// in real code, we often use existing variables as values for property names.

function postUser(name,age){
	return{
		name:name,
		age:age,
		// ... other properties
	};
}

let userNew = postUser("Lilith",324);
console.log(userNew)


// Properties have the same name as variables. 
// its so common that there's a special property value shorthand to make it shorter.


// instead of name:name we can just write name, just like this:

function postUser_again(name,age){
	return{
		name,	// same as name:name
		age,	// same as age:age
		powers: "space-time, comprehension, steal",
		//...
	};
};

console.log(postUser_again("Aron",16));


// Property names limitations
//
// as we know, variables can't have a name equal to language-resereved words like "for",'let','return',etc.

// IN OBJECTS => THERE IS NO SUCH RESTRICTION
let reservedWordObj = {
	for:1,
	let:"Hail the Lord",
	return:"I have achieved my dreams!",
}
console.log(reservedWordObj)


// No limitations on property names. They can be any strings or symbols(LATER).
// Other types are automatically converted to strings.
// For example, 0 becomes a string "0" when used as a property key:

let obj = {
	0: "test",
};

console.log(obj['0']);  // test
console.log(obj[0]);	// test

//---------------
// INTERSTING
// --------------

let obj1 = {};
obj1.__proto__ = 4;	// assign number;
console.log(obj1)	// output: {} 
console.log(obj1.__proto__);  // [OBJECT : null prototype] -> value is an obj, didnt work as intended.

// assignment to a primitive 5 is ignored.


// --------------------------
// Property Existence Test => "in" operator
// --------------------------

// A notable feature of Objects in JS, compared to other langauges, is that it is possible to access any property. 
// There will be no error if the property doesnt exist

// Reading a non-existing property just returns "undefined". so we can check whether property exists:

let propertyTestUser = {
	name:"Captian Jack Sparrow",
	actor:"Johnny Depp",
};

console.log(user.noSuchProperty === undefined);


// There's a special operator "in" for that.
//
// Syntax:
console.log('key' in propertyTestUser)
console.log('name' in propertyTestUser)

let objHasActor = 'actor'
console.log(objHasActor in propertyTestUser)



// BUT WHY 'in'? Can't we just compare against "undefined"?
// Mostly comaprision with undefined works fine but THERE'S A SPECIAL CASE , WHEN IT FAILS BUT "IN" WORKS PERFECTLY.


// WHEN? An object property exist but stores undefined:

let objHasUndefinedProperty = {
	test: undefined,
}

console.log(objHasUndefinedProperty.test);  // Undefined, so  property doesnt exist?
console.log('test' in objHasUndefinedProperty);  // true, property exists


//---------------------------
// The "for..in" loop
// --------------------------

// To walk over all keys(traverse) of an object, there exists a special form of the loop: for..in.
// this is a completely different thing from for(;;) construct

// SYNTAX:
// for(key in object) {
//	// execute body for each key among object properties
// }


let forInObj = {
	name:"Emily",
	age:24,
	isAdmin:false,
}

for(let key_for_obj in forInObj) {
	// keys
	console.log("Key: "+key_for_obj);  // name,age,isAdmin
	
	// values for the keys
	console.log("Value:"+forInObj[key_for_obj]);  // Emily,24,false
}



// Ordered like an object
//
// Are they ordered? 
// Ans: "ordered in a special fashion": integer properties are sorted, other appear in creation order.


let orderCheckObj = {
	"49":"germany",
	"41":"Switzerland",
	"44":"Great Britain",
	// ...
	"1":"USA",
};

for(let key in orderCheckObj){
	console.log(key)
}
// NUMBERS ARE SORTED - AS SAID

// If keys are non-integer they are listed in created order

let orderCheckObj2 = {
	name:"Jimmy",
	surname:"Jordon",
};

user.age=23;

for(let properties in orderCheckObj2) {
	console.log(properties);
}

// TO FIX THIS ISSUE:=> we "cheat" by adding "+" sign before each code.

let orderCheckObjFix = {
	"+49":"germany",
	"+41":"Switzerland",
	"+44":"Great Britain",
	// ...
	"+1":"USA",
};

for(let key in orderCheckObjFix){
	console.log(key)
}
//==================================================

// ---------------------------
// Integer proprties
//----------------------------

// "Integer Property" term here means a string that can be converted to-and-from an integer without a change.
//
// '49' is an integer property, because when its transformed to an integer no and back, its still same.
//
// BUT "+49" and "1.2" are not.

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part

console.log("\nInteger Properties:")
console.log(String(Math.trunc(Number("49"))));
console.log(String(Math.trunc(Number("+49"))))
console.log(String(Math.trunc(Number("1.4"))));

