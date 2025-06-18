// NULLISH COALESCING OPERATOR "??"

// nullish coalescing operator written as "??"

// it treats null and undefined similarly, we'll use a special term here. 
// For brevity(concise and exact), we'll say that a value is "defined" when it's "null" nor "undefined".

// Result of a??b:
// 1) if a is defined , then a.
// 2) if a isnt defined, then b.
//
// ?? returns the first argunemnt if its not null/undefined.
//
// we can rewrite result = a??b , like this:
// result = (a!== null && a!== undefined) ? a: b;

// ?? is used to provide a default value

// for ex; we show "user" if its value isn't "null/undefined", otherwise "Anonymous".

let user;
console.log(user??"Anonymous")

user = "John";
console.log(user??"Anonymous")

// EX 2:

let firstName = null;
let lastName = null;
let nickName = "SuperCodingGod"

console.log(firstName??lastName??nickName??"Anonymous")

 
// Comparision with ||
// OR || can be used the same way as ??.

console.log(firstName||lastName|| nickName|| "Anonymous")


// OR came in the beginning of JS. 
// ?? came only recently because people werent happy with ||.

// in other word, "||" doesnt distinguish between false, 0, an empty string "", and null/undefined. THey are all the same - falsy values.
// if any of these is the first argument of ||, then we will get the second argument as a result.
//
// In practice though, we may want to use default value only when the variable is null/undefined.
// That is, when the value is really unknown/not set.

let height = 0;
console.log(height||100)	// checks that height is falsy(0), gives second value in return
console.log(height??100)	// 0 is a defined value, therefore , gives back original value of height.


// PRECEDENCE

// Precedence of ?? is same as ||.
// Means, just like ||, ?? is evaluated before = and ?, but after most other operations, such as +, *.
//

height = null;
let width = null;

let area = (height??100) * (width??50);
let area2 = height??100 * width??50
console.log(area, area2)



// USING ?? with && or ||

// Due to safety reasons, JS FORBIDS using ?? together with && and || operators, unless precedence is explicitly specified with parentheses.

//let x = 1 && 2 ?? 3;	// undexpected token error

let x = (1&&2) ?? 3;
console.log(x)




























