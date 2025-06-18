// LOGICAL OPERATOR

// Logical operator: ||(OR), &&(AND), !(NOT) , ??(Nullish Coalesing).


// || (OR)
// res = a || b 	// a,b => Bool values ONLY


console.log(true || true)
console.log(false|| true)
console.log(true || false)
console.log(false || false)
// always true, except when both false


// if operand is not a bool, its converted to a boolean for the evaluation.

if(8||false){	// 
console.log("truthy!")
}


let hour = 9;
if(hour<10 || hour > 18){
console.log("Office is closed")
}


// OR "||" -> finds the truthy values

// "Extra" features of JS

// Given multiple OR'ed values
// result = value1 || value2 || value3
//
// OR || does the following:
// 1) evaluate operands from left to right
// 2) for each operand, converts it to boolean. If true, stops and returns the original val
// 3) if all operands are false, returnthe last operand

// In other words, a chain of OR || returns the first truthy value or last one of no truthy value is found.

console.log("EXTRA OF OR IN JS")
console.log(1||0);	// 1 - truthy

console.log(null||1)	// 1 is truthy 
console.log(null || 0 || 1)	// 1 is truthy

console.log(undefined || null || 0)	// all falsy



// -----------------------INTERESTING---------------------------
//

// 1) getting first truthy value from a list of variable or expression

let firstName = "";
let lastName  = "";
let nickName  = "SuperCoder";

console.log(firstName||lastName||nickName||"Anonymous")	// if all variable are falsy, "Anonymous" would show up


// 2) Short-circuit evaluation
// means that "||" processes its arguments until the first truthyvalue is reached, then value is returned immediately. 
// Without even touching other argument.

// importance of this feautre becomes obvious isn't just a value, but an expression with a side effect, such as a variable assignment or function call

function hello(){
	true || console.log("not printed")
	false || console.log("printed")
}

hello()


// ----------- AND && -----------------------------
//
// result = a && b;

console.log("\nAND &&:")
console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)

hour = 12;
let minute = 30;

if(hour==12 && minute == 30){
	console.log(`Time is ${hour}:${minute}`)
}

if(1&&0){
	console.log("wont work,because the result is falsy.")
}

if(1&&1){
	console.log("Will work, because result is truthy")
}


// AND "&&" -> FINDS THE FIRST FALSY VALUE
// result = value1 && value2 && value3 

// AND && operator does the following:
// 1) evaluate operand from left to right
// 2) for each operand, converts to a boolean, if the result is false, stops and returns the original value of that operand
// 3) if all operands have been evaluated(ie. all were truthy), returns last operand.
//
// In other words, AND returns the first falsy value or the last value if none were found


console.log(1 && 0)
console.log(1&&5);

console.log(null && 5);
console.log(0 && "no matter what");

console.log(1 && 2 && null && 3)
console.log(1 && 2 && 3);


// PRECEDENCE OF AND && is HIGHER than OR || 
//
// the code a && b || c && d is essentially the same as if the && expression were in parentheses : (a && b) || (c && d)


// DONT REPLACE if with || or &&

// for ex:
let x =1;

(x>0) && console.log("Greater than 0!")


// using IF

x = 1;

if(x>0) console.log("Greater than zero!")

//
// IF is more READABLE. 


// ------------------ NOT ! ---------------------------
//

// Boolean NOT is represented by !
// result = !value


// operator accepts single argument and does the following:
// 1) converts the operand to boolean type ; true/false
// 2) returns the inverse value

console.log(!true)
console.log(!0)
console.log(!4)

// Double NOT "!!" is used to convert a value to boolean type
 
console.log(!!"non-empty string")
console.log(!!null)

// Using more verboase(using more words) way
console.log(Boolean("non-empty string"))
console.log(Boolean(null))



// ------------------- ASSIGNMENTS -------------------------

console.log(null || 2 || undefined)
console.log(console.log(1) || console.log(3))	// console.log() does not return a value , so is undefined in OR

console.log(console.log(1) && console.log(2))


console.log(null || 2 && 3 || 4)

age = 23
if(age>=14 && age<90){
	console.log("Age is inclusive")
}

age = 10
if(!(age>=14 && age<90)){
	console.log("Age is inclusive")
}

if(age<14 || age>90){
	console.log("Age is inclusive")
}

if(-1 || 0) console.log("First")
if(-1 || 0) console.log("Second")
if(null || -1 && 1) console.log("third")




// LOGIN + PASSWORD ASSIGNEMNT
//

const readline = require('readline')

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});


function ask(question){
	return new Promise((resolve)=>{
		rl.question(question,(input)=> resolve(input.trim()));
	});
}

(async function loginFlow(){
	const login = await ask("Who's there? ");

	if(!login){
		console.log("Canceled")
		rl.close();
		return;
	}

	if(login !== 'Admin'){
		console.log('I dont know you');
		rl.close();
		return;
	}

	const password = await ask("Password? ");

	if(!password){
		console.log('Canceled');
	}
	else if(password=== 'TheMaster'){
		console.log("WELCOME!!")
	}else{
		console.log("Wrong Password!");
	}

	rl.close();
})();



