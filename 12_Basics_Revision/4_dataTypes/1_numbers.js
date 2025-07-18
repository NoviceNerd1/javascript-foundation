/*
 
 JS Numbers - Comprehensive Guide

 Two types of numbers in modern JS:
 
 1) Regular numbers (64-bit IEEE-754, aka "double precision floating point")

 2) BigInt numbers (for integers of arbitrary length)

 */

//=====================================================
// Number Representation

// -----------------------
// Standard number notation

let billion  = 1000000000;
console.log("Billion: ",billion);

// Scientific (exponential) notation:
let sciBillion = 1e9; // 1 and 9 zeros
let sciFloat = 7.3e9;  // 7.3 billion (73000000000)

console.log(`Scientific Billion:${sciBillion}\nScientific Float: ${sciFloat}`);



// Negative exponents for small numbers
let microsecond = 1e-6;  //0.000001 (1 divided by 1 with 6 zeros)
let ms = 1e-3;  // 0.001 (1/1000)

console.log(`Microsecond: ${microsecond} , ${ms}`)


//========================
//Alternate Base Number

// Hexadecimal (base 16)
let hex = 0xff //255 (case-sensitive)
let hex2 = 0xFF // Also 255

// Binary (base 2)
let binary = 0b11111111;  // 255

// Octal (base 8)
let octal = 0o377;  // 255

console.log(`Hexadecimal:${hex}, ${hex2}\nBinary: ${binary}\nOctal: ${octal}`);


//=========================
// Number System Conversion

let num = 255;

// Convert to difference bases (2-36)
console.log("Hexadecial Conversion: ",num.toString(16));  // "ff" (hexadecimal)
console.log("Binary Conversion: ",num.toString(2));   // "11111111" (binary)
console.log("Max Base(36): ",num.toString(36));  // "73" (max base - uses 0-9 and a-z)

// NOTE: Two dots needed when calling methods directly on numbers
console.log("Directly converting Number: ",123456..toString(36));  //  "2n9c"
// Alternative : (123456).toString(36)



//===========================
// Rounding Methods


// Different rounding functions
let n=3.1 , m=-1.1;

console.log("Floor of",n,"is:",Math.floor(n)); // 3 (round down)
console.log(`Floor of ${m} is: ${Math.floor(m)}`); // -2

console.log(`Ceil of ${n} is: ${Math.ceil(n)}`);  // 4 (round up)
console.log(`Ceil of ${m} is: ${Math.ceil(m)}`);  // -1

console.log(`Round of ${n} is: ${Math.round(n)}`);
console.log(`Round of 3.5 is: ${Math.round(3.5)}`);
console.log(`Round of -3.5 is: ${Math.round(-3.5)}`);


// Rounding to decimal places

// Method 1: Multiply-Round-Divide
let num1 = 1.23456;
let rounded = Math.round(num1*100)/100; //1.23

console.log(`num1: ${num1}\nRounded Num: ${rounded}`)

// Method 2: toFixed (returns string)
let fixedStr = num1.toFixed(2);  // "1.23"
let fixedNum = +num1.toFixed(2);  //+:Convert back number : 1.23

console.log(`\n"toFixed":\nfixedStr: ${fixedStr}, ${typeof fixedStr}\nfixedNum: ${fixedNum}, ${typeof fixedNum}`);

//=======================
//Precision Issues

console.log("\nPrecision Issues:")

// Floating point math can be imprecise
console.log(0.1+0.2 === 0.3); //false
console.log(0.1+0.2);  // 0.30000000000000004


// Why: Binary can't represnt some decimal fraction exactly
console.log("0.1: ",0.1.toString(2)); // Repeating Binary Fraction
console.log("0.2: ",0.2.toString(2));
console.log("0.3: ",0.3.toString(2));


// SOLUTIONS for this error: 

// 1. Use toFixed (remember it returns string)
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2));


// 2. Scale to integers
console.log((0.1 * 10 + 0.2 * 10)/10);  // 0.3


// Edge cases
console.log(9999999999999999); // 16->9 = shows 1000000000000000 (precision loss)
console.log(0 == -0);  // true, but they're technically different
console.log(Object.is(0,-0));  // false (correct distinction)


//==========================
// Special Number Checks

// Global Functions (do type conversion)
console.log("Global Functions:")
console.log(isNaN(NaN));  // true
console.log(isNaN("str"));  // true (converts to num -> NaN)
console.log(isFinite("12"));  // true (converts to num)
console.log(isFinite(Infinity));  // false


// Number methods (strict , no conversion):
console.log("Number Methods(strict , no conversion:)")
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("str"));
console.log(Number.isFinite(123));
console.log(Number.isFinite("123"));




//==========================
//Parsing Numbers

// parseInt and parseFloat extract numbers from strings
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em"));  // 12.5


// parseInt with radix (base):
console.log(parseInt('ff',16)); // 255 (hex)
console.log(parseInt('2n9c',36));  // 123456 (max base)



//==========================
//Math Functions

// Random Number [0,1)
console.log(Math.random());


// Min/max
console.log(Math.max(3,5,-10));
console.log(Math.min(1,2)); 


// Power
console.log(Math.pow(2,10)); // 1024


// Other Math functions includes:

/*
  - Trignometric : sin, cos, tan, etc.
  - Logarithmic : log, log10, etc.
  - And more : abs, sign, sqrt, etc.

*/


/*
 
 Summary of key points:
   - Use _ seperators for readability.
   - Exponential notation (1e9 = 1 billion, 1e-6 = 1 micro).
   - Alternative bases : hex(0x), binary(0b), ocatal(0o).
   - Base conversion : num.toString(base),parseInt(str,base).
   - Rounding : floor, ceil, round, trunc , toFixed.
   - Precision issues: 0.1 + 0.2 !== 0.3
   - Checking : isNaN/isFinite vs Number.isNaN/Number.isFinite
   - Parsing : parseInt/parseFloat for "100px" etc.
   - Math.object contains common math functions

  */



// ========================
// Number Representation Examples

// Standard numbers
let million = 1000000;
let decimal = 3.14159;

// Using underscores as seperators (ES2021 feature)
let budget = 1_000_000_000; // easier to read than 1000000000
let preciseDecimal = 3.141_592_653_589_793;


// Exponential notation example
let largeNumber = 5e6;  // 5,000,000 (5 * 10^6)
let tinyNumber = 2.5e-7; // 0.0000025 (2.5/ 10^7)
let electronMass = 9.109e-31; // Mass of electron in kg

console.log(`largeNum: ${largeNumber}\nTinyNumber: ${tinyNumber}\nElectronMass: ${electronMass}`);

// Demo of exponentail calculation
console.log(1.23e4 === 1.23*10000);  // true - 12300
console.log(5.6e-3 === 5.6 / 1000);  // 0.0056


//============================
//Alternate Base number  Examples

// Hexadecimal (base 16) - common in color codes
let red = 0xFF0000;  // Full red in RGB
let green = 0x00FF00;  // full green
let blue = 0x0000FF;  // full blue
let white = 0xFFFFFF;  // white

console.log(`red:${red},green: ${green},blue: ${blue},White:${white}`);


// Binary (base 2) - useful for bitwise operations
let permissions = 0b1101;  // binary for 13
let flags = 0b101010;  // binary for 42

// Octal (base 8) - less use common today
let oldFilePermission = 0o755;  // Common Unix permission

console.log(`Permission: ${permissions}, Flags: ${flags}`);



// ==============================
// Number Conversion Examples

let number = 255;

// converting to different bases 
console.log(number.toString(16));
console.log(number.toString(2));
console.log(number.toString(8));
console.log(number.toString(36));

// Practical example: RGB to Hex Conversion

function rgbToHex(r,g,b) {
	return `#${[r,g,b].map(x => x.toString(16).padStart(2,'0')).join('')}`;
}

console.log(rgbToHex(255,0,128));  // #ff0080


// Parsing numbers from strings with different bases
console.log(parseInt("1010",2));  // 10 (binary)
console.log(parseInt("FF",16));  // 255 (hexadecimal)
console.log(parseInt("377",8));  // 255 (octal)
console.log(parseInt("Z",36));   // 35 (max base)



// ==========================
// Rounding and Precision Examples

// financial calculation example
let price = 19.99;
let quantity = 3;
let total = price * quantity; // 59.970000000006


// Fixing precision issues
let preciseTotal = +(total.toFixed(2));  // toFixed(val) -> val after decimal 
console.log(`Total: ${total}, Precise Total: ${preciseTotal}`);


// Different rounding methods comparision
let values = [3.1, 3.5, 3.9, -3.1, -3.5, -3.9];

values.forEach(v=> {
	console.log(`
	Value: ${v}
	Floor: ${Math.floor(v)},
	Ceil: ${Math.ceil(v)},
	Round: ${Math.round(v)},
	Trunc: ${Math.trunc(v)}
		`);
});

// Rounding to specific decimal places

function roundTo(value, decimals) {
	const factor = 10 ** decimals;
	return Math.round(value * factor)/factor;
}

console.log(roundTo(3.1415_9265_3589_793, 4));  // 3.1416



// ============================
// Precision issues and Solutions

// classic precision problem
console.log(0.1 + 0.2 === 0.3);  // false
console.log(0.1+0.2);

// Why this happens
console.log(0.1.toString(2));
console.log(0.2.toString(2));


// Solutions : 

// 1) Using toFixed (returns string) in given base

sum = 0.1 + 0.2;
console.log(sum.toFixed(2));  // "0.30"
console.log(+sum.toFixed(2));  // 0.3 (convert to number)


// 2) Scaling to integers
function addDecimal(a,b) {
	const factor = 10 ** Math.max(a.toString().split('.')[1]?.length || 0,
	b.toString().split('.')[1]?.length || 0);

	return (a*factor + b*factor)/factor;
};

console.log(addDecimal(0.1,0.2)); // 0.3


// 3) Using a small epsilon value for comparision

function numbersEqual(a,b, epsilon= 1e-10) {
	return Math.abs(a-b)<epsilon;
}

console.log(numbersEqual(0.1 + 0.2, 0.3));  // true


// =======================
// Special Number Checks

console.log("\nSpecial Number checks:")
// checking for NaN
console.log(isNaN(NaN))  // true
console.log(Number.isNaN(NaN));  // true
console.log(isNaN("text"))  // true ("text" converts to NaN)
console.log(Number.isNaN("text"));  // False (strict check)


// Checking for finite numbers
console.log(isFinite(42))
console.log(isFinite("42"))
console.log(isFinite(Infinity))
console.log(Number.isFinite(42))
console.log(Number.isFinite("42"))


// Practical validation function
function isValidNumber(value) {
	return typeof value === "number" &&
		!Number.isNaN(value) &&
		Number.isFinite(value);
}

console.log(isValidNumber(42));
console.log(isValidNumber("42"));
console.log(isValidNumber(NaN));
console.log(isValidNumber(Infinity));


// ========================
// Parsing Numbers from strings

// Practical parsing example
console.log(parseInt("100px"));  // 100
console.log(parseInt("12.5rem"));  // 12.5
console.log(parseInt("a100"));  // NaN (can't parse)
console.log(parseInt("101",2));  // 5 binary parsing

// Currency parsing example
function parseCurrency(value) {
	// remove non-numeric characters except digits, decimal point , minus
	const numStr = value.replace(/[^\d.-]/g, '');
  return parseFloat(numStr);

};

console.log(parseCurrency("$1,234.56")); // 1234.56
console.log(parseCurrency("€ 1.000,50"));  // 1.000 (needs better parsing for EU format)


// ========================
// Math Object Example

// Random numbers
console.log(Math.random());

// Random integer between mix and max (inclusive)
console.log(Math.random()); // random float between 0(inclusive) and 1(exclisive)

// Random integer between min and max (inclusive)
function randomInt(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}
console.log(randomInt(1,6)); // simulare dice roll (1-6);


// Power and roots
console.log(Math.pow(2,8));
console.log(Math.sqrt(64));
console.log(Math.cbrt(27));
console.log(Math.hypot(3,4));

// trigonometric functions (angles in radians)
console.log(Math.sin(Math.PI / 2)); 
console.log(Math.cos(Math.PI));


// Logarithmic functions
console.log(Math.log10(100));
console.log(Math.log2(32));


// Constants
console.log(Math.PI);
console.log(Math.E); // Euler's no


// ==========================
// Big Int Examples

// Regular number limitations
console.log(2**53 === 2** 53+1);  // true! precision limit reached

// BigInt usage
let bigInt = 9007199254740991n;  // NOTE 'n' suffix
let biggerInt = bigInt + 1n;   // works correctly

console.log(`BigInt: ${bigInt}, BiggerInt: ${biggerInt}`);

// Can't mix BigInt and regular numbers directly
try{
	console.log(bigInt+1);  // TypeError
}
catch(e) {
	console.log("can't mix BigInt and Number");
}

// BigInt operations
let hugeNumber = 123456789012345678901234567890n;
console.log(hugeNumber * 2n);  // 246913578024691357802469135780n


/*

Key Takeways:
	- Use exponential notations for very large/small numbers(1e9, 2.5e-3)
	- Underscore improve readability of large numbers(1_000_000)
	- Alternate bases (hex,binary, octal) useful for specific domains
	- Always handle floating-point precision carefully (0.1+0.2 !==0.3)
	- Use proper rounding methods based on your needs (floor, ceil, round, trunc)
	- parseInt/parseFloat are essential for extracting number from strings
	- Math object provides common mathematical functions and constants
	- Use BigInt for integers larger than 2^53-1
*/


//=======================
// Other important concepts

// 1) Number System Limits and special values

// maximum safe integer in JS (2^53-1)
console.log(Number.MAX_SAFE_INTEGER);

// Minimun safe integer (-2^53-1)
console.log(Number.MIN_SAFE_INTEGER);

// Floating-point Limits
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// Special Value
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.EPSILON);


// 2) Number Object vs Primitive Numbers

let num2 = 65;

// Number object (rarely used)
let num3 = new Number(65);


console.log(typeof num2,typeof(num3));


// Comparison quirks
console.log(num2 == num3)
console.log(num2 === num3)



// 3) Bitwise Operations (32-bit integers)

// JS converts numbers to 32-bit signed ints for bitwise ops
console.log(5 & 3);  // 1 (AND)
console.log(5 | 3);  // 7 (OR)
console.log(~5);  // -6 (NOT)
console.log(5^3);  // 6 (XOR)
console.log(5<<1);  // 10 (left-shift)
console.log(5>>1);  // 2 (sign-propagating right shift)
console.log(5 >>> 1);  // 2 (Zero fill right shift)


// Practical example : RGB color manipulation
let color = 0xFFA07A; //  LightSalmon
let redChannel = (color >> 16) & 0xFF; // 0xFF
let greenChannel = (color >> 8) & 0xFF;  // 0xA0
let blueChannel = color & 0xFF;  // 0x7A

console.log(color, redChannel, greenChannel, blueChannel)


// 4) Number Prcision and Epsilon

// Using EPSILON for safe floating-point comparisions
function areEqual(a, b) {
	return Math.abs(a - b) < Number.EPSILON;
}

console.log(areEqual(0.1 + 0.2, 0.3));  // true


// Testing for "safe" integers
console.log(Number.isSafeInteger(9007199254740991));
console.log(Number.isSafeInteger(9007199254740992));


// 5) TYPE Coercion Gotcbas

// Unexptected type coercion
console.log("5" -3);  // 2
console.log("5"+3);  // "53"
console.log("5"*"2");  // 10
console.log("5a"-3);  // NaN

// Boolean coercion
console.log(!!1);  // true
console.log(!!0);  // false
console.log(!!NaN);  // false


// 6) Advanced Math Functions

// Exponentiation operator (**)
console.log(2**10);  // 1024

// Logarithmic funcitons 
console.log(Math.log1p(1));  // ln(1+x) - more accurate for small x
console.log(Math.expm1(1));  // e^x-1 reverse of log1p


// Hyperbolic Functions
console.log(Math.sinh(1));  // Hyperbolic sine
console.log(Math.cosh(1));  // Hyperbolic cosine

// Sign-related functions
console.log(Math.sign(-5));
console.log(Math.abs(-5));
console.log(Math.abs(-3.8));


// 7) Number Formatting (internalization)

// Locale-aware formatting
console.log(new Intl.NumberFormat('de-DE').format(1234567.89));

console.log(new Intl.NumberFormat('en-US').format(1234567.89));


// Currency Formatting
console.log(new Intl.NumberFormat('en-US',{
	style:'currency',
	currency:"USD"
}).format(1234.56));


// Unit Formatting
console.log(new Intl.NumberFormat('en-US',{
	style:"unit",
	unit:"kilometer-per-hour"
}).format(100));


// 8) Performance Consideration

// Bitwise tricks for performance (in tight loops)
// Floor a number:

let floor = ~~5.9;  // 5 (faster than Math.floor in some enginer)

// Check if integer:
function isInteger(x) {
	return (x|0) === x;
}

// But: Modern JS Engines optimize Math functions well!


console.log(isInteger(8));



// 9) BigInt Advanced Usage 
// BigInt operation
let big = 12345678901234567890n;
let big2 = 1n;

console.log(big + big2);
console.log(big*3n);


// Mixing with regular numbers (require explicit conversion)
console.log(Number(big)+1);  // Loses precision if big > MAX_SAFE_INTEGER


// BigInt Division truncates(cut-short/trim) (like math integer)

console.log(5n/2n); // 2n (not 2.5n)


// 10) Web APIs and Numbers

// web audio API
//let audioCtx = new AudioContext();
//let oscillator = audioCtx.createOscillator();
//oscillator.frequency.value = 440;  // frequence in Hz
//oscillator.start();


// canvas API
//let canvas = document.createElement('canvas');
//let ctx = convas.getContext('2d');
//ctx.fillStyle = `rgb(${255},${128},${0})`;



// 11) Nodejs Buffer and Numbers

// Binary data handling (Node.js)
const buf = Buffer.alloc(4);
buf.writeUInt32BE(0x12345678, 0); // Write 32-bit unsigned integer
console.log(buf.readUInt32BE(0));  // 305419896





















