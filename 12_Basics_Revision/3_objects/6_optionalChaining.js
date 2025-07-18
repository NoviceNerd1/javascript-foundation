//==================
//OPTIONAL CHAINING "?"
//==================


// optional chaining "?." is a safe way to access nested object properties, even if an intermediate property doesn't exist.

//--------------------
// 1) The "non-existing property" problem
// ---------------------------



// trying accessing the property which doesn't exist? Ever faced such situation? 

// EX: user -> holds info about users
// Most user have address in "user.address" property, with street
// "user.address.street", but some did not?!!
//
// In such cases, we attempt to get user.address.street , we will get error

let user = {}; // no address property defined

//console.log(user.addresss.street) ERRORRR!!!!


// We would prefer to get undefined , or null. 
// Or some value so that our code doesn't crash but gives a warning or something and continues.

// Like in webdev, in .querySelector('.ele') , if there's no element, u will get "null".


// Obvious solution is use "if" or conditional opeartor "?" before accessing property

user= {};

console.log(user.address ? user.adress.street : undefined);
// It works without erros, but its quite "INELEGANT". 

// SLIGHTLY BETTER WAY? USE "AND"

user = {};

console.log(user.address && user.address.street && user.address.street.name ); // undefined (no error)

// Works but still unelegant. Repetetion or duplicatted code,"user.adress" appreas 3 times.

// THEREFORE USE "OPTIONAL CHAINING" => "?"



//-------------------------
// 2) Optional Chaining
//--------------------------

// Optional Chaining "?." stops evaluation if the value before "?." is "undefined" or "null" and returns "undefined".

//we’ll be saying that something “exists” if it’s not null and not undefined

// In other words, "value?.prop" :
// 1) works as value.prop , if value exists,
// 2) otherwise (when value is undefined/null) it returns "undefined"


// SAFEST WAY TO ACCESS => "user.address.street" user "?."

user= {};

console.log(user?.address?.street);

// Here’s an example with document.querySelector:

//let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

user = null;
// user.address.street = "MAGIC" -> MAGIC FAILED, ELEMENT UNREACHABLE

console.log(user?.address);  // undefined
console.log(user?.address.street);  // undefined


// WARNING!! :=> Dont overuse optional chaining

// "?." use only where it's ok that something doesn't exist.

//For example:=> if according to our code logic user object must exist, but address is optional, 
//then we should write user.address?.street, but not user?.address?.street.






// WARNING!!! :=> The variable before ?. must be declared

//If there’s no variable user at all, then user?.anything triggers an error


// ReferenceError : user is not defined
//user2?.address; 




// ------------------------
// 3) Short-circuiting

// Code Idea: If the left side is null or undefined , "?." stops evaluatoin

// example: short circuit prefents function call and side effects

user = null;
let x = 0;

user?.sayHi(x++); // sayHi never called, x++ is not executed
console.log(x);  // 0




// 4) Other variants

// -1- obj?.prop -> safe property access

let profile = null;
console.log(profile?.name); // undfined (no crash)


// -2- obj?.[prop] -> safe dynamic property access
let key = "email";
let contact = {email:"user@gmail.com"};
console.log(contact?.[key]);  // user@gmail.com

let missing = null;
console.log(missing?.[key]);  // undefined


// -3- obj.method?.() -> safe method invocation

let admin = {
	login() {console.log("Logged In!! FIANLLYY")}
}

let guest = {};

admin.login?.();  // "Logged in!! FIANNLLY"
guest.login?.();  // Nothing happens



// -4- delete obj?.prop -> safe delete

let config = {debug:true};
delete config?.debug;  // delete if config exists


//------------------------
//Unsupported Use-cases

// WRONG: assignment via optional chaining - NOT ALLOWED!!

let test = null;
//text?.value = 43; // SyntaxError: Invalid left-hand side in assignment
// because it evaluated to: undefined = 43 -> which is impossible

// WRONG: Function declaration chaining - NOT SUPPORTED!
//let res = someFunc?.().another?.(); // works only if someFunc() returns non-null 

// We can user "?." for safe reading and deleting, but not writing


// SUMMARY


/*
 ?.prop     → Safe property access
 ?.[prop]   → Safe bracket notation access
 ?.method() → Safe method invocation
 delete ?.  → Safe deletion

 ⚠ Avoid using ?. when:
 - The left-hand side is expected to always exist
 - You’re performing writes/assignments
*/


























































