/*
 * Rest parameters and spread syntax in JS 
 *
 * Rest parameters and spread syntax both use the triple dot(...)
 * notation but serve the opposite purpose:
 * 	- Rest parameters collects multiple elements into array 
 * 	(used in function parameters)
 * 	- Spread syntax expans an iterable into individual 
 * 	elements
 *
 * */

// ======== REST Parameters =======

// 1. Basic Rest parameters
// Collects all remaining arguments into an array

function sumAll(...args){ // '...args' is a rest parameters
	let sum = 0;
	for(let arg of args) sum+=arg;
	return sum;
}

console.log(sumAll(1));
console.log(sumAll(1,2,4,6,3,3));


// 2) Partial Rest parameters
// Can capture some arguments as variables and the rest in an 
// array

function showName(firstName, lastName, ...titles) {
  console.log(`${firstName} ${lastName}`); // First two arguments
  console.log(titles);                     // Array of remaining arguments
}

showName("Julius", "Caesar", "Consul", "Imperator");


// 3) Rest Parameters Must be Last
// This would cause a syntax error:
// function f(arg1, ... rest, arg2){...}


// ========= The 'ARGUMENTS' Object =========


// Older alternative to rest parameters (not recomended in modern code)
function showArgs() {
	console.log(arguments.length);  // Number of argument pass
	console.log(arguments[0]);   // first
	console.log(arguments[1]);   // second

	// Arguments is array-like but not a real array
	// Can use for...of but not array methods like map()
}

showArgs('Hello','World');


// Arrow functions don't have their own 'arguments' object
function outerFunction() {
	const arrowFunc = () => {
		console.log(arguments[0]); // Gets arguments from outer function
	};
	arrowFunc();
}

outerFunction(1,2,3); // Logs: 1

// ============== Spread Syntax ===========

// 1) Expanding arrays in function calls
let numbers = [3,4,6,1];
console.log(Math.max(...numbers)); // 6 with spread(NaN otherwise)

// 2) Combining multiple spreads
let arr1 = [1,-2,3];
let arr2 = [8,3,-8];
console.log(Math.max(1, ...arr1, 2, ...arr2, 34)); // 35


// 3) Mergin Arrays
let merged = [0, ...arr1, 2, ...arr2];
console.log(merged); // [0, 1, -2, 3, 2, 8, 3, -8]


// 4) With screens (any iterable works)
let str = "Hello";
console.log([...str]);


// ========== Copying Arrays and object =========

// 1) Array Copying
let originalArr = [1,2,3];
let arrCopy = [...originalArr];  //  creates shallow copy

console.log(arrCopy);
console.log(originalArr === arrCopy)

// 2) Object copying 
let originalObj = {a:1, b:2};
let objCopy = {...originalObj};  // creates a shallow copy

console.log(objCopy);
console.log(originalObj === objCopy);



// ======= Comparision with Array.from =======
// Array.from works with both array-likes and iterables
// Spread syntax works only with iterables

let arrayLike = {0:'a',1:'b',length:2};
console.log(Array.from(arrayLike)); // ['a','b']



// 1) Shopping cart checkout system (Rest parameters)
// calculate total price with optional discounts and taxes

function calculateTotal(basePrice, ...adjustments){

	// Sum all adjustments (discounts as negative, taxes as positives)
	
	const totalAdjustments = adjustments.reduce((sum,adjustment)=> sum+ adjustment, 0);
	
	return basePrice + totalAdjustments;
}


// customer purchases $100 item with 10% discount and 8% tax

const itemPrice = 100;
const discount = -10; // 10% off
const tax = 8;		// 8% tax
const serviceFee = 5;  // Additional service fee

const total = calculateTotal(itemPrice,discount,tax,serviceFee);

console.log(`Your total is: ${total}`);

/*
 * Explanation: This shows how rest parameters can handle 
 * variable pricing adjustments in an e-commerce system where 
 * you might have different numbers of discounts, taxes, or fees 
 * applied to a base price.
 * */


// 2) User Profile Merging (spread syntax)

// Default user settings
const defaultSettings= {
	theme: 'light',
	notifications:'true',
	fontSize:'medium',
	language:'en'
};

// User's custom settings from their profile

const userSettings = {
	theme:'dark',
	fontSize:'large',
	timezone: 'GMT+1'
};

// Merge default and user settings (user settings override defaults) - With the help of order, first ...spread variable gets overridden by second one

const mergedSettings = {
	...defaultSettings,
	...userSettings
};


console.log(mergedSettings);

/*
{
  theme: 'dark',       // overridden by user
  notifications: true, // from defaults
  fontSize: 'large',   // overridden by user
  language: 'en',      // from defaults
  timezone: 'GMT+1'    // new from user
}


Explanation: This demonstrates how spread syntax can elegantly
merge configuration objects, which is common in applications 
with user customization.
*/



// 3) Event Loggin System (Rest Parameters)

// Advanced logger that can handle mutliple messages parts and metadata

// Advanced logger that can handle multiple message parts and metadata
function logEvent(eventType, ...details) {
  const timestamp = new Date().toISOString();
  const message = details.map(detail => 
    typeof detail === 'object' ? JSON.stringify(detail) : detail
  ).join(' | ');
  
  console.log(`[${timestamp}] ${eventType}: ${message}`);
  
  // In a real app, this would also send to a logging service
  return { timestamp, eventType, details };
}

// Usage examples
logEvent('AUTH', 'User login', { userId: 123, provider: 'google' });
logEvent('PURCHASE', 'Item added to cart', 'Product ID: 456', { price: 29.99 });
logEvent('ERROR', 'Payment failed', 'Insufficient funds', { userId: 123 }, new Error('Payment error'));


/*
   Explanation: This shows how rest parameters can handle flexible logging where you might want to log different types and amounts of information for different events.
 */




// 4) API Request Builder (Spread syntax)

// Function to make API request with custom options

// Base API configuration
const baseConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 5000
};

// Function to make API requests with custom options
async function makeApiRequest(url, options = {}) {
  // Merge base config with custom options (custom options take precedence)
  const finalConfig = {
    ...baseConfig,
    ...options,
    headers: {
      ...baseConfig.headers,
      ...(options.headers || {})
    }
  };

  console.log(`Making request to ${url} with config:`, finalConfig);
  
  // In a real app, this would be an actual fetch call
  // const response = await fetch(url, finalConfig);
  // return response.json();
}

// Example usage
makeApiRequest('/api/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({ name: 'John' })
});


//Explanation: This demonstrates deep merging of configuration
//objects, which is common when working with API clients where 
//you want to combine default settings with request-specific
//options.


// 5) Product Search with Filters (Rest parameters)

// Produc search functions with flexible filters
function searchProducts(category, ...filters){
	// In a real app, this would query a database
	const allProducts = [
		{id:1, name:'Laptop', category:'electronics', price:999, inStock: true},
		{id:2, name:'Smartphone',category:'electronics', price: 699, inStock: false},
		{id:3, name:'Desk Chair', category: 'furniture',price:199, inStock: true},
		{id:4, name:'Coffee Table', category: 'furniture', price: 150, inStock: true}
	];


	// Apply category filter
	let results = allProducts.filter(p=> p.category === category);

	// Apply each additional filter funciton
	filters.forEach(filterFn=>{
		results = results.filter(filterFn);
	});

	return results;
}


// Usage Examples
const electronicsInStock = searchProducts(
	'electronics',
	product=> product.inStock
);

const affordableFurniture = searchProducts(
	'furniture',
	product=> product.price < 200,
	product=> product.inStock
);

console.log('In-stock electronics:',electronicsInStock);
console.log('Affordable furniture:',affordableFurniture);


//Explanation: This shows how rest parameters can accept 
//multiple filter functions to create a flexible search system.




/*
 // Example React component (simplified)
function UserProfile(props) {
  // Extract specific props we need
  const { username, email, ...otherProps } = props;

  return (
    <div {...otherProps} className={`profile ${otherProps.className || ''}`}>
      <h2>{username}</h2>
      <p>Email: {email}</p>
          </div>
  );
}

// Usage (simulating JSX)
const userData = {
  username: 'johndoe',
  email: 'john@example.com',
  'data-testid': 'user-profile',
  className: 'premium-user',
  onClick: () => console.log('Profile clicked')
};

// In a real React app, this would be <UserProfile {...userData} />
const profileElement = UserProfile(userData);
console.log('Rendered profile:', profileElement);


Explanation: This demonstrates the common React pattern of using spread syntax to pass props through to components while extracting specific props you need to work with directly.
*/


// 7. Math Utilities (Combining Both)

// Math utility functions using both concepts
const mathUtils = {
	// Using rest parameters to accept any number of values
	average(...numbers){
		if(numbers.length===0) return 0;
		const sum = numbers.reduce((total,num)=>total+num,0);
		return sum/ numbers.length;
	},

	// using spread to work with arrays
	weightedAverage(weights, values){
		if(weights.length !== values.length){
			throw new Error('Weights and values must be the same length!');
		}

		const dotProduct = weights.reduce((sum,weight, i)=>
			sum+ (weight*values[i]),0);

		const weightSum = this.sum(...weights);

		return dotProduct/weightSum;
	},


	// using rest parameters
	sum(...numbers){
		return numbers.reduce((total,num)=>total+num,0);
	}
};

// Example usage
const testScores = [85, 92, 78, 90];
const weights = [0.2, 0.3, 0.3, 0.2];

console.log('Simple average:',mathUtils.average(...testScores));
console.log('Weighted average:',mathUtils.weightedAverage(weights, testScores));
console.log('Sum of weights:',mathUtils.sum(...testScores));


// Explanation: This shows how both concepts can work together 
// in a utility library, with rest parameters for flexible input
// and spread syntax for working with arrays.

/*
 *Key Takeaways from Real-World Examples:
	1	Rest Parameters are ideal when:
	◦	You need to handle variable numbers of arguments
	◦	You want to collect "the rest" of parameters after specific named ones
	◦	You're creating flexible APIs or utility functions
	2	Spread Syntax shines when:
	◦	You need to merge objects or arrays
	◦	You want to pass array elements as individual arguments
	◦	You're working with React props or configuration objects
	◦	You need to create shallow copies of objects/arrays
	3	Both features help write more flexible, maintainable code by:
	◦	Reducing the need for argument length checking
	◦	Eliminating manual array manipulation in many cases
	◦	Making function signatures more declarative
	◦	Simplifying data transformation pipelines

 * */






























