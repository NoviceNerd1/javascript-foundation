
/*
 
 JS STRINGS SUMMARY

 - Strings are used to store textual data in JS. There is no seperate character type

 - Interformat is always UTF-16, independent of page encoding
	
*/


// ====================
// Quote Types

// Three types of quotes can be used :

// 1) SIngle Quotes
let single = 'single-quoted';


// 2) Double quotes
let double = "double-quoted";


// 3) Backticks (template literals)
let backticks = `backticks`;


console.log(single, double, backticks);

/*
 Single and double quotes are functionally equivalent.
 Backticks provide extended functionally:
  - Strings interpolation(embedding different elements) with ${expression}
  -Multi-line strings without special characters
  -tagged templates (advanced feature)

*/

// Example of interpolation
function sum(a,b) {
	return a+b;
}

console.log(`1+2= ${sum(1,2)}.`); // 3


// multi-line example
let guestList = `Guests:
	John
	Pete
	Mary
`;

console.log(guestList);

// ========================
// SPecial Characters

/*
 Common escape sequences:
   - \n - newline
   - \r - carriage return (windows line ending use \r\n)
   - \', \", \` - quote escapes
   - \\ - backslash
   - \t - tab
   - \b, \f, \v - backspace, form feed, vertical tab(rarely used)
 */

// Newline example
let str1 = "Hello\nWorld";  // two lines
let str2 = `hello
world`;  // Same as above

console.log(str1,"-", str2);

// Escaping quotes
console.log('I\'m the Walrun!');  // Need to escape sin gle quote in single-quoted strings
console.log("I'm the Walrus!");  // No need to escape in double-quoted string


// Displaying Backslash
console.log(`The backslash: \\`);  // shows single backslash

// =================
// String Properties And Methods

// Length property (not a method) 
console.log(`My\n`.length); //3 (\n is one character)

// character access
let str3 = `Hello`;


// Two ways to access characters: 
console.log(str3[0]);  // "H" - square bracket notation
console.log(str3.at(0)); // "H" - newer at() method

// at() allows negative indecies (count from end)
console.log(str3.at(-1));  // "o" (last character)
console.log(str3[-2]);  // undefined (square brackets don't  work with negatives)


// Iteration with for..of
for(let char of "Hello") {
	console.log(char); // H,e,l,l,o
}


// Strings are immutable - can't change individual characters
let immutableStr = "Hi";
//immutableStr[0] = 'T';  // Error - Won't work
immutableStr = "h" + immutableStr[1];  // need to create new strings
console.log(immutableStr);


// =======================
// Case Conversion
console.log('Interface'.toUpperCase());  // "INTERFACE"
console.log('Interface'.toLowerCase());  // "interface"

// =======================
// Searching in Strings

// indexOf(substr, pos) - returns position or -1
let str = 'widget with id';
console.log(str.indexOf("widget"));  // 0(found at start)
console.log(str.indexOf('id',2));  // 12 (second "id")


// lastIndexOf() - searches from end
console.log(str.lastIndexOf('id')); // 12 (still finds last occurence) 

// Modern methods return boolean:
console.log("Widget with id:".includes("Widget"));  // true
console.log("Hello".includes("Bye"));  // false


// startsWith/endsWith
console.log("Widget".startsWith("Wid"));  // true
console.log("Widget".endsWith("get"));  // true

// ===========================
// Getting Substrings

str = "stringify";

// slice(start,end) - most felxible (allows negatives)
console.log(str.slice(0,5));  // "strin"
console.log(str.slice(-4,-1));  // "gif"

// substrings(start,end) - similar but doesn't allow negatives
console.log(str.substring(2,6));  // "ring"
console.log(str.substring(6,2));  // "ring" (swaps arguments)


// substr(str,length) - deprecated but still used

console.log(str.substr(2,4));   // "ring"
console.log(str.substr(-4,2));   // "gi"


/*
Recomendation: Prefer slice() for most use cases
*/


// =======================
// String Comparision

/*
 * Strings are compared character-by-character using Unicode code:
 *  - Uppercase letters have lower codes than lowercase
 *  - Letters with diacritics have higher codes
 * */

console.log('a' > 'Z');  // true (97 > 90)
console.log("Österreich" > "Zealand");  // true (Ö has higher code)

// For proper language-aware comparision:
console.log('Österreich'.localeCompare('Zealand'));  // -1 (Ö comes before Z in German)

// Getting character codes:
console.log("A".codePointAt(0));  // 122
console.log(String.fromCodePoint(90));  // "Z"


// =========================
// Other Useful Methods

// Trim whitespace
console.log("    Hello  ".trim());  // "hello"

// Repeat string
console.log("ha".repeat(3));  // "hahah"

/*
 * Additional notes:
 * - For complex search/replace, use regular expressions
 * - Unicode handling can be complex (see dedicated Unicode chapter)
 * - Strings have many more methods - check documentation
 */




// ==========================
// Tagged Templates (advanced)

function tag(strings, ...values) {
	console.log(strings);  // ["hello ","! Your score is ", ""]
	console.log(values);  // ["Alice", 95]
	return "processed strings";
}

let name = "Alice";
const res = tag`Hello ${name}! Your score is ${95}`;
console.log(res);


// Common escape sequences
const specialChars = {
	newLine : "First \nSecond line",
	tab: "Column1\tColumn2",
	backslash: "This is a backslash: \\",
	quotes: "She said,\"Hello\"",
	unicode: "Smiley: \u{1F600}" 
};

console.log(specialChars.newLine)
console.log(specialChars.tab)
console.log(specialChars.backslash)
console.log(specialChars.quotes)
console.log(specialChars.unicode)



// String Manipulation

// Strings are immuatable - these methods return new strings
const original = "Hello";

// case conversion
console.log(original.toUpperCase());
console.log(original.toLowerCase());


// Concatenation
const combined = original.concat(" ","World","!");
console.log(combined);


// Padding
console.log(original.padStart(19,"*"));
console.log(original.padEnd(14,"#"));


// trimming whitespace
const spaced = "   hEllo       ";
console.log(spaced.trim());
console.log(spaced.trimStart());
console.log(spaced.trimEnd());


// Repeating
console.log(original.repeat(12));




// Searching in Strings

const text = "The quick brown fox jumps over the lazy dog.";

// indexOf/lastIndexOf
console.log(text.indexOf("fox"));  // 16
console.log(text.indexOf("Fox"));  // -1 (case-sensitive)
console.log(text.lastIndexOf("the"));  // 32

// includes/startsWith/endsWith -> true/false
console.log(text.includes("brown"));
console.log(text.startsWith("The"));
console.log(text.endsWith("dog."));

// Search with regular expression
console.log(text.search(/[A-Z]/));
console.log(text.match(/o/g));


// SUBSTRING EXTRACTION

const example = "JavaScript";

// slice(start,end)
console.log(example.slice(0,4));
console.log(example.slice(-5));
console.log(example.slice(4,-2));



// Substring(start,end)
console.log(example.substring(0,4));  // Java
console.log(example.substring(4,0));  // Java (swaps arguments)
console.log(example.substring(7,2));
console.log(example.substring(2,7));


// substr(start,length) - derecated but still works
console.log(example.substr(4,6));



// String Transformation

// Splitting into array
const csv = "apple,banana,orange";
const fruits = csv.split(",");
console.log(csv,"->",fruits);

// Joinint array into string
const newString = fruits.join(" | ");
console.log(newString);

// Replacing content
console.log(text.replace("fox",'cat'));
console.log(text.replace(/[aeiou]/g,"*"));


// UNICODE HANDLING

// code points vs code units
const emoji = "😊";
console.log(emoji.length);  // 2 (UTF-16 code units)
console.log([...emoji]);  // 1 (proper count using spread)
console.log([...emoji].length);  
console.log(emoji.codePointAt(0)); // 128522 (actual code point)

// iteration with for...of handles UNICODE correctly
for(const char of "a😊b") {
	console.log(char);
}


// USEFUL PATTERNS

// checking for empty string
function isEmpty(str) {
	return !str || str.trim().length === 0;
}

console.log(isEmpty(""));
console.log(isEmpty("      "));
console.log(isEmpty("Hey Man!"));


// string reversal
function reverseString(str) {
	return [...str].reverse().join("");
}

console.log(reverseString("abcdef"));


// Palindrome check

function isPali(str) {
	const cleaned =str.toLowerCase().replace(/[^a-z0-9]/g,"");
	return cleaned === reverseString(cleaned);
}

console.log(isPali("apple"));
console.log(isPali("Madam"));


// PERFORMANCE OPTIMIZATION

// Building large strings efficiently
let largeString = "";
// Bad - creates new string each time (O(n²))
for (let i = 0; i < 1000; i++) {
  largeString += i;
}
//console.log(largeString);

// Better - use array join (O(n))

const parts = [];
for(let i= 0; i<100; i++) {
	parts.push(i);
}
largeString = parts.join("");
console.log(largeString);












































