// ITERABLES IN JS

/*
 * Iterables are objects that can be iterated over using for..of loop.
 * They generalize the concept of arrays to any object representing a collection.
 *
 * */ 


// ========================
// BASIC ITERABLE IMEPLEMENTATION

// 1) A Simple range object we want to make iterable

let range = {
	from:1,
	to:5,
};

/*
 * To make an object iterable, it must implement the Symbol.iterator method.
 *
 * This method should return an iterator object with a next() method.
 *
 * */

range[Symbol.iterator] = function() {
	// the iterator object maintains iteration state
	
	return {
		current: this.from,  // tracks current value
		last: this.to,  // tracks end value

		// next() is called on each iteration by for..of

		next() {
			if(this.current <= this.last) {
				// return the current val and increment
				return {done:false, value:this.current++};
			} else {
				// Signal iternation completion
				return {done:true};
			}
		}
	};
};


// Now range works with for..of
for(let num of range) {
	console.log(num);
}

/*
 * Key points:
 * - Symbol.iterator is a special well-known symbol
 * - The method must return an iterator object with next()
 * - next() returns {done, value} objects
 * - done:true ends the iteration
 */


// -----------------------
// Simplified iterable implementation

// we can combine the iterable and iterator roles

let simplifiedRange = {
	from: 1,
	to:5,

	// Symbol.iterator returns the object itself
	[Symbol.iterator]() {
		this.current = this.from;
		return this;
	},

	next() {
		if(this.current <= this.to) {
			return {done: false, value: this.current++};
		} else {
			return {done: true};
		}
	}
};

for(let range of simplifiedRange) {
	console.log(range);
}

/*
 * Tradeoffs:
 *    - Pros: Simpler code
 *    - Cons: can't have multiple simulatneous iterations
 * */


// ---------------------
// Infinite iterators

let infiniteRange = {
	from: 1,

	[Symbol.iterator]() {
		this.current = this.from;
		return this;
	},

	next() {
		return {done:false, value: this.current++};
	}
};


// Must use break to stop infinte iterations

for(let num of infiniteRange) {
	if(num > 10) break;
	console.log(num);
}



// ------------------------
// String Iteration

// strings are built-in iterables 

for(let char of "test") {
	console.log(char);
}


// Works correctly with unicode surrogate pairs
let str = '𝒳😂';
for(let element of str) {
	console.log(element);
}


// Explicit iterator usage

let explicitIterator= {
	from:1,
	to: 3,

	[Symbol.iterator]() {
		this.current= this.from;
		return this;
	},

	next() {
		if(this.current <= this.to) {
			return {done:false,value: this.current++};
		}
		else {
			return {done:true};
		}
	}
};

// Manual iteration
let iterator = explicitIterator[Symbol.iterator]();
while(true) {
	let result = iterator.next();
	if(result.done) break;
	console.log(result.value);
}

/*
 * This gives more control over the iteration process
 * (e.g., pause/resume iteration)
 */


// ------------------------
// Iterables VS Array-likes

/*
 * Iterable: Implements Symbol.iterator method
 * Array-like: Has indexed properties and length
 * */

// Array-like but not iterable
let arrayLike = {
	0:"Hello",
	1:"World",
	length:2
};

// Error: Not iterable
// for(let item of arrayLike) {}


// ---------------------------
// Array.from

/*
 * Array.from() converts iterables or array-likes to real arrays
 *
 * */ 

// Convert array-like to array
let arrFromArrayLike = Array.from(arrayLike);
console.log(arrFromArrayLike.pop());


// convert iterable to array
let arrFromIterable = Array.from(range);
console.log(arrFromIterable);


// With mapping function
let squared = Array.from(range, num=> num*num);
console.log(squared);

// properly handles unicode surrogate pairs
let unicodeStr = '𝒳😂';
let chars= Array.from(unicodeStr);
console.log(chars);
console.log(chars.length);
console.log(chars[0]);
console.log(chars[1]);


/*
 *	SUMMARY
 *    ------------
 *
 * Key Concepts:
 *  = Iterables implement Symbol.iterator method
 *  = Symbols.iterator returns an iterator object
 *  = Iterator must have next() returns {done, value}
 *  = for..of uses this protocol automatically
 *  = Strings and arrays are built-in iterables
 *  = Array.from converts iterables/array-likes to arrays
 *  = Array-like has indexes and length but may not be iterables
 *  = Iterable may not be array-like
 *
 * */


// 1) Custom Fibonacci Sequence Iterables

/*
 * Creates an iterable that generates Fibonacci numbers
 * */

console.log("\nFibonacci Serires\n")

const fibonacci = {
	[Symbol.iterator]() {
		let previous=0, current =1;
		return {
			next(){
				// Store the current value before updating
				const value = current;

				// Update values for next iteration
				[previous, current] = [current, previous + current];
				
				// Never done - infinite sequence
				return {done:false, value};
			}
		};
	}
};


// Usage - must break manually to avoid infinite loop
let count = 0;
for(const num of fibonacci) {
	if(count++ >= 10) break;
	console.log(num);
}


/*
 * Key Points:
 * - Maintains state between iterations (previous and current)
 * - Returns infinite sequence (must control with break)
 * - Uses array destructuring for value swapping
 */



// 2) Alphabet character Iterable

/*
 * Generates letters from A to Z
 * */


const alphabet = {
	[Symbol.iterator]() {
		let code = 'A'.charCodeAt(0);
		return {
			next() {
				if(code <= 'Z'.charCodeAt(0)){
					return {
						done:false,
						value: String.fromCharCode(code++)
					};
				}
				return {done:true};
			}
		};
	}
};

// Usage
for(const letter of alphabet) {
	console.log(letter);
}


// convert to array
const letters = [...alphabet];
console.log(letters)



// 3) REturn and Throw in iterators (Advanced)

/*
 *  Optional Iterator Methods:
 *    - return() : called if iteration stops prematurely
 *    - throw() : used with generators for error handling
 * */

const advancedIterator = {
	[Symbol.iterator]() {
		let count=0;

		return {
			next() {
				if(count<2) {
					return {value: count++, done:false};
				}
				return {done:true};
			},
			return () {
				console.log('Cleanup!');
				return {done:true};
			}
		};
	}
};


// example of return() begin called

for(const num of advancedIterator) {
	if(num===1 ) break;
}



// What else you should know
// 1) Generators as Iterable Factories

/*
 * Generator functions automatically create iterables
 * They provide syntactic sugar for creating iterators
 * */

function* naturalNumbers() {
	let n=0;
	while(true){
		yield n++;
	}
}

// Usage
const numbers = naturalNumbers();
console.log(numbers.next().value);
console.log(numbers.next().value);

/*
 * KEY ADVANTAGES:
 *   - Automatic iterator implementtation
 *   - Local state preservation
 *   - Cleaner syntax for complex iterations
 * */


// 2) Iterable Consumption APIs

/*
 * Many JS APIs consume iterables:
 * */

// 1- Array.from()
const set = new Set([1,2,3]);
const arr = Array.from(set);
console.log(arr)

// 2- Spread operator
combined = [...'hello',...['','world']];
console.log(combined)


// 3- Destructuring
const [first,second] = new Set([1,2,3])

// 4- Promise.all() and friends
Promise.all(asyncIterable);

























































































