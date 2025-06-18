// --------------------FUNCTION EXPRESSION ----------------
//

// IN JS, a function is not a "magical language structure", but a special kind of value.
//
// The syntax that we used is called FUNCTION DECLARATION.

function sayHi(){
	 console.log("Hello!")
}

sayHi()


// There is another syntax for creating a function that is called a "FUNCTION EXPRESSION"

// IT ALLOWS US TO CREATE A NEW FUNCTION IN THE MIDDLE OF ANY EXPRESSION.

let sayHi2 = function(){
	console.log("Hello");
};

// MEANING: "create a function and put it into a variable sayHi2"
sayHi();


// As the function creating happens in the context of the assignemnt expression (to the right side of =), THIS IS CALLED FUNCTION EXPRESSION.
//
// NOTE:: =>> There's no name after the function keyword. Omitting a name is allowed for Function Expression.


// FUNCTION IS A VALUE
// 
// Lets reiterate(restate): no matter how the function is created , function is a value. 

// We can even print out the value of function using alert/console

console.log(sayHi)

// NOTE: this line above does not run the function, because no parentheses.
//
// In JS, function is a value, so we can deal with it as a value.
// the code above shows its "STRING REPRESENTATION -> SOURCE CODE"

// Surely, function is a special value, in the sense that we can call it like "sayHi()"

// BUT JUST LIKE ANY OTHER VALUE,we can work with it like with other kinds of values.
//
// we can copy a function to another variable

// sayHi() is already created

let func = sayHi;	// copy the function to "func"

func();	// Hello	// Run the copy(it works ofc)
sayHi()	// Hello	// This works just as fine




// WHY IS THERE A SEMICOLON AT THE END ???
//
// functions do not have ; at the end, but function Expression do. WHY?
//
// ANSWER:
// 	Function expression is created here as function(...) {...} inside the assignement statement:
// 		let sayHi= ... ; 
// 	The semicolon ; is recomended at the end of the statement , its not a part of the function syntax.
//



// --------------------- CALLBACK FUNCTION -------------------
//

// Lets look at examples of PASSING FUNCTIONS AS VALUES AND USING FUNCTION EXPRESSIONS.
//
// we will write a function ask(question, yes , no) with three parameters:
// question : Text of the question
// yes : function to run if the answer is "YES"
// no  : function to run if the answer is "NO"
//
//  function asks the question and , depending on the user's answer, call yes() or no()


const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// wrap readline in a promise for async/awit compatibility
function askConfirm (question,yes,no){
	rl.question(`${question} (y/n): `,(answer)=>{
		const normalized  = answer.trim().toLowerCase();

		if(normalized==='y' || normalized==='yes'){
			yes();
		}
		else{
			no();
		}

		rl.close();
	});
}

// if user agrees : YES
function showOk(){
	console.log("You agreed.")
}

// if user disagree/cancel : NO
function showCancel(){
	console.log("You disagree/canceled the execution.")
}


//askConfirm("Do you agree?", showOk, showCancel);	

// The arguments "showOk" and "showCancel" of "ask" are called callback functions or just callbacks.
//
// IDEA IS THAT WE PASS FUNCTION AND EXPECT IT TO BE "CALLED BACK" later if necessary.
//
// In our case, "showOk" becomes the callback for "yes" answer, and "showCancel" for "no".

// SHORTER VERSION

//rl.question('Do you agree?? (y/n): ',ans=>{
//	console.log(/^y(es)?$/i.test(ans) ? 'You agreed.' : 'You canceled the execution.');
//	rl.close();
//})
//


askConfirm("Do u love coding?", 
	function() {console.log("Coding is love!!");},
	function() {console.log("Coding is LIFE!");}
);


//
// we can directly define the function in this line, passed as paramter to shorten the code.
// Functions declared right inside "ask(...)" call. 
// They have no name ,and so are called "ANONYMOUS FUNCTIONS".

// A FUNCTION IS A VALUE REPRESENTING AN "ACTION"
// Regular values like strings or numbers represnt the data.
// A function can be perceived as an "action"
// WE can pass it between variables and run when we want 


// Function Expression VS Function Declaration
//

// 1) the syntax
//
// Function Declaration: a function, declared as a seperate statement, in the main code: =>
function sum(a,b){
	return a+b;
}

let sumOfAB = sum(2,5)
console.log("\n"+sumOfAB)

// Function Expression: a function, created inside an expresssion or inside another syntax construct
// here, the function is created on the right side of the "assignment expression" = :=>

// FUNCTION EXPRESSION
let sum1 = function(a,b){
	return a+b;
};

console.log(sum1(4,6))

// The more subtle differenc is "when" a function is created by JS Engine
//
// A Function Expression is created when the execution reaches it and is usuable only from that moment.
/* Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.

A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.

*/

// Function declaration: HOISTED : can be called before declaration
//


sayHi3("John")

function sayHi3(name){
	console.log(`Hello,${name}`)
}



// Function Expression : NOT HOISTED = error if called before indefinition
// sayHello("Jane")	// Error : Cannot access "sayHello" before initialization

let sayHello2 = function(name){
	console.log(`Hello, ${name}`);
};

sayHello2("Jane");	// Works if called after definition

// ==========================================

// Block scope of Function (in strict mode)
//
// let age = prompt("What is ur age?",18) // In Node, use readline
let age = 15

if(age<18){
	// function declaration only accessible only within block
	
	function welcome(){
		console.log("Hello!");
	}

	welcome();	// works here, within scope
}
else{
	function welcome(){
		console.log("Greetings!");
	}
}

// welcome();	// Error: welcome is not defined outside block

//============================================
// Correct way: function expression assigned to a variable with outer scope


let greet;

if(age<18){
	greet = function () {
		console.log("Hello!");
	};
}else{
	greet = function (){
		console.log("greetings!");
	};
};

greet();	// Works - greet is always defined

// ============================================
//
// Even shorted using ternary operator

age = 23;
let greetUser = (age<18)
	? function(){console.log("Hello!");}
	: function(){console.log("Greetings!");}

greetUser();	// works cleanly with concise conditional logic









































































