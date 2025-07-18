//========================================================
// Object to Primitive in JS
//========================================================

/*
  JS does NOT allow operator overloading (e.g. obj+obj cant yeild a custom object).

  Objects are auto-converted to primitives during operation like:
    - obj1 + obj2 
    - Obj1 - obj2
    - alert(obj)
    - what about console? does it get converted to primitive?

  Result must be a *primitive* (string,number,etc.), never another object.
  */


// Basic Examples : forces primitive conversion during arithmetic

let obj = {
	toString() { return "6"; }
};

console.log(obj + 1);  //"61" -> obj.toString() returns "5", "5"+1 = "51"
console.log(obj * 2);  // 10 -> "6" * 2 = 10

/*
 
 JS uses 3 "hints" to decide how to convert :
   1) "string" -> alert(obj), property keys, string context
   2) "number" -> math ops, comparisions
   3) "default" -> ambiguous ops (e.g. obj + 1, obj==1)

------------------------------------------------------------
  
  Conversion Algorithm:
  1) If obj[Symbol.toPrimitive](hint) exists -> call it.
  2) Else if hint == "string" -> try obj.toString() , fallback to obj.valueOf().
  3) Else (hint == "number"/"default") -> try obj.valueOf(), fallback to obj.toString().

 */

// Symbol.toPrimitive handles all hints cleanly

let user = {
	name:"Alice",
	money:1000,

	[Symbol.toPrimitive](hint) {
		console.log(`hint: ${hint}`);
		return hint === "string" ? `{name: "${this.name}"}`: this.money;
	}
};

console.log(String(user)); // hint: string -> '{name: "Alice"}'
console.log(+user);	   // hint : number -> 1000
console.log(user+300);	   // hint : default -> 1500



// Old-style : toString/valueOf fallback mechanism
let item = {
	name: "Gadget",

	toString() {
		return "Gadget";
	},

	valueOf() {
		return 42;
	}
}

console.log(String(item));
console.log(+item);
console.log(item+10);


/*
 
 Notes:
   - All objects are truthy (no boolean conversion).
   - Only strings and numbers are relevant for conversion.
   - Methods must return a primitive or they'll be ignored(unless Symbol.toPrimitive, which throws).

 */


// Invalid : return object, not primitive -> ignored

let broken = {
	toString() { return {}; },
	valueOf()  { return {}; }
};

//console.log(String(broken)); // [object Object] fallback, both methose ignored


// Object to Primitive Conversion using Symbol.toPrimitive

let user1 = {
	name:"John",
	money:1200000000,

	// Defines a single method to handle all conversions
	[Symbol.toPrimitive](hint) {
		console.log(`hint: ${hint}`);
		return hint === "string" 
		? `name: "${this.name}"`
		: this.money;
	}
};

console.log(String(user1))  // [object Object] fallback, both methods ignored


// Object to Primitive Conversion using Symbol.toPrimitive

let user2 = {
	name: "James",
	money: 1000000,

	// Defines a single method to handle all conversions
	[Symbol.toPrimitive](hint) {
		console.log(`hint: ${hint}`);
		return hint === "string"
		? `{name: "${this.name}"}`
		: this.money;
	}
};

console.log(String(user2));  // hint: string ->'{name:"John"}'
console.log(+user2);  // hint: number -> 100000
console.log(user2 + 3000);  // hint: default -> 1003000



// Fallback if Symbol.toPrimitive doesn't exist : toString & valueOf

let user3 = {
	name: "Jane",
	money: 2200,

	// used when hint is "string"
	toString() {
		return `{name: "${this.name}"}`;
	},

	// used when hint is "number" or "default"
	valueOf() {
		return this.money;
	}
};

console.log(String(user3)); // toString -> '{name: "Jane"}'
console.log(+user3);  // valueOf -> 2200
console.log(user3 + 30)


// Minimal fallback using only toString (also used if valueOf returns object)
let user4 = {
	name : "Alice",

	toString() {
		return this.name;
	}
};

console.log(String(user4));  // "Alice"
console.log(user4 + 100)     // "Alice100" (string concat)

// If toString/valueOf return an object -> ignored silently

let user5 = {
	toString() {
		return {};  // invalid
	},

	valueOf() {
		return {}; // invalid
	}
};

//console.log(String(user5));  // [object Object] (default fallback)
//console.log(user5 + 1);  // '[object Object]1'


// Multiplication : Object -> Primitive -> Number
let product = {
	toString() {
		return "3";
	}
};

console.log(product * 2);  // 6 -> "3" * 2 -> numeric result

// Addition : fallback to string if either operand is a string
console.log(product + 2);


//
//Summary:
/*
 
 1) Symbol.toPrimitive(hint) handles all conversions
 2) Otherwise:
	- for hint "string": try toString() -> valueOf()
	- for "number"/"default": try valueOf() -> toString()
 3) Methods must return a primitive. Symbol.toPrimitive throws if not
 4) Binary + behaves differently : if either side is string -> concat.

 */



//==========================
// SUMMARY 
//==========================

/*
 
 JS auto-converts objects to primitives when used with:
     - alert(obj)	-> string
     - obj1 + obj2	-> defalt
     - obj1 - obj2, +obj  -> number

 */


// 1) Symbol.toPrimitive has highest priority

let newObj = {
	[Symbol.toPrimitive](hint) {
		console.log("Symbol.toPrimitive called with hint:", hint);
		return hint === "string" ? "OBJ1" : 42;
	}
};

console.log(String(newObj));  // 
console.log(+newObj);
console.log(newObj + 9);



// 2) Fallback to toString/valueOf if Symbol.toPrimitive is absent

let newObj2 = {
	toString() {
		return "FallBackToString";
	},
	valueOf() {
		return 100;
	}
};

console.log(String(newObj2))
console.log(+newObj2)
console.log(newObj2 + 9)



// 3) if only toString() exists, its used for all hints

let newObj3 = {
	toString() {
		return "OnlyToString";
	}
};

console.log(String(newObj3));
console.log(+newObj3)
console.log(newObj3 + 9);




// WRONG: if a conversion method returns an object -> ignored

let newObj4 = {
	toString() {
		return {};
	},

	valueOf() {
		return {};
	}
};

//console.log(String(newObj4)); //Error:cannot convert to primitive
//console.log(+newObj4)



/*
 
 Conversion Rules Summary:
 	- Try Symbol.toPrimitive(hint)
	- if hint is "string" -> toString() -> valueOf()
	- if hint is "number"/"default" -> valueOf() -> toString()
	- All must return primitive(string,number, boolean, symbol, bigint, null,undefined)

 */













