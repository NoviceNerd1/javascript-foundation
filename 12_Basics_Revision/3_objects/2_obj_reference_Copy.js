// OBJECT REFRENCES AND COPYING

//=============================================================
//		SUMMARY
//----------------------------------------
//

// =========================================
// 📦 Object References, Copying & Cloning
// =========================================

// ✅ Primitives are copied by value.
let message = "Hello!";
let phrase = message; // independent copy

// ✅ Objects are copied by reference.
let user = { name: "John" };
let admin = user; // same reference, same object
admin.name = "Pete";
console.log(user.name); // Pete

// ✅ Comparisons work by reference.
let a = {};
let b = a; // same object
console.log(a === b); // true

let x = {};
let y = {}; // different objects
console.log(x === y); // false

// ✅ `const` object references can still be mutated.
const person = { name: "John" };
person.name = "Dave"; // valid
// person = {} ❌ not allowed (new reference)

// ===============================
// 🔁 Shallow Copy (Manual or assign)
// ===============================

// Manual property copy
let original = { name: "Alice", age: 25 };
let shallow = {};

}
for (let key in original) {
  shallow[key] = original[key];
}
shallow.name = "Bob";
console.log(original.name); // Alice

// Object.assign
let merged = Object.assign({}, original, { age: 30 });
console.log(merged); // { name: "Alice", age: 30 }

// -------------------------------
// 🧠 Caveat: Nested objects are copied by reference
let nested = {
  name: "John",
  sizes: { height: 180, weight: 70 }
};

let shallowClone = Object.assign({}, nested);
nested.sizes.weight = 80;
console.log(shallowClone.sizes.weight); // 80 — shared ref

// ===============================
// 🌊 Deep Cloning – structuredClone()
// ===============================
let deepClone = structuredClone(nested);
nested.sizes.height = 190;
console.log(deepClone.sizes.height); // 180 — safe

// ✅ Handles circular references
let circular = {};
circular.self = circular;
let circularClone = structuredClone(circular);
console.log(circularClone.self === circularClone); // true

// ❌ structuredClone fails on functions
// structuredClone({ fn: () => {} }); // Throws error

// ✅ For full support: use lodash
// _.cloneDeep(obj); // supports functions, symbols, etc.

// ===============================
// ✅ Recap
// ===============================

/*
 - Primitives → copied by value
 - Objects → copied by reference
 - `const` objects: reference can't be changed, but internal properties can
 - Use Object.assign({}, obj) or {...obj} for shallow copy
 - Use structuredClone(obj) for deep copy
 - structuredClone supports circular references but not functions
 - For full deep cloning (with functions, classes), use libs like lodash's _.cloneDeep()
*/

//
//==============================================================



//Object(non-primitive) VS Primitive data types
// OBJECT: objects are stored and copied "By reference"
// Primitive values: strings, numbers, boolean, etc. - are always copied "as a whole value".

// In primitive

let messagePrim = "Hello!";
phrase = messagePrim;


// Now we have two independent variables, each one storing the string "Hello!";


// Obvious? but Objects are not like that.
//
// IN OBJECTS:
// A VARIABLES ASSIGNED TO AN OBJECT STORES NOT THE OBJECT ITSELF, BUT ITS "ADDRESS IN MEMORY" - IN OTHER WORDS "A REFERENCE" to it.


// Example:
let user = {
	name:"Jimmy",
};

// object stored somewhere in memory, while "user" var has a "reference" to it.
// When we perform action with object, e.g. take a property user.name, the JS Engine looks at what's at that address and perform the operations on the actual obect.

// WHEN AN OBJECT VARIABLE IS COPIED, THE REFERENCE IS COPIED, BUT THE OBJECT ITSELF IS NOT DUPLICATED.

// user is declared above
let admin = user;  // copy the reference

// Now, we have two variables, each storing a refernce to the same object
// Therefore, we can user either variable to acess the object and modify its content.

admin.name = "PETER PAN";

console.log(user.name)


// ---------------------
// Comparision by reference
// ---------------------

// TWO OBJECTS ARE EQUAL ONLY IF THEY ARE THE SAME OBJECT.
// Like, if "a" and "b" are refernce to the same object, thus they are equal.

let a={};
let b=a;  // copy the reference

console.log(a==b);  // true, both reference to same object
console.log(a===b); // true


// Where two object will not be equal, even if they look alike?

let newA = {};
let newB = {};

console.log(newA==newB);  // false ; since diff objects
console.log(newA===newB); // false


//============================================================
//Interesting
//-----------------------
// CONST OBJECTS CAN BE MODIFIED !!!

// An important side effect of storing objects as a reference is that an object decalred as "const" can be modified.

const constUser = {
	name:"Billy",
};

user.name = "Peter Parker";  // (*)
//constUser={age:23}; // Error- assignment to const element
console.log(constUser);

// It might seem that the line (*) would cause error, but it does not. 
// The value of "user" is constant, it must always reference the same object, but "Properties of the object are free to change".
//
// Means, "const constUser" gives error only if we try to set "constUser=... " as a whole

// If we really need to make const object properties, its also possible , but using totally different method.

//==========================================================


// Cloning and merging, Object.assign

//copying an object variable creates  one more reference to the object
//
//We can create a new object and replicate the structure of the existing one, by iterating ovef its peoperties and copying them on the primitive level.

user = {
	name: "Jhonny",
	age:30,
};

let clone = {};

for(let key in user) {
	console.log(key);
	clone[key] = user[key];
}

console.log(clone);

clone.name ="Pero";

console.log("User :"+user);
console.log("Clone: "+clone);


// We can also use "Object.assign"
// Syntax:
// Object.assign(dest,...sources);
// where:
// 	first argument "dest" -> target
// 	further arguments are a list of source objects.

// It copies the properties of all the source objects into the target "dest", then returns it as a result.

// Example:

let newUser = {name:"Johnny English"};

let permission1 = { canView:true };
let permission2 = { canEdit:true };

Object.assign(newUser,permission1,permission2); // copy all property from permission1 & 2 to newUser

console.log(newUser)

// if it already exists, it gets OVERWRITTEN:

Object.assign(newUser, {name:"Jason Bond"});

console.log(newUser.name)

// WE can also user "Object.assign" to PERFORM CLONING:

console.log("User: "+user)

let cloneUser = Object.assign({},user,{Strength:"Development in JS .NET JAVA C++"})

console.log("Clone User: ",cloneUser);

// Copies all properties of "user" into the empty object and returns it
//
// Other methods:=> using spread syntax clone = {...user}


//-----------------------------
//Nested cloning
//-----------------------------


// Until now we assumed that all proterties of user are PRIMITIVE, but properties can be "REFERENCES" to other objects
// EXAMPLE:

user = {
	name:"Patrick",
	sizes:{
		height:182,
		width:52
	}
};

console.log(user.sizes.height)

// Now, its not enogub to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by refernce, so clone and user will share same sizes:

clone = Object.assign({},user);

console.log(user.sizes === clone.sizes)  // true, THEY'RE SAME OBJECT

user.sizes.width = 89;
console.log(clone.sizes.width)

// THIS IS CALLED SHALLOW CLONING I THINK?
//
// Now, to fix this problem and make user and clone truly seperate objects, we should use cloning loop that examines each value of user[key] and if its an object then repliate its structure as well. 
// That is called "deep cloning" or "structured cloning". 
// =====>>>>>>>>>>
// There's " structuredClone" method THAT IMPLEMENTS DEEP CLONING


// structuredClone -> DEEP CLONING METHOD

// call structuredClone(object) clones the object with all nested properties
// EXAMPLE:

let user2 = {
	name:"Alan Walker",
	favSong: "Faded",
	sizes:{
		height:183,
		width:45
	}
}

let newClone = structuredClone(user2);

console.log(user.sizes===newClone.sizes)

// the "structuredClone" method can clone most data types, such as objects, arrays, primitive values
//
// It also SUPPORTS CIRCULAR REFERENCES, when object property references the object itself (directly or via chain or reference)

// EXAMPLE:
 
user = {};
// lets create a circular reference:
// user.me references the user itself

user.me = user;

clone = structuredClone(user);
console.log(clone.me === clone);  // true , it also got cloned

// clone.me references the clone, not user! 
// So, the circular reference was cloned as well.


// DOES "strcutredClone" EVER FAIL ??!!
// when the object has A FUNCTION. "strucutredClone" DOESNT SUPPORT FUNCTION

// To handle such comples cases, we may need to use combination of cloning method , write custom code, or 
//
// to not reinvent the wheel, take an existing implementation, for ex, "_.cloneDeep(obj)" from JS library "lodash".


































