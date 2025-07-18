/*
 *  ARRAYS IN JS
 *
 *   - Arrays are ordered collections for storing lists of items(users,goods,etc.)
 *   - Unlike objects, array maintain order and provide methods to manage elements
 *
 * */


// ===================
// Declaration

// Two syntaxes for cear
let arr1 = new Array();
let arr2 = [];

// Array with initial elemtns
let fruits = ["Apple", "Orange", "Plum"];

console.log(arr1, arr2, fruits);

// ======================
// ACCESSING ELEMENTS

// Arrays are zero-indexed
console.log(fruits[0]);
console.log(fruits[1]);

// Modifying Elements
fruits[2]="Pear";  // Changes "Plum" to "Pear"
fruits[3]= 'Mango';  // Adds new elements at index 3

// Array length property 
console.log(fruits.length);


// Arrays can store any type

let mixedArray = [
	'Apple',
	{name:"John"},
	true,
	function() {console.log("HIIII!!!")}
];

console.log(mixedArray[1].name);

 mixedArray[3]();


// TRAILING COMMA

let trailingCommaArray = [
"Apple",
"Orange",  // Trailing comma makes adding/removing lines easier
];

// Accessing last element

// Old way (using length)
console.log(fruits[fruits.length -1]);

// Modern way (using at() )
console.log(fruits.at(-1));  // "Lemon" (negative index counts from end)

console.log(fruits[-4]); // undefined (negative index doesnt work in "[]")

// Queue and stack operation

/*
 * Arrays can function as:
 *   - Queue(FIFO) : push/shift
 *   - Stack(LIFO) : push/pop
 *   - Dequeue: Supports both ends
 *
 * */

// Working with END of array:
console.log(fruits.pop());  // removes and returns "Lemon"
fruits.push("Grape");  // Adds "Grape" to end
console.log(fruits);


// Working with BEGINNING of array:

console.log(fruits);
console.log(fruits.shift());  // REMOEVES first element and returns it "Apple"
console.log(fruits);
fruits.unshift("Papaya");
console.log(fruits)

// Multiple elements at one
fruits.push("Kiwi","Berry")
console.log(fruits)
fruits.unshift("Pineapple","Banana")
console.log(fruits)


// INTERNALS & PERFORMANCE

/*
 * Arrays are special objects:
 *   - Numeric Keys (indexes)
 *   - Length property
 *   - Optimized for ordered data
 *
 * Performance:
 *   - push/pop are FAST (work with END)
 *   - shift/unshift are SLOW()
 * */


// Example of array as object (not recomended)
let badArray = [];
badArray[999]=5;  // creates sparse array
badArray.age = 23;  // adds non-numeric property (breaks optimizations)
console.log(badArray);


// ITERATING OVER ARRAYS


// 1) classic for loop (fastest, most control)

for(let i=0; i<fruits.length ; i++) {
	console.log(fruits[i]);
}

// 2) for...of loop (modern , simple)
for(let fruit of fruits) {
	console.log(fruit);
}

// 3) for...in loop (AVOID - for objects, not arrays)

console.log("\nfor..in loop\n")
for(let key in fruits) {
	console.log(fruits[key]);  // may include non-index properties
}


// Length property behaviour

let sparse = [];
sparse[100] = "test";
console.log(sparse.length)


// Length is writable - can truncate array

let nums = [1,2,3,4,5,6];
console.log(nums);
nums.length = 2;  // truncates(trims) to [1,2]
console.log(nums);
nums.length = 5;  // No recovery - new elements undefined
console.log(nums)

// Quict way to empty array:
nums.length = 0;
console.log(nums);



// ARRAY CREATION PITFALLS

// Using new Array with single number creates empty array of that length

let emptyArray = new Array(5);  // creates elements with length 5, no elements
console.log(emptyArray);
console.log(emptyArray[0]);  // undefined


// MULTI-DIMENSIONAL ARRAYS

let matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
];
console.log(matrix);

console.log(matrix[1][1]);



// ARRAY TO STRING CONVERSION

let arr = [1,2,3];
console.log(arr);
console.log(String(arr));


// Interesting behaviours with "+" operator:
console.log([] + 1); // "1" ([] becomes "")
console.log([1] + 1);  // "11"
console.log(typeof([1] + 1));
console.log([1,2]+ 1);  // "1,21"
console.log(typeof([1,2] + 1));


// ARRAY COMPARISIONs

// Arrays are objects, so == compare references not contents

console.log(typeof [])
console.log([] == []);  // false (different objects)
console.log([0] == [0]);


// Surprising results with primitives
console.log(0 == []);  // true ([] becomes "" which becomes 0)
console.log('0' == []);  // false ([] becomes "" != "0")


// Proper comparision requires item-by-item check

// ================== SUMMARY ==================
/* 
Key points:
- Use [] for array creation (not new Array)
- Arrays are ordered, optimized for numeric indexes
- Use push/pop for stack, push/shift for queue
- for..of for iteration (avoid for..in)
- length is writable and auto-updating
- Never compare arrays with ==
- Arrays can be multidimensional
- toString converts to comma-separated string
*/



// Basic array with differnt syntaxes
let emptyArr = [];
fruits = ["Apple","Orange", "Banana"];  // pre-filled array
let numbers = new Array(1,2,3);  // Using array constructor (rare)
let singleNumber = new Array(5);  // Creates array with length 5 (no items)

console.log(fruits[0]);  // "Apple" - zero-based indexing
console.log(fruits.length);  // 3 - no of elements

// Modifying arrays
fruits[1] = "Pear";
fruits[3] = "Mango";
fruits[10] = "Kiwi";

console.log(fruits);
console.log(fruits.length);  // 11


// Working with beginning/end

// Stack operations (LIFO - Last in first out)
let stack = [];
stack.push("first");
stack.push("second");
console.log(stack);
console.log(stack.pop());  // remove from the end
console.log(stack);

// Queue operations (FIFO - first in first out)
let queue = ["A","B","C"];
console.log(queue.shift());  // "A" - remove from 
queue.unshift("Z");
console.log(queue);

// Performance demonstration 
let bigArray = new Array(10000).fill(0);

console.time("push/pop");
bigArray.push(1); bigArray.pop();
console.timeEnd("push/pop");


console.time("shift/unshift");
bigArray.shift(); bigArray.unshift(1);
console.timeEnd("shift/unshift");

// push/pop -> 0.014ms ; shift/unshift -> 0.005 ms

// Array Iteration Methods

// classic for loop (full control)

let colors = ["red","green", "Blue"];
for(let i=0;i<colors.length; i++) {
	console.log(`FOR -> Color ${i} : ${colors[i]}`);
}

// for...of loop (values only)
for(let color of colors) {
	console.log(`FOR OF -> Color: ${color}`);
}

// for...in (AVOID for ARRAYS - meant for objects)
for(let index in colors) {
	console.log(`FOR IN -> Index ${index}: ${colors[index]}`);
}



// forEach method (modern approach)
colors.forEach((color, index) => {
	console.log(`ForEach: ${index} - ${color}`);
});



// MULTIDIMENSIONAL ARRAYS

// 2D array

let matrix1 = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
];

console.log(matrix);


// 3D array

let cube = [
	[
		[1,2],
		[3,4],
	],
	[
		[5,6],
		[7,8],
	],
];

console.log(cube);


// ARRAY CONVERSION AND COMPARISION

// toString behaviour
let arr3 = [1,2,3];
console.log(arr.toString());  // "1,2,3"
console.log(String(arr));   // "1,2,3"
console.log(arr+"");  // "1,2,3" (implicit conversion)

// intersting cases
console.log([]+1); // "1" ([]-> "" -> "1")
console.log([1,2]+[3,4]);  // "1,23,4" (both converted to string)

// comparison gotchas 
console.log([] == []);  // false (different objects)
console.log([1] == [1]);  // false
console.log([] == 0);  // true ([] -> "" -> 0)
console.log([1] == 1);  // true ([1] -> "1" -> 1)

// proper comparision technique
function arraysEqual(a,b) {
	if(a.length !== b.length) return false;

	for(let i=0; i<a.length ; i++) {
		if(a[i] !== b[i]) return false;
	}

	return true;
}

console.log("Are equal: ",arraysEqual([1,2],[1,2]));  // true


// 6 Special cases and gotchas

// length manipulation 
let dynamicArr = [1,2,3,4,5,6];
dynamicArr.length = 3;  // truncates to [1,2,3]
dynamicArr.length = 5;  // No recovery , new element undefined
console.log(dynamicArr);


// creating holes
let sparseArr = [];
sparseArr[0] = "a";
sparseArr[100] = "b";
console.log(sparseArr.length);  // 101
console.log(sparseArr[50]);  // undefiend


// non-numeric properties (breaks optimizations)
let weirdArr = [1,2,3];
weirdArr.name = "My Array";
console.log(weirdArr.name);  // "My Array"
console.log(weirdArr.length);  // 3 (non-numeric props ignored)


// PRACTICAL EXAMPLES

// Shopping cart

let cart = [];

function addToCart(item, price) {
	cart.push({item, price });
};

function getTotal() {
	
	return cart.reduce((sum, product) => sum + product.price, 0);

}

addToCart("Book",200);
addToCart("Phone", 5000);

console.log(getTotal());

// Matrix operation

function transpose(matrix) {
	
	return matrix[0].map((col,i)=> matrix.map(row=> row[i]));

};

let original = [
	[1,2],
	[3,4],
	[5,6],
];

console.log(original);
console.log(transpose(original));


// MODERN ARRAY METHODS

// at() method (modern access)
let letters = ['a', 'b', 'c','d'];
console.log(letters.at(-1)); // "d" (last element)
console.log(letters.at(-2));  // "c" (second last element)
console.log(letters[-2]);  // undefined- doesn't accept neg number


// Array.from() for array-like objects
let arrayLike = {
	0: "Hello",
	1: "World",
	length: 2,
};

console.log(arrayLike)
let realArray = Array.from(arrayLike);
console.log(realArray);
console.log(realArray.pop());



// ============== SUMMARY ==============
/*
Key Takeaways:
1. Arrays are ordered collections with numeric indexes
2. Use push/pop for stack, push/shift for queue
3. Prefer for...of or forEach over for...in
4. Length property is both readable and writable
5. Never compare arrays with == (use deep comparison)
6. Modern methods like at() provide cleaner syntax
7. Arrays can be multidimensional for complex data
8. Avoid non-numeric properties to maintain optimizations
*/




//=============================================================

console.log("\nSOME OTHER IMPORTANT JS ARRAY\n")

// ------------------------
// 1) Array Destructuring

// Basic destructuring
const [first,second] = ['Alice','Bob','Jolly'];
console.log(first,second)
// Ignored Jolly



// Skipping items
const [,, third] = ['A','B','C'];
console.log(third);


// Rest pattern
const [head, ...tail] = [1,2,3,4,5];
console.log(tail);  // [2,3,4,5]

// swapping variables
let a = 1, b=2;
[a,b] = [b,a];
console.log(a,b);

// ------------------------
// 2) spread operator

// combining arrays
const arr4 = [1,2];
const arr5 = [3,4];
const combined= [...arr4, ...arr5];
console.log(combined);


// Copying arrays (shallow copy)
original = [1,2,3];
const copy = [...original];


// Function arguments
function sum(a,b,c) {return a+b+c;}

const nums1 = [1,2,3];
console.log(sum(...nums1));  // 6



// 3) Important Array Methods

// map() - transform each element
const squares = [1,2,3].map(x => x*x);
console.log(squares);  [1,4,9]

// filter() - select elements
const evens = [1,2,3,4].filter(x=> x%2 ===0);
console.log(evens);  // [2,4]

// reduce(accumulator,value) - accumulate values
const sum1 = [1,2,3].reduce((acc,val) => acc+ val, 0);
console.log(sum1);

// find() - find first match
const user = [{id:1},{id:2}];
console.log(user.find(u=> u.id === 2));  // {id:2};

// some()/every() - test conditions
console.log([1,2,3].some(x => x>2));  // true
console.log([1,2,3].every(x=> x>2));  // false


// flat() - flatten nested arrays
console.log([1,[2,[3]]].flat(2))


// Array.isArray() - type check

console.log(Array.isArray([]));


// 4) ARRAY BUFFER AND TYPED ARRAYS

const buffer = new ArrayBuffer(16);  // 16 bytes
const int32View = new Int32Array(buffer);
console.log(buffer);
console.log(int32View);
int32View[0] = 42;
console.log(int32View[0]);  // 42


// 5) Array-like objects conversion

// convert array-like objects (nodeList,arguments,etc. )

function example() {
	console.log(Array.from(arguments));
}
example(1,2,3);

//const divArray = [...{1:'a',2:"b",3:"c",4:"d"}];
//TypeError: {(intermediate value)(intermediate value)(intermediate value)(intermediate value)} is not iterable 
const divArray = [...[1,2,3,4,5]];
console.log(divArray);




// 6) IMMUTABLE ARRAY PATTERNS

// Adding item without mutation
const arr6 = [1,2];
const newArr = [...arr6, 3];
console.log(newArr);

// Removing item without mutation
const removed = arr.filter(x => x!==2);  // [1]
console.log(removed);

// Updating item without mutation
const updated = arr.map(x=> x===1 ? 99 : x);
console.log(updated);


// 7) ARRAY PERFORMANCE TIPS
// Pre-allocate large arrays
const  bigArray2 = new Array(1000).fill(0);
console.log(bigArray2);

// Use typed arrays for numeric operations
const floatArray = new Float64Array(1000);
console.log(floatArray);


// Batch operations are faster than loops
const data = Array(1000).fill().map(()=>Math.random());
console.log(data);

// Bad : for (let i=0; i< data.length ; i++) {  /* PROCESS */}
// Good : data.forEach(processItems);


// 8) ARRAY GROUPING

const inventory = [
	{name:"asparagus", type: "vegetables"},
	{name:"banana", type:"fruit"},
	{name:"goat", type:"meat"},
];

// Group by type
const res = Object.groupBy(inventory, ({type}) => type);
console.log(res)




// 9) ARRAY COPYING METHODS 

const newArr1 = [1,2,3];

// Shallow Copies
const copy1 = [...newArr1];
const copy2 = newArr1.slice();
const copy3 = Array.from(newArr1);

console.log(copy3)

// Deep Copying (for nested arrays/ objects)
const deepCopy = JSON.parse(JSON.stringify(newArr1));
console.log(deepCopy)


// 10) ARRAY SEARCH IMPROVEMENTS

// findLast() and findLastIndex() (ES2023)
const newNum = [1,2,3,2,1];
console.log(newNum.findLast(x=> x===2));
console.log(newNum.findLastIndex(x=> x===2));


// includes() VS indexOf()
console.log([NaN].includes(NaN));
console.log([NaN].indexOf(NaN));












