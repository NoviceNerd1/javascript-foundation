/*
 
 Object.keys(), Object.values(), Object.entries() - Summary with examples

 These are generic methods for iterating over data structures. While Map, Set, and Array have their own .keys(), .values(), .entries() methods, plain objects use static Object methods.

 * */

// Basic Usage with Plain Objects

const user = {
	name:"John",
	age:30,
};

// Object.keys(obj) - returns ARRAY of keys (not iterable)
// Note: Called as Object.keys(), not obj.keys()
const keys = Object.keys(user);  // ["name","age"]

// Object.values(obj) - returns ARRAY of values
const values = Object.values(user);  // ['John',30]

console.log("Keys:",keys,"Values:",values);


// Important Difference from Map methods

/*
 
 1) Call Syntax:
    - Map: map.keys()
    - Object: Object.keys(obj) (static method)

    Reason: Flexibility - doesn't conflict with potential custom methods and works with all objects, even those with their own .keys() implementation.
 
 2) Return type:
    - Map methods return iterables
    - Object methods return real Arrays

    Historical reasons, but useful since arrays have more methods avaible

 * */

// Iterating with Object.values()

for(let value of Object.values(user)) {
	console.log(value);  
}

// Symbolic Properties Behaviour

const id = Symbol("id");
const userWithSymbol = {
	[id]: 123,
	name:"Jane",
};

// These IGNORE Symbolic properties (like for..in loop)
Object.keys(userWithSymbol);
Object.values(userWithSymbol);
Object.entries(userWithSymbol);

// To get Symbolic properties:
console.log(Object.getOwnPropertySymbols(userWithSymbol)); //[Symbol(id)]
console.log(Reflect.ownKeys(userWithSymbol))


// Transforming Objects Using Arrays Methods

/*
 
 Objects lack many array methods (map,filter,etc). to transform objets:
 1) Convert to array of entries with Object.entries()
 2) Apply array methods
 3) Convert back to object with Object.fromEntries()

 */


const prices= {
	banana:1,
	orange:2,
	meat:4,
};

// Example : Double all prices
const doublePrices = Object.fromEntries(
	Object.entries(prices).map(([key,value])=> [key,value*2])
);

console.log(doublePrices.meat);


// PRACTICAL Transformation examples

//Ex1: Filter object properties 
const expensiveItems = Object.fromEntries(
	Object.entries(prices).filter(([key,val])=> val>1)
);
console.log(expensiveItems);


// EX2: Map keys to new Format

const priceWithCurrency = Object.fromEntries(
	Object.entries(prices).map(([key,value])=>[`${key}_usd`,value])
);

console.log(priceWithCurrency);




/*
 
 Key takeaways:
  1) use Object.keys/values/entries for plain object (static methods)
  2) Returns real arrays (not iterables)
  3) Ignores symbolic properties by default
  4) Combine with Object.fromEntries for powerful transformations
  5) Enables array methods on objects via entries conversion

 * */


//===============================================================

// 1) Basic Usage Examples

// 1.1 Object.keys() - Get all keys of an object

const person = {
	name:"Alice",
	age:23,
	job:"Engineer",
};

const keysPerson = Object.keys(person);
console.log(keysPerson);

// 1.2 Object.values() - get all values of an object

const valuesPerson= Object.values(person);
console.log(valuesPerson);


// 1.3 Object.entries() - get key-value pairs

const entriesPerson = Object.entries(person);
console.log(entriesPerson);


// 2) Iterating Over an Objet

// 2.1 Using for..of with object.entries()

for(const [key,value] of Object.entries(person)) {
	console.log(`${key}: ${value}`);
}


// 2.2 Using forEach with Object.keys() 

const car = {
	brand:"Toyota",
	model: "Camry",
	year:2020,
};

Object.keys(car).forEach((key)=>{
	console.log(`${key}->${car[key]}`);
});



// 3) Transforming Objects

// 3.1 Converting an object to a Map

const userMap = new Map(Object.entries(user));
console.log(userMap);
console.log(userMap.get('name'));


// 3.2 Filtering object properties

const product = {
	id:101,
	name:'Laptop',
	price:999,
	inStock:true,
};

console.log(product)

// Keep only properties with non-boolean values
const filteredProduct = Object.fromEntries(
	Object.entries(product).filter(([key,value])=>typeof value !== 'boolean')
);

console.log(filteredProduct);


// 3.3 Modifying Object Values (E.g, Applying Discount)
const fruitPrices = {
	apple:1.5,
	banana:0.5,
	orange:2.0,
};

// Apply 10% dicount
const discountedPrices = Object.fromEntries(
	Object.entries(fruitPrices).map(([key,value])=> [key,value*0.9])
);

console.log(discountedPrices);


// 4) Checking Object Properties

// 4.1 Checking if an object is empty

const emptyObj = {};
const nonEmpty = {key:'value'};

const isEmpty = (obj) => Object.keys(obj).length ===0;

console.log(isEmpty(emptyObj));
console.log(isEmpty(nonEmpty));


// 4.2 Checking if a key exists

const settings = {
	theme:'dark',
	notifications: true,
};

const hasTheme = Object.keys(settings).includes('theme');
console.log("Has Theme:",hasTheme)


// 5) Symbolic Key Handling

// 5.1 Getting Symbol Properties Only

const id1 = Symbol('id');
const user1 = {
	[id]:123,
	name:'Sarah',
};

const symbols = Object.getOwnPropertySymbols(user1);
console.log(symbols)



// 6) Combining with Other Methods

// 6.1 Summing Object values 

const expenses = {
	food:50,
	transport:30,
	entertainment:20,
};

const total = Object.values(expenses).reduce((sum,val)=>sum+val,0);
console.log(total)



// ==========================================================

// Object.groupBy() (ES2024)

const users = [
	{name:'Alice',age:30},
	{name:"Bob",age:30},
	{name:"Eve",age:25},
];

const groupedUsers = Object.groupBy(users, ({age})=>age);
console.log(groupedUsers);




// JSON.stringify() and Non-enumberable properties
// - JSON.stringify() only includes enumerable properties

const obj = {};
Object.defineProperty(obj,'hidden',{value:'secret',enumerable:false});
console.log(JSON.stringify(obj));


// Arrays are objects too - with number keys (Object.keys() works but UB)

const arr = ['a','b'];
arr.customProp = "value";
console.log(Object.keys(arr));


// Null/undefined Inputs

// console.log(Object.keys(null))

// TypeError: Cannot convert undefined or null to object


// Practical Use CASES

// Deep cloning an Object

const original = {a:1, b: {c:2}};

const clone = Object.fromEntries(
	Object.entries(original).map(([key,val])=>
		[key,typeof val==='object' ? Object.fromEntries(Object.entries(val)):val]
	)
);

console.log(clone)
console.log(original.b === clone.b);


// Inverting keys and values

const obj2 = {a:1, b:2};
const inverted = Object.fromEntries(
	Object.entries(obj2).map(([k,v])=>[v,k])
);
console.log(inverted)


// Polyfilling for older browsers

if(Object.entires) {
	Object.entries = function(obj) {
		return Object.keys(obj).map(key=>[key,obj[key]]);
	};
	console.log(Object.entries)
} 


































































































































