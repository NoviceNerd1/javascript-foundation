/*
 
 WeakMap and WeakSet in JS - Detailed Explanation

 Garbage Collection Background:
  - JS keeps values in memory while they're "reachable"
  - When references are removed, objects becomes eligible for garbage collection

 * */


// Regular Object Reference Example
let john = {name: "John"}; // Object is reachable via 'john' reference
john = null;  // Object is now unreachable and will garbage collected
console.log(john);


// Object in Arrays Persist

let johnArray = {name: "John"};
let array = [johnArray];  // Object is now referenced by the array
johnArray = null;  // Object remains in memory becuase array references it

console.log(array);
// array[0] still accessable



// Regular Map keeps objects Alive

let johnMap = {name: "John"};
let map = new Map();
map.set(johnMap,'data');  // Object is now a key in the Map
johnmap = null;  // Object remains in memory because map still references it

// can still access via map.keys()


// WeakMap Introduction

/*
 
 WeakMap differences:
   1) Keys MUST be objects (no primitives).
   2) Doesn't prevent garbage collection of key objects
   3) No iteration or bulk access methods
   4) Limited API: set(), get(), delete(), has().

 */

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj,'valid');  // Works - object as key
//weakMap.set('primitive', 'error'); // Throws error - primitive keys not allowed


// WeakMap Garbage Collection Example
let weakJohn = {name:"John"};
weakMap.set(weakJohn, 'data');
weakJohn = null;  // Object will be garbage collected (if no other references) 

// WeakMap entry will be automatically removed

/*
 
 Why WeakMap Limitation Exist:
  - Garbage collection timing is engine-dependent
  - No way to know exactly when cleanup happens
  - Therefore, size/length and iteration can't be reliable implemented

 * */


// USECASE 1 : Additional Data Storage

/*
 
 Scenario: Store data associated with objects managed elsewhere 

 When the object is no longer needed, the associated data should auto-clean

 */


// Example: Visit count tracking 
let visitsCountMap = new WeakMap();  // Better than Map for this use case

function countUser(user) {
	let count = visitsCountMap.get(user) || 0;
	visitsCountMap.set(user, count+1);
}

let user = {name: "User"};
countUser(user);  // Track visits
user = null;  // When user is no longer needed, visit count is auto-cleaned


// USECASE 2: Caching

/*
 
 Scenario: Cache function results for objects

 when objects are no longer needed, cache should auto-clear

 * */

let cache = new WeakMap();  // Better than Map for caching object-related results

function process(obj) {
	if(!cache.has(obj)) {
		let result = /*expensive computation*/ obj;
		cache.set(obj,result);
	}
	return cache.get(obj);
} 

let cacheObj = {data:"test"};
process(cacheObj);
console.log(cacheObj);
cacheObj = null;  // Cache entry will be automatically cleared
console.log(cacheObj);


// ============================
// WEAK SET

/*
 
 WeakSet Characteristics:
   1) can only store objects (no primitives)
   2) Objects are removed when no other references exit
   3) Limited API: add(), has(), delete()
   4) No size or iteration methods

*/

let visitedSet = new WeakSet();

let visitor1 = {name:"John"};
let visitor2 = {name:"Pete"};

visitedSet.add(visitor1)
	.add(visitor2);


console.log(visitedSet.has(visitor1));
visitor1= null;  // will be automatically removed from visitedSet
console.log(visitedSet.has(visitor1));


// Task Solution

// T1: Store 'unread' flags for messages

let messages = [
	{text:"Hello",from:"John"},
	{text:"How goes?",from:"John"},
	{text:"See you soon", from:"Alice"}
];

let unreadMessages = new WeakSet();  // best solution for unread flags

// Add messages to unread set
unreadMessages.add(messages[0])
	.add(messages[1]);

// check if message is unread
console.log(unreadMessages.has(messages[0]));  // true

// When message is removed from main array, it auto-removes from weakSet


// T2: Store read dates for messages
let messageReadDates = new WeakMap(); // Best solution for storing read dates

/*
 
 Summary:
  - WeakMap:
  - WeakSet:
  - Both automatically clean up when objects are no longer reachable 
  - Ideal for "secondary" data storage that should match object lifetime
  - Not suitable when you need to track all keys/elemenys or know collection size

Key Takeaways:
 
1) WeakMap is ideal for:

-Storing private data associated with objects

-Caching computed values based on objects

-Managing metadata for DOM elements or other objects

-Implementing observer patterns without memory leaks

2) WeakSet is perfect for:

-Tracking which objects have been processed

-Maintaining sets of active resources

-Implementing "seen" or "visited" tracking

3) Both structures automatically clean up when objects are no longer reachable, preventing memory leaks.

4)The main limitations are:

- No iteration over keys/values

- No way to get the size/length

- Keys must be objects (no primitives)

5) These structures shine when you need secondary data that should have the same lifetime as the primary objects they're associated with.

*/










































































































































































