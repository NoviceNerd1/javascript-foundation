// // ===========================
// // OBJECTS
// // ---------------------------

// /*
// 	JS objects are non-primitive data types used to stole collection of key-value pairs, known as properties. Property names (keys) are strings,
// 	and values can be any data type, including functions (when a property value is a function, its called "method").

// 	Objects are unordered collection of properties created with curly braces {},
// 	with propeties seperated by commas and written as key:value pairs.

// 	JS supports Object-Oriented Programming(OOP) with four key capabilities:
// 		1. Encapsulation: storing related data and methods together in an object
// 		2. Abstraction: Hiding implementation details from users
// 		3. Inheritance: Allowing objects to inherit properties and methods from other objects
// 		4. Polymorhism: Enabling one function/method to work in multiple ways
// */

// // OBJECT PROPERTIES

// /*
// 	Object properties can be primitive data types, objects, or functions.
// 	Properties can be internal variable used by object methods or globally visible.

// 	Syntax for adding properties :
// 		objectName.objectProperty = propertyValue;
// */

// // Example: Accessing the title property globalThis object
// //var str = globalThis.DataView;
// //var str = document.title;
// //console.log(str);

// // Object Methods

// /*
// 	- Methods are function attached to objects that define object behaviour.

// 	- The key difference from standalone functions: methods can reference the object
// 	using the "this" keyword.

// 	- Methods can perform operations from simple display tasks to complex calculations on
// 	object properties
// */

// // Example: Using the write() method of the document object
// // document.write("THIS IS TEST");	// overwrites text on window

// // Creating objeccts

// /*
// 	All user-defined and built-in objects inherit from the base Object.

// 	Multiple approaches to create objects:

// 	1. Object literals
// 	2. Object constructor
// 	3. Object.create() method
// 	4. ES6 classes
// */

// // 1. Object literals syntax

// /*
// 	Simplest way to create objects using curly braces {} with key:value pairs.

// 	Properties are comma-seperated, with colon between key and value.
// */

// // Example: Creating a book object with object literal
// const myBook = {
//   title: "Perl", // string property
//   author: "Mohtshim", // string property
//   pages: 355, // Number property

//   // Methods can also be added as properties with function values
//   getDetails: function () {
//     return `${this.title} by ${this.author}, ${this.pages} pages`;
//   },
// };

// console.log(myBook.getDetails());

// /*
// 	 Accessing object properties using dot notation
// 	document.getElementById("output").innerHTML =
//     "Book name is : " + myBook.title + "<br>" +
//     "Book author is : " + myBook.author + "<br>" +
//     "Total pages : " + myBook.pages;
// */

// // 2. New Operator with built-in constructors

// /*
// 	The "new" operator creates instances of objects followed by constructor methods.
// 	JavaScript probides built-in constructors like Object(), Array(), Date(), etc.
// */

// // Creating objects with built-in constructors
// var employee = new Object(); // Empty object
// var books = new Array("C++", "Peal", "Java"); // Array Object
// var day = new Date("August 15, 1947"); // Date Object
// console.log(employee, books, day);

// // Object() Constructor

// /*
// 	The Object() constructor is a special built-in function to create objects.

// 	Properties are assigned to the object without using the var keyword.
// 	The returned value is a reference to the new object.
// */

// // Example: creating a book with Object() constructor
// var book = new Object();
// book.subject = "Peal";
// book.author = "The Demon King";
// console.log(book);

// // Custom constructo functions

// /*
// 	Custom functions can serve as object templates/constructors.
// 	Advantages over Object() constructor: ability to accept parameters for
// 	customization.

// 	The "this" keyword refers to the object being created.
// 	Use "new" keyword to instantiate objects from constructor functions.
// */

// // Example: Custom constructor function for Book objects
// function Book(title, author) {
//   // "this" refers to the object being created
//   this.title = title;
//   this.author = author;

//   // Methods can also be added to the object
//   this.getDetails = function () {
//     return "${this.title} by ${this.author}";
//   };
// }

// // Creating object instance using the constructor
// const my_book = new Book("Peal", "ABC");

// console.log(my_book);

// // 5. Object.create() Method

// /*
// 	Creates a new object using an existing object as prototype.
// 	Allows adding properties to the object prototype during creation.
// 	Properties are defined using property descriptors for more control.

// 	Syntax: Object.create(proto, properties);
// */

// // Example: Creating object with Object.create()

// const myBook1 = Object.create(
//   {},
//   {
//     title: {
//       value: "Perl", // property value
//       writable: true, // Can be changed (default: false)
//       enumerable: true, // Shows up in for..in loops (default: false)
//     },
//     author: {
//       value: "ABC",
//       enumerable: true,
//     },
//   }
// );

// // NOTE: Properties added via Object.create() are on the prototypes
// // Direct property access works, but may not show in console.log

// // 6. ES6 Classes

// /*
// 	ES6 intorduced class syntax as syntactic sugar over prototype-based inheritance.
// 	Classes serve as templates for creating objects with constructor and methods.
// 	Similar to constructor functions but with clearer, more familiar syntax.
// */

// // Class definition
// class Book1 {
//   // Constructor method for initializing objects
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   // Method definition (automatically added to prototypes)
//   getDetails() {
//     return `${this.title} by ${this.author}`;
//   }
// }

// // Creating objects from class
// const myBook2 = new Book1("Perl", "ABC");

// // Defining methods for Objects

// /*
// 	Methods can be added to objects in several ways:
// 		1. Within constructor functions
// 		2. Added as properties after object creation
// 		3. Defined externally and assigned to object properties
// */

// // Example: Adding methods to objects

// // External function that will be used as a method
// function addPrice(amount) {
//   this.price = amount;
// }

// // constructor funciton
// function Book2(title, author) {
//   this.title = title;
//   this.author = author;
//   this.addPrice = addPrice; // Assign external function as methods
// }

// // Creating objects and using methods
// var myBook3 = new Book2("Perl", "BCD");
// myBook3.addPrice(100);
// console.log(myBook3.price);

// // The "with" KEYWORD

// /*
// 	The "with" keyword provides shorthand access to object properties/method

// 	Specified object becomes the default contezt for the following block.
// 	Note: Not recomended for use in Modern JS (strict mode prohibits using it)
// 	due to performance issue and ambiguity in code.
// */

// // Example: Using "with" keyword

// function addPrice2(amount) {
//   with (this) {
//     price = amount; //"this" is implied, equivalent to this.price = this.amount
//   }
// }

// function Book3(title, author) {
//   this.title = title;
//   this.author = author;
//   this.price = 0;
//   this.addPrice = addPrice2;
// }

// var myBook4 = new Book3("Perl", "ABCD");
// myBook4.addPrice(100);
// console.log(myBook4);

// // JS Native objects

// /*
// 	JavaScript provides several built-in objects available in any environment:
//  * - Number Object: For numeric values and mathematical operations
//  * - Boolean Object: For true/false values
//  * - String Object: For string manipulation
//  * - Array Object: For ordered collections
//  * - Date Object: For date and time operations
//  * - Math Object: For mathematical constants and functions
//  * - RegExp Object: For pattern matching with regular expressions
//  * - Symbol Object: For unique identifiers
//  * - Set Object: For collections of unique values
//  * - WeakSet Object: For collections of weak object references
//  * - Map Object: For key-value pairs where keys can be any value
//  * - WeakMap Object: For key-value pairs with weak object references as keys
//  * - Iterables Object: For objects that can be iterated (e.g., with for...of)
//  * - Reflect Object: For meta-programming operations on objects
//  * - TypedArray Object: For array-like views of binary data buffers
// */

// // Object Methods Reference

// /*
//  * STATIC METHODS (Called on Object class itself)
//  *
//  * Object.assign(target, ...sources)
//  *   - Copies properties from source objects to target object
//  *
//  * Object.create(proto, [propertiesObject])
//  *   - Creates new object with specified prototype object and properties
//  *
//  * Object.defineProperty(obj, prop, descriptor)
//  *   - Defines new or modifies existing property directly on an object
//  *
//  * Object.defineProperties(obj, props)
//  *   - Defines new or modifies existing properties directly on an object
//  *
//  * Object.entries(obj)
//  *   - Returns array of object's own enumerable string-keyed property [key, value] pairs
//  *
//  * Object.freeze(obj)
//  *   - Freezes object: can't add/remove/change properties, prevent prototype changes
//  *
//  * Object.fromEntries(iterable)
//  *   - Transforms list of key-value pairs into an object
//  *
//  * Object.getOwnPropertyDescriptor(obj, prop)
//  *   - Returns property descriptor for own property of an object
//  *
//  * Object.getOwnPropertyNames(obj)
//  *   - Returns array of all own property names (including non-enumerable)
//  *
//  * Object.getOwnPropertySymbols(obj)
//  *   - Returns array of all own symbol properties
//  *
//  * Object.getPrototypeOf(obj)
//  *   - Returns prototype of specified object
//  *
//  * Object.hasOwn(obj, prop)
//  *   - Returns boolean indicating if object has specified property as own property
//  *
//  * Object.is(value1, value2)
//  *   - Determines whether two values are the same value
//  *
//  * Object.isExtensible(obj)
//  *   - Determines if an object is extensible (can have new properties added)
//  *
//  * Object.isFrozen(obj)
//  *   - Determines if an object is frozen
//  *
//  * Object.isSealed(obj)
//  *   - Determines if an object is sealed
//  *
//  * Object.keys(obj)
//  *   - Returns array of object's own enumerable property names
//  *
//  * Object.preventExtensions(obj)
//  *   - Prevents new properties from being added to an object
//  *
//  * Object.seal(obj)
//  *   - Seals an object: prevents adding new properties, marks all existing as non-configurable
//  *
//  * Object.setPrototypeOf(obj, prototype)
//  *   - Sets prototype (internal [[Prototype]] property) of specified object
//  *
//  * Object.toLocaleString(obj)
//  *   - Returns string representation of object appropriate for locale
//  *
//  * Object.values(obj)
//  *   - Returns array of object's own enumerable property values
//  */

// // INSTANCE METHODS (Called on Object instances)

// /*
//  * obj.defineGetter(prop, func)
//  *   - Defines getter function for property (deprecated, use Object.defineProperty instead)
//  *
//  * obj.hasOwnProperty(prop)
//  *   - Returns boolean indicating if object has specified property as own property
//  *
//  * obj.isPrototypeOf(object)
//  *   - Checks if object exists in another object's prototype chain
//  *
//  * obj.propertyIsEnumerable(prop)
//  *   - Returns boolean indicating if specified property is enumerable
//  */

// /**
//  * OBJECT PROPERTIES
//  *
//  * obj.constructor
//  *   - Returns reference to constructor function that created the instance
//  */

// // //================================================
// // //			SUMMARY
// // //================================================

// // // Objects are associative arrays with enhanced capabilities.
// // // They store "key-value" pairs.

// // // -------------------------
// // // Keys must be strings or symbols
// // // values can be of any type

// // let user0 = {
// //   name: "Alice",
// //   age: 32,
// //   isAdmin: true,
// //   skills: ["JS", "REACT"],
// // };

// // // ------------------------
// // // Accessing properties

// // console.log(user0.name);
// // console.log(user0["skills"]);

// // let keyIsAdmin = "isAdmin";
// // console.log(user0[keyIsAdmin]);

// // //-----------------------
// // //Deleting properties

// // delete user0.age; // removes age from user0

// // //------------------------
// // //CHecking property Existence

// // console.log("name" in user0);
// // console.log("age" in user0);

// // //--------------------------
// // // Iterating properties

// // for (let key in user0) {
// //   console.log(key);

// //   console.log(user0[key]);
// // }

// // //---------------------------
// // // Other built-in Object types

// // let arr = [1, 2, 4, 5]; // Array-> special object with length & index
// // let now = new Date(); // Date-> object with time utilities
// // let err = new Error("OOps!"); // Error-> object for error handling

// // // Akk of the above are derived from the base Object type and extent it with extra features.

// // // ---------------------------
// // // Recap

// // /*
// //  1) JS objects hold dynamic key-value pairs.
// //  2) keys- strings or symbols
// //  3) Values- any JS type
// //  4) Access- dot or square backet
// //  5) Check existence- "key" in object
// //  6) Delete - delete object.key
// //  7) Iterate - for(let key in Object).
// //  8) Arrays,Dates,Errors are all objects with extra features
// //  9) Objects are foundational; advanced topics like classes and prototypes build on them.

// // */

// // //================================================

// // // Objects are "non-primitive" used to store keyed collection(key:value pairs) of various data and more complex entities.
// // // An Object can be created with figure brackets {...} with an optional list of properties. Property is "key:value" pair, where:
// // // 		1) key - string(called "property name")
// // // 		2) values - can be anything

// // let objUser = new Object(); // "Object constructor" syntax
// // let anotherObjUser = {}; // "Object literal" syntax

// // // ==================
// // // Literals and properties
// // // ------------------

// // //Objects defined by putting some properties into {...} as "key:value" pairs:

// // let user = {
// //   // an object
// //   name: "Jamaica", // by key "name" store value "jamaica"
// //   age: 3400, // by key "age" store value 3400
// // };

// // // a property(key:value pair) has a key(ie,. "name" or "identifier") before the colon ":" and a value to the right of it.
// // //
// // // Object "user" has two properties:
// // // 1) the name "name" and the value "Jamaica"
// // // 2) the name "age" and the value 3400.

// // //---------------
// // //
// // //We can add,remove and read files from it at any time.
// // //
// // //Property values are accessable using dot notation

// // console.log(user.name);
// // console.log(user.age);

// // // value can be of any time
// // // adding new "bool" type property to "user"
// // user.isAdmin = true;

// // console.log(user);

// // // To remove a property we can use the "delete" operator:

// // delete user.age;

// // console.log(user);

// // // IMP: We can add "multi-word" propery names, but THEY MUST BE QUOTED =>

// // let newUser = {
// //   name: "jason",
// //   age: 23,
// //   "likes coding": true, // comma at end: "trailing" or "hanging" comma. Makes it easy to alter properties,all will besame.
// // };

// // console.log(newUser);

// // // ----------------------
// // // SQUARE Brackets
// // // ---------------------

// // // for multiword properties dot access wont work:

// // // Syntax Error
// // // user.line birds = true
// // let key = "like birds"; // -----> KEY
// // user.key = false; // works because we have declared it in Global scope
// // console.log("does key work?:" + user.key);

// // // Instead user SQUARE BRACKETS
// // user["likes birds"] = true; // SET
// // console.log(user);
// // console.log(user["likes birds"]); //GET

// // delete user["likes birds"];
// // console.log(user);

// // // We can also use square brackets
// // // key defined previously
// // user[key] = true;

// // user.age = 30;
// // console.log(user);

// // let userKey = "like birds";
// // //user.userKey = true;	// Works because declared in global
// // console.log(user.userKey); //otherwise , "undefined"

// // // ----------------------
// // // Computed properties
// // // ---------------------

// // // We can use square brackets in an object literal, when creating an object.
// // // That's called "COMPUTED PROPERTIES".

// // let fruit = "apple"; // altertive for taking prompt/reading for now

// // let bag = {
// //   [fruit]: 5, // name of the property is taken from the variable fruit
// // };

// // console.log(bag.apple);

// // // [fruit] - means that the property name should be taken from "fruit".

// // // Similarly, we can write like this:

// // let fruitNext = "apple";
// // let bagNext = {};

// // bag[fruit] = 8;
// // console.log(bag.apple);

// // bagNext = {
// //   [fruit + "Computers"]: 23,
// // };
// // console.log(bagNext.appleComputers);

// // // Squares =>> more powerful
// // // For simple work => use dot
// // // For Complex work => use square brackets []

// // // ------------------
// // // Property value shorthand
// // // ------------------

// // // in real code, we often use existing variables as values for property names.

// // function postUser(name, age) {
// //   return {
// //     name: name,
// //     age: age,
// //     // ... other properties
// //   };
// // }

// // let userNew = postUser("Lilith", 324);
// // console.log(userNew);

// // // Properties have the same name as variables.
// // // its so common that there's a special property value shorthand to make it shorter.

// // // instead of name:name we can just write name, just like this:

// // function postUser_again(name, age) {
// //   return {
// //     name, // same as name:name
// //     age, // same as age:age
// //     powers: "space-time, comprehension, steal",
// //     //...
// //   };
// // }

// // console.log(postUser_again("Aron", 16));

// // // Property names limitations
// // //
// // // as we know, variables can't have a name equal to language-resereved words like "for",'let','return',etc.

// // // IN OBJECTS => THERE IS NO SUCH RESTRICTION
// // let reservedWordObj = {
// //   for: 1,
// //   let: "Hail the Lord",
// //   return: "I have achieved my dreams!",
// // };
// // console.log(reservedWordObj);

// // // No limitations on property names. They can be any strings or symbols(LATER).
// // // Other types are automatically converted to strings.
// // // For example, 0 becomes a string "0" when used as a property key:

// // let obj = {
// //   0: "test",
// // };

// // console.log(obj["0"]); // test
// // console.log(obj[0]); // test

// // //---------------
// // // INTERSTING
// // // --------------

// // let obj1 = {};
// // obj1.__proto__ = 4; // assign number;
// // console.log(obj1); // output: {}
// // console.log(obj1.__proto__); // [OBJECT : null prototype] -> value is an obj, didnt work as intended.

// // // assignment to a primitive 5 is ignored.

// // // --------------------------
// // // Property Existence Test => "in" operator
// // // --------------------------

// // // A notable feature of Objects in JS, compared to other langauges, is that it is possible to access any property.
// // // There will be no error if the property doesnt exist

// // // Reading a non-existing property just returns "undefined". so we can check whether property exists:

// // let propertyTestUser = {
// //   name: "Captian Jack Sparrow",
// //   actor: "Johnny Depp",
// // };

// // console.log(user.noSuchProperty === undefined);

// // // There's a special operator "in" for that.
// // //
// // // Syntax:
// // console.log("key" in propertyTestUser);
// // console.log("name" in propertyTestUser);

// // let objHasActor = "actor";
// // console.log(objHasActor in propertyTestUser);

// // // BUT WHY 'in'? Can't we just compare against "undefined"?
// // // Mostly comaprision with undefined works fine but THERE'S A SPECIAL CASE , WHEN IT FAILS BUT "IN" WORKS PERFECTLY.

// // // WHEN? An object property exist but stores undefined:

// // let objHasUndefinedProperty = {
// //   test: undefined,
// // };

// // console.log(objHasUndefinedProperty.test); // Undefined, so  property doesnt exist?
// // console.log("test" in objHasUndefinedProperty); // true, property exists

// // //---------------------------
// // // The "for..in" loop
// // // --------------------------

// // // To walk over all keys(traverse) of an object, there exists a special form of the loop: for..in.
// // // this is a completely different thing from for(;;) construct

// // // SYNTAX:
// // // for(key in object) {
// // //	// execute body for each key among object properties
// // // }

// // let forInObj = {
// //   name: "Emily",
// //   age: 24,
// //   isAdmin: false,
// // };

// // for (let key_for_obj in forInObj) {
// //   // keys
// //   console.log("Key: " + key_for_obj); // name,age,isAdmin

// //   // values for the keys
// //   console.log("Value:" + forInObj[key_for_obj]); // Emily,24,false
// // }

// // // Ordered like an object
// // //
// // // Are they ordered?
// // // Ans: "ordered in a special fashion": integer properties are sorted, other appear in creation order.

// // let orderCheckObj = {
// //   49: "germany",
// //   41: "Switzerland",
// //   44: "Great Britain",
// //   // ...
// //   1: "USA",
// // };

// // for (let key in orderCheckObj) {
// //   console.log(key);
// // }
// // // NUMBERS ARE SORTED - AS SAID

// // // If keys are non-integer they are listed in created order

// // let orderCheckObj2 = {
// //   name: "Jimmy",
// //   surname: "Jordon",
// // };

// // user.age = 23;

// // for (let properties in orderCheckObj2) {
// //   console.log(properties);
// // }

// // // TO FIX THIS ISSUE:=> we "cheat" by adding "+" sign before each code.

// // let orderCheckObjFix = {
// //   "+49": "germany",
// //   "+41": "Switzerland",
// //   "+44": "Great Britain",
// //   // ...
// //   "+1": "USA",
// // };

// // for (let key in orderCheckObjFix) {
// //   console.log(key);
// // }
// // //==================================================

// // // ---------------------------
// // // Integer proprties
// // //----------------------------

// // // "Integer Property" term here means a string that can be converted to-and-from an integer without a change.
// // //
// // // '49' is an integer property, because when its transformed to an integer no and back, its still same.
// // //
// // // BUT "+49" and "1.2" are not.

// // // Number(...) explicitly converts to a number
// // // Math.trunc is a built-in function that removes the decimal part

// // console.log("\nInteger Properties:");
// // console.log(String(Math.trunc(Number("49"))));
// // console.log(String(Math.trunc(Number("+49"))));
// // console.log(String(Math.trunc(Number("1.4"))));
