// --------------------- ARROW FUNCTIONS -------------------
//

// Arrow function: Another very simple and concise syntax for creating functions, that's often better than Function Expression.\
//
// Its called "ARROW FUNCTION", because it looks like this
// 
// let func = (arg1,arg2,....argN) => expression;
//
// creats a function "func" that accepts "arg1,arg2,...argN", then evaluates the "Expression" on the right side with their use and returns its result  


// Function Expression :

let funcExpr = function (name){
	return `Hello, ${name}`;
}

console.log(funcExpr("James"));

// Shorter version : ARROW FUNCTION :=>

let arrowFunc = (a,b) => a+b;	// accepts arguments (a,b) and returns , upon execution it evaluates the expression "a+b" and returns the result  

console.log(arrowFunc(4,6))

// 1) If we have only one argument, we can skip parentheses around parameters

let doubleN = n => n*2;

console.log(doubleN(4));

// 2) if there are no arguments, parentheses are empty, but they MUST BE PRESENT.

let noArgArrow = () => console.log("Yo no arguements but parentheses necessary");

noArgArrow();


// Similar to Function expression, to dynamically create a function:

let age = 23

let dynamicFunc = (age<18) ? 
	() => console.log("Not an adult") :
	() => console.log("You are an adult!")

dynamicFunc();



// ------------- MULTILINE ARROW FUNCTION -------------------

// in Complex cases, we enclose expressions and statements in curly brace "{}".
// The MAJOR DIFFERENCE is that CURLY BRACES REQURIRE A RETURN within.

let multilineArrow = (a,b,c) =>{
	let res = a+b+c;
	return res;
}

console.log(multilineArrow(3,5,6))


// ----------------- ASSIGNMENT -------------------

let ask="no";

let assign1 = (ask ==="yes") ?
	() => console.log("You Agreed") :
	() => console.log("You did not agree!!!!!")

assign1();



























