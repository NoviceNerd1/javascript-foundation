// MAP & SET - JS

/*
 * Why MAP and SET?
 *
 *   - Objects: Store keyed collections (key converted to strings)
 *   - Arrays: Store ordered collections
 *   - Limitations: Need more flexible data structure => MAP & SET
 * */


//--------------------
// MAP Data Structure

/*
 * Map Characteristics:
 *   - Collection of keyed data items
 *   - Main difference from object: Allows keys of ANY type
 *   - Preserves insertion order (unlike plain objects)
 * */

// creating a MAP
const map = new Map();

/*
 * MAP Methods:
 *  - set(key,value) - store value by key, returns map(enables chaining)
 *  - get(key) - Retrieves value by key, returns undefined if not found
 *  - has(key) - Checks if key exists (boolean)
 *  - delete(key) - Removes key-value pair, returns true if existed
 *  clear() - Removes all elements
 *  size - property (not method) returns element count
 * */


// Example usage:

map.set('1','string key'); 
map.set(1,'number key');
map.set(true, 'boolean key');
map.set({id:1},'object key');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);


/*
 * Important notes about MAP:
 *  - Keys are not converted to strings (unlike objects)
 *  - map[key] is NOT the proper way to use MAP (treats it as plain Object)
 *  - NaN can be used as a key (considered equal to NaN)
 * */

// Chaining example:

map.set('a',1)
	.set('b',2)
	.set('c',3);

//console.log(map)


/*
 * Objects as keys:
 *   - One of Map's most important features
 *   - With plain Objects, object keys get stringified to '[object Object]'
 *   
 * */


const user1 = {name:'John'};
const user2 = {name:"Jane"};
map.set(user1, 'user data 1')
	.set(user2, 'user data 2');

console.log(map)


/*
 * Iteration Methods:
 *   - keys() : returns iterable of keys 
 *   - values() : Returns iterable of values
 *   - entries() : Returns iterable of [key,value] pairs (default  for for..of)
 * */ 


for(let key of map.keys()){
	console.log("Keys: ",key);
}

for(let value of map.values()) {
	console.log("Values: ",value);
}

console.log('\nFor..of loop: \n')
for(let [key,value] of map) {
	console.log(`${key}: ${value}`);
}


// ForEach method
console.log('\nforEach loop: \n');
map.forEach((key,value)=>{
	console.log(`${key}: ${value}`)
});


/*
 * Conversion Helpers:
 *   - Object.entries(obj): Converts object to array of [key,value] pairs
 *   - Object.fromEntries(iterable): converts back to plain object
 * */


// Creating MAP from objects
const obj = {name:"John", age:30};
const objMap = new Map(Object.entries(obj));
console.log(objMap);


//---------------------
// SET Data Structure

/*
 * SET characteristics:
 *  - Collection of unique values (no keys)
 *  - Each values may occur only once
 *  - Maintains insertion order
 * */


// Creating a SET
const set = new Set();


/*
 * SET Methods:
 *  - add(value): adds value(ignores if exists), returns set
 *  - delete(value): removes value, returns true if existed
 *  - has(value): checks if value exists
 *  - clear(): removes all values
 *  - size: Property retruns eleents count
 * */


// Example usages:

const users = [
	{name:"John"},
	{name:"Pete"},
	{name:"Mary"},
	{name:"John"},  // duplicate
];

const userSet = new Set(users);
console.log(userSet.size);


/*
 * Why use SET over ARRAY?
 *  - Better performance for uniqueness checks
 *  - Simpler API for managing unique collections
 * */

/*
 * Iteration Methods:
 *  - Same as Map: keys(), values(), entries()
 *  - for..of works directly on Set
 *  - forEach has value, valueAgain parameters (for Map compatibility)
 * */


const fruitSet = new Set(['apple','orange','banana']);

// for..of iteration
fruitSet.forEach((value,valueAgain)=>{
	console.log("value: ",value,"value again: ",valueAgain);
});


/*
 * Set Vs Array for uniqueness:
 *  - With Array: Need to manually check duplicates (eh, usinh find)
 *  - With Set: Built-in uniqueness gurantee
 * */ 


// ------------------
// Summary Table

/*
 * Map: 
 *  - Any keys, including objects
 *  - Maintains insertion order
 *  - size property
 *  - Better methods for key-value management
 *
 *
 * Set:
 *  - Unique value storage
 *  - Simple membership testing
 *  - Efficient deduplication
 *  - Maintains insertion order
 *
 * Both:
 *  - Iterable in insertion order
 *  - forEach available
 *  - Conversion to/from arrays
 * */


/*
 * When to Use:
 *  - Map: When need complex keys or ordered key-value pairs
 *  - Set: When need to ensure uniqueness or fast membership test
 * */



// =========================================

console.clear();
// 1) MAP Examples

// -Using Different key types

const newMap = new Map();

// diiferent key types
newMap.set(1,'Number Key');
newMap.set('1', 'string key');
newMap.set(true, 'boolean key');
newMap.set({id:1},'object key');
newMap.set([1,2,3],'array key');
newMap.set(NaN,'NaN key');

console.log(newMap.get(1))
console.log(newMap.get('1'))
console.log(newMap.get(NaN))
console.log(newMap.get({id:1})); // undefiend (deiiferent obj ref)

// check if a key exist
console.log(newMap.has(true));
console.log(newMap.delete(true)); // true (if removed successfullu)
console.log(map.size);


// Chaining set() calls - returns the Map utself, allowing method chaining

const userPreference = new Map()
	.set('theme','dark')
	.set('fontSize',14)
	.set('notification,true');

console.log(userPreference.get('theme'));
console.log(userPreference.size);


// Using Objects as Keys

const user3 = {id:1, name:'Alice'};
const user4 = {id:2, name:"BoB"};

const userData= new Map()
	.set(user3, {role:'Admin'})
	.set(user4, {role:"User"});

console.log(userData.get(user3));
console.log(userData.get({id:1})); // undefined (different reference)


/*
 
 Explanation:

Objects can be keys, but they must be the same reference to retrieve values.

A new object { id: 1 } is not the same as user1.

  */

// Converting Object -> Map -> Object

const product= {
	name:"Laptop",
	price:999,
	inStock:true,
};

// convert Object->Map
const productMap = new Map(Object.entries(product));

// Modify Map
productMap.set('discount',0.1);
console.log(productMap);

// Convert Map-> Object 
const updatedProduct = Object.fromEntries(productMap);

console.log(updatedProduct);


/*
 Explanation:

Object.entries(obj) → Converts object to [key, value] pairs.

Object.fromEntries(map) → Converts back to an object.

 * */


// ------------------
// SET EXAMPLES


// - Removing duplicates from an array
const number = [1,2,4,4,5,2,4,5];
const uniqueNumber = [...new Set(number)];

console.log(uniqueNumber);


/*
 
 Explanation:

Set automatically removes duplicates.

Spread operator (...) converts Set back to an array.

 * */


// - Tracking unique visitors

const visitors = new Set();

const user5={id:1, name:"Alice"};
const user6= {id:2,name:"Bob"};
const user7 = {id:3, name:"Alice"};

visitors.add(user5);
visitors.add(user6);
visitors.add(user7);

console.log(visitors);
console.log(visitors.size);


/*
 
 Explanation:

Set checks for reference equality, not deep equality.

user3 is a duplicate of user1 (same reference).


 * */



// - Case-insensitivity unique words
const words = ['Apple','apple','Banana','banana','Apple'];
const uniqueWords = new Set(words.map(word=> word.toLowerCase()));

console.log(uniqueWords);


/*
 
 Explanation:

Convert all words to lowercase before adding to Set to ensure case-insensitive uniqueness.

 * */


// - Iterating over Set

const colors = new Set(['red','green','blue']);

// for..of loop
for(let color of colors) {
	console.log(color);
}

// forEach (value, valueAgain,set)
colors.forEach((value,_)=>{
	console.log(value,_)
})


/*
 
 Explanation:

Set is iterable, so for...of works.

forEach has (value, valueAgain) for consistency with Map.

 * */


// - Map Initialization shortcuts

const prices = new Map([
	['apple',1.4],
	['banana',0.8],
	['orange',2.2],
]);

// Initialize from another map
const discountedPrices = new Map(prices.entries());

console.log(discountedPrices);


// Set initialization from strings

// creates a set of unique characters
const uniqueLetter = new Set('helloooo');
console.log([...uniqueLetter]);



// - WeakMap and WeakSet

/*
 
 Special variants that:

Only accept objects as keys (WeakMap) or values (WeakSet)

Don't prevent garbage collection of their elements

Don't have iteration methods or size property

 * */


const weakMap = new WeakMap();
const objKey = {};
weakMap.set(objKey,'secret Data');
console.log(weakMap)

// When objKey is no longer referenced, the entry can be garbage collected




/*
 1. Performance Characteristics
Map vs Object:

Map has better performance in scenarios with frequent additions/removals

Map maintains insertion order (Object only does since ES6)

Map's size is O(1) (Object.keys().length is O(n))

Set vs Array:

Set's has() is O(1) vs Array's includes() which is O(n)

Set maintains uniqueness automatically

*/


// 2) Custom equality in Sets 


class CustomEqualSet {
	constructor() {
		this.map= new Map();
		this[Symbol.iterator] = this.values.bind(this);
	}

	add(value) {
		const key = JSON.stringify(value);
		this.map.set(key,value);
		return this;
	}

	has(value) {
		return this.map.has(JSON.stringify(value));
	}

	delete(value) {
		return this.map.delete(JSON.stringify(value));
	}

	*values() {
		yield this.map.values();
	}

	get size() {
		return this.map.size;
	}
}

const set1 = new CustomEqualSet();
set1.add({a:1});
console.log(set1.has({a:1}));  // true (deep equality)
console.log([...set1])


// Map as a Cache

function memoize(fn) {
	const cache = new Map();
	return (...args)=>{
		const key = JSON.stringify(args);
		if(cache.has(key)) return cache.get(key);
		const result = fn(...args);
		cache.set(key,result);
		return result;
	};
}


const factorial = memoize(n=> n <= 1? 1: n* factorial(n-1));
console.log(factorial(4));


// 4- Bidirectional Maps

class BiMap {
	constructor() {
		this.forward = new Map();
		this.reverse = new Map();
	}

	set(key,value) {
		this.forward.set(key,value);
		this.reverse.set(value,key);
		return this;
	}

	get(key) { return this.forward.get(key);}
	getKey(value) { return this.reverse.get(value);}
	has(key) { return this.forward.has(key);}
	hasValue(value) { return this.reverse.has(value);}
	delete(key) {
		if(!this.forward.has(key)) return false;
		const value = this.forward.get(key);
		this.forward.delete(key);
		this.forward.delete(value);
		return true;
	}
}

const biMap = new BiMap();
biMap.set('USA','Washington DC');
console.log(biMap.get('USA'));
console.log(biMap.getKey('Washington DC'));


// 5- Set Operations (Union,Intersection, Difference)

class SetOperations {
	static union(setA,setB){
		return new Set([...setA],[...setB]);
	}

	static intersection(setA, setB) {
		return new Set([...setA].filter(x=> setB.has(x)));
	}

	static difference(setA, setB) {
		return new Set([...setA].filter(x=>!setB.has(x)));
	}

	static symmetricDifference(setA, setB) {
		return new Set([...this.difference(setA,setB),...this.difference(setB,setA)]);
	}

	static isSubset(setA,setB) {
		return [...setA].every(x=> setB.has(x));
	}
}

const setA = new Set([1,2,3]);
const setB = new Set([2,3,4]);
console.log([...SetOperations.union(setA,setB)]);
console.log(SetOperations.symmetricDifference(setA,setB));



// 6- LRU Cache Implementation with MAP

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = new Map();
	}

	get(key) {
		if(!this.cache.has(key)) return -1;
		const value = this.cache.get(key);
		this.cache.delete(key);
		this.cache.set(key,value);
		return value;
	}

	put(key,value) {
		if(this.cache.has(key)) this.cache.delete(key);
		this.cache.set(key,value);
		if(this.cache.size>this.capacity) {
			this.cache.delete(this.cache.keys().next().value);
		}
	}
}


const cache = new LRUCache(2);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));  // 1
cache.put(3,3);  // evicts key 2
console.log(cache.get(2)); // -1 
console.log(cache);  


// 7) Observable Map Pattern

class ObservableMap extends Map {
	constructor() {
		super();
		this.listeners = new Set();
	}

	subscribe(callback) {
		this.listeners.add(callback);
		return () => this.listeners.delete(callback);
	}

	set(key,value) {
		super.set(key,value);
		this.listeners.forEach(fn => fn('set',key, value));
		return this;
	}

	delete(key) {
		const result = super.delete(key);
		if(result) this.listeners.forEach(fn=>fn('delete',key));
		return result;
	}
}


const map1 = new ObservableMap();
const unsubscribe = map1.subscribe((event,key,value)=>{
	console.log(`Map1 ${event}: ${key} => ${value}`);
});
map1.set('a',1);
//map1.delete('a');
console.log(map1);
map1.delete('a');
console.log(map1);



























































































































































































































