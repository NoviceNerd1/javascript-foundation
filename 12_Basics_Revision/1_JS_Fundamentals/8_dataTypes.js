// 📦 JavaScript Data Types Overview

// 🧱 7 Primitive Types:
let num = 42;               // number → all numbers, integer or float (safe up to ±(2^53 - 1))
let big = 1234567890123456789012345n; // bigint → arbitrarily large integers
let str123 = "Hello";          // string → zero or more characters (no char type)
let flag = true;            // boolean → true / false
let empty = null;           // null → intentional absence of any value
let notAssigned;            // undefined → declared but not assigned
let uniqueId = Symbol('id'); // symbol → unique identifier

// 🧩 1 Non-Primitive Type:
let user123 = { name: "Alice" }; // object → key-value data, arrays, functions, etc.

// 🔍 typeof Operator:
// Use typeof x or typeof(x) to check a variable's type
console.log(typeof str123);        // "string"
console.log(typeof num);        // "number"
console.log(typeof uniqueId);   // "symbol"
console.log(typeof user123);       // "object"
console.log(typeof empty);      // "object" ❌ (language quirk — null is *not* an object)

------------------------------------------------------------


let message = "hello";
message = 234;

console.log(message);


// programming language which allows such behavious, like Javascript, are called => "DYNAMICALLY TYPED".
// meaning there exists data types, but variables are not bound to any of them



// NUMBERS
let n = 123
n = 12.2321

// number type represents BOTH INT and FLOAT numbers
// Besides regular no.s, there are "SPECIAL NUMERIC VALUES"
// SPECIAL NUMERIC VALUES: Infinity, -Infinity, NaN
// we can get it as a result of division by Zero:

console.log(1/0);   //-> gives "Infinity" output
//alert(1/0)		-> gives "Infinity" output
//
// NaN -> represents a computational error.
// It is a result of an incorrect or an undefined mathetical operation, for ex:
//
// alert("Not a number"/2) -> output : NaN
console.log("Not a number"/2)


// NaN is STICKY -> any mathematical operation on NaN returns NaN
console.log(NaN+1)
console.log(NaN-NaN)
console.log(NaN*3)
console.log("not a number"/2 - 1)
console.log("not a number"/2 - NaN)
console.log("not a number"/2 +NaN)


// if there's any NaN in mathematical expression, it propagates to the whole result. EXCEPT =>
// NaN **0 is 1

console.log(NaN**0)


// In JS, Mathematical operations are safe
// we can do anything: divide by zero, treat non-numeric strings as numbers, etc
// Script will never stop, At worst, we will get "NaN" as the result



// BigInt
// 
// In JS, "number" type cannot represt integer values larger than (2^53 -1) (that's 9007199254740991), or less than -(2^53 -1) for negatives 

console.log(-9007199254740991-1)
console.log(9007199254740991+1)
console.log(9007199254740991+3)


console.log(9007199254740992+1===9007199254740992)
// ambiguity , so be careful


console.log(9007199254740991n + 3n)

// for most purposes +-(2^53-1) range is not enough, but sometimes we need entire range of really big interget, eg. cryptography, microssecond-precision timestamps


// BigInt type was added to language to represent int of arbitrary(whimsical or erratic) length.
//
// BigInt value is created by appending "n" at the end of an integer

const bigIntNum = 123456789012345678901234567890n;
console.log(bigIntNum)



// --------------------------STRING-----------------------------
//


// A string must be surrounded by quotes.
let str = "I am string with double Quotes"; 	// DOUBLE QUOTES STRING
let str2 = 'I am string with single quotes';	// SINGLE QUOTES STRING
let str3 = `if using backticks we can EMBED another string: ${str}`;	// BACKTICKS 

console.log(str)
console.log(str2)
console.log(str3)

// Double and single quotes are "simple" quotes. No difference in JS
// Backticks are "extended functionality" quotes. 
// Allow us to embed variables and expressions into a string by wrapping them into "${...}"

let name = "John"

console.log(`Hello, ${name}`)

console.log(`The result of arithmetic sum in backticks: ${4+5}`)

// So, we can embed not only a variable but also arithmetic operations(also write directly in them but idk if its a good code practice)




// ------------------------- BOOLEAN (logical Type) -------------
//


// Boolean type has only two values : True , False
//  true -> yes, correct ; false -> no, incorrect

let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 5>3;


console.log(nameFieldChecked);
console.log(ageFieldChecked);
console.log(isGreater)


// --------------------- null values----------------------------\
//


// null is a values, that does not belong to any type above
// It forms a seperate type of its own , which contains only "null" value

let age = null;
let age2;

console.log(age)
console.log(age2) // undefined  value
//console.log(age3) - value not defined

// null is NOT a "reference to a non-existing object".
// Its just a special values, which represents, "nothing","empty", "value unknown"




// -------------------- "undefined" value ---------------------
//


// special values undefined is also a type.
// meaning of undefined :=> "value is not assigned"

let newAge;
console.log(newAge)

let newAge1 = 100;
console.log(newAge1);
newAge1=undefined		// We can also explicitly assign Undefined to variable
console.log(newAge1)

// but not recomended.
// Normally , we use "null" to assign an "empty" or "unknown" value to a varaible. 
//
// While undefined is reserved as a default initial value for unassigned things





// --------------------- Objects and Symbols --------------------
//



// Object type is special
// Other types are called "primitive" because thier value can contain only a single thing(be it string, int ,etc).
// In Contrast, objects are used to store collections of data and more complex entities.

let newObject = {
	name:"Rishi",
	class: "Fresher",
	age: "21"
}

console.log(newObject)

// Objects can be defined normally like any other variable but
// its values will always be enclosed in "{}" - Curly braces
//
// and it stores values in "key : value" pair.
//
//
// Note : [] - for ARRAYS, {} = for OBJECTS


// Symbol type is used to create unique identitfiers for objects.// useful when u want to add hidden or non-colliding properties to objects

const id = Symbol("userID")
console.log(id)


const a = Symbol("key")
const b = Symbol("key")
console.log(a)
console.log(b)
console.log(a===b)

// Even if u create two symbols with same description thy are guaranteed to be UNIQUE.



// USE CASE: Add unique property wihtout collision

const user={
	name:"Alice"
};

const secretKey= Symbol("secret")
user[secretKey] = "abc123"

console.log(user)
console.log(user[secretKey])
console.log(Object.keys(user))

// Symbol keys are "not Enumerable", so they wont accidently show up in for...in or Object.keys.






// ---------------------- typeof Operator ----------------------
//


// "typeof operation" returns the type of the operand.
// useful when processing values of different types differently or just want a quick check


// a call to "typeof x" return a "String" with the type name
// typeof x OR typeof(x) => same

console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof 121n)
console.log(typeof true)
console.log(typeof "foo")
console.log(typeof Symbol("id"))
console.log(typeof Object({name:"rishi"}))
console.log(typeof Math)
console.log(typeof null)
console.log(typeof NaN)
console.log(typeof Infinity)
console.log(typeof alert)	// function(in browser console) - undefined(in node environment)



















