// TYPE CONVERSION
//

// 🔁 JavaScript Type Conversions — String, Number, Boolean

// 📦 1. String Conversion
// Happens when outputting values or explicitly via String(value)

console.log(String(123));         // "123"
console.log(String(true));        // "true"
console.log(String(null));        // "null"
console.log(String(undefined));   // "undefined"

// 📐 2. Number Conversion
// Happens in math ops or via Number(value)
// Common rules:

console.log(Number("42"));        // 42
console.log(Number("  42  "));    // 42 (trims whitespace)
console.log(Number("0"));         // 0
console.log(Number(""));          // 0 (empty string → 0)
console.log(Number("abc"));       // NaN (invalid string)
console.log(Number(undefined));   // NaN ❗️
console.log(Number(null));        // 0
console.log(Number(true));        // 1
console.log(Number(false));       // 0

// ✅ 3. Boolean Conversion
// Happens in logical expressions or via Boolean(value)
// Falsy values: 0, "", null, undefined, NaN → false
// Everything else → true

console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(" "));        // true ❗️ (non-empty string, even if just whitespace)
console.log(Boolean("0"));        // true ❗️ (non-empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(123));        // true

// ⚠️ Gotchas to remember:
// - undefined → NaN when converted to number
// - "0" → true when converted to boolean
// - "   " → true (non-empty string, even if just spaces)

// 🧠 Object conversions are more complex and handled later via "object to primitive" rules

// -------------------- Summary END --------------------------
//


console.log("---------- Main Info----------------")

// operators and functions automatically convert the values given, to the right type.
//
// For ex,. "alert" automatically converts any value to a string to show it.
//	Mathematical operations convert values to numbers


// ------------------- String Conversions ----------------------


// String(value) function - converts value to a string

let val = true
console.log(typeof val)

val = String(val)
console.log(typeof val)

// string conversion is mostly obvious. 
// false becomes "false" and null becomes "null",etc




// ------------------ NUMERIC Conversion ------------------------

// Numeric conversions in mathematical functiond and expressions happen AUTOMATICALLY

// for ex
//
// 1 - when division / is applied to explicitly to non-numbers

console.log(typeof("6"/"2"))	// is a number

// Number(value) function - explicitly converts a value to a number

let str = "123"
console.log(typeof str)

let num = Number(str)
console.log(typeof num)


// if a string is not a valid number , the result of such convrsion is "NaN".

let age = Number("an arbitrary string instead of a number");
console.log(age)

console.log(Number(undefined))

console.log(Number(null))

console.log(`${Number(true)} ${Number(false)} `)
console.log(Number(""))
console.log(Number("\t \n"))
console.log(Number("Hello"))
console.log(Number("1234"))
console.log(Number("\t1234      "))



// --------------------- BOOLEAN Conversion ---------------------
//


// Boolean(values) function - conversts value explicitly to bool
//


// The conversion rule:
// 1- values that are intuitively "empty", like 0, an empty string, null, undefined, and NaN, becomes false
// 
// 2- Other values become true


console.log(Boolean(0))
console.log(Boolean(1))

console.log(Boolean("Hello"))
console.log(Boolean(""))

console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(undefined))

console.log(Boolean("0")) // true

console.log(Boolean(" "))	// true













