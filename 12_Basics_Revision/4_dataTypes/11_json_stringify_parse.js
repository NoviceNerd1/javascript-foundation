/*
 * JSON Methods: JSON.stringify and JSON.parse
 *
 * ==== Converting Objects to strings =====
 * Problem: Manually converting complex objects to strings is tedious and error-phone
 * let user = {
 *	name:"John",
 *	age: 30,
 *	toString() {
 *		return `{name: "${this.name}", age:${this.age}}`;
 *	}
 * };
 *
 * console.log(user);  // {name: "John", age:30} 
 * 
 *
 * ===== JSON.stringify Basics =======
 * Solution : Use JSON.stringify for reliable object serialization
 * let student = {
 * 	name:"John",
 * 	age: 30,
 * 	isAdmin: 30,
 * 	courses: ['html','css','js'],
 * 	spouse: null
 * };
 *
 * let json = JSON.stringify(student);
 *
 * Resulting JSON:
 * 	{
 * 		"name":"John",
 * 		"age":30,
 * 		"isAdmin" : false,
 * 		"courses":["html","css","js"],
 * 		"spouse": null
 * 	}
 *
 *
 * Note the JSON format differences:
 * 	1) Strings use double quotes only
 * 	2) Property names are double-quoted
 *
 * */ 

// ---- Supported Data Types ----
// JSON.stringify works with:
// - Objects, Arrays, and Pimitives (strings, number, boolean, null)
console.log(JSON.stringify(1)); // 1(number)
console.log(JSON.stringify('test'));  // 2 imgore
console.log(JSON.stringify(true))
console.log(JSON.stringify([1,2,3]));



// ========= Upsupported Properties ==========
// These are skipped during stringification:
// - Function properties (methods)
// - Symbolic properties
// - Properties with undefined values

let user = {
	sayHi(){console.log('Helllo');}, // ignored
	[Symbol("id")]: 123,  // ignored
	something: undefined,  // ignored
};

console.log(`${JSON.stringify(user)}`); // {} 


// ======= Nested objects =====
// Nested objects are automatically handled 

let meetup= {
	title: "conference",
	room: {
		number: 23,
		participants: ["john","ann"]
	}
};

console.log(JSON.stringify(meetup));



/* OUTPUT:
 
    {
      "title":"Conference",
      "room":{"number":23,"participants":["john","ann"]}
    }
*/


// ======= Circular References Limitation =====
// JSON.stringify fails on circular references

let room = {number : 23};
let meetUp = {
	title: "conference",
	participants: ["John","ann"],
};

meetUp.place = room;
room.occupiedBy = meetUp;  // circular reference
// console.log(JSON.stringify(meetUp)); // Error: converting circular structrue to JSON


// ======= Advanced Usage: Replacer Function =====
// Full syntax: JSON.stringify(value, replacer,space)


// Option 1: Array of properties to include
console.log(JSON.stringify(meetUp,['title','participants', 'place', 'name','number']))


// Option 2: Function Replacer(Programmatic Filtering)
console.log(JSON.stringify(meetUp, function replacer(key,value){
	return (key === "occupiedBy") ? undefined: value;
}, 2))



// ==== Pretty Printing with space Parameter =====

let newUser = {
	name:"John",
	age: 25,
	roles:{
		isAdmin: false,
		isEditor: true,
	},
};
console.log(JSON.stringify(newUser,null,2));

/*
    {
      "name": "John",
      "age": 25,
      "roles": {
        "isAdmin": false,
        "isEditor": true
      }
    }
  */



// ===== Custom toJSON method ======
// Objects can defined their own serialization logic

let newRoom = {
	number: 23,
	toJSON() {return this.number;}
};
console.log(JSON.stringify(newRoom));


// Built-in toJSON example (Date objects)
let newMeetup = {
	title: "Conference",
	date: new Date(Date.UTC(2017,0,1)),
};
console.log(JSON.stringify(newMeetup,null,2));
/*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z"
    }
  */


// ===== JSON.parse Basics =====
// Syntax: JSON.parse(str, reviver)

let numbers = "[0,1,2,3,4]";
numbers = JSON.parse(numbers);
console.log(typeof numbers);

// Using Reviver Function
// For custorm parsing of values (eg. Date, strings)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });
console.log(meetup.date.getDate()); // Now works!


// works for nested objects too
let schedule = `{
	"meetups":[
	{"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
	{"title":"Birthday", "date": "2017-04-18T12:00:00.000Z"}	]
}`;
// console.log(schedule);
schedule = JSON.parse(schedule,function(key,value){
	if(key==='date') return new Date(value);
	return value;
})

console.log(schedule.meetups[1].date.getDate());

// === Common JSON Mistakes ===
  /*
  let json = `{
    name: "John",                     // Error: unquoted property name
    "surname": 'Smith',               // Error: single quotes in value
    'isAdmin': false,                 // Error: single quotes in key
    "birthday": new Date(2000, 2, 3), // Error: no constructors allowed
    "friends": [0,1,2,3]              // Correct
  }`;
  */


// Correct version
let json = `{
  "name": "John",
  "surname": "Smith",
  "isAdmin": false,
  "birthday": "2000-03-03T00:00:00.000Z",
  "friends": [0, 1, 2, 3]
}`;

console.log(json);



// ===== SUMMARY ==========
/*
 * - JSON is a universal data format
 * - JSON.stringify converts objects to JSON string
 * - JSON.parse converts JSON strings back to objects
 * - Both Support transformation functions:
 *   -> replacer for stringify
 *   -> reviver for parse
 * */


// ============================================================


// 1) Basic Serialization and Deserialization

const person = {
	name:"Alice",
	age: 28,
	hobbies: ["reading","hiking"],
	education: {
		degree:"Master",
		university:"MIT",
	},
};

// Convert to JSON string
const jsonString = JSON.stringify(person,null,2);
console.log('\nConverted to JSON:\n',jsonString);
/*
Output:
{
  "name":"Alice",
  "age":28,
  "hobbies":["reading","hiking"],
  "education":{"degree":"Master","university":"MIT"}
}
*/


// Parse back to Javascript object
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson.education.university);

//Explanation: This shows the basic round-trip of converting an object to JSON and back. Note how nested objects and arrays are preserved.



// 2) Handling Special Values

const specialValues = {
	undefinedValue : undefined,  // will be omitted
	functionValue: ()=>{},  // will be omitted
	infinity: Infinity,    // Becomes null
	nan: NaN,  		// becomes null
	date: new Date(),  	// Converted to ISO String
	regexp: /pattern/g, 	// Becomes empty object
	map: new Map([['a',1]]),  // Becomes empty Object
	set: new Set([1,2,3]),  // becomes empty object
};

console.log(JSON.stringify(specialValues,null,2));


/*
Output:
{
  "infinity":null,
  "nan":null,
  "date":"2023-05-15T12:00:00.000Z",
  "regexp":{},
  "map":{},
  "set":{}
}

Explanation: Demonstrates how different JavaScript-specific values are handled during serialization. Many become null or empty objects.
*/


// 3) Advanced Replacer Function
const product = {
	id:"p123",
	name: "Smartphone",
	price: 799.99,
	specs: {
		ram:"8gb",
		storage:"128gb",
		secretInternalId: "x789", // we want to exclude this
	},
	[Symbol("version")]: "1.0",  // will be ignored anyway
};


// Custom replacer functions to:
// 1. Exclude properties starting with 'secret'
// 2. Format prices with 2 decimal placer
// 3. Convert all strings to uppercase

const json1 = JSON.stringify(product, (key,value)=>{
	if(key.startsWith('secret')) return undefined;
	if(typeof value === 'number') return parseFloat(value.toFixed(2));
	if(typeof value === 'string') return value.toUpperCase();
	return value;
},2);

console.log(json1);
/*
Output:
{
  "id": "P123",
  "name": "SMARTPHONE",
  "price": 799.99,
  "specs": {
    "ram": "8GB",
    "storage": "128GB"
  }
}

Explanation: Shows a sophisticated replacer function that conditionally modifies values during serialization.
*/



//  4) Custom toJSON implementation 
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this._password = password; // Should not be serialized
  }

  // Custom serialization
  toJSON() {
    return {
      name: this.name,
      email: this.email,
      nameLength: this.name.length,
      domain: this.email.split('@')[1]
    };
  }
}

const user1 = new User('Bob', 'bob@example.com', 'secret123');
console.log(JSON.stringify(user1,null,2));
/*
Output:
{
  "name":"Bob",
  "email":"bob@example.com",
  "nameLength":3,
  "domain":"example.com"
}

Explanation: Demonstrates how to implement custom serialization logic using toJSON() method.

*/





// 5) Complex Reviver Function

const jsonData = `{
  "product": "Laptop",
  "price": 1299.99,
  "features": ["Touchscreen", "Backlit Keyboard"],
  "manufactureDate": "2023-01-15T00:00:00.000Z",
  "warranty": {
    "length": 2,
    "unit": "years",
    "expires": "2025-01-15T00:00:00.000Z"
  },
  "metadata": {
    "createdAt": "2022-12-01T10:30:00.000Z",
    "updatedAt": "2023-04-10T15:45:00.000Z"
  }
}`;

// Reviver function to:
// 	1. Convert all date to Date objects
// 	2. Convert price to a formatted string
// 	3. Add a computed property


const revivedData = JSON.parse(jsonData, (key,value)=>{
	if(typeof value === 'string' && !isNaN(Date.parse(value))){
		return new Date(value);
	}

	if(key === 'price'){
		return `${value.toFixed(2)}`;
	}

	if(key === '' && typeof value === 'object'){ // Root object
		value.isExpensive = value.price > 1000;
		return value;
	}

	return value;
});

console.log(revivedData);
console.log(revivedData.manufactureDate.getFullYear());  // 2023
console.log(revivedData.isExpensive); // true

/*
 * Explanation: Shows a comprehensive reviver function that handles date conversion, value formatting, and adding computed properties.
 * */




// 6) Handling Circular references
// Custom replacer to handle circular reference
function circularReplacer() {
	const seen = new WeakSet();
	return(key,value)=>{
		if(typeof value ==='object' && value !== null){
			if(seen.has(value)){
				return '[Circular]';
			}
			seen.add(value);
		}
		return value;
	};
}


// create circular data
const department = {name: "Engineering"};
const employee = {
	name:"Sarah",
	department: department
};

department.lead = employee; // circular reference

// safe serialization
console.log(JSON.stringify(employee, circularReplacer(),2));
/*
Output:
{
  "name":"Sarah",
  "department":{
    "name":"Engineering",
    "lead":"[Circular]"
  }
}

Explanation: Demonstrates a technique to handle circular references during serialization by detecting and marking them.

*/



// 7) Deep Cloning with JSON

const original = {
  name: "Original",
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      push: false
    }
  },
  lastUpdated: new Date()
};

// Deep clone using JSON Methods
function deepCloneWithDates(obj) {
	return JSON.parse(JSON.stringify(obj),(key,value)=>{
		// Detect ISO 8601 date string and convert to Date object
		if(typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)){
			return new Date(value);
		}
		return value;
	});
}


// clone the object deeply, restoring date
const clone = deepCloneWithDates(original);

// Modify clone
clone.name = "Clone";
clone.settings.notifications.push = true;
clone.lastUpdated.setFullYear(2025);

// check values
console.log('Original name:',original.name);
console.log('Clone name:',clone.name);

console.log("Original Push: ", original.settings.notifications.push);
console.log("Clone push", clone.settings.notifications.push);

console.log("Original lastUpdated:",original.lastUpdated.getFullYear());
console.log("Clone lastUpdated:",clone.lastUpdated.getFullYear());

// Explanation: Shows how to use JSON methods for deep cloning, noting that Dates and other special objects won't be properly cloned.


// 8) Error handling with JSON.parse

const malformedJSON = '{"name":"John","age":30,"city":"New York"';
// missing closing brace


try {
	const parsed = JSON.parse(malformedJSON);
	console.log(parsed);
} catch(error){
	console.error("JSON parse error:",error.message);
	//Output: JSON Parse Error: Unexpected end of JSON Input
}

// Validation JSON strings
function isValidJSON(str) {
	try{
		JSON.parse(str);
		return true;
	} catch{
		return false;
	}
}

console.log(isValidJSON('{"valid":true}'));
console.log(isValidJSON('{valid}'));

// Explanation: Demonstrates proper error handling when parsing JSON and includes a validation utility function.



// 1) Performance Consideration
// Large dataset performance test
const largeData = Array(100000).fill().map((_,i)=>({
	id: i,
	value: Math.random(),
	neted:{
		a: i%10, 
		b: `text-${i}`
	}
}));


// time serialization
console.time('stringify-large');
const largeJson = JSON.stringify(largeData);
console.timeEnd('stringify-large');


// Time parsing
console.time('parse-large');
const parsedLarge = JSON.parse(largeJson);
console.timeEnd('parse-large');


// Memory implications
console.log(`Size: ~${Math.round(largeJson.length/1024)}KB`);


/*
 * Key Points:

	- JSON operations can be expensive for large datasets

	- Consider streaming approaches for very large data

	- Be mindful of memory usage with big JSON strings
 * */


// 2) Altternative serialization formats
//JSON5 - more felxible syntax(requires json5 package)
//const JSON5 = require('json5');
import JSON5 from 'json5';
const json5Str = `{
	// comments allowed
	name:"John",  // single quotes
	age: 30,
	"trailing-comma": true,
}`;

const parsed = JSON5.parse(json5Str);

console.log(parsed);



// BSON - Binary JSON (requires bson package)

import {BSON} from 'bson';

const bsonData = BSON.serialize({
	date: new Date(),
	binary: Buffer.from('Hello'),
});

console.log(bsonData);


const jsonData1 = JSON.stringify({ date: new Date() });

console.log(`JSON: ${jsonData1.length} bytes`);
console.log(`BSON: ${bsonData.length} bytes`);


// 3) Security Consideration

// Malicious JSON parsing
const maliciousJson = '{"__proto__":{"admin":true}}';

// unsafe parsing
const unsafeParsing = (jso)=>{
	const obj = JSON.parse(json);
	// prototype pollution check
	if(Object.prototype.hasOwnProperty.call(obj,'__proto__')){
		throw new Error('Prototype Pollution attempt');
	}
	return obj;
};


try{
	const result = unsafeParse(maliciousJson);
	console.log(result.admin);  // undefined if check message passes
} catch(e){
	console.error('Security error:',e.message);
}


// Safe reviver funciton
const safeReviver = (key,value)=>{
	if(key==='__proto__') return undefined;
	return value;
};



try{
	const result = safeReviver(maliciousJson);
	console.log(result.admin);  // undefined if check message passes
} catch(e){
	console.error('Security error:',e.message);
}

/*
 Key Points:

	- Always validate JSON before parsing

	- Beware of prototype pollution attacks

	- Consider using reviver functions for securit
*/


// 4) Special Number Handling

const numberTests = {
	bigInt: BigInt(Number.MAX_SAFE_INTEGER)+1n,
	infinity: Infinity,
	negativeInfinity: -Infinity,
	nan: NaN,
	maxSafe: Number.MAX_SAFE_INTEGER,
	minSafe: Number.MIN_SAFE_INTEGER,
};

// Custom replacer for special numbers
const numberReplacer = (key,value)=>{
	if(typeof value==='bigint') return value.toString()+'n';
	if(value === Infinity) return "Infinity";
	if(value === -Infinity) return "-Infinity";
	if(Number.isNaN(value)) return "NaN";
	return value;
};

console.log(JSON.stringify(numberTests, numberReplacer,2));

/*
{
  "bigInt": "9007199254740992n",
  "infinity": "Infinity",
  "negativeInfinity": "-Infinity",
  "nan": "NaN",
  "maxSafe": 9007199254740991,
  "minSafe": -9007199254740991
}

Key Points:

JSON doesn't support Infinity, -Infinity, or NaN

BigInts aren't supported natively in JSON

Need custom handling for these special cases
*/

// 5) Stream Processing
/*
// Using stream API for large JSON(node.js)
const {pipeline, Transform} = require('stream');
const fs= require('fs');


// Custon transform stream for JSON Processing
class JSONProcessor extends Transform {
	constructor(){
		super({objectMode: true});
		this.first = true;
	}

	_transform(chunk, encoding, callback){
		try{
			const obj= JSON.parse(chunk);
			// process object here
			if(this.first){
				this.push('[/n');
				this.first=false;
			}else{
				this.push(',/n');
			}

			this.push(JSON.stringify({...obj, processed:true}));
			callback();
		}
		catch(e){}
	}

	_flush(callback){
		this.push('\n]');
		callback();
	}
}

pipeline(
	fs.createReadStream('large.json'),
	new JSONProcessor(),
	fs.createWriteStream('processed.json'),
	(err)=>{
		if(err) console.error('Pipeline failed', err);
		else console.log('Pipeline succeded');
	}
);

*/

/*
 * Key Points:

	- Essential for processing huge JSON files

	- Avoids memory overload by processing in chunks

	- Node.js streams API is ideal for this
*/


// 6) Browser-specific Considerations
// Blob and File API integration
/*
const jsonBlob = new Blob([JSON.stringify({data:'test'})],
	{type:'application/json'});


// creating download link
const downloadJson = (data,filename)=>{
	const blob = new Blob([JSON.stringify(data)], {type:'application/json'});

	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href= url;
	a.download = filename;
	document.body.appendChild(a);
	a.clickI();
	setTimeout(()=>{
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	},100);
};

// web worker communication
const worker = new Worker('worker.js') || 'Not found';
worker.postMessage({type:'data', payload:{large: 'dataset'}});

// Receiving in worker
//self.onmessage= (e)=>{ console.log(e.data); };


Key Points:

Blob API useful for JSON downloads

Web Workers can transfer JSON data efficiently

Browser memory limits may affect large JSON handling

*/


// 7) Advanced Reviver Patterns

const complexJson= `{
"user": {
	"_id":"user123",
	"name":"Alice",
	"_secret":"s3cr3t",
	"contacts":[
		{"id":"contact1", "email":"a@test.com","_internal":true},
		{"_id":"contact2","email":"b@test.com"}
	]
},
	"_meta":{"createdAt":"2023-01-01","version":"1.0.0"}
}`;

// Advanced reviver with context tracking

const complexJson1 = `{
  "user": {
    "_id": "user123",
    "name": "Alice",
    "_secret": "s3cr3t",
    "contacts": [
      { "_id": "contact1", "email": "a@test.com", "_internal": true },
      { "_id": "contact2", "email": "b@test.com" }
    ]
  },
  "_meta": { "createdAt": "2023-01-01", "version": "1.0.0" }
}`;

// Advanced reviver with context tracking
function createReviver() {
  const context = {
    depth: 0,
    path: [],
    skipUnderscore: true
  };

  return function reviver(key, value) {
    context.path.push(key);
    
    // Skip properties starting with _
    if (context.skipUnderscore && key.startsWith('_') && context.depth > 0) {
      context.path.pop();
      return undefined;
    }

    // Special handling at certain paths
    if (context.path.join('.') === 'user.contacts.1.email') {
      value = value.toUpperCase();
    }

    if (typeof value === 'string' && !isNaN(Date.parse(value))) {
      value = new Date(value);
    }

    context.depth++;
    if (typeof value === 'object' && value !== null) {
      // Process nested objects
      return value;
    }
    
    context.depth--;
    context.path.pop();
    return value;
  };
}

const parsed1 = JSON.parse(complexJson, createReviver());
console.dir(parsed1, {depth:null});

/*

Key Points:

Revivers can maintain context during parsing

Powerful for complex transformations

Can implement security filtering

*/



// 8) JSON Schema Validation

// Using AJV for schema validation (npm install ajv)


// Using AJV for schema validation (npm install ajv)
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
const ajv = new Ajv();
addFormats(ajv);

const schema = {
  type: 'object',
  properties: {
    id: { type: 'string', pattern: '^[a-z0-9-]+$' },
    name: { type: 'string', minLength: 2 },
    age: { type: 'integer', minimum: 0 },
    email: { type: 'string', format: 'email' },
    tags: {
      type: 'array',
      items: { type: 'string' },
      uniqueItems: true
    }
  },
  required: ['id', 'name'],
  additionalProperties: false
};

const validate = ajv.compile(schema);

function safeParse(jsonString, validator) {
  try {
    const data = JSON.parse(jsonString);
    const valid = validator(data);
    if (!valid) throw new Error(ajv.errorsText(validator.errors));
    return data;
  } catch (err) {
    console.error('Validation failed:', err.message);
    return null;
  }
}

const goodData = `{
  "id": "user-123",
  "name": "John",
  "age": 30,
  "email": "john@example.com",
  "tags": ["admin", "user"]
}`;

console.log(safeParse(goodData, validate));


// 9) JSON Patch and JSON Merge Patch

// JSON Patch (RFC 6902)

const patch = [
	{op:'replace',path:'/name',value:'New Name'},
	{op:'add', path:'/address', value:'123 Main St'},
	{op:'remove',path:'/age'}
];


function applyPatch(obj, patch) {
	// In real apps, use a library like fast-json-patch
	patch.forEach(({op, path,value})=>{
		const keys = path.split('/').filter(Boolean);
		const lastKey = keys.pop();
		let target = obj;

		for(const key of keys){
			target= target[key];
		}

		switch(op){
			case 'add':
			case 'replace':
				target[lastKey] = value;
				break;
			case 'remove':
				delete target[lastKey];
				break;
		}
	});
	return obj;
}


// JSON merge Patch (RFC 7386)

const mergePatch = {
	name: 'New Name',
	address: '123 Main St',
	age: null // removes the age field
};

console.log(applyPatch({name:'Old',age:30},patch));




// 10) Browser Storage with JSON

// LocalStorage wrapper with JSON support

let localStorage;

if(typeof window !== 'undefined' && window.localStorage){
	localStorage = window.localStorage;
}else{
	// Node.js fallback
	const {LocalStorage} = await import('node-localstorage');
	localStorage = new LocalStorage('./scratch');
}


// LocalStorage wrapper with JSON support
const storage = {

	get(key,reviver) {
		try{
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item,reviver):null;
		} catch(e) {
			console.log('Failed to parse storage item',e);
			return null;
		}
	},
	
	set(key, value,replacer){
		try{
		localStorage.setItem(key,JSON.stringify(value,replacer));
		} catch(e) {
			console.error('Failed to stringify and store item', e);
		}
	},
	
	remove(key){
		try{
		localStorage.removeItem(key);
		} catch(e) {
			console.error('Failed to remove item:',e);
		}
	}
};



// Usage with custom serialization
storage.set('user',{
	name:'Alice',
	lastLogin: new Date(),
	preferences: {darkMode: true}
});

const user2 = storage.get('user',(k,v)=> k==='lastLogin'?new Date(v) : v);

console.log(user2.lastLogin instanceof Date); // true

/*
 * Key Points:

localStorage only stores strings

JSON methods bridge objects to storage

Handle serialization of special types like Dates

 * */



// 1) JSON pointer and JSON path
// json pointer RFC 6901  implementation

const jsonPointer = {
	get(obj, pointer){
		if(pointer === '') return obj;
		const tokens = pointer.split('/').slice(1);
		return tokens.reduce((acc,token)=>{
			token = token.replace(/~1/g, '/').replace(/~0/g,'~');
			return acc?.[token];
		},obj);
	},


	set(obj, pointer, value) {
		const tokens = pointer.split('/').slice(1);
		const lastToken = tokens.pop();
		const target = tokens.reduce((acc,token)=>{
			token = token.replace(/~1/g, '/').replace(/~o/g, '~');
			if(!acc[token]) acc[token] = isNaN(tokens[0]) ? {}:[];
			return acc[token];
		},obj)

		if(lastToken) {
			const cleanToken = lastToken.replace(/~1/g, '/').replace(/~0/g,'~');
			target[cleanToken] = value;
		}
		return obj;
	}
}


const data = {
	user: {
		name: "Alice",
		contacts: [
			{type:"email", value:"alice@example.com"},
			{type:"phone", value:"+1234567890"}
		]
	}
};

console.log(jsonPointer.get(data, '/user/contacts/1/value')); // "+1234567890"
jsonPointer.set(data, '/user/contacts/2', {type:"fax", value:"+0987654321"});
console.log(data.user.contacts[2].value);

/*
 * Key Points:

Standardized way to reference parts of JSON documents

Essential for JSON Patch operations

Handles escaping special characters (~0, ~1)
 * */



// 2) JSON Serialization for HTTP

class JSONHttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.revivers = new Map();
    this.replacers = new Map();
  }

  registerReviver(type, reviver) {
    this.revivers.set(type, reviver);
  }

  registerReplacer(type, replacer) {
    this.replacers.set(type, replacer);
  }

  async request(method, endpoint, data) {
    const headers = { 'Content-Type': 'application/json' };
    const options = {
      method,
      headers,
      body: data ? this.serialize(data) : undefined
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, options);
    const contentType = response.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      return this.deserialize(await response.text());
    }
    return response.text();
  }

  serialize(data) {
    return JSON.stringify(data, (key, value) => {
      if (value === undefined) return null;
      if (this.replacers.has(value?.constructor)) {
        return this.replacers.get(value.constructor)(value);
      }
      return value;
    });
  }

  deserialize(json) {
    return JSON.parse(json, (key, value) => {
      if (value && value.__type) {
        const reviver = this.revivers.get(value.__type);
        return reviver ? reviver(value) : value;
      }
      return value;
    });
  }
}

// Usage
const client = new JSONHttpClient('https://jsonplaceholder.typicode.com');
client.registerReplacer(Date, date => ({ __type: 'Date', value: date.toISOString() }));
client.registerReviver('Date', ({ value }) => new Date(value));

// Example API call
const response = await client.request('POST', '/users', {
  name: "Bob",
  createdAt: new Date()
});

/*
 * Key Points:

Centralized JSON handling for HTTP requests

Type-aware serialization system

Proper content-type handling
 * */




















