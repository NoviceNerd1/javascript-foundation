// ------------------------Coding Style ------------------------

//==========================
//SUMMARY
//--------------------------
// 1) Use spaces (not tabs) for indentation
// 2) Use blank lines to seperate logic
// 3) Always use semicolons
// 4) Flatten nested logic with early returns or continue
// 5) Code-then-function layout improves readability in real-world flows

// --------------------------



// Curly braces style aka "Egyptian Braces"
// Open braces go on the Same Line as 'if','for','while',etc., with a space before the brace

//if (condition) {
// // do this 
// // and this
//}

// Dont wanna cram everything on one line with unnecessary braces
// if(n<0) {console.log(`Power ${n} is not supported`);}
// its messsy and unnecessary

// Avoid multi-line without braces - prone to  bugs during refactoring
// if(n<0)
// 	console.log(`Power ${n} is not supported`);
// DANGEROUS : EASY TO BREAK


// Acceptable for short ,  oneliner logic (used sparingly)
let n=0;
if (n<1) console.log(`Power ${n} is not supported`)

// Preferred - always use braces for clearity and scalability
if (n<1) {
	console.log(`Power ${n} is not supported`);
} 

// RULE OF THUMB 
// 1) One-liner ok : if (x) return y;
// 2) Multi-statement


// ==========================
// LINE LENGTH GUIDELINES

// Multiline template literals are better for long strings

let str = `
	ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;



// Break Long conditionals over multiple lines for readability

let id = 123;
let moonPhase = "waning gibbous";
let zodiacSign = 'Libra';
if(
	id===123 &&
	moonPhase ==='waning gibbous' &&
	zodiacSign === 'Libra'
) {
	letTheSorceryBegin();
}

function letTheSorceryBegin() {
	console.log("Sorcery Begins!!")
}


// Most teams standardize on 80-120 chars per line max.
// Use line breaks, indentations, and formatting tools like pretties or ESLint to enforce it.


// =================================
// INDENTS
// ---------------------------------


// Horizontal Indents : 2 or 4 spaces (spaces preferred over tabs)
// Spaces allow better alignment, e.g. aligned parameters:
// show(paramsA,
//      aligned,
//      clearly,
//      withIndent
// ){
//   // .....
// }


// VERTICAL INDENTS : Use blank lines to seperate logical blocks

function pow(x, n) {
	let result =1; // init block

	for (let i = 0; i < n; i++) {
		results *= x; // main loop
	}

	return result; // return block
}

// TIP : Avoid writing more than ~9 lines without blank lines to break structure


// ================================
// SEMICOLONS
// --------------------------------

// Always end statements with ';' to avoid pitfalls of AUTOMATIC SEMICOLON INSERTION (ASI)

let a = 5;
let b = 10;
console.log(a + b);  // with semicolon : SAFE

// WIHTOUT semicolon, things like "return" statements can break:
// return
// {ok: true} // retuns undefined instead of object due to ASI



// =================================
// NESTING LEVELS
// ---------------------------------


// BAD : unnecessary nesting

for(let i = 0; i < 10; i++) {
  if(i % 2 != 0) {
	  console.log(i); // one more level deep
  }
}

// BETTER : use 'continue' to flatten logic

for(let i = 0; i < 10; i++){
  if(i % 2 === 0) continue;
  console.log(i);
}


// Option 1 : Nested if/else

function pow1(x, n) {
	if(n < 0){
		console.log("Negative exponents not supported")
	} else {
		let result = 1;
		for (let i = 0; i < n; i++ ) result *= x;
		return result;
	}
}

console.log(`Power of 2^2: ${pow1(2,2)}`);

// Option 2 : Early return - flatter , cleaner

function pow2(x, n) {
	if(n<0){
		console.log("Negative exponent not supported");
		return;
	}

	let res = 1;
	for(let i = 0; i < n; i++) res *= x;
	return res;
}

console.log(`Power of 2^3: ${pow2(2,3)}`);


//================================
//FUNCTION PLACEMENT
//--------------------------------


// Preferred: Code first, then helper function - improves readability

let ele = createElement();
setHandler(ele);
walkAround();

function createElement() {
	// Create DOM element
}

function setHandler(ele) {
	// bind event
}

function walkAround() {
	// perform actions
}

// ALTERNATIVES:
// 1) Define helpers first (used in libraries , less common in app logic)
// 2) Inline where first used (ok for small isolated utilities)



//===========================
// Comments in code
//===========================


// Types of Comments
// 1) Single-line	// like this
// 2) Multi-line	/* Like this */

//---------------------------
// WRONG : BAD COMMENTS
//---------------------------

// WRONG: Explaining "what" the code does when it should be self-evident
// //this loop adds whiskey

let glass = "2 full king size";
for(let i = 0; i < 3; i++) {
	let drop = getWhiskey();
	add(drop,glass);
}

function getWhiskey() {return "WHISKEY!"};
function add(drop,glass) { 
	console.log(`drop: ${drop} , glass: ${glass}`);
}


// WRONG: Complex logic with comments instead of clean structure

function showPrimes(n) {
	nextPrime:
	for(let i = 2; i < n; i++) {
		// check if i is prime
		for(let j = 2; j < i; j++){
			if(i % j === 0) continue nextPrime; 
		}
		console.log(i);
	}
}

showPrimes(6)


// BETTER : Factor out logic into self-descriptive functions

function showPrimes2(n) {
	for(let i=2; i < n; i++){
		if(isPrime(i)) console.log(i);
	}
}

function isPrime(n) {
	for(let i=2; i < n; i++){
		if(n % i === 0) return false;
	}
	return true;
}

showPrimes2(9)


// ==============================
// CORRECT : GOOD COMMENT STRATEGIES
// ------------------------------


// CORRECT: Replace complex blocks with meaningful helper functions

let conatiner = "container";
addWhiskey2(glass);
addJuice2(glass)

function addWhiskey2(container) {
	for(let i = 0; i < 10; i++){
		let drop= getWhiskey();
		add(drop,container);
	}
}

function addJuice2(container) {
	for(let t = 0; t < 3; t++) {
		let tomato = ()=> {return "Got tomato!"};
		let juice = ()=> {return "Got JUICE!!"};
		add(juice,tomato);
	}
}







































