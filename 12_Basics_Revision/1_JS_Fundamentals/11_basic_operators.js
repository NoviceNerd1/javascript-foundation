// ------------------- BASIC OPERATORS AND MATHS --------------

// Terms: "unary","binary","operand"
//
// 1) operand- is what operators are applied to. Ex: 5*2 -> 5 & 3 are operand.	; Some call it "arguments".
// 2) operator is unary if it has single operand. Ex: unary negation

let num = 1;
num = -num;
console.log(num);

// operator is binary if it has two operands.

let num2 =1 ;
let num3 = 3;

console.log(num3-num2);



// -------------------------Maths-----------------------------

// % -> reaminder operator -> EX: a % b
console.log("Remainder Operator")
console.log(5%2)
console.log(8%3)
console.log(8%4)
console.log(8%9)


// ** -> exponentiation -> Ex: a ** b ; raise a to the power of b
// ie,. a^b
console.log("Exponentiation Operator")

console.log(2**2)
console.log(2**4)
console.log(2**8)
console.log(2**16)
console.log(2**32)

// Square or cube root,etc can also be done using (1/2 , 1/3 , etc)

console.log(4**(1/2))
console.log(8**(1/2))



// String concatenation with binary +
//
// usually "+" operator sums numbers
//
// but if binary + is applied to strings, it merges(concatenates) them

console.log("String Concatenation")

let str = "my"+ "string"
console.log(str)

// NOTE: if any of the operand is a string, then other is converted to a string

console.log("2"+4)
console.log(2+"11")

console.log(2+2+'1') // becomes 41 , not "221"
// first comes two numbers, so sum of two numbers that is 4, then its a sum of a string and a number, to it becomes 41

console.log('2'+21+2) // becomes 2212
// since first no is string itself, it becomes string concatenation


// binary + is the only operator that support strings in such a way.
//
// Other Arithmetic operators work only with number and always covert their operands to numbers

console.log(6-" 4  ")
console.log('9'/"3")
console.log('2'*"4")


// ----------- NUMERIC CONVERSION , UNARY + --------------------
//
// + exists in two forms, bianry and unary.
// UNARY or + operator applied to single value
// Doesn't do anything to a number 
// But if operand is not a number, unary plus converts it into a number 

let x= 1 ;

console.log(+x)

let y = -2
console.log(+y) // -2

console.log(+true)
console.log(+"")
console.log(+"2")


let apples ="2";
let oranges = "3";

console.log(apples+oranges)	// binary plus, concatenates the strings

console.log(+apples + +oranges)	// unary plus, converts string to number and adds them

// ----------------------- OPERATOR Precedence ----------------
// 
console.log("Operator Precedence")


// 🔢 JavaScript Operator Precedence — Key Examples with Console Logs

// 📈 Precedence 14 — Unary plus / negation
console.log(+("42"));     // 42 (string to number)
console.log(-("42"));     // -42

// 📊 Precedence 13 — Exponentiation (**)
console.log(2 ** 3);      // 8
//console.log(-2 ** 2);     // -4 ❗️(equivalent to -(2 ** 2))
			    // is giving uncaught syntax error
console.log((-2) ** 2);   // 4

// ✖️➗ Precedence 12 — Multiplication / Division
console.log(6 * 3);       // 18
console.log(10 / 2);      // 5

// ➕➖ Precedence 11 — Addition / Subtraction
console.log(5 + 3);       // 8
console.log(5 - 3);       // 2

// 🪢 Precedence 2 — Assignment (=)
x = 5;
y = x = 10;           // Assignment has low precedence
console.log(x);           // 10
console.log(y);           // 10

// 📌 Operator Precedence Summary (partial):
// Higher number = higher precedence
// -------------------------------
// 14 - Unary +, -
// 13 - Exponentiation **
// 12 - *, /
// 11 - +, -
//  2 - Assignment =
// Use parentheses () to control execution order explicitly




//------------------------------------------------------------


// ---------- Assignmenet operator => returns a value -----------
//

// call x=value , writes the value into x and then returns it

let no1 = 1;
let no2 = 2;

let no3 = 3 - (no1= no2+1);

console.log(no1)
console.log(no2)
console.log(no3)


// while we can do it, its not a good coding practice so dont follow it


// ---------- Chaining Assignments -------------------
//

let n_a , n_b, n_c;

n_a = n_b = n_c = 4+2;

console.log(n_a,n_b,n_c)

// ----------- Modify-in-place \ Modify-and-asign  --------------//

let n = 1
//n= n+6;
//n= n*2;
n+=6;
n*=2;

console.log(n)


// ------------- Increment/ decrement -------------------------
// increment : ++ | decrement : --

let counter = 2;

counter++;
console.log(counter)

counter--;
console.log(counter)

//console.log(4--)

// NOTE: Inc/Dec can only be applied to "variables".
// will give error for 4-- or 5++

// counter++ -> postfix form
// ++counter -> prefix form
console.log("Curr val of counter:",counter)

let a= ++counter;
console.log(a)
//console.log(counter)

a = counter++;
console.log(a)
console.log(counter)

counter = 0;
console.log("Counter:",counter)
counter++;
++counter;
console.log(counter);

// INC/DEC can be used inside an exprssion as well

counter =1 ;
console.log(2*++counter);

counter =1;
console.log(2*counter++)


// ------------------- BITWISE OPERATOR ------------------------
//


// bitwise operator: treats arguments as 32-bit integer number. 
// and work on then level on their binary representation

// List of operator:
// &
// |
// ^
// ~
// <<
// >>
// >>>

//
// we use them when we need to access or alter bitwise level data


// ----------------------- COMMA ------------------------------
//

// comma has very low precedence.
// COMMA : allows us to evalute several expressional, dividing with a comma.
// Each of them is evaluated but only the result of the last one is returned.

let num_a = (1+2, 4+3, 6+9);
console.log(num_a)



//-------------------- ASSIGNMENT ---------------------------


console.log("4px"-2)		// NaN
console.log(null+2)		// 2
console.log(undefined+4)	// NaN

let b=2;
for(a=1, b=2,c=a*b;a<10;a++)
{
	console.log(a,b,c)
}




























