/*

Destructuring Assignment In JS

 - Destructuring Assingment is a syntax that allows unpacking values from arrays or properties from objects into distinc variables.

 - It's particularly useful when:
   1) Working with complex data strcutures
   2) Extracting multiple properties from objects
   3) Extracting elements from arrays
   4) Handling elements from arrays

*/


// Array Destructuring

// Basic array destructuring
let arr = ["John",'Smith'];
let [firstName,surName]= arr;  

// works with any iterable on the right side
let [a,b,c] = "abc";
let [one,two,three] = new Set([1,2,3]);

// Ignoring Elements using commas
let [first, , third] = [1,2,3,4];


// Assigning to Object properties 
let user = {};
[user.name,user.surname]= "John Smith".split(' ');
console.log(user)


// Using with .entries() for object iteration
for(let [key,value] of Object.entries(user)) {
	console.log(`${key}: ${value}`);
}


// Swapping variables trick

let guest = "Jane";
let admin = "Pete";
[guest,admin]=[admin,guest];


// The "REST" PATTER "..." -> Left side

let [name1,name2,...rest] = ["Julius","Caesar", "Consul","Republic"];
console.log(rest);


// Default values 
let [name="Guest",surname="Anonymous"]= ["Julius"]


// Default values can be function calls (evaluated ONLY IF needed)
// let [promptName = prompt("name?"), promptSurname = prompt("surname?")] = ["Julius"];


const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

(async () => {
  const rl = readline.createInterface({ input, output });

  const name = await rl.question('name? ');
  const surname = await rl.question('surname? ');

  let [promptName = 'Julius', promptSurname = undefined] = [name, surname];

  console.log(`Name: ${promptName}`);
  console.log(`Surname: ${promptSurname}`);

  rl.close();
})();




// --------------------------
// OBJECT DESTRUCTURING


// Basic Object destructuring
let options = {
	title:"Menu",
	width:100,
	height:200,
};

//let {title,width,height}= options;


// Order doesn't matter in object destructuring
//let {height,width,title} = options;


// Assigning to different variable names
//let {width:w,height:h,title} = options; 


// Default values
//let {width=100,height=200, title} = {title:"Menu"};

// Combined Remaining and defualts
//let {width:w = 100, height:h=200,title} = {title:"Main Dish"};


// The 'rest' pattern "..." with objects
//let {title,...r} = options;

//console.log({title,r})

// Gotcha : Need parenthese when destructuring without declaration

//let title,width, height;
//({title,width,height}={title:"Menu",width:100,height:200}) ;
//console.log(width,height,title)



// -------------------------
// NESTED DESTRUCUTRING

let options1 =  {
	size: {
		width:100,
		height:200,
	},
	items:["cake","Donut"],
	extra:true,
};



let {
  size: { // unpack size
    width,
    height
  },
  items: [item1, item2], // unpack items
  title = "Menu" // not present in the object (default used)
} = options1;


console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // "Cake"
console.log(item2);  // "Donut"
console.log(title);  // "Menu"



// SMART FUNCTION PARAMETERS

// Bad approach with many parameters 

function showMenu(title="Untitled",width=200,height=100,items=[]) {
	// Hard to rmemeber parameter order
	console.log("function executed");
}

// Better approach with destructuring
function showMenu2({
	title="untitled",
	width:w = 100,
	height:h = 200,
	items:[items1,item2] = ["item1","item2"]
}={}){
	// Empty object as default to avoid errors when no arguments passed
	console.log(title,w,h,item1,item2);_
}

// Usage Examples:
showMenu({
	title:"My MEnu",
	items:["Sandwich","Salad"]
});

showMenu();



/*
 
  SUMMARY OF SYNTAX
======================


Object destructuring full syntax:
let {
  property: varName = defaultValue,
  ...
} = object

Array destructuring full syntax:
let [
  item1 = defaultValue,
  item2,
  ...restItems
] = array

Key points:
1. Works with any iterable for arrays
2. Left-side pattern must match right-side structure
3. Default values are used when property/element is missing
4. Can extract nested structures
5. Rest pattern (...) collects remaining items
6. Function parameters benefit greatly from destructuring
7. Need parentheses when destructuring without declaration


*/


// 1) Basic Array Destructuring

const colors = ['red','green','blue'];
const [firstColor,secondColor,thirdColor]= colors;



// 4) Object Destructuring Basics
const user3 = {
	id: 42,
	name: "John Doe",
	age: 30,
	isAdmin:true,
};



// =============================================================

// 1) Destructuring Patterns Many Developers Miss

// a) Destructuing with String.match()

const url = 'https://example.com/users/42';
const {1:protocol, 2:domain, 3:id}= url.match(/(https?):\/\/([^\/]+)\/users\/(\d+)/);

console.log(protocol,domain,id);

// b) Destrcuturing Iterators
const map = new Map([['name','John'],['age',30]]);
for(const [key,value] of map) {
	console.log(key,value);
}


// c) Destructuring Generator Returns 
function* generateUser() {
	yield "John";
	yield "Doe";
	yield 30;
}

const [fName,lName, age] = generateUser();
console.log([fName,lName,age])


// 2) Advanced Object Destructuring

// a) Destructuring Prototype properties

class User {
	constructor() {
		this.name3 = "John";
	}
}
User.prototype.age3 = 30;

const {name3,age3}= new User();
console.log(name3,age3);


// Destructuring Non-enumerable Properties 

const obj={};
Object.defineProperty(obj,'hidden',{
	value:"secret",
	enumberable:false,
});

// Doesnt work:
//const {hidden} = obj;
//console.log(hidden)  // Secret

// Works with getOwnPropertyDescriptor
const {value:hidden} = Object.getOwnPropertyDescriptor(obj,'hidden');
console.log(hidden);


// 3) Edge Cases and gotchas

// a) Array Destructuring with Holes
const [,,x=1] = [undefined,null];
console.log(x);

// b) Object destructuring with Null
//const {a1}= null; // TypeError
//const {b1} = undefined; // typeError

// safe destructuring
const {c1} = null || {};


// c) Default values vs Falsy values
const {a2=1} = {a2:null};
const {b2=1} = {b2:undefined};
const {c2=1} = {c2:false};

console.log(`${a2}:${b2}:${c2}`);


// 3) Impact on garbage Collection

// Destructing VS Traditional Assignment

// Destructuring Creates more temporary objects
function destructure({a,b}){/*...*/};

// More memory efficient:

function traditional(obj) {
	const a = obj.a;
	const b = obj.b;
	console.log(`${a} : ${b}`)
}


// b) Impact on Garbage collection

// Creates new array each iteration

const largeObject = {};

// Simulate large object with 1 million key-value pairs
for (let i = 0; i < 1_000_000; i++) {
  largeObject["key" + i] = i;
}

console.time('Object.entries + for...of');
for (const [key, value] of Object.entries(largeObject)) {
  // process key and value
  const result = key + value; // dummy operation
}
console.timeEnd('Object.entries + for...of');

console.time('for...in + hasOwn + bracket access');
for (const key in largeObject) {
  if (!Object.hasOwn(largeObject, key)) continue;
  const value = largeObject[key];
  // process key and value
  const result = key + value; // dummy operation
}
console.timeEnd('for...in + hasOwn + bracket access');



// 5) ECMAScript Updates

// a) Destructuring in catch clauses (ES2019+)

try{
	throw {code:404,message:'Not found'}
} catch({code,message}) {
	console.log(code,message);// 404 'Not found'
}


// Names imports are actually destructuring!
//import {useState,useEffect} from 'react';



// 6) TypeScript

// a) Typed Destructuring
// Sample function returning an object
/*
 // A sample function returning an object
function getUser(): { name: string; age: number } {
  return { name: "Alice", age: 30 };
}

// Destructuring with inline type annotation
const { name, age }: { name: string; age: number } = getUser();

console.log(name); // Alice
console.log(age);  // 30
 * */

/*
 
 // 7. Real-World Patterns

// a) Configuration Objects with Defaults
function createModal({
  title = 'Default',
  width = 200,
  height = 100,
  animation = 'fade'
} = {}) {
  console.log(`Creating modal: ${title}, ${width}x${height}, animation: ${animation}`);
}
createModal({ title: 'Login', width: 300 });

// b) Redux Reducer Pattern
function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD':
      return [...state, payload];
    case 'REMOVE':
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
}
const initialState = [];
const newState = reducer(initialState, { type: 'ADD', payload: { id: 1, name: 'Item' } });
console.log(newState);

// c) React Props Destructuring
function UserCard({ user: { name, avatar }, onClick, theme = 'light' }) {
  return (
    <div className={`card ${theme}`} onClick={onClick}>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
// Note: JSX won't run outside React env

// 8. Anti-Patterns to Avoid

// a) Over-Destructuring
// ❌ Too deep destructuring — reduces readability
// const {
//   data: {
//     user: {
//       profile: {
//         name: { first, last }
//       }
//     }
//   }
// } = response;

// ✅ Better:
const { first, last } = response.data.user.profile.name;

// b) Destructuring in Performance-Critical Code
const points = new Array(1e6).fill(0).map((_, i) => ({ x: i, y: i }));
for (let i = 0; i < 1e6; i++) {
  // ❌ Slower
  // const { x, y } = points[i];

  // ✅ Faster
  const x = points[i].x;
  const y = points[i].y;
}

// 9. Browser Compatibility Notes

// a) Rest Properties in Objects (ES2018+)
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest); // { b: 2, c: 3 }
// ❗ Not supported in Internet Explorer

// b) Default Parameters with Destructuring
function foo({ a = 1 } = {}) {
  console.log(a);
}
foo();      // 1
foo({ a: 5 }); // 5

// 10. Debugging Tips

// a) Checking Destructured Values
const { a: debugA, b: debugB } = someFunction();
console.log({ debugA, debugB }); // Named group logging

// b) Handling Missing Properties Safely
const safeDestructure = (obj, def = {}) => ({
  ...def,
  ...obj
});
const maybeUndefined = null;
const { a: safeA, b: safeB } = safeDestructure(maybeUndefined, { a: 1, b: 2 });
console.log(safeA, safeB); // 1, 2

// Final Pro Tips

// ✅ Use object spread after destructuring
const obj = { a: 1, b: 2, c: 3 };
const { a: first, b: second, ...restObj } = obj;
console.log(restObj); // { c: 3 }

// ✅ Destructure function parameters early
function process({ input, options = {} }) {
  const { verbose = false } = options;
  if (verbose) console.log(`Processing ${input}`);
}
process({ input: 'file.txt', options: { verbose: true } });

// ✅ Nullish coalescing with optional destructure
const userData = null;
const { role } = userData ?? {};
console.log(role); // undefined, but safe

// ✅ Use aliases to avoid naming conflicts
const user = { name: 'Alice' };
const product = { name: 'Shoes' };
const { name: userName } = user;
const { name: productName } = product;
console.log(userName, productName); // Alice Shoes

// ✅ Destructure arrays from function returns
function getCoordinates() {
  return [40.7128, -74.0060];
}
const [lat, lon] = getCoordinates();
console.log(lat, lon); // 40.7128 -74.0060

 */




























