// ARRAY METHODS EXAMPLES WITH EXPLANATION


// ADD/REMOVE Items

// 1) push() - Add to end
let fruits = ['apple','banana'];
fruits.push('orange','pear');
console.log(fruits);
// Explanation: add one or more elements at end of array

// 2) pop() - remove from end
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
// Explanation: Removes and returns the last element


// 3) unsift() - add to beginning
fruits.unshift('Kiwi','mango');
console.log(fruits);
// Explnation adds one or more elements at beginning

// 4) shift() - remove from beginning
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);
// Explnation: removes and returns the first element

// 5) splice() - advanced add/remove
// remove 1 element at index 2
let removed = fruits.splice(2,1); // splice(index,no_of_ele)
console.log(removed);
console.log(fruits);

// Replace 1 elementnat index 1 with 2 new elements
fruits.splice(1,1,'strawberry','blueberry');
console.log(fruits);

// Insert without removing (deleteCount=0)
fruits.splice(1,0,'raspberry');
console.log(fruits);


// EXTRACT/COPY

// 6) slice() - copy a portion of array

let citrus = fruits.slice(3,5);  // index 3 to 4 (5 not included)
console.log(citrus);

let copy = fruits.slice();  // full copy
console.log(copy)



// COMBINE ARRAYS

// 7) concat() -- combine arrays
let berries = ['strawberry','blueberry'];
let tropical = ['mango','pineapple'];
let fruitSalad = berries.concat(tropical,'kiwi');
console.log(fruitSalad);


// ITERATION

// 8) forEach() - iterate with callback
fruitSalad.forEach((fruit,index)=>{
	console.log(`${index+1}. ${fruit}`);
});


// SEARCHING

// 9) indexOf/includes - simple search
console.log(fruitSalad.indexOf('mango'));
console.log(fruitSalad.includes('kiwi'));


// 10) find/findIndex  - complex search
let inventory = [
	{name:"apples",quantity:2},
	{name:"bananas", quantity:0},
	{name:"cherries",quanitity:5},
];

let result = inventory.find(item => item.quantity > 0);
console.log(result);

let resultIndex = inventory.findIndex(item => item.name === 'cherries');
console.log(resultIndex);


// 11) filter() - Multiple matches
let inStock = inventory.filter(item=> item.quantity > 0);
console.log(inStock);



// TRANSFORMATION

// 12) map() - transform elements

let numbers = [1,2,3];
let squares = numbers.map(num=> num*num);
console.log(squares);


// 13) sort() - custom sorting - (By default converts to String and sorts lexicographically)
let scores = [98,45,24,86,12];
scores.sort((a,b)=> a-b); // Numeric ascending (TimSort) 
console.log(scores);

let names = ['Zoe','Adam','Maya'];
names.sort(); // sort Alphabetically
console.log(names);

// 14) reverse() - reverse order
scores.reverse();
console.log(scores);



// STRING CONVERSION

// 15) Split() - string to array
let data = 'apple,orange,banana';
let fruitArray = data.split(',');
console.log(fruitArray);


// 16) join() - array to string

let fruitsString = fruitArray.join('-');
console.log(fruitsString);



// AGGREGATION


// 17) reduce() - accumulate values

let cart = [
	{item: 'Shirt', price:25},
	{item:'Jeans',price:50},
	{item: 'Socks', price:5},
]

let totalPrice = cart.reduce((sum,product)=>sum+ product.price, 0);
console.log(totalPrice);


// complex reduce example - group by
let products = [
	{category: 'fruit', name:"apple" },
	{category: 'vegetable', name: 'carrot'},
	{category: 'fruit', name: 'banana'},
];

let grouped = products.reduce((acc, product)=>{
	if(!acc[product.category]){
		acc[product.category] = [];
	}

	acc[product.category].push(product.name);
	return acc;

}, {})

console.log(grouped);



// ADVANCED METHODS


// 18) some()/every() - test conditions

let hasExpensiveItems = cart.some(items => items.price > 40);
console.log(hasExpensiveItems);


let allExpensive = cart.every(item => item.price> 20);
console.log(allExpensive);


// 19) flat() - flattens nested arrays

let nested = [1,[2,3,],[4,[5]]];
let flat = nested.flat(4);  // is (1) by default
console.log(flat); 


// 20) flatMap() - Map then flatten

let phrases = ['hello world', 'good morning'];
let words = phrases.flatMap(phrase=> phrase.split(' '));
console.log(words)



// UTILITY METHODS


// 21) fill() -  Fill arrays with value

let emptyArray= new Array(5);
emptyArray.fill(0);
console.log(emptyArray);


// Partial fill
let partial = [1,2,3,4,5];
partial.fill('a',1,3);  // Fill 'a' from 1 to 2 (exclude 3)
console.log(partial);


// 22) copyWithin() - copy within array
let number = [1,2,3,4,5];
number.copyWithin(0,3);  // Copy elements from index 3 to end to index 0
console.log(number);



// TYPE CHECKING 

// 23) Array.isArray()

console.log(Array.isArray([1,2])); // true
console.log(Array.isArray({length:0}));  // false




// SPARSE ARRAYS & EMPTY SLOTS

const sparseArray = [1,,3];  // index 1 is empty
console.log(sparseArray.length);
console.log(sparseArray[1]);


// Most methods skip empty slots
sparseArray.forEach(item => console.log(item)); // logs 1,3



// Array-like object

function example() {
	console.log(Array.isArray(arguments));
	console.log(arguments.length);

	// convert to real array:
	const argsArray = Array.from(arguments);
	// or [...arguments]
	console.log(argsArray);
}
example(1,2,3)


// Performance Considerations

// push/pop are O(1), shift/unshift are O(n)
const bigArray = new Array(1000000).fill(0);

// Slow:
console.time('shift');
bigArray.shift();
console.timeEnd('shift'); // ~5ms (varies)

// Fast:
console.time('pop');
bigArray.pop();
console.timeEnd('pop'); // ~0.01ms


const arr1 = new Array(100000).fill(0);
const arr2 = [...arr1];

console.time('shift');
for (let i = 0; i < 1000; i++) arr1.shift();
console.timeEnd('shift');
// ~13.798 ms

console.time('pop');
for (let i = 0; i < 1000; i++) arr2.pop();
console.timeEnd('pop');
// ~0.015ms



// Memory References in Arrays

const objects = [{id:1},{id:2}];
const copyy = objects.slice();

copyy[0].id = 99;
console.log(objects[0].id);
// Use deep cloning for true copies


// Typed Arrays (for binary data)
const buffer = new ArrayBuffer(16); // 16 bytes
const int32View = new Int32Array(buffer); // 4 elements (4 bytes each)
int32View[0] = 42;


// Array destructuring

const [first,second,...rest] = [1,2,3,4,5,6,7];
console.log(first, second,rest);

// swapping variables
let a=1, b=2;
[a,b]=[b,a];


// Array.from() Advanced Usage

// Crete from array-like or iterable
console.log(Array.from('hello'));


// With mapping function
const squares1 = Array.from([1,2,3], x=> x*x);
console.log(squares1)

// create sequence
const range = Array.from({length:5}, (_,i)=> i+2);
console.log(range)


// Array methods return values
console.log([1,2,3].map(x => x*2).filter(x => x>3));


// Non-chainable (return other values)
console.log([1,2,3].reduce((a,b)=> a+b));
console.log([1,2,3].find(x=> x>1));


// MUTATION DURING ITERATINO (DANGER!!)
console.log("MUTATION\n");
const arr = [1,2,3,4,5];
arr.forEach((item,index)=>{
	console.log(item);
	if(item===2) arr.shift(); // skips 3(mutation)
})


// Custom Array methods via Prototype

// Add custom method (caution - can conflict with future JS features)

Array.prototype.last = function() {
	return this[this.length - 1];
};

console.log("Custom last() : ",[1,2,3,4].last());


// - Array Initialization Patterns

// Empty array with length (sparse)
const empty = new Array(3);

// initialized array
const filled = Array(3).fill(0);

// sequence generator
const sequence = [...Array(5).keys()];

console.log(empty,filled,sequence);


// - Array Buffer Overflow Protection

// JS arrays auto-expand (unlike lower-level languages)
const arr3 = [];
arr[1000]=1;  // No error, creates array
console.log(arr3.length)


// -Determining Array Emptiness

const arr4 = [];
console.log(arr4.length === 0);
console.log(arr4[0]===undefined); //Not reliable (could be sparse)


// - Multi dimensional Arrays
const matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
];

console.log(matrix);
console.log(matrix[1][2]);

// flattening
console.log(matrix.flat());



// - Array vs Set Conversion

// remove duplicates
const withDuplicates = [1,2,2,3,3];
const unique= [...new Set(withDuplicates)]; 

console.log(withDuplicates, unique);



// KEY TAKEAWAYS:

// 1) Arrays are objects - can add non-index properties (but dont)

const arr5= [1,2,3];
arr5.customProp = 'hello';
console.log(arr5.customProp); // works but anti-pattern


// Lenth is mutable - can truncate arrays by setting length
const arr6 = [1,2,3];
arr6.length= 1;
console.log(arr6)











