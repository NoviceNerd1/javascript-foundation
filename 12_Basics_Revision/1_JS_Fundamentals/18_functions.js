// FUNCTIONS
//


// Functions are the main "building blocks" of the program. 
// They allow the code to be called many times without repetetion
//
// We have already seen built-in functions, line "alert(message)", "prompt(message,deafult_val)", and confirm(question).
//
// now We will see user-defined functions as well

// function declaration
//
// to create a function we can use a function declaration

function showMessage(){
	console.log("Hello Everyone!")
}
showMessage()



// 1) function keyword goes first , 
// 2)then goes the name of the funciton, 
// 3) then a list of parameters between the parentheses (comma-seperated, empty in the example above) 
// 4) finally the code of the function, also named "the function body", between curly braces

// function name (parameter1, parameter2,... paremeterN){
//	... BODY ...
// }
//
// our new function can be called by its name: showMessage()

// for ex: as we have already defined showMessage function, we can call it as many times we want

showMessage();
showMessage();

// this ex clearly demonstrates one of the main purposes of function : TO AVOID CODE DUPLICATION
// 


// LOCAL VARIABLES
//
// NOTE :::=>> VARIABLE DECLARED INSIDE A FUNCTION IS ONLY VISIBLE INSDE THAT FUNCTION
//
// for ex:

function showMessage2(){
	let message = "Hello, I am Javascript!";

	console.log(message);
}

showMessage2()

//console.log(message)	-> Error: message not defined
//			-> variable is accessable only inside function



// OUTER VARIABLES
//
// NOTE!! =>> FUNCTION CAN ACCESS AN OUTER VARIABLE AS WELL.

let userName = "John";

function showMessage3(){
	let message = "Hello, "+ userName;

	console.log(message);
}

showMessage3()


// function has full access to outer variable. It can modify it as well.

userName = "John";

function showMessage4(){
	userName = "Bob";

	let message = "Hello, "+ userName;

	console.log(message);
}

console.log(userName);

showMessage4();

console.log(userName);

// OUTER VARIABLE IS ONLY USED  WHEN THERE IS NO LOCAL ONE.


// NOTE: if a same-named variable inside the function then it shadows the outer one.
//

console.log("\nChecking SAME-NAMED VARIABLE DECLARATION")

userName = "John";

function showMessage5(){
	let userName = "Bob";

	let message = "Hello, "+ userName;
	console.log(message);
}

showMessage5();

console.log(userName)




// ---------------------GLOBAL VARIABLES ---------------------

// variables declared outside any function, such as the outer userName in the code above, are called global.
//
// Global variables are visible from any function(unless shadowed by locals).
//
// Its good practice to minimize the use of global variable. 
// Modern code has few or no globals. Most variables reside in their functions.
// Sometimes, they can be useful to store project level data.


// ------------------------------------------------------------


// PARAMETERS
//
// we can pass arbitrary data to functions using parameters.
//
// for ex: Below, the function has two parameters : "from" and "text"

console.log("PARAMETERS");

function showMessage6(from,text){	// parameters: from,text
	console.log(from+ ": "+text);
}

showMessage6("Ann", "Hello!");	// (*)
showMessage6("Ann","What's up?");  // (**)


// when the function is called in lines (*) and (**), given values are copied to local variables "from" and "text". 
// Then the fucntion uses them.
//
// Another example:
// we have a variable "from" and pass it to the function.
// Please note: the function changes "from" , but the change is not seen outside.
// Because a function always gets a copy of the values. Not the original value.

console.log("\nParameter checking with example: ")

function showMessage7(from,text){
	from = "*" +from+ "*";

	console.log(from + ": "+ text )
}

let from = "Ann";

showMessage7(from, "Hello");	// *Ann* : Hello

// the value of "from" is the same, the function modified a local copy

console.log(from);	// Ann


// When a value is passed as a function parameter, its also called argument.
//
// In straight terms:
// 1) A "parameter" is the variable listed inside the parenteses in the function declaration (it's a declaration time term).
// 2) An argument is the value that is passed to the function when it is called (it's a call time term)

// WE DECLARE FUNCTIONS LISTING THEIR PARAMETERS, THEN CALL THEM PASSING ARGUMENTS.
//
// In above example, we can say: "the function showMessage is declared with two parameters, then called with two arguments: from and 'Hello'".




//----------------------- DEFAULT VALUE -----------------------
//
console.log("\nDEFAULT VALUE:\n")
// if a function is called, but an argument is not provided, then the corresponsding value becomed "undefined"
//
// For instance, the aforementioned function showMessage(from, text) can be called with a single arguments:


showMessage7("Ann")

// That's not an error, such a call would output "*Ann* : undefined".
// As the value for the text isn't passed, it becomes undefined.
//


// NOTE: => WE can specify the so called "default" (to use if omitted) value for a parameter in the function declaration , using "=" 

function showMessage8(from, text = "no text given"){
	console.log(from+": "+ text);
}

showMessage8("Ann");	// Ann: no text given



// Now if text is not passed, it will get the default value.
//
// The default value also jumps in if the parameter exists, but strictly equals "undefined".

showMessage8("Annnnnn", undefined);

// Here "no text given" is a string, but it can be more complex expression.
// which is only evaluated and assigned if the parameter is mising. 
// So this is also possible:

// function showMessage(from, text=anotherFunction()){
//	// anotherFunction() only executed if no texts given
//	// itsd result becomes the value of text.
// }


// ----------------------------------------------------------
//

// "Default parameters" in OLD JS
// Several years ago, JS didnt support the syntax for default parameters.
//
// So people used other ways to specify them.
//
//
// Example that explicitly checks for "undefined":

function showMessage9(from, text){
	if(text===undefined){
		text = "no text given";
	}

	console.log(from + ": "+text);
}

showMessage9("AMY")

// Or using the "||" operator:

function showMessage10(from, text){
	// if the value of text is falsy, asign the default value
	// this assumes that text == "" is the same as no text at all.
	
	text = text || 'no text given';

	console.log(from + ": "+ text)
}

showMessage10("Evan")


function showCount(count){
	console.log(count?? "Value is unknown!! DEFAULT VALUE");
}

showCount(0);
showCount(null);
showCount();


// RETURNING A VALUE
//

console.log("\nRETURNING A VALUE")

// a function that returns a value to the calling code as a result.
//

function sum(a,b){
	return a+b;
}

let res = sum(2,5);
console.log(res)

// the directive return can be in any place of the function.
// When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to "res" above)


function checkAge(age){
	if(age>=18){
		return true;
	}
	else{
		return false; // Do u have permission of ur parents??
	}
}

let age = 24

if(checkAge(2)){
	console.log("Access granted!");
}
else{
	console.log("Access Denied!");
}


// NOTE: IT IS POSSIBLE TO "REUTRN" WITHOUT A VALUE. 
// THAT CAUSES FUNCTION TO EXIT IMMEDIATELY.

function showMovie(age){
	if(!checkAge(age)){
		return;
	}

	console.log("You can watch the movie!")
}


showMovie(2)



// A function with an empty returns or without it returns undefined
//
// if a function does not return a value, it is the same as if it returns undefined.
//

function doNothing(){	}

console.log(doNothing()===undefined)


// NOTE:: =>>> Never add a newline between "return" and the value
//

// For a long expression in return, it might be tempting to put it on a seperate line but it doesnt work. because javascript assumes a semicolon after return;
//
// wrong ex: return
// 		(some+ long + expression + or + whatever + f(a) + f(b))
//
// it works as: return ;
// 	(some + long + ... + f(b))
//
// it affectively becomes an empty return.
//
//
// BETTER WAY:
//  If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. 
//  Or atleast put the opening "parentheses" there , like:
//  EX: 
//  	return (
//		some + long + expression + ...
//		...
//		..
//		f(b)
//  	);
//
//  THIS WILL WORK AS WE EXPECTED IT TO.



//------------------- NAMING A FUNCTION -----------------
//

console.log("\n Naming a function")

// functions are actions. So their name is usually a VERB.
// It should be bref, accurate as possible and describe what the function does, should be easily understandble if someone reads it.
//
// Good practice: 
// 	start a fucntion with a verbal prefix which vaugely describes the action.
// 	There must be an argument within the team on the meaningof the prefixes.
// FOR EX:
// 1- "get..." -> returns a value
// 2- "calc..." -> calculate something
// 3- "create..." -> create something
// 4- "check..." -> check something and return a boolean, etc.
//
// ex:
// showMessage()	// shows a message
// getAge()		// returns an age
// calcSum(...)		// calculate a form (and usually return it)



// ONE FUNCTION -> ONE ACTION!
//
// a function should do exactly what is suggested by its name and 
// two independent actions usually desrve two functions, even if they are usually together
//
// A few examples of breaking this rule:
// 1) getAge - would be bad if it shows an "alert" with the age(should only get)
// 2) createForm - would be bad if it modifies the document, adding a form to it(should only crete it and return)
// 3) checkPermission - would be bad if it displays the access granted/denied message(should only perform the check and return the result).
//


// ----------------- FUNCTIONS == COMMENTS --------------------
//

// functions should be short and exactly one thing.
// If that thing, maybe its worth it to split the function into a few smaller functions. 
// Sometimes following this rule may not be that easy, but its definitely a good thing.
//
// A seperate functioin is not only easier to test and debug - its very existence is a great comment!
//
// For instance, compare the two functions "showPrimes(n)" below. 
//
// First variant:
function showPrimes(n){
	nextPrime: for(let i=2; i<n; i++){
	for(let j = 2; j<i; j++){
		if(i%j==0) continue nextPrime;
	}

	console.log(i);
	}
}


// Second variant :
function showPrimes2(n){
	for(let i=2; i<n ; i++){
		if(!isPrime(i)) continue;

		console.log(i);
	}
}


function isPrime(n) {
	for(let i=2; i<n;i++){
		if(n%i==0) return false;
	}
	return true;
}



// SECOND ONE IS EASIER TO UNDERSTAND.


// ✅ Function Declaration Syntax:
// function name(param1, param2, ...) { /* code */ }

function greetUser(name) {
  // 👇 Parameters are copied into local variables
  console.log(`Hello, ${name}!`);
}

// ✅ Functions can access outer variables (but use local vars where possible)
let greetingPrefix = "Hi";

function greetWithPrefix(name) {
  console.log(`${greetingPrefix}, ${name}`);
}

// ✅ Functions can return values
function getGreeting(name) {
  return `Hello, ${name}`;
}

let result = getGreeting("Dev");
console.log(result); // → "Hello, Dev"

// ✅ If no return, function returns `undefined`
function sayNothing() {}
console.log(sayNothing()); // → undefined

// ✅ Use local variables/parameters for cleaner, predictable behavior
function add(a, b) {
  return a + b;
}

// ❌ Bad practice: modifying outer variable
let total = 0;
function addToTotal(x) {
  total += x; // side effect
}

// ✅ Function naming best practices:
// - Use clear, descriptive names
// - Use verb/action prefixes like: get, set, check, create, show...

function createUserProfile(name, age) {
  return { name, age, id: Date.now() };
}

// ✅ Functions are fundamental building blocks of code
// Keep them small, pure (no side effects), and intention-revealing















