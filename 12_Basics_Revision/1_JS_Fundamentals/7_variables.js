// Variable : is a "named storage" for data.
// we use let to declare variables

//let message;

// declaration of var , then assignment and then we use it
let message;
message = "Hello";
//alert(message);

// we can combite the var declaration and assignment in Single Line
let message2 = "Hello!";

// we can declare multiple variables in one line
//let user="John", age = 23, message3= "I am getting better";
// but its not recomended. LESS READABILITY

// mulitline variant is bit longer but easy to READ
let user = "John";
let age= 23;
message = "Hello";


// multiline variant 2
//let user1 = "John",
//	age = 22,
//	message="Hey duh";


// multi line vairant 3 - "comma-first" style
user = "John"
	, age =22
	, message= "Hello B";



// updating the value of variable

console.log(message)
message = "changed"
console.log(message)


// copying data to variable
let newUser= "Hello i cant wait to build amazing things"
let newUser2 = newUser
console.log(newUser2)



// naming convention
// 1- only letts, digits, or symbols $ or _
// 2- first digit should not be digit

let userName ;
let test123;

console.log(userName)


// INTERESTING - NAMING CONVENTION BEHAVIOUS
let $ = 1;
let _ = "Rishi"

console.log($+_)

_= 3

console.log($+_)


// reserved names cannot be variable names
// let let =4
// let return = 29

// if using old JS ,
// num = 23    -> works
//
// if using "use strict" , modern js , 
// num = 23    -> fails
// let num = 23   -> works 


// CONSTANTS
// to declare constant(unchanging) variable, we use cont

const myNewUser= "I AM CONSTANT VARIABLE"
console.log(myNewUser)

//myNewUser = "I AM CALLED CONSTANT"    -> since its consant var, its called CONSTANT
// assignment to constant or const variable is not allowed
// it gives "Type error: assignment to constant"

// ex - declaring const var
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";

// accessing const var using let variable(changeable)
let color = COLOR_RED;
console.log(color)

// using CAPITALS - only when using "HARD-CODED values" - LIKE HEX value of colors "#0F002F"
// values which are defined or calculated on runtime are named normally










// BEST PRACTICES FOR NAMING VARIABLES

// use CLEAR, DESCRIPTIVE, HUMAN-READABLE names
let userName = "Rishi";
let shoppingCart; 



// Avoid vauge or generic names
let data;	// BAD - too generic
let value;	// BAD - meaningless without context

// Avoid single-letter or abbreviated names unless absolutely obvious
let a;		// BAD - unclear
let usrNM; 	// BAD - hard to read

// use consistent terminology across the codebases
// if u are calling the logged-in person "user", stick with that
const currentUser= getUser();
// const currentVisitor= getUser()  -> confusion! visitor who? -> breaks semantic consistency



// Pro Tip: you read code more than u write it
// Investing a few extra seconds in naming pays off in debugging, onboarding, and maintenance





