// CONDITIONAL BRANCHING

// Sometimes, we need to perform diff actions on diff conditions
// we can use "if" statement and conditional operator "?" (or question mark operator)
//


// "if" statement

let year= "2025"
if(year==='2022'){
console.log("You are right")
} else{
console.log("You are wrong")
}

if(year==="2025"){	//if used == and 2025-> TRUE || if used === and "2025" -> TRUE
console.log("That's correct!")
console.log("You are right!")
}


// BOOLEAN CONVERSION
//

// if(...) statement evaluates the expression in its parentheses and converts the result to a boolean
//
// Type conversion rules:
// 1) 0 , empty string "", null, undefined, NaN :=> becomes false also called "falsy" values
// 2) other values become true, are called "truthy".


if(1){	// 0 -> false -> no execution
console.log("YOO man")
}




// passing pre-evaluted bool value to if

let cond = (year==="2025")

if(cond){
console.log("Hurray! U have got infinite possibility system")
}


// ELSE contidion


if(year==="2022"){
console.log("You are right")
}else{
console.log("You are wrong")
}


// SEVERAL "else if"

if(year==="2020"){
console.log("1 is right")
}
else if(year==="2025"){
console.log("2 is right")
}else{
console.log("No one is right")
}


// CONDITIONAL OPERATOR "?"
// SYNTAX: res = condition ? value1 : value2;

let accessAllowed;
let age = 23

if(age>18){
accessAllowed = true;
}else{
accessAllowed = false;
}

console.log(accessAllowed)

let accAllowed = (age>18) ? true: false;
console.log(accAllowed)

// NOTE: accAllowed = age>18 	// SAME

age = "232"

let message = (age<3)? "Hi Baby!" :
	(age<18)? "Hello!" : 
	(age<100) ? "Greetings" :
	"What an unusual age!"

console.log(message)



let company ="Netscape";

(company=="Netscae")?
	console.log("RIGHT!!") : console.log("NAH MAN!!")


// ASSIGNMENTS
//

// Node.js version of prompt + alert

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('In which year was ECMAScript-2015 specification published? ', (year) => {
  if (year === '2015') {
    console.log('You are right!');
  } else {
    console.log('Wrong answer.');
  }
  rl.close();
});








































